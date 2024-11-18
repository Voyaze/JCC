var counter = 1;
var element = document.getElementById("first");
setInterval(function(){
  console.log(counter);
  if(counter == 0) element.style.marginLeft =  '0%';
  else if(counter == 1) element.style.marginLeft =  '-20%';
  else if(counter == 2) element.style.marginLeft =  '-40%';
  counter++;
  if(counter == 3){
    counter = 0;
  }
},5000);
