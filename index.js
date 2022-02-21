function get_name(name){
  document.write(name+" ㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗ");
}

function display_image(src) {
  var br =document.createElement('br');
  var oImg = document.createElement("img");
  oImg.setAttribute('src', src);
  oImg.setAttribute('height', '300px');
  oImg.setAttribute('width', '200px');
  document.body.appendChild(br);
  document.body.appendChild(oImg);
}
function display_gif(src) {

  var oImg = document.createElement("iframe");
  oImg.setAttribute('src', src);
  oImg.setAttribute('height', '290px');
  oImg.setAttribute('width', '400px');

  document.body.appendChild(oImg);
}
