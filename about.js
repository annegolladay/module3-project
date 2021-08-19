console.log("hello worldzz")


function handleSubmit(evt) {
	evt.preventDefault();
	
	//console.log('form submit');
	alert('Your form has been submitted successfully!')
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

//Mouseover on Cat Image
let catImg = document.querySelector('#cat-image')

function catCompliment() {
	catImg.textContent = alert('I love you!')
}

catImg.addEventListener('mouseover', catCompliment)


