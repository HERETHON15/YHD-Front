// 별점
const drawStar = target => {
	document.querySelector(`.star span`).style.width = `${target.value * 10}%`;
};

// 태그 버튼
var Tag1 = document.getElementsByClassName('Tag1');
console.log(Tag1[0]);
console.log(Tag1);

function handleClick(event) {
	console.log(event.target);
	console.log(this);
	// 콘솔창을 보면 둘다 동일한 값이 나온다

	console.log(event.target.classList);

	if (event.target.classList[1] === 'clicked') {
		event.target.classList.remove('clicked');
	} else {
		for (var i = 0; i < Tag1.length; i++) {
			Tag1[i].classList.remove('clicked');
		}

		event.target.classList.add('clicked');
	}
}
