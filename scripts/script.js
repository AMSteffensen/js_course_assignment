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
function createCards(result, filterSearch){
    // test if function takes users search string as an argument
    if(filterSearch) {
        console.log(filterSearch);

        // filter through all the results by the value that was in the textbox.
        var searchResult = [];
        // searchResult = card.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
        
        // Add results to a new array and the new array should be 
        
        // display user search string
    
        // if the app does not find any results show message
 

    // if page loads without search string create all cards
    } else {
        // get cards div element
        var output = document.getElementById('cards');
        // create arry of cards with json result
        var cards = result.cards;

            for (i = 0; i < cards.length; i++) {
                // Create Column Elements
                var cardColumn = document.createElement('div');
                cardColumn.className = "col-sm-4";

                var cardContainer = document.createElement('div');
                cardContainer.className="card-container";

                // Append HTML Elements
                output.appendChild(cardColumn);
                cardColumn.appendChild(cardContainer)

                // create Heading Element
                var cardName = document.createElement('h4');
                cardName.innerHTML = cards[i].name;

                cardContainer.appendChild(cardName);

                // create Image elements
                var imageUrl = document.createElement('img');
                imageUrl.src = cards[i].imageUrl;
                imageUrl.style.width = '100%';
                
                cardContainer.appendChild(imageUrl);

                // create view more button
                var viewMoreBtn = document.createElement("a");
                // pass query string in url
                var imageLink = "card-specific.html?id=" + cards[i].id;
                viewMoreBtn.innerHTML = "View More";
                viewMoreBtn.className = "btn btn-success";
                cardContainer.appendChild(viewMoreBtn);
            
                cardName.innerHTML = cards[i].name;
                imageUrl.src = cards[i].imageUrl;
            
                viewMoreBtn.setAttribute("href", imageLink); 
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
(function() {
    loadCards();
    addEventListener();
  })();