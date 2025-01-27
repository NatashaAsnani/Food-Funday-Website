const navLinks = document.querySelectorAll(".nav-link");

// Listen for click events on navbar links
navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        // Remove active class from all nav-links
        navLinks.forEach(link => link.classList.remove("active"));
        
        // Add active class to the clicked nav-link
        event.target.classList.add("active");
    });
});

// Scroll Button
function scrollToSection() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}


// Menu filter
function filterSelection(category, element) {
    var items = document.getElementsByClassName('menu-category');
    
    // Hide all items
    for (var i = 0; i < items.length; i++) {
        items[i].style.display = 'none';
    }
    
    // Show selected items
    var selectedItems = document.getElementsByClassName(category);
    for (var i = 0; i < selectedItems.length; i++) {
        selectedItems[i].style.display = 'block';
    }
    
    // Remove 'active1' class from all buttons
    var buttons = document.querySelectorAll('#myBtnContainer .btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('active1');
        btn.parentNode.style.backgroundColor = ''; // Reset background color of the parent div
        btn.style.color = ''; // Reset text color
        btn.style.padding = ''; // Reset padding
    });
    
    // Add 'active1' class to the clicked button
    element.classList.add('active1');
    element.parentNode.style.backgroundColor = 'rgb(220, 84, 0)'; // Set the background color of the parent div
    element.style.color = 'white'; // Set the text color
 }

// Initialize by displaying the 'starter' category
window.onload = function() {
    filterSelection('starter', document.querySelector('button[onclick*="starter"]'));
}