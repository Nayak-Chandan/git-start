var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter')
// form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click',removeItem);
//filter event listner 
filter.addEventListener('keyup',filterItems);
//add item
function addItem(e){
    e.preventDefault();
    //console.log(e);
    let item = e.target.item.value;
    console.log(item);

    //get input value
    var newItem = document.getElementById('item').value;
    //create new li element
    var li = document.createElement('li');
    //Add class name 
    li.className = 'list-group-item';
    console.log(li);
    //add text node with input value 
    li.appendChild(document.createTextNode(newItem));
//create delete button element
var deleteBtn = document.createElement('button');
//add classes to delete button
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
//appened text node  
deleteBtn.appendChild(document.createTextNode('X'));
//append button to li
li.appendChild(deleteBtn);
//append li to list
    itemList.appendChild(li);
}
//Remove item
function removeItem(e){
    //console.log(e);
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
//Filter items
function filterItems(e){
    //convert in to lowercase
    var text = e.target.value.toLowerCase();
    console.log(text);
}