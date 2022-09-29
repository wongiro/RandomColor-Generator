//random color selector
const randomColor = function(){
  let rvalue = function() {
  	return Math.round(Math.random()*255); 
  }

 	return 'rgb(' + rvalue() + "," + rvalue() + "," + rvalue() + ")";
}

//making button innteractive
const button = document.querySelector('div');

button.onclick = function(){
  this.style.backgroundColor = randomColor();
}