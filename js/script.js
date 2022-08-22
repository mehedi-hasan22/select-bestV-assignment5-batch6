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

