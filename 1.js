// Task 1

const wrapper = document.querySelector('.wrapper');

let visualKeyboard = {
	createLayout: function () {
		let alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

		let massAlphabet = alphabet.split('');

		let firstLine = massAlphabet.slice(0,12);
		let secondLine = massAlphabet.slice(12,23);
		let thirdLine = massAlphabet.slice(23,35);


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
		for (let i=0; i<firstLine.length; i++) {
			lettersFromFirst += `<div id="${firstLine[i]}" class="keyboardButton">${firstLine[i]}</div>`;
		}
		firstRow.innerHTML = lettersFromFirst;
		
		let lettersFromSecond = '';
		for (let i=0; i<secondLine.length; i++) {
			lettersFromSecond += `<div class="keyboardButton">${secondLine[i]}</div>`;
		}
		secondRow.innerHTML = lettersFromSecond;

		let lettersFromThird = '';
		for (let i=0; i<thirdLine.length; i++) {
			lettersFromThird += `<div class="keyboardButton">${thirdLine[i]}</div>`;
		}
		thirdRow.innerHTML = lettersFromThird;

	}
}

visualKeyboard.createLayout();
