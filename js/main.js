// cached elements
var h1 = document.querySelector('h1')
var img = document.querySelector('img')
var contact = document.getElementById('contact')
var about = document.getElementById('about')
var music = document.getElementById('music')

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
musLink.addEventListener('click', function(){
    // loc = './index.html';
    loadMusic()
})

// functions
function loadHome(){
    img.setAttribute('style', 'display: block');
    about.setAttribute('style', 'display: none');
    contact.setAttribute('style', 'display: none');
    music.setAttribute('style', 'display: none');
}
function loadAbout(){
    img.setAttribute('style', 'display: none');
    about.setAttribute('style', 'display: block');
    contact.setAttribute('style', 'display: none');
    music.setAttribute('style', 'display: none');
}
function loadContact(){
    img.setAttribute('style', 'display: none');
    about.setAttribute('style', 'display: none');
    contact.setAttribute('style', 'display: block');
    music.setAttribute('style', 'display: none');
}
function loadMusic(){
    img.setAttribute('style', 'display: none');
    about.setAttribute('style', 'display: none');
    contact.setAttribute('style', 'display: none');
    music.setAttribute('style', 'display: block');
}

// on page load
loadHome()