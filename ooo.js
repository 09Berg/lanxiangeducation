var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("myslides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
text=prompt("hello, are you a parent or a student?")
if(text=="student"){
     location.replace("https://09berg.github.io/lanxiangeducation/Course.html")
}else if(text=="parent"){
     location.replace("https://09berg.github.io/lanxiangeducation/index.html")
}
