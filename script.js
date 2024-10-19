
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

// ... (existing JavaScript) ...

// const addSubtractButtons = document.querySelectorAll('.add-subtract-icon');

// // Add event listener to each add-subtract button
// addSubtractButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     // Find the associated shop-list (assumed to be the next sibling)
//     const shopList = button.nextElementSibling;

//     // Toggle the display of the shop-list
//     if (shopList && shopList.classList.contains('shop-list')) {
//       shopList.style.display = shopList.style.display === 'block' ? 'none' : 'block';
//     }
//   });
// });

