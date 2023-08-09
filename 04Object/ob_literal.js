var card = {suit:"하트", rank:"A"};
console.log(card.suit);
console.log(card['rank']);
console.log("suit" in card);

card.value = 10;
console.log(card);

delete card.value;
console.log(card);