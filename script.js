// const menuToggle = document.getElementById('menu-toggle');
// const sidebar = document.getElementById('sidebar');

// // Toggle sidebar open/close when the menu button is clicked
// menuToggle.addEventListener('click', () => {
//   sidebar.classList.toggle('sidebar-open');
//   sidebar.classList.toggle('sidebar-closed');
// });

// // Handle dropdown functionality in sidebar for mobile view
// const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

// dropdownToggles.forEach(toggle => {
//   toggle.addEventListener('click', (e) => {
//     e.preventDefault();

//     const dropdownContent = toggle.nextElementSibling;
//     dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
//   });
// });

// // Close the sidebar when clicking outside of it
// document.addEventListener('click', (event) => {
//   if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
//     sidebar.classList.remove('sidebar-open');
//     sidebar.classList.add('sidebar-closed');
//   }
// });

const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const productsDropdownToggle = document.querySelector('.dropdown-toggle');
const productsDropdownContent = productsDropdownToggle.nextElementSibling;

// Toggle sidebar open/close when the menu button is clicked
menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar-open');
  sidebar.classList.toggle('sidebar-closed');
});

// Handle dropdown functionality in sidebar for mobile view
productsDropdownToggle.addEventListener('click', (e) => {
  e.preventDefault();

  productsDropdownContent.style.display = productsDropdownContent.style.display === 'block' ? 'none' : 'block';
});

// Close the sidebar when clicking outside of it
document.addEventListener('click', (event) => {
  if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
    sidebar.classList.remove('sidebar-open');
    sidebar.classList.add('sidebar-closed');
  }
});