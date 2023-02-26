// ============================================================================
// Tesseract Example
// ===========================================================================

// Image Processing Example
const recognize = async ({ target: { files } }) => {
    document.getElementById("imgInput").src = URL.createObjectURL(files[0]);
    const worker = await Tesseract.createWorker({
      // corePath: '/tesseract-core-simd.wasm.js',
      // workerPath: "/dist/worker.dev.js"
    });
    await worker.loadLanguage('eng');
    await worker.initialize('eng');

    await worker.initialize();
    const ret = await worker.recognize(files[0], {rotateAuto: true}, {imageColor: true, imageGrey: true, imageBinary: true});
    document.getElementById("imgOriginal").src = ret.data.imageColor;
    document.getElementById("imgGrey").src = ret.data.imageGrey;
    document.getElementById("imgBinary").src = ret.data.imageBinary;
}

const elm = document.getElementById('uploader');
elm.addEventListener('change', recognize);

// Progress Update Example
function progressUpdate(packet){
	var log = document.getElementById('log');

	if(log.firstChild && log.firstChild.status === packet.status){
		if('progress' in packet){
			var progress = log.firstChild.querySelector('progress')
			progress.value = packet.progress
		}
	}else{
		var line = document.createElement('div');
		line.status = packet.status;
		var status = document.createElement('div')
		status.className = 'status'
		status.appendChild(document.createTextNode(packet.status))
		line.appendChild(status)

		if('progress' in packet){
			var progress = document.createElement('progress')
			progress.value = packet.progress
			progress.max = 1
			line.appendChild(progress)
		}

		if(packet.status == 'done'){
			var pre = document.createElement('pre')
			pre.appendChild(document.createTextNode(packet.data.data.text))
			line.innerHTML = ''
			line.appendChild(pre)

		}

		log.insertBefore(line, log.firstChild)
	}
}

async function recognizeFile(file) {

    document.querySelector("#log").innerHTML = ''

    const lang = document.querySelector('#langsel').value
    const data = await Tesseract.recognize(file, lang, {
        logger: progressUpdate,
    });
  
    progressUpdate({ status: 'done', data });
}