// script.js

// Search functionality
const searchInput = document.getElementById('search');
const folderList = document.getElementById('folderList');

searchInput.addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();
  const folders = folderList.getElementsByTagName('a');

  Array.from(folders).forEach((folder) => {
    const folderName = folder.textContent.toLowerCase();
    if (folderName.includes(searchTerm)) {
      folder.style.display = 'block';
    } else {
      folder.style.display = 'none';
    }
  });
});

// Hover effect for buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('mouseover', function () {
    this.style.backgroundColor = '#555';
  });
  button.addEventListener('mouseout', function () {
    this.style.backgroundColor = '#333';
  });
});
// script.js

// Clickable menu items
const menuItems = document.querySelectorAll('.menu li a');
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior
    alert(`Clicked on: ${this.textContent}`); // Example: show an alert with the clicked item
    // You can add additional logic here, such as navigating to another page
  });
});

// Hover effect for menu items
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('mouseover', function () {
    this.style.color = '#ffd700';
  });
  menuItem.addEventListener('mouseout', function () {
    this.style.color = '#fff';
  });
});

// Hover effect for table rows
const tableRows = document.querySelectorAll('tbody tr');
tableRows.forEach((row) => {
  row.addEventListener('mouseover', function () {
    this.style.backgroundColor = '#f4f4f4';
  });
  row.addEventListener('mouseout', function () {
    this.style.backgroundColor = '#fff';
  });
});
