// Task 1

const wrapper = document.querySelector('.wrapper');

let visualKeyboard = {
	createLayout: function () {
		let alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

		let massAlphabet = alphabet.split('');

		let topRow = massAlphabet.slice(0,12);
		let middleRow = massAlphabet.slice(12,23);
		let bottomRow = massAlphabet.slice(23,35);


		wrapper.insertAdjacentHTML('afterbegin','<h2>Задача 1</h2>');

		let keyboardForm = document.createElement('div');
		keyboardForm.classList.add('keyboardForm');
		wrapper.appendChild(keyboardForm);




		let firstRow = document.createElement('p');
		firstRow.textContent = 'Ряд 1';
		firstRow.classList.add('keyboardStyle');
		keyboardForm.appendChild(firstRow);

		let secondRow = firstRow.cloneNode(false);
		secondRow.textContent = 'Ряд 2';
		keyboardForm.append(secondRow);

		let thirdRow = secondRow.cloneNode(false);
		thirdRow.textContent = 'Ряд 3';
		secondRow.after(thirdRow);

		let lettersFromFirst = '';
		for (let i=0; i<topRow.length; i++) {
			lettersFromFirst += `<div id="${topRow[i]}" class="keyboardButton">${topRow[i]}</div>`;
		}
		firstRow.innerHTML = lettersFromFirst;
		
		let lettersFromSecond = '';
		for (let i=0; i<middleRow.length; i++) {
			lettersFromSecond += `<div id="${middleRow[i]}" class="keyboardButton">${middleRow[i]}</div>`;
		}
		secondRow.innerHTML = lettersFromSecond;

		let lettersFromThird = '';
		for (let i=0; i<bottomRow.length; i++) {
			lettersFromThird += `<div id="${bottomRow[i]}" class="keyboardButton">${bottomRow[i]}</div>`;
		}
		thirdRow.innerHTML = lettersFromThird;

	}
}

visualKeyboard.createLayout();
