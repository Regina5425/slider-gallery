const imgOne = document.querySelector('.gallery__img--1'); // 1 картинка
const imgTwo = document.querySelector('.gallery__img--2'); // 2 картинка
const imgThree = document.querySelector('.gallery__img--3'); // 3 картинка

function clickRight() {   // клик вправо
	imgOne.classList.add('hidden');  // 1 картинка скрывается
	imgTwo.classList.add('active');  // 2 картинка появляется
	imgThree.classList.add('hidden'); // 3 картика скрыта
}

function clickLeft() {   // клик влево
	imgOne.classList.add('hidden');  // 1 картинка скрывается
	imgTwo.classList.add('hidden');  // 2 картинка появляется
	imgThree.classList.add('active'); // 3 картика скрыта
}