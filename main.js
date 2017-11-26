const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
alphabet.split('');
let keyboard = [];
keyboard.length = 3;
for(let index = 0; index < alphabet.length; index++){	
	let String1Keyboard = alphabet.slice(0,12);
	let String2Keyboard = alphabet.slice(12,23);
	let String3Keyboard = alphabet.slice(23,alphabet.length);
	keyboard[0] = String1Keyboard.split('');
	keyboard[1] = String2Keyboard.split('');
	keyboard[2] = String3Keyboard.split('');
	break;
};

for (let i = 0; i < keyboard.length; i++){		
	for (let j = 0; j < keyboard.length + 9; j++){
		document.write (i + ':' + j + ': ' + keyboard[i][j] + '<br>');
	};
};

console.log(keyboard[1][5] + keyboard[0][2] + keyboard[1][8] + keyboard[1][8] + keyboard[0][8]);
console.log(keyboard[1][6] + keyboard[1][0] + keyboard[2][3] + keyboard[1][0] + keyboard[1][1] + keyboard[2][2] + keyboard[0][3] + keyboard[0][7] + keyboard[0][9] + keyboard[0][4]);
console.log(keyboard[0][4] + keyboard[0][3] + keyboard[1][0] + keyboard[0][7] + keyboard[2][5] + keyboard[0][2] + keyboard[0][3]);