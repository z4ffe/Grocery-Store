// All Arrays and Constants ///////////////////////////////////////////////////////////////////////

const cardArray = ['#card-1', '#card-2', '#card-3', '#card-4', '#card-5', '#card-6', '#card-7']
const fruitArray = ['#explorer-fruit-1', '#explorer-fruit-2', '#explorer-fruit-3', '#explorer-fruit-4', '#explorer-fruit-5', '#explorer-fruit-6', '#explorer-fruit-7']
const colors = ['#FEEFEA', '#FEEFEA', '#F2FCE4', '#FEEFEA', '#ECFFEC', '#FFFCEB', '#DEF9EC']
const fruits = ['Peach', 'Vegetables', 'Strawberry', 'Apple', 'Orange', 'Potato', 'Carrot']


// Random Colors for Explore Categories /////////////////////////////////////////////

for (let i = 0; i < cardArray.length; i++) {
    let number = Math.round(Math.random() * colors.length);
    document.querySelector(cardArray[i]).style.background = colors[number];
    document.querySelector(fruitArray[i]).innerHTML = fruits[number]
    document.querySelector('#img-' + i).src += ++number + '.png'
}


// Random Number in Cart ////////////////////////////////////////////////////

const randomPrice = Math.round(Math.random() * 50);
document.getElementById('cart-price-dynamic').innerHTML = randomPrice + '$';