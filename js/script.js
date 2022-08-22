const cart = [];


function addToCart(element) {
    const playerName = element.parentNode.children[2].innerText;
    cart.push(playerName);
    console.log(cart)

    let playerNumber = cart.length;
    document.getElementById('selected').innerText = playerNumber;


    const cartContainer = document.getElementById("player-cart");

    const li = document.createElement("li");
    li.innerText = `${playerName}`;
    cartContainer.appendChild(li);
}


function calculation() {

    const perHeadInputString = document.getElementById('per-head-budget').value;

    const perHeadInput = parseFloat(perHeadInputString);

    const total = cart.length * perHeadInput;

    const TotalPlayerExpenses = document.getElementById('player-expense').innerText = total;
    alert(perHeadInput);
}