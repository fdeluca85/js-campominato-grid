// alert('ciao')

// Consegna L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


const container = document.querySelector(".container");

let items= '';

for(let i = 1; i <= 81; i++){
    items +=`
    <div class="square hard">${i}</div>`    
}
for(let i = 1; i <= 100; i++){
    items +=`
    <div class="square easy">${i}</div>`    
}
for(let i = 1; i <= 49; i++){
    items +=`
    <div class="square crazy">${i}</div>`    
}
console.log(items);
container.innerHTML = items


let divSquare = document.querySelector('.square')
divSquare.addEventListener("click", function(){
    this.classList.add('blue'); 
});
console.log(divSquare);
