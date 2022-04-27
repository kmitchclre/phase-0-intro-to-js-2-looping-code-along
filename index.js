// Code your solutions in this

// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }



// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }

//     return gifts;
// }

// wrapGifts(gifts);



// const names = ['Guadalupe', 'Ollie', 'Aki'];

// function writeCards(names) {
//     for (let c = 0; c < namesArray.length; c++) {
//         console.log(`Thank you, ${names[c]}, for the wonderful cards!`);
//     }
//     return names;
// }
// writeCards(names);


// function writeCards(namesArray, event) {
//     let thankYouCards = []
//     for (let i = 0; i < namesArray.length; i++) {
//         thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
//     }
//     return thankYouCards
// }





// function countDown(startingNumber) {
//     while (startingNumber > 0) {
//         console.log(startingNumber);
//         startingNumber -= 1;
//     }
//     console.log(startingNumber);
// }

function writeCards(nameArray, event) {
    let thankYouCards = []
    for (let i = 0; i < nameArray.length; i++) {
        thankYouCards.push(`Thank you, ${nameArray[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards;
}
writeCards()


function countDown(startingNumber) {
    while (startingNumber > 0) {
        console.log(startingNumber);
        startingNumber -= 1;
    }
    console.log(startingNumber)
}
countDown()