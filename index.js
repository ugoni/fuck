function get_name(name){
  document.write(name+" ㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗㅗ");
}

function display_image() {
  var br =document.createElement('br');
  var oImg = document.createElement("img");
  oImg.setAttribute('src', 'fuck.jpg');
  oImg.setAttribute('height', '400px');
  oImg.setAttribute('width', '250px');
  document.body.appendChild(br);
  document.body.appendChild(oImg);
}
