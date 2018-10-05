// refer to question 2 before development starts for scope document
// get URL query string
function getQueryStringValue (key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
// variable for the id
var id = getQueryStringValue("id");

var API_URL = 'https://api.magicthegathering.io/v1/cards/';

// make api call, append card id to url
    fetch(API_URL + id)
      .then(result => result.json())
      .then(result => {
        if(result.card){
            displayCard(result.card);
        } else {
            var errorMsg = document.createElement('div');
            errorMsg.textContent = 'A card with this name could not be found. Please try again!';
            document.querySelector('.container').appendChild(errorMsg);
        }
      })
      .catch(err => console.log(err))

function displayCard(card) {
    console.log(card);
    // get parent element
    var cardDetails = document.getElementById('cardDetails');

    // create card HTML 
    var cardImage = document.getElementById('cardImage');
    var cardName = document.createElement('h2');
    var cardText = document.createElement('div');
    var cardRarity = document.createElement('div');
    var cardColor = document.createElement('div');

    // generate image
    var cardImageHolder = document.getElementById('cardImage');
    var img = document.createElement('img');
    img.src = card.imageUrl;
    cardImageHolder.appendChild(img);
    
    // set card atributes
    cardImage.src = cardDetails.imageUrl;
    cardImage.style.width = "100%";
    cardName.innerHTML = card.name;
    cardText.innerHTML = '<b>About: </b>' + card.text;
    cardRarity.innerHTML = '<b>Rarity: </b>' + card.rarity;
    cardColor.innerHTML = '<b>Color: </b>' + card.colors;

    // draw html elemts to document
    cardDetails.appendChild(cardName);
    cardDetails.appendChild(cardText);
    cardDetails.appendChild(cardRarity);
    cardDetails.appendChild(cardColor);
}   