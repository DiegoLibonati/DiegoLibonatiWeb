document.addEventListener('DOMContentLoaded',function(event){

  let dataText = ["sociable", "cooperative", "curious", "educated", "efficient", "empathetic", "friendly", "rational", "reflective", "respectful", "self-taught"];
  
  function typeWriter(text, i, fnCallback) {

    if (i < (text.length)) {

     document.querySelector(".span-title-home").innerHTML = text.substring(0, i+1) +'<span class="writeStyle" aria-hidden="true"></span>';


      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }

    else if (typeof fnCallback == 'function') {

      setTimeout(fnCallback, 700);
    }
  }

   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }

    if (i < dataText.length) {

     typeWriter(dataText[i], 0, function(){

       StartTextAnimation(i + 1);
     });
    }
  }

  StartTextAnimation(0);
});