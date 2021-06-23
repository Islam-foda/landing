/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const allSections = document.getElementsByTagName('section');
const navMenu = document.getElementById('navbar__list')
const frag = document.createDocumentFragment()




/*
 * Begin Main Functions
 *
 */
//function to loop of All sections, and make likewise items at the navigation menu.
function dynamicList() {
    for (const sec of allSections) {
        const secAttr = sec.getAttribute('data-nav')
        const li = document.createElement('li')
        li.setAttribute("class", "menu__link")
        li.innerHTML = secAttr
        frag.appendChild(li);
        //console.log(secAttr)
        li.addEventListener("click", function() {
            sec.scrollIntoView({ behavior: "smooth" })
        })
    }
    navMenu.appendChild(frag)
}



// build the nav when calling the function.
dynamicList();

// Add class 'active' to section when near top of viewport
//using getboundigclientrect() function

function setActiveClass() {
    for (const sec of allSections) {
        let goal = sec.getBoundingClientRect();

        if (goal.top >= -150 && goal.top <= 500) {
            sec.classList.add("your-active-class");
            //console.log("Section in the view")
        } else { sec.classList.remove("your-active-class") };
    }
}
window.addEventListener("scroll", function() {
    setActiveClass();
})





// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active