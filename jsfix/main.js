
const resultPrice = document.getElementById('priceticket');

// Chiedo all'utente i km che vuole vuole percorrere
const km = parseInt(prompt('Quanti km vuoi percorrere?'));
console.log('km inseriti dall\'utente', km);

// Chiedo all'utente qual è la sua età
const age = parseInt(prompt('Quanti anni hai?'));
console.log('km inseriti dall\'utente', age);

// Calcolo il prezzo del viaggio in base alla tariffa
const basePrice = km * 0.21;


let finalPrice;


// Applico lo sconto del 20% sul totale
if (age < 18) {
    let price = basePrice;
    const discountPerc = 20;
    const discount = price * discountPerc / 100;
    finalPrice = price - discount;

} else {

    // Applico lo sconto del 40% sul totale
    if (age > 65) {
        let price = basePrice;
        const discountPerc = 40;
        const discount = price * discountPerc / 100;
        finalPrice = price - discount;

    } else {
        // Non applico nessuno sconto
        finalPrice = basePrice;

    }

}

resultPrice.innerText = ('Il Prezzo del biglietto è di ' + finalPrice.toFixed(2) + '€');






