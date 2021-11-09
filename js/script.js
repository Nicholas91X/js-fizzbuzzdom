const contenitore = document.querySelector(".list");


for (let i = 1; i <= 100; i++) {

    const elementFizzBuzz = `<div class="box box--FizzBuzz">FizzBuzz</div>`;

    const elementBuzz = `<div class="box box--Buzz">Buzz</div>`;

    const elementFizz = `<div class="box box--Fizz">Fizz</div>`;

    const element = `<div class="box box--normale">${i}</div>`;

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
        contenitore.innerHTML += elementFizzBuzz;
    } else if (i % 5 == 0) {
        console.log("Buzz")
        contenitore.innerHTML += elementBuzz;
    } else if (i % 3 == 0) {
        console.log("Fizz")
        contenitore.innerHTML += elementFizz;
    } else {
        console.log(i)
        contenitore.innerHTML += element;
    }
    
}