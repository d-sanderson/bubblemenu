let apps = document.querySelector('.apps');
let fbs = document.querySelector('.fbs');
let sandwiches = document.querySelector('.sandwiches');
let bowls = document.querySelector('.bowls');
let desserts = document.querySelector('.desserts');

let appsArr = ['Brussells', 'Harissa Dip', 'Hummus Trio', 'Zuchini Ribbons', 'Calamari', 'Baked Brie', 'Really Good Fries', 'Blistered Shishitos']
let fbsArr = ['Margharita', 'Curried Cauliflower', 'Pork Belly and Blue Cheese', 'Steaks and Ports']
let bowlsArr = ['Korean Fried Chicken', 'Salmon and Himalayan Rice', 'Harissa Portobella', 'New Mexico Shrimp & Grits']
let wichesArr = ['Chimichurri Chicken', 'Patty Melt', 'Grilled Mozzarella & Portabella', 'Sixty-Six Green Chile Cheeseburger', 'Crispy Pork Belly Bahn Mi', 'Pastrami Rueben']
let dessertsArr = ['Chocolate and Whipped Cream Pudding', 'Bananna ShortBread', 'Green Chile Apple Empanada',  ]

for (var i = 0; i < appsArr.length; i++) {
  let div = document.createElement('div');
  div.className = 'menu-item'
  div.setAttribute('data-clicks', 0)
  div.value = appsArr[i]
  div.innerText = appsArr[i]
  apps.appendChild(div);
}

for (var i = 0; i < fbsArr.length; i++) {
  let div = document.createElement('div');
  div.className = 'menu-item'
  div.setAttribute('data-clicks', 0)
  div.value = fbsArr[i]
  div.innerText = fbsArr[i]
  fbs.appendChild(div);
}

for (var i = 0; i < wichesArr.length; i++) {
  let div = document.createElement('div');
  div.className = 'menu-item'
  div.setAttribute('data-clicks', 0)
  div.value = wichesArr[i]
  div.innerText = wichesArr[i]
  sandwiches.appendChild(div);
}

for (var i = 0; i < bowlsArr.length; i++) {
  let div = document.createElement('div');
  div.className = 'menu-item'
  div.setAttribute('data-clicks', 0)
  div.value = bowlsArr[i]
  div.innerText = bowlsArr[i]
  bowls.appendChild(div);
}

for (var i = 0; i < dessertsArr.length; i++) {
  let div = document.createElement('div');
  div.className = 'menu-item'
  div.setAttribute('data-clicks', 0)
  div.value = dessertsArr[i]
  div.innerText = dessertsArr[i]
  desserts.appendChild(div);
}

function click(e) {
  if (!e.target.getAttribute('data-clicks'))
    e.target.setAttribute('data-clicks', 0);
  var clicks = parseInt(e.target.getAttribute('data-clicks'));
  e.target.setAttribute('data-clicks', clicks + 1);
}

function sortItems(e) {
  let menuItems = jQuery(e.target.parentNode.children)
  let classname = e.target.parentNode.className
  menuItems.sort(function(a, b){ return $(b).data("clicks")-$(a).data("clicks")});
  $('.' + classname).html(menuItems)
  }

let items = document.querySelectorAll('.menu-item')
items.forEach(item => item.addEventListener('click', click))
items.forEach(item => item.addEventListener('click', sortItems))

