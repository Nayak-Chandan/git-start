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
//  var  secondItem = document.querySelector('.list-group-item:nth-child(2)');//second item is blue
// secondItem.style.backgroundColor = 'green';
// //Queryselectorall
// var titles = document.querySelectorAll('.title');//change the title  all items in to hello
// console.log(titles);
// titles[0].textContent = 'Hello';
// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i = 0;i < odd.length;i++)
// {
//    odd[i].style.backgroundColor = "gray";
// }
//TRAVERSING THE DOM //
var itemList = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);
//parent Element
// console.log(itemList.parentElement);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);
//children
//console.log(itemList.childNodes);//it gives the whole array with white spaces like in text form in array
// console.log(itemList.children);//it gives only items 
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';
// //FIRST CHILD
// console.log(itemList.firstChild); //it gives output as itemlists including white spaces so output is text
// //FIRST ELEMENT CHILD 
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1'//the 1st item name is change to hello 1
//LAST CHILD
//console.log(itemList.lastChild); //it gives output as itemlists including white spaces so output is text
//LAST ELEMENT CHILD 
//  console.log(itemList.lastElementChild);//it gives last elemment
//  itemList.lastElementChild.textContent = 'Hello 4'//the last item name is change to hello 4
//nextSibling
// previous sibiling
// console.log(itemList.previousSibling);//text
// console.log(itemList.previousElementSibling); //<h2 class="title">items</h2>
// itemList.previousElementSibling.style.color = 'green';//item color covert in to green
//CreateElement 

//create div 
// var newDiv = document.createElement('div');
// //add a class
// newDiv.className= 'Helllo';
// // add id
// newDiv.id= 'hello1';
// // add attribute
// newDiv.setAttribute('title','Hello div');
// //create a text node
// var newDivText = document.createTextNode('Hello');//create a text node for div
// //add text to div\
// newDiv.appendChild(newDivText);//hello world is added to the div
//console.log(newDiv);
//  var container  = document.querySelector('header .container');
//  var h1 = document.querySelector('header h1');
// container.insertBefore(newDiv,h1);
// newDiv.style.fontSize = '30px';
// console.log(newDiv);

var newList= document.createElement('li');
newList.className = 'list-group-item';
newList.id ='hello1';
var newListText = document.createTextNode('Hello');
newList.appendChild(newListText);
//var newUlElement = document.getElementsByClassName('list-group')
//newUlElement.appendChild(newList);
//var itemList = document.querySelector('#items');
//console.log(itemList.parentNode);
//var item =document.querySelector('#items')
var main = document.querySelector('div .list-group');
var items =document.querySelector('div li');//i take
console.log(newList);
//console.log(newUlElement);
main.insertBefore(newList,items);










