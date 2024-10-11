// JavaScript to toggle the sidebar on mobile view
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

// Toggle sidebar open/close when the menu button is clicked
menuToggle.addEventListener('click', () => {
    // Toggle the sidebar between open and closed states
    console.log("Menu toggle clicked!"); // This should appear in the console
    sidebar.classList.toggle('sidebar-open');
    sidebar.classList.toggle('sidebar-closed');
});

// Handle dropdown functionality in sidebar for mobile view
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        // Prevent default link behavior
        e.preventDefault();

        // Toggle the visibility of the next sibling dropdown-content
        const dropdownContent = toggle.nextElementSibling;
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
});

