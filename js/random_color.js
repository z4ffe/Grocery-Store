function randomC () {
    const colors = ['#FEEFEA', '#FEEFEA', '#F2FCE4', '#FEEFEA', '#ECFFEC', '#FFFCEB', '#DEF9EC']
    let number = Math.round(Math.random() * colors.length)
    return colors[number]
}

function randomF () {
    const fruits = ['Peach', 'Vegetables', 'Strawberry', 'Apple', 'Orange', 'Potato', 'Carrot']
    let number = Math.round(Math.random() * fruits.length)
    return fruits[number]
}

document.getElementById('explore-card-1').style.background = randomC();
document.getElementById('explore-card-2').style.background = randomC();
document.getElementById('explore-card-3').style.background = randomC();
document.getElementById('explore-card-4').style.background = randomC();
document.getElementById('explore-card-5').style.background = randomC();
document.getElementById('explore-card-6').style.background = randomC();
document.getElementById('explore-card-7').style.background = randomC();

document.getElementById('explorer-fruit-1').innerHTML = randomF()
document.getElementById('explorer-fruit-2').innerHTML = randomF()
document.getElementById('explorer-fruit-3').innerHTML = randomF()
document.getElementById('explorer-fruit-4').innerHTML = randomF()
document.getElementById('explorer-fruit-5').innerHTML = randomF()
document.getElementById('explorer-fruit-6').innerHTML = randomF()
document.getElementById('explorer-fruit-7').innerHTML = randomF()