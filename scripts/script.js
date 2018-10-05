// refer to question 1 before development starts for scope document
// connect to this api https://api.magicthegathering.io/v1/cards
var API_URL = 'https://api.magicthegathering.io/v1/cards';

// get cards from api
function loadCards(filterSearch) {
    fetch(API_URL)
        // Convert the results to JSON format
        .then(result => result.json())
        .then((result) => {
            createCards(result, filterSearch);
        })
        .catch(err => console.log(err))
}

// Create a function, that takes the JSON Object as an argument.
function createCards(result, filterSearch) {
    // get cards div element for all cards
    var htmlOutput = document.getElementById('cards');
    // create search result array
    var searchResult = [];
    // store arry json result
    var allCards = result.cards;

    // if search string is passed, create cards from search result array
    if (filterSearch) {
        // filter through all the results, place them in a new array.  
        searchResult = allCards.filter(card => card.name.toLowerCase().indexOf(filterSearch.toLowerCase()) !== -1);

        // test if search string returns nothing
        if (searchResult.length === 0) {
            // if nothing is found, display error message
            var displayMsg = document.createElement('div');
            displayMsg.textContent = "No cards found.";
            htmlOutput.appendChild(displayMsg);
        }

        // create all card elements from search string
        for (i = 0; i < searchResult.length; i++) {

            // create html elements for card
            var cardColumn = document.createElement('div');
            var cardContainer = document.createElement('div');
            var cardName = document.createElement("h4");
            var cardImage = document.createElement("img");
            var cardBtn = document.createElement("a");
            var imageLink = "card-specific.html?id=" + searchResult[i].id;

            // define html elements attributes
            cardColumn.className = "col-sm-4";
            cardContainer.className = "card-container";
            cardImage.style.width = "100%";
            cardImage.src = searchResult[i].imageUrl;
            cardName.textContent = searchResult[i].name;
            cardBtn.textContent = "View More";
            cardBtn.className = "btn btn-success";
            cardBtn.setAttribute("href", imageLink);

            // draw html elements to document
            htmlOutput.appendChild(cardColumn);
            cardColumn.appendChild(cardContainer);
            cardContainer.appendChild(cardName);
            cardContainer.appendChild(cardImage);
            cardContainer.appendChild(cardBtn);
        }

    } else {
    // if page loads without search string create all cards
        for (i = 0; i < allCards.length; i++) {
            // create html elements
            var cardColumn = document.createElement('div');
            var cardContainer = document.createElement('div');
            var cardName = document.createElement('h4');
            var cardImage = document.createElement('img');
            var cardBtn = document.createElement("a");
            var imageLink = "card-specific.html?id=" + allCards[i].id;

            // define html attributes
            cardColumn.className = "col-sm-4";
            cardContainer.className = "card-container";
            cardName.innerHTML = allCards[i].name;
            cardImage.src = allCards[i].imageUrl;
            cardImage.style.width = '100%';
            cardBtn.setAttribute("href", imageLink);
            cardBtn.innerHTML = "View More";
            cardBtn.className = "btn btn-success";

            // draw html elements to document
            htmlOutput.appendChild(cardColumn);
            cardColumn.appendChild(cardContainer)
            cardContainer.appendChild(cardName);
            cardContainer.appendChild(cardImage);
            cardContainer.appendChild(cardBtn);
        }
    }
}

// when search button clicked, call card search function
function addEventListener() {
    document.getElementById('searchButton').addEventListener('click', doCardSearch);
}

// when search button clicked, load new cards from users search string
function doCardSearch(event) {
    event.preventDefault();
    // clear out cards
    cards.innerHTML = null;
    // take users input and store as string
    var searchString = document.getElementById('search').value;
    // call load cards passing user search string
    loadCards(searchString);
}

// Make self invoking function for loading scripts
(function () {
    loadCards();
    addEventListener();
})();