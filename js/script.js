
// empty array. when somone click player Button, player willbe pushed here
const cart = [];


// player cost variable. value is zero. it will update when user add player & click calculate button
let playerMoney = 0;


// a function which will take player name in an array and display in list
function addToCart(element) {
    const playerName = element.parentNode.children[2].innerText;

    let playerNumber = cart.length;
    document.getElementById('selected').innerText = playerNumber;


    const cartContainer = document.getElementById("player-cart");

    // ifelse declaration. if user add player more than 5 it will give an alert & return the function.
    if (playerNumber < 5) {
        const li = document.createElement("li");
        li.innerText = `${playerName}`;
        cartContainer.appendChild(li);
        element.disabled = true;
    }
    else {
        alert('you can not add more than 5')
        return
    }

    // from here player will be pushed to our empty array
    cart.push(playerName);
}

// function for calculate total player cost by multiplying input per player cost & numbers of player added. we'll get the numbers of player added form the length of our array
document.getElementById('calculate').addEventListener('click', function () {
    const perHeadInputString = document.getElementById('per-head-budget').value;

    const perHeadInput = parseFloat(perHeadInputString);

    const total = cart.length * perHeadInput;

    // setting inner text for player total amount
    const totalPlayerExpenses = document.getElementById('player-expense').innerText = total;


    // setting the zero valued playermoney variable to a new value from the string

    playerMoney = total;

})


// function for total calculation. it will take budget for manager,coach form input field and sum together. then add playerMoney to get the total value

document.getElementById('total-calculate').addEventListener('click', function () {

    const managerInputString = document.getElementById('manager').value;

    const managerInput = parseFloat(managerInputString);

    const coachInputString = document.getElementById('coach').value;

    const coachInput = parseFloat(coachInputString);

    const managerCoachTotal = managerInput + coachInput;

    const subTotal = playerMoney + managerCoachTotal;

    // setting innrtext for subtotal amount
    const overallTeamExpenses = document.getElementById('subtotal').innerText = subTotal;
})
