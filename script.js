//get carousel items
var carousel = Array.from (document.querySelectorAll ('.carousel .recipe-content'));

//get number of slides
var carouselCount = carousel.length;

// set current slide
var currentSlide = 1;

//carousel number element 
var carouselNumberElement = document.getElementById ('slide-number');

//next and previous buttons
var nextBtn = document.getElementById ('next');
var prevBtn = document.getElementById ('previous');
nextBtn.onclick = nextSlide
prevBtn.onclick = prevSlide

// trigger the checker function
theChecker();


//create checker function
function theChecker () {
    //set the slide number
    carouselNumberElement.textContent = `slide #${currentSlide}of${carouselCount}`
    // remove active classes
    removeAllActive ()

    // set active class on current slide
    carousel [currentSlide-1].classList.add ('active')


    // Check if the current slide is the first
    if (currentSlide == 1) {
    //add disabled button for the previous button
    prevBtn.classList.add('disabled')
    } else {
        //remove disabled class 
        prevBtn.classList.remove ('disabled')
    }

    // Check if the current slide is the last
    if (currentSlide == carouselCount) {
        //add disabled button for the previous button
        nextBtn.classList.add('disabled')
        } else {
            //remove disabled class 
            nextBtn.classList.remove ('disabled')
        }
}

//remove active classes from 

function removeAllActive () {
    carousel.forEach(function (img) {
        img.classList.remove ('active')
    });
   
}

//next slide function 
function nextSlide () {

    if (nextBtn.classList.contains ('disabled')) {
        // do nothing
        return false;
    }  else {
        currentSlide++;
        theChecker();
    
    } 
}

//function previous slide
function prevSlide () {
    if (prevBtn.classList.contains ('disabled')) {
        // do nothing
        return false;
    }  else {
        currentSlide--;
        theChecker();
    
    } 
}

//validate form

function validate (e) {
    e.preventDefault ();
    var fname = contactForm.fname.value;
    var lname = contactForm.lname.value;
    var mail = contactForm.mail.value;
    var message = contactForm.message.value;
    if (fname.length == 0 || lname.length == 0 || mail.length == 0 || message.length == 0 ) {

        return alert ('all fields are required');
    } else {
        return alert ('Message submitted with success')
    }
        


}
