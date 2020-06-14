let clickCounter = 0, turnCounter = 0
let clickedCard1 = {}, clickedCard2 = {}
let cards = document.querySelectorAll('.card')
let timer, displayedTime

fetch('./deck.json')
    .then(data => data.json())
    .then((fetchedDeck)=>{
        console.log('deck successfully fetched')
        let deck = fetchedDeck.animals
        deck = randomiseDeck(deck)
        assignCards(deck)
        addClickEvents(deck)
    }).catch(()=>{
        alert('Something went wrong. Please contact the game developer.')
    })


