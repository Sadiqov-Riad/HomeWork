const list = document.getElementById('bookList');
let selectedItem = null;

list.addEventListener('click', function(clicked) {
// Проверяем, был ли клик по элементу <li>
  if (clicked.target.tagName === 'LI') {
    if (selectedItem) {
      selectedItem.classList.remove('selected');
    }
    clicked.target.classList.add('selected');
    selectedItem = clicked.target;
  }
});