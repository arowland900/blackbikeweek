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
    loc = './index.html';
    loadHome()
})

// functions
function loadHome(){
    h2.setAttribute('style', 'display: none');
    p.setAttribute('style', 'display: none');
    contact.setAttribute('style', 'display: none');
}