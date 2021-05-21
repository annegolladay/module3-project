//Part 6 Extra Credit


function randomFun() {
    //let inputField = document.querySelector('input')

    let randomArr = ['Cheescake Factory', 'Braza Grill', 'Macaroni Grill', 'Red Lobster']

    //let restaurant = document.createElement('li')

    let randomBtn = document.querySelector('.random')

    let randomRest = Math.floor(Math.random() * randomArr.length);
        console.log(randomRest, randomArr[randomRest]);

	randomBtn.textContent = alert(randomRest.value)
}

randomBtn.addEventListener('click', randomFun)