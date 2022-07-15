const fruitsCards = [
	{name: 'Peach', color: '#FEEFEA', image: 'img/Explore/1.png'},
	{name: 'Vegetables', color: '#FFF3FF', image: 'img/Explore/2.png'},
	{name: 'Strawberry', color: '#F2FCE4', image: 'img/Explore/3.png'},
	{name: 'Apple', color: '#FEEFEA', image: 'img/Explore/4.png'},
	{name: 'Orange', color: '#ECFFEC', image: 'img/Explore/5.png'},
	{name: 'Potato', color: '#FFFCEB', image: 'img/Explore/6.png'},
	{name: 'Carrot', color: '#DEF9EC', image: 'img/Explore/7.png'},
]


for (let i = 0; i < fruitsCards.length; i++) {
	let randomArray = []
	randomArray.push(Math.round(Math.random() * 6))
	document.querySelector('#card' + [i]).style.backgroundColor = fruitsCards[i].color
	document.querySelector('#explorer-fruit-' + [i]).innerHTML = fruitsCards[i].name
	document.querySelector('#img-' + [i]).src = fruitsCards[i].image
}

// ---------------------------------------

const randomNumber = (number) => {
	return Math.round(Math.random() * number);
};


const cartPrice = document.querySelector('#cart-price-dynamic');
const cartCounter = document.querySelector('#cart-counter');
const wishlistCounter = document.querySelector('#wishlist-counter');


cartCounter.innerHTML = `${randomNumber(20)}`;
wishlistCounter.innerHTML = `${randomNumber(10)}`;
cartPrice.innerHTML = `$${randomNumber(300)}`;

// ---------------------------------------

const $hours = document.querySelector('.bestsells__hour');
const $minutes = document.querySelector('.bestsells__minute');
const $seconds = document.querySelector('.bestsells__second');

document.addEventListener('DOMContentLoaded', () => {

	let timerId = null;

	function countdownTimer() {
		const date = new Date()
		let hoursDL = date.getHours() * 3600000
		let minutesDL = date.getMinutes() * 60000
		let secondsDL = date.getSeconds() * 1000
		let currentMs = hoursDL + minutesDL + secondsDL
		let dateDiff = 86400000 - currentMs
		if (dateDiff === 0) {
			clearInterval(timerId)
		}
		const hours = dateDiff > 0 ? Math.round(dateDiff / 1000 / 60 / 60) % 24 : 0;
		const minutes = dateDiff > 0 ? Math.round(dateDiff / 1000 / 60) % 60 : 0;
		const seconds = dateDiff > 0 ? Math.round(dateDiff / 1000) % 60 : 0;
		$hours.textContent = `${hours}`
		$minutes.textContent = `${minutes}`
		$seconds.textContent = `${seconds}`
	}

	countdownTimer()
	timerId = setInterval(countdownTimer, 1000)
})


