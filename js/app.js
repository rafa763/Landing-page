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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

// Define global variables
const sections = document.querySelectorAll('section');
const docFargment = document.createDocumentFragment();
const list = document.getElementById('navbar__list');

// Function to create li
function liCreator() 
{
    // Looping on the section list created
    for (section of sections)
    {
        // Create li element for each section
        listItem = document.createElement('li');

        // Get the value of the section id attribute
        sectionId = section.getAttribute('id');

        // Get the value of the section data-nav attribute
        sectionDataNav = section.getAttribute('data-nav');

        // Create the text inside each anchor element
        listItem.innerHTML = `<a class='menu__link' data-nav='${section.id}' href='#${section.id}'> ${section.dataset.nav} </a>`;

        // Append each nav item to the previously created Document Fragment 
        docFargment.appendChild(listItem); 
    }
    // Add list item to the unordered list
    list.appendChild(docFargment);
}

function toggleActiveState() 
{
    // Loop to iterate over all the sections of the page
    document.querySelectorAll("section").forEach(function (sec) {
        let activeLi = list.querySelector(`[data-nav=${sec.id}]`);
        // Check if that section is on the the screen or not
        if (sec.getBoundingClientRect().top >= -400 && sec.getBoundingClientRect().top <= 150) 
        {
            // If on screen give it the active class
            sec.classList.add("your-active-class");
            activeLi.classList.add("active");
        }
        else 
        {
            // If not then remove the active class
            sec.classList.remove("your-active-class");
            activeLi.classList.remove("active");
        }
    });

}

// making the smooth scroll functionality
list.addEventListener("click", (toSec) => {
    toSec.preventDefault();
    if (toSec.target.dataset.nav) 
    {
        document.getElementById(`${toSec.target.dataset.nav}`).scrollIntoView({ behavior: "smooth" });
    }
});

liCreator();

document.addEventListener('scroll', toggleActiveState); 



