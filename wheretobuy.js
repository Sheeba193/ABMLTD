
const addSubtractButtons = document.querySelectorAll('.add-subtract-icon');

addSubtractButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Select the next sibling element which is the 'shop-list' div
    const shopList = button.nextElementSibling;

    // Check if the next sibling is the desired shop-list div (in case there are other elements)
    if (shopList.classList.contains('shop-list')) {
      // Toggle the display of the shopList between 'block' and 'none'
      shopList.style.display = shopList.style.display === 'block' ? 'none' : 'block';
    }
  });
});