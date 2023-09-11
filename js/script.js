/*PASSAGGI:
1. stampare i numeri da 1 a 100.
2. scegliere i multipli sia di 3 che di 5 e stampare 'FizzBuzz'
3. scegliere i multipli di 3 e stampare 'Fizz' 
4. scegliere i multipli di 5 e stampare 'Buzz'
*/ 
const fizz = 'Fizz';
const buzz = 'Buzz';


// 1.stampare i numeri da 1 a 100.
const boxesContainer = document.querySelector('.boxes');
for(let i = 1; i <= 100; i++){
  const box = document.createElement('div');
  box.classList.add('box');
  
 //2. scegliere i multipli sia di 3 che di 5 e stampare 'FizzBuzz'
	if(i % 3 === 0 && i % 5 === 0){
		console.log(fizz + buzz);
		box.classList.add('fizzbuzz');
		box.append(fizz + buzz);

		//3.scegliere i multipli di 3 e stampare 'Fizz'
  } else  if(i % 3 === 0){
		console.log(fizz);
		box.classList.add('fizz');
		box.append(fizz);

		//4. scegliere i multipli di 5 e stampare 'Buzz'
  } else if(i % 5 === 0){
		console.log(buzz);
		box.classList.add('buzz');
		box.append(buzz);

  } else {
		box.append(i);
		console.log(i);
	}
  
  boxesContainer.append(box);
}
