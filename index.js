let apps = document.querySelector('.apps');
let fbs = document.querySelector('.fbs');
let sandwiches = document.querySelector('.sandwiches');
let bowls = document.querySelector('.bowls');

let appsArr = ['Brussells', 'Harissa Dip', 'Hummus Trio', 'Zuchini Ribbons', 'Calamari', 'Baked Brie', 'Really Good Fries', 'Blistered Shishitos']
let fbsArr = ['Margharita', 'Curried Cauliflower', 'Pork Belly and Blue Cheese', 'Steaks and Ports']
let bowlsArr = ['Korean Fried Chicken', 'Salmon and Himalayan Rice', 'Harissa Portobella', 'New Mexico Shrimp & Grits']
let wichesArr = ['Chimichurri Chicken', 'Patty Melt', 'Grilled Mozzarella & Portabella', 'Sixty-Six Green Chile Cheeseburger', 'Crispy Pork Belly Bahn Mi', 'Pastrami Rueben']

for (var i = 0; i < appsArr.length; i++) {
let div = document.createElement('div');
div.className = 'app'
div.setAttribute('data-clicks', 0)
div.value = appsArr[i]
div.innerText = appsArr[i]
apps.appendChild(div);
}

for (var i = 0; i < fbsArr.length; i++) {
  let div = document.createElement('div');
  div.className = 'fb'
  div.setAttribute('data-clicks', 0)
  div.value = fbsArr[i]
  div.innerText = fbsArr[i]
  fbs.appendChild(div);
}

for (var i = 0; i < wichesArr.length; i++) {
  let div = document.createElement('div');
  div.className = 'sandwich'
  div.setAttribute('data-clicks', 0)
  div.value = wichesArr[i]
  div.innerText = wichesArr[i]
  sandwiches.appendChild(div);
}
for (var i = 0; i < bowlsArr.length; i++) {
  let div = document.createElement('div');
  div.className = 'bowl'
  div.setAttribute('data-clicks', 0)
  div.value = bowlsArr[i]
  div.innerText = bowlsArr[i]
  bowls.appendChild(div);
}


function click(e) {
  if (!e.target.getAttribute('data-clicks'))
    e.target.setAttribute('data-clicks', 0);
  var clicks = parseInt(e.target.getAttribute('data-clicks'));
  e.target.setAttribute('data-clicks', clicks + 1);
  e.target.textContent = `${this.value} ${clicks + 1}`;
}

function sortItems(e) {
  let menuItems = jQuery(e.target.parentNode.children)
  let classname = e.target.parentNode.className
  console.log(classname)
  menuItems.sort(function(a, b){ return $(b).data("clicks")-$(a).data("clicks")});

  if (classname === 'apps') {
    $(".apps").html(menuItems);
}
  else if (classname ==='fbs') {
    $(".fbs").html(menuItems);
}
  else if (classname ==='sandwiches') {
    $(".sandwiches").html(menuItems);
}
  else if (classname ==='bowls') {
    $(".bowls").html(menuItems);
}
  }


let appBtns = apps.querySelectorAll('.app');
let fbBtns = fbs.querySelectorAll('.fb');
let wichBtns = sandwiches.querySelectorAll('.sandwich');
let bowlBtns = bowls.querySelectorAll('.bowl');

appBtns.forEach(btn => btn.addEventListener('click', click))
appBtns.forEach(btn => btn.addEventListener('click', sortItems))


fbBtns.forEach(btn => btn.addEventListener('click', click))
fbBtns.forEach(btn => btn.addEventListener('click', sortItems))


wichBtns.forEach(btn => btn.addEventListener('click', click))
wichBtns.forEach(btn => btn.addEventListener('click', sortItems))


bowlBtns.forEach(btn => btn.addEventListener('click', click))
bowlBtns.forEach(btn => btn.addEventListener('click', sortItems))


