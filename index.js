//var fs = require('fs');
//var files_img = fs.readdirSync('fuck_img');
//var files_gif = fs.readdirSync('fuck_gif');

var files_img = ['1 (1)', '1 (2)', '1 (3)', '1 (4)', '1 (5)', '1 (6)', '1 (7)', '1 (8)', '1 (9)']
var files_gif = ['fuckyou']

function display_gif() {
  var gifNum = Math.round(Math.random()*(files_gif.length-1));
  var ogif = document.createElement("iframe");
  ogif.setAttribute('src', 'fuck_gif/' + files_gif[gifNum] + '.gif');
  ogif.setAttribute('height', '290px');
  ogif.setAttribute('width', '400px');
  document.body.appendChild(ogif);
}

function display_image(){
  var br = document.createElement('br');
  var imgNum = Math.round(Math.random()*(files_img.length-1));
  var oimg = document.createElement('img');
  oimg.setAttribute('src', 'fuck_img/' + files_img[imgNum] + '.jpg');
  oimg.setAttribute('height', '300px');
  oimg.setAttribute('width', '250px');
  document.body.appendChild(br);
  document.body.appendChild(oimg)
}

function get_name(name) {
  document.write('<h3>' + name + " ㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗ" + '</h3>');
}
