// ============================================================================
// Slideshow: Chris' Rocks
// ============================================================================

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
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

/* Auto Play version
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("rockTypeContainers");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000); // Change image every 2 seconds
} 
*/

// ============================================================================
// Image Grid
// ============================================================================

// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// Full-width images
function one() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%";
  }
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

// ============================================================================
// Cursor
// ============================================================================

/* First crack at custom cursor
let cursor = document.getElementById('cursortest');

const onMouseMove = (e) =>{
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
}

document.addEventListener('mousemove', onMouseMove);

const imgboxes = document.querySelector('.imgbox') //querySelectorAll - get indexes back, im getting the first element with imgbox here

document.body.addEventListener('mousemove', onMouseMove);
  imgboxes.addEventListener('mouseenter', onMouseHover);
  imgboxes.addEventListener('mouseleave', onMouseHoverOut);


// THIS GIVES ME HOVER/NOT HOVER FUNCTIONALITY ON ORIGINGAL CURSOR/CURSOR TEST IMAGE
function onMouseHover() {
  console.log("hovering")
}

function onMouseHoverOut() {
  console.log("not hovering")
}
*/

const cursorTrace = document.querySelector("#cursorTrace");

// globals for current mouse x / y coordinates and offset
let x = 0;
let y = 0;
let y_off = 0;

// globals for tracer position
let tracerX = 0;
let tracerY = 0;

// acceleration speed of cursor animation
let speed = 0.25;

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
const sample01 = document.getElementById("sample-01");

// Generic function for displaying custom data @ the tracer
const handleElementMessage = (element_ref, message) =>
{
  // extract element's container data from DOM
  const {x: left_bound, width, height } = element_ref.getBoundingClientRect();

  // infer right bounding rect extent
  const right_bound = left_bound + width;

  // set up checks for validating if the cursor is on the element or not
  const x_check = ( left_bound < x && x < right_bound ) ? true : false;
  const y_check = (0 < y_off && y_off < height ) ? true : false;

  if (x_check && y_check) {

    /* Initiate styling
    var labelstyle = document.createElement('style')

    // Proper styling for innerHTML for rock type images
    if (rockType.includes(element_ref)) {
      cursorTrace.innerHTML

    } else { // Styling for a sample image

    }
    */

    console.log('setting HTML');
    cursorTrace.innerHTML = message;
  }
}

const handleMessageReset = () =>
{
  cursorTrace.innerHTML = '';
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

sample01.addEventListener('mousemove', () => {handleElementMessage(sample01, `Hello, I'm A Rock!`)})
sample01.addEventListener('mouseleave', () => {handleMessageReset(sample01)})
