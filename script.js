/*
Add a textbox, then press New TODO button to add item to list. 
When an item is added, put a checkbox. 
Automatically add 1 to unchecked count and item count.
If the checkbox is checked, decrease unchecked count, but item count stays the same.

For unchecked, set class for created todo (DOESN'T WORK)

When checkbox is clicked, toggle "checked" class. If an item has that class, don't include it in unchecked count.
(PROBABLY NOT WHAT'S EXPECTED, BUT WORKS)
*/

const todoItems = [];
const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');
const textbox = document.getElementById("new-todo");

//add a new item
function newTodo() {
	const textSpan = document.createElement("span"); //span for text
	const newItem = document.createElement("div"); //create new todo
	const checkbox = document.createElement("input"); //create new checkbox
	const delButton = document.createElement("button"); //button to delete item
	
	//set the input to a checkbox
	checkbox.setAttribute("type", "checkbox");

	//newItem.setAttribute("class", "checked");

	//check if the textbox is empty
	if (textbox.value === "") {
		alert("You need to write something in the textbox.");
	} else {
		//add text to span
		textSpan.innerHTML = textbox.value;

		//add new item
		list.appendChild(newItem);

		//add checkbox
		newItem.appendChild(checkbox);

		//add delete button
		delButton.innerHTML = "&#9940";
		delButton.setAttribute("class", "btn");
		newItem.appendChild(delButton);

		//add span
		newItem.appendChild(textSpan);

		//remove item when delete button is clicked
		delButton.addEventListener("click", function(event) {
			//console.log("I'm here.");
			
			//remove item
			list.removeChild(newItem);

			//update item count
			itemCountSpan.innerHTML = list.children.length;

			//update unchecked count
			uncheckedCountSpan.innerHTML = list.children.length - list.getElementsByClassName("checked").length;
		});
	}
	
	//item count
	itemCountSpan.innerHTML = list.children.length;

	//unchecked count
	uncheckedCountSpan.innerHTML = list.children.length;

	checkbox.addEventListener("click", function(event) {
		newItem.classList.toggle("checked");

		if (newItem.classList.contains("checked")) {
			//console.log("Decrease unchecked count.");
			uncheckedCountSpan.innerHTML = list.children.length - list.getElementsByClassName("checked").length;
		} else {
			//I have no idea why or how this works, but it does
			uncheckedCountSpan.innerHTML = list.children.length - list.getElementsByClassName("checked").length;
		}
	});

	//clear textbox
	textbox.value = "";
}

//run newTodo if enter key is pressed
textbox.addEventListener("keyup", function(event){
	if (event.keyCode === 13) {
		newTodo();
	}
});