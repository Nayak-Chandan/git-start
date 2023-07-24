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
var items = document.getElementsByClassName('list-group-item');
console.log(items);//items in html;
console.log(items[1]);//item  index
items[1].textContent = 'Hello';//change the item name
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'green';
//items.style.backgroundColor = '#f4f4f4';
for(var i=0;i < items.length;i++){
    items[i].style.fontWeight = 'bold';
}
for(var i=0;i < items.length;i++){
    items[i].style.backgroundColor = '#f4f4f4';
}









