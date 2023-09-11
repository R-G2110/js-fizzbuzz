/*PASSAGGI:
1. stampare i numeri da 1 a 100.
2. scegliere i multipli sia di 3 che di 5 e stampare 'FizzBuzz'
3. scegliere i multipli di 3 e stampare 'Fizz' 
4. scegliere i multipli di 5 e stampare 'Buzz'
*/ 
const fizz = 3;
const buzz = 5;


// 1.stampare i numeri da 1 a 100.
const boxesContainer = document.querySelector('.boxes');
for(let i = 1; i <= 100; i++){
  const box = document.createElement('div');
  box.classList.add('box');
  
 //2. scegliere i multipli sia di 3 che di 5 e stampare 'FizzBuzz'
	if(!(i % fizz) && !(i % buzz)){
    box.classList.add('fizzbuzz');
		box.append('FizzBuzz');
		//3.scegliere i multipli di 3 e stampare 'Fizz'
  } else  if(!(i  % fizz)){
		box.classList.add('fizz');
		box.append('Fizz');
		//4. scegliere i multipli di 5 e stampare 'Buzz'
  } else if(!(i % buzz)){
    box.classList.add('buzz');
		box.append('Buzz');
  } else {
		box.append(i);
	}
  
  boxesContainer.append(box);
}
