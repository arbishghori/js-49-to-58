var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}

document.getElementById("close-modal").addEventListener("click", hideModal);



var modal = document.getElementById("myModal01");
var img = document.getElementById("myImg01");
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}
 document.getElementById("close-modal").addEventListener("click", hideModal);






var modal = document.getElementById("myModal02");

var img = document.getElementById("myImg02");
var modalImg = document.getElementById("img03");
var captionText = document.getElementById("caption02");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}
document.getElementById("close-modal").addEventListener("click", hideModal);