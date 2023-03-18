// ============================================================================
// Rock Types Slideshow
// ============================================================================

// Initalize on first slide
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//Slideshow fuction
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("rockTypeContainers");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //Initiate the animation here before slide change
  slides[slideIndex-1].style.animationPlayState = 'running';

  //Change slide and dot
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// ============================================================================
// Field Work Slideshow
// ============================================================================

let fwslideIndex = 0;
fwshowSlides();

function fwshowSlides() {

  let i;
  let slides = document.getElementsByClassName("slideShowImages");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  fwslideIndex++;

  if (fwslideIndex > slides.length) {
    fwslideIndex = 1}
    
  slides[fwslideIndex-1].style.display = "block";

  setTimeout(fwshowSlides, 5000); // Change image every 2 seconds
};

// ============================================================================
// Image Grid
// ============================================================================

// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
//var i;

// Properly size text based on image layout
function sizePopupText(s) {

  const sampleText = document.querySelectorAll(".sampleText");

  for (let j = 0; j < sampleText.length; j++) {
    sampleText[j].style.fontSize = s;
  }
}

// Full-width images
function one() {
    for (let i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%";
  }
  // Set text size
  sizePopupText('300%')
}

// Two images side by side
function two() {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.flex = "50%";
  }
  // Set text size
  sizePopupText('150%')
}

// Four images side by side
function four() {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%";
  }
  // Set text size
  sizePopupText('75%')
}

// Add active class to the current button (highlight it)
var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Toggle sample inforamtion on click
function sampleText(n) {

  const sampleText = document.querySelectorAll(".sampleText")[n]; 

  if (sampleText.style.animationName == 'textAppear' && sampleText.style.animationPlayState == 'paused') {
    sampleText.style.animationName = 'textAppear';
  }
  else if (sampleText.style.animationName == 'textAppear') {
    sampleText.style.animationName = 'revertTextAppear';
  }
  else {
    sampleText.style.animationName = 'textAppear';
  }
  
  sampleText.style.animationPlayState = 'running';
}

// Configure text size basedon image grid


// ============================================================================
// Cursor
// ============================================================================

// Constants from the DOM
const cursorTrace = document.querySelector("#cursorTrace");
const cursorText = document.querySelector("#cursorText")
const innerCricle = document.querySelector("#innerCircle")

// globals for current mouse x / y coordinates and offset
let x = 0;
let y = 0;
let y_off = 0;

// globals for tracer position
let tracerX = 0;
let tracerY = 0;

// acceleration speed of cursor animation
let speed = 0.1;

// Animation function for cursor movements (found on SO)
function animate(){
  
  let distX = x - tracerX;
  let distY = y - tracerY;
  
  tracerX = tracerX + (distX * speed);
  tracerY = tracerY + (distY * speed);
  
  cursorTrace.style.left = tracerX + "px";
  cursorTrace.style.top = tracerY + "px";
  
  requestAnimationFrame(animate);
}
animate();

// Declare a throttler to avoid blowing up our browser - More on this?
let throttle = (func, delay) => {
  let prev = Date.now() - delay;
  return (...args) => {
    let current = Date.now();
    if (current - prev >= delay) {
      prev = current;
      func.apply(null, args);
    }
  }
};

// Declare a callback for updating our globals and tracer position
const handleMouseMove = (event) =>
{
  x = event.pageX;
  y = event.pageY;
  y_off = event.offsetY
  cursorTrace.style.top = `${y}px`;
  cursorTrace.style.left = `${x}px`;
}

// listener for tracking mouse position
document.addEventListener("mousemove", throttle(handleMouseMove, 10));

// listener for testing coordinates stored in globals
document.addEventListener("click", (event) => {
  console.log(x, y);
});

// Rock Type List Elements to Grab
const igneous = document.getElementById("igneous");
const sedimentary = document.getElementById("sedimentary");
const metamorphic = document.getElementById("metamorphic");
const minearls = document.getElementById("minearls");
const rockType = [igneous, sedimentary, metamorphic, minearls]

// Rock Sample List Elements to Grab
const sample00 = document.getElementById("sample-00");
const sample01 = document.getElementById("sample-01");
const sample02 = document.getElementById("sample-02");
const sample03 = document.getElementById("sample-03");
const sample04 = document.getElementById("sample-04");
const sample05 = document.getElementById("sample-05");
const sample06 = document.getElementById("sample-06");
const sample07 = document.getElementById("sample-07");
const sample08 = document.getElementById("sample-08");
const sample09 = document.getElementById("sample-09");
const sample10 = document.getElementById("sample-10");
const sample11 = document.getElementById("sample-11");

// Generic function for displaying custom data @ the tracer
const handleElementMessage = (element_ref, message) =>{
  
  // extract element's container data from DOM
  const {x: left_bound, width, height } = element_ref.getBoundingClientRect();

  // infer right bounding rect extent
  const right_bound = left_bound + width;

  // set up checks for validating if the cursor is on the element or not
  const x_check = ( left_bound < x && x < right_bound ) ? true : false;
  const y_check = (0 < y_off && y_off < height ) ? true : false;

  if (x_check && y_check) {

    // Set text based off image hover
    cursorText.innerHTML = message;

    // Run text animation on image hover
    cursorText.style.animationName = 'textAppear';
    cursorText.style.animationPlayState = 'running';

    // Run Animation on image hover
    innerCricle.style.animationName = 'scale'
    innerCricle.style.animationPlayState = 'running';
  }
}

const handleMessageReset = () => {

  // Reset text animation;
  cursorText.style.animationName = 'revertTextAppear';

  // Reset cursro animation
  innerCricle.style.animationName = 'revertScale';
}

//Event listners for defined elements

igneous.addEventListener('mousemove', () => {handleElementMessage(igneous, `Igneous Rocks`)})
igneous.addEventListener('mouseleave', () => {handleMessageReset(igneous)})

sedimentary.addEventListener('mousemove', () => {handleElementMessage(sedimentary, `Sedimentary Rocks`)})
sedimentary.addEventListener('mouseleave', () => {handleMessageReset(sedimentary)})

metamorphic.addEventListener('mousemove', () => {handleElementMessage(metamorphic, `Metamorphic Rocks`)})
metamorphic.addEventListener('mouseleave', () => {handleMessageReset(metamorphic)})

minearls.addEventListener('mousemove', () => {handleElementMessage(minearls, `Economic Minerals`)})
minearls.addEventListener('mouseleave', () => {handleMessageReset(minearls)})

sample00.addEventListener('mousemove', () => {handleElementMessage(sample00, `Bornite`)})
sample00.addEventListener('mouseleave', () => {handleMessageReset(sample00)})

sample01.addEventListener('mousemove', () => {handleElementMessage(sample01, `Malachite`)})
sample01.addEventListener('mouseleave', () => {handleMessageReset(sample01)})

sample02.addEventListener('mousemove', () => {handleElementMessage(sample02, `Granite`)})
sample02.addEventListener('mouseleave', () => {handleMessageReset(sample02)})

sample03.addEventListener('mousemove', () => {handleElementMessage(sample03, `Semi-Massive Sulphide`)})
sample03.addEventListener('mouseleave', () => {handleMessageReset(sample03)})

sample04.addEventListener('mousemove', () => {handleElementMessage(sample04, `Obsidian`)})
sample04.addEventListener('mouseleave', () => {handleMessageReset(sample04)})

sample05.addEventListener('mousemove', () => {handleElementMessage(sample05, `Apatite`)})
sample05.addEventListener('mouseleave', () => {handleMessageReset(sample05)})

sample06.addEventListener('mousemove', () => {handleElementMessage(sample06, `Labradorite`)})
sample06.addEventListener('mouseleave', () => {handleMessageReset(sample06)})

sample07.addEventListener('mousemove', () => {handleElementMessage(sample07, `Peroditite`)})
sample07.addEventListener('mouseleave', () => {handleMessageReset(sample07)})

sample08.addEventListener('mousemove', () => {handleElementMessage(sample08, `Massive Sulphide`)})
sample08.addEventListener('mouseleave', () => {handleMessageReset(sample08)})

sample09.addEventListener('mousemove', () => {handleElementMessage(sample09, `Petrified Wood`)})
sample09.addEventListener('mouseleave', () => {handleMessageReset(sample09)})

sample10.addEventListener('mousemove', () => {handleElementMessage(sample10, `Fuchsite`)})
sample10.addEventListener('mouseleave', () => {handleMessageReset(sample10)})

sample11.addEventListener('mousemove', () => {handleElementMessage(sample11, `Bismuth`)})
sample11.addEventListener('mouseleave', () => {handleMessageReset(sample11)})