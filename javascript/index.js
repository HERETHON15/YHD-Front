// 별점
const drawStar = target => {
	document.querySelector(`.waterdrop div`).style.width = `${target.value * 5}%`;
};

// 태그 버튼
var tagline1 = document.getElementsByClassName('Tagline1');

function handleClick(event) {
	console.log(event.target);
	// console.log(this);
	// 콘솔창을 보면 둘다 동일한 값이 나온다

	console.log(event.target.classList);

	if (event.target.classList[1] === 'clicked') {
		event.target.classList.remove('clicked');
	} else {
		for (var i = 0; i < tagline1.length; i++) {
			tagline1[i].classList.remove('clicked');
		}

		event.target.classList.add('clicked');
	}
}

function init() {
	for (var i = 0; i < div2.length; i++) {
		tagline1[i].addEventListener('click', handleClick);
	}
}

init();
