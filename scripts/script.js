// refer to question 1 before development starts for scope document
// connect to this api https://api.magicthegathering.io/v1/cards
var API_URL = 'https://api.magicthegathering.io/v1/cards';

fetch(API_URL)
// Convert the results to JSON format
    .then(result => result.json())
  .then((result) => {
    // Call the function from the method that returns the JSON data and pass in the JSON data.
    createCard(result);
    
  })
.catch(err => console.log(err))

// Create a function, that takes the JSON Object as an argument.
function createCard(result){
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

function search() {
    // click event
    var searchBtn = document.getElementById("searchButton").addEventListener("click");

    // delete all the HTML inside the div that has the ID “cards” attached to it.
    var cards = document.getElementById("cards");
    cards.style.display = 'none';
  
    // get value from search box

    // make call to the api, get back results


    // filter through all the results by the value that was in the textbox.
}

/*


If it finds any results it should be added to a new array and the new array should be display as HTML like you did with all the cards but it should only return what the user searched for. If the application doesn’t find any results a suitable message should be displayed.
Please write all js in the script.js file.
*/