var input = document.getElementById('user-input');
var addBtn = document.getElementById('add-btn');
var countItem = 0;


document.getElementById('todo-input').addEventListener('mouseover', function(){
	var button = document.querySelector('button');
	button.classList.remove('hide');
});
document.getElementById('todo-input').addEventListener('mouseout', function(){
	var button = document.querySelector('button');
	button.classList.add('hide');
});

addBtn.addEventListener('click', function(){

	if(input.value.length === 0)
		return;

	countItem++;
	taskLeftCount();

	var form = document.querySelector('form');

	var newItem = document.createElement('input');
	newItem.type = "checkbox";
	newItem.id = "item" + countItem;
	
	var text = document.createElement('SPAN');
	text.innerText = input.value;
	text.id = "item" + countItem;

	var icon = document.createElement('i');
	icon.classList.add('far');
	icon.classList.add('fa-times-circle');
	icon.classList.add('place-icon');
	icon.id = "item" + countItem;
	icon.addEventListener('click',function() {
		deleteItem(icon.id);
	});

	var breakLine = document.createElement('br');
	breakLine.id = "item" + countItem;

	form.appendChild(newItem);
	form.appendChild(text);
	form.appendChild(icon);
	form.appendChild(breakLine);
	input.value = '';
});

function deleteItem(id){
	let removeItems = document.querySelectorAll('#'+id);
		
	for(let j=0; j<removeItems.length;j++){
			document.querySelector('form').removeChild(removeItems[j]);
	}
	countItem--;
	taskLeftCount();
}

var cmpAllTsk = document.getElementById('cmp-all-tsk');

cmpAllTsk.addEventListener('click', function (){
	var allTsk = document.querySelectorAll('input');
	for(let i=1; i<allTsk.length;i++){
		allTsk[i].checked = true;
	}

	document.getElementById('cmp-all-logo').classList.remove('color');
	
});

var clrCmp = document.getElementById('clr-cmp');

clrCmp.addEventListener('click', function (){
	var allTsk = document.querySelectorAll('input');
	for(let i=1; i<allTsk.length;i++){

		if(allTsk[i].checked === true){
			
			let removeItems = document.querySelectorAll('#'+allTsk[i].id);
		
			for(let j=0; j<removeItems.length;j++){
				document.querySelector('form').removeChild(removeItems[j]);
			}
			countItem--;
			taskLeftCount();
		}
	}
});

function taskLeftCount(){
	var count = document.querySelector('#tsk-lft-cnt');
	count.innerText = countItem;
}
