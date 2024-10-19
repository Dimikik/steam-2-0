const games = [{
    name: 'Asseto corsa',
    cost: 1159,
    image: 'images/asseto-corsa.jpg'
},
{
    name: 'Baldurs gate',
    cost: 1999,
    image: 'images/baldurs-gate.jpg'
},
{
    name: 'BeamNG drive',
    cost: 880,
    image: 'images/beamNG-drive.jpg'
},
{
    name: 'Dark souls 3',
    cost: 2399,
    image: 'images/dark-souls-3.jpg'
},
{
    name: 'Rust',
    cost: 1100,
    image: 'images/rust.jpg'
},
{
    name: 'Squad',
    cost: 1799,
    image: 'images/squad.jpg'
}]
const basket = []
window.addEventListener('load', ()=>{
    const gamesBlock = document.querySelector('.games-block')
    for (let game of games){
        gamesBlock.innerHTML += `<div class="games-block__game">
                <h2 class="game__name">${game.name}</h2>
                <p class="game__price">${game.cost} $</p>
                <img class="game__img" src="${game.image}" alt="">
                <button class="game__buy">В корзину</button>
            </div>`
        const buttons = document.querySelectorAll('.game__buy')
        for (let i = 0; i < buttons.length; i++){
            buttons[i].addEventListener('click', ()=>{
                basket.push(games[i])
                showBasket()
                allSum()
            })
        }
    }
})
const basketBtn = document.querySelector('.basket-btn')
const basketBlock = document.querySelector('.basket-block')
let basketIsOpen = false
basketBtn.addEventListener('click', ()=>{
    if (basketIsOpen){
        basketBlock.style.right = "-400px";
        basketBtn.querySelector('img').style.transform = "rotate(180deg)"
    }
    else{
        basketBlock.style.right = "0px";
        basketBtn.querySelector('img').style.transform = "rotate(0deg)"
    }
    basketIsOpen = !basketIsOpen
})
let basket_block = document.querySelector('.basket-block__games')
function showBasket(){
    basket_block.innerHTML = '';
    let count = 0
    let allcost = 0
    for (let game of basket){
        allcost += game.cost
        basket_block.innerHTML += `<div class="basket-block__games__game">
            <img class="img_busket" src="${game.image}">
            <div class="busket_text">
                <h4 style="color:white;">${game.name}</h4>
                <p style="color:white;">${game.cost}$</p>
                <button onclick="deleteGame(${count++})" style="color:white; cursor:pointer;">Удалить</button>
            </div>
        </div>`
    }
    allcostP.innerHTML = `Итого: ${allcost}$`
}
const allcostP = document.querySelector('.allcost');
function allSum(){
    let sum = 0;
    for(let game of basket){
        sum += game.cost;
    }
    allcostP,innerHTML = `Итого: ${sum}$`
}
function deleteGame(count){
    basket.pop(count);
    showBasket()
    allSum()
}