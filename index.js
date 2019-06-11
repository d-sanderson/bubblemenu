let apps = document.querySelector('.apps');
let fbs = document.querySelector('.fbs');
let sandwiches = document.querySelector('.sandwiches');
let bowls = document.querySelector('.bowls');
let desserts = document.querySelector('.desserts');
const tax = .0785;

let appsArr = [{name: 'Brussells', price: 8}, {name: 'Harissa Dip', price: 11}, {name: 'Hummus Trio', price: 12 },{name:'Zuchini Ribbons', price: 8} , {name: 'Calamari', price: 12}, {name: 'Baked Brie', price: 12},{ name: 'Really Good Fries', price: 7}, {name: 'Blistered Shishitos', price: 11}]
let fbsArr = [{name: 'Margharita', price: 11}, {name: 'Curried Cauliflower', price: 12}, {name: 'Pork Belly and Blue Cheese', price: 14}, {name: 'Steaks and Ports', price: 15}]
let bowlsArr = [{name: 'Korean Fried Chicken', price: 16}, {name: 'Salmon and Himalayan Rice', price: 18}, {name: 'Harissa Portobella', price: 14}, {name: 'New Mexico Shrimp & Grits', price: 18}, {name: 'Steak Frites', price: 21}]
let wichesArr = [{name: 'Chimichurri Chicken', price: 11}, {name: 'Patty Melt', price: 12}, {name: 'Grilled Mozzarella & Portabella', price: 9}, {name:'Sixty-Six Green Chile Cheeseburger', price: 14}, {name: 'Crispy Pork Belly Bahn Mi', price: 14}, {name: 'Pastrami Rueben', price: 13}]
let dessertsArr = [{name: 'Chocolate and Whipped Cream Pudding', price: 6}, {name: 'Bananna ShortBread', price: 7}, {name: 'Green Chile Apple Empanada', price: 8}]

let totalDisplay = document.querySelector('#total')

for (var i = 0; i < appsArr.length; i++) {
  let div = document.createElement('div');
  div.className = 'menu-item'
  div.setAttribute('data-clicks', 0)
  div.setAttribute('data-price', appsArr[i].price);
  div.value = appsArr[i].name
  div.innerText = appsArr[i].name
  apps.appendChild(div);
}

for (var i = 0; i < fbsArr.length; i++) {
  let div = document.createElement('div');
  div.className = 'menu-item'
  div.setAttribute('data-clicks', 0)
  div.setAttribute('data-price', fbsArr[i].price);
  div.value = fbsArr[i].name
  div.innerText = fbsArr[i].name
  fbs.appendChild(div);
}

for (var i = 0; i < wichesArr.length; i++) {
  let div = document.createElement('div');
  div.className = 'menu-item'
  div.setAttribute('data-clicks', 0)
  div.setAttribute('data-price', wichesArr[i].price);
  div.value = wichesArr[i].name
  div.innerText = wichesArr[i].name
  sandwiches.appendChild(div);
}

for (var i = 0; i < bowlsArr.length; i++) {
  let div = document.createElement('div');
  div.className = 'menu-item'
  div.setAttribute('data-clicks', 0)
  div.setAttribute('data-price', bowlsArr[i].price);
  div.value = bowlsArr[i].name
  div.innerText = bowlsArr[i].name
  bowls.appendChild(div);
}

for (var i = 0; i < dessertsArr.length; i++) {
  let div = document.createElement('div');
  div.className = 'menu-item'
  div.setAttribute('data-clicks', 0)
  div.setAttribute('data-price', dessertsArr[i].price);
  div.value = dessertsArr[i].name
  div.innerText = dessertsArr[i].name
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

  function displayItemName(e) {
    let itemName = e.target.value
    let itemPrice = parseInt(e.target.getAttribute('data-price'))
    let div = document.createElement('div');
    div.setAttribute('data-price', e.target.getAttribute('data-price'))
    div.innerText = `${itemName}.....$${itemPrice}`
    div.className = 'order-item'
    document.querySelector('.orderitems').insertBefore(div, document.querySelector('#totaltxt'));

  }

  function addTotal(e) {
    let currentTotal = parseInt(totalDisplay.innerText)
    let itemPrice = parseInt(e.target.getAttribute('data-price'));
    let total =  (currentTotal + itemPrice) + ((currentTotal + itemPrice) * tax);
    total = total.toFixed(2);
    displayItemName(e);
    displayTotal(total);
  }

  function displayTotal(total) {
    totalDisplay.innerText = `${total}`
  }

  function removeItem(e) {
    let item = e.target
    if (item.className == 'order-item') {
    itemPrice = parseInt(item.getAttribute('data-price'));
    itemPrice = ((itemPrice * tax) + itemPrice);
    let currentTotal = parseInt(totalDisplay.innerText);
    let newTotal = (currentTotal - itemPrice).toFixed(2);
    newTotal < 0 ? newTotal = 0: newTotal;
    console.log(`${currentTotal} - ${itemPrice} = ${newTotal}`);
    displayTotal(newTotal);
    item.remove();
    }
  }

let items = document.querySelectorAll('.menu-item')
items.forEach(item => item.addEventListener('click', (e) => {
  click(e);
  sortItems(e);
  addTotal(e);
}));

let orderItems = document.querySelectorAll('.orderitems');
orderItems.forEach(orderItem => orderItem.addEventListener('click', (e) => {
  removeItem(e);
}));