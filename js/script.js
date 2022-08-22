const cart = [];



function addToCart(element) {
    const playerName = element.parentNode.children[2].innerText;

    let playerNumber = cart.length;
    document.getElementById('selected').innerText = playerNumber;


    const cartContainer = document.getElementById("player-cart");

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
    cart.push(playerName);
}


function calculation() {

    const perHeadInputString = document.getElementById('per-head-budget').value;

    const perHeadInput = parseFloat(perHeadInputString);

    const total = cart.length * perHeadInput;

    const totalPlayerExpenses = document.getElementById('player-expense').innerText = total;


}


function totalCalculation() {


    const managerInputString = document.getElementById('manager').value;

    const managerInput = parseFloat(managerInputString);

    const coachInputString = document.getElementById('coach').value;

    const coachInput = parseFloat(coachInputString);

    const managerCoachTotal = managerInput + coachInput;

    const subTotal = managerCoachTotal;


    const overallTeamExpenses = document.getElementById('subtotal').innerText = subTotal;

}
