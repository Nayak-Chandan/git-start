//console.dir(document)
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textcontent ='Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

//GETELEMENTBTID\
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//var head = document.getElementById('main-header');
//console.log(headerTitle);
// headerTitle.textContent = 'Hello'; //change the header name
// headerTitle.innerText = 'Goodbye'; //over write the header name 
//console.log(headerTitle.textContent); //item listner in the head but in console it shows itemlistner123 because of span
//console.log(headerTitle.innerText); //itemlistner in the head and in console it also same 
//headerTitle.innerHTML = '<h3>Hello</h3>';//it change the item listner in to Hello because in h1 it add another h3 in h1
//head.style.borderBottom = 'solid 3px #000';
//GET ELEMENT BY CLASS NAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);//items in html;
// console.log(items[1]);//item  index
// items[1].textContent = 'Hello';//change the item name
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'green';
//items.style.backgroundColor = '#f4f4f4';
//get font bold for all items
// for(var i=0;i < items.length;i++){
//     items[i].style.fontWeight = 'bold';
// }
// //get background color for all items with gray color
// for(var i=0;i < items.length;i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }
//getElementsByTagname
// var li = document.getElementsByTagName('li');
// console.log(li);// get each li;
//  console.log(li[1]);//item  index
//  li[1].textContent = 'Hello';//change the item name
// li[1].style.fontWeight = 'bold';
//  li[1].style.backgroundColor = 'green';
//  for(var i=0;i < li.length;i++){
//         li[i].style.backgroundColor = '#f4f4f4';
//      }
//Query selector
// var header = document.querySelector('#main-header');
// header.style.boarderBottom = 'solid 4px #ccc';
// var input = document.querySelector('input');
// input.value = 'Hello world';
// var submit = document.querySelector('input[type= "submit"]');//change the submit in to SEND
// submit.value = "SEND";
// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';
// var lastItem = document.querySelector('.list-group-item:last-child');//last item is blue
// lastItem.style.color = 'blue';
 var  secondItem = document.querySelector('.list-group-item:nth-child(2)');//second item is blue
secondItem.style.backgroundColor = 'green';
//Queryselectorall
var titles = document.querySelectorAll('.title');//change the title  all items in to hello
console.log(titles);
titles[0].textContent = 'Hello';
var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i = 0;i < odd.length;i++)
{
   odd[i].style.backgroundColor = "gray";
}






