// cached elements
var h1 = document.querySelector('h1')
var h2 = document.querySelector('h2')
var img = document.querySelector('img')
var p = document.querySelector('p')
var contact = document.getElementById('contact')
var about = document.getElementById('about')
var loc = document.location.href

var abtLink = document.getElementById('abtLink')
var artLink = document.getElementById('artLink')
var musLink = document.getElementById('musLink')
var conLink = document.getElementById('conLink')

// event listeners
h1.addEventListener('click', function(){
    // loc = './index.html';
    loadHome()
})
abtLink.addEventListener('click', function(){
    // loc = './index.html';
    loadAbout()
})
conLink.addEventListener('click', function(){
    // loc = './index.html';
    loadContact()
})

// functions
function loadHome(){
    img.setAttribute('style', 'display: block');
    about.setAttribute('style', 'display: none');
    contact.setAttribute('style', 'display: none');
}
function loadAbout(){
    img.setAttribute('style', 'display: none');
    about.setAttribute('style', 'display: block');
    contact.setAttribute('style', 'display: none');
}
function loadContact(){
    img.setAttribute('style', 'display: none');
    about.setAttribute('style', 'display: none');
    contact.setAttribute('style', 'display: block');
}

// on page load
loadHome()