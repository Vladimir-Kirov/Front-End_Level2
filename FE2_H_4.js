window.onload = function() {
     var corect = true;
    function myFunction() {

        var nav = document.getElementById("hidden");
        var ul = document.getElementById("hide");
        var button = document.getElementById("btn");
        

       if(corect == true) 
       {
          ul.style.display= 'none';
          nav.style.width = '50px';    
          nav.style.display = 'inline-block';  
          button.setAttribute('value',"\u2192");
       } 
       else 
       {
          ul.style.display = 'inline-block';
          nav.style.width = '100%';
          button.setAttribute('value','\u2190');
       }
     corect = !corect;

    }
   document.getElementById("btn").onclick = function() {

       myFunction();
   }; 
}   
//https://brajeshwar.github.io/entities/  /// entities link