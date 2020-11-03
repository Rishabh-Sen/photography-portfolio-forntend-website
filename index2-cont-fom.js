function validate() {
var x = document.getElementById('name').value;

var y = document.getElementById('email').value;

var z = document.getElementById('phone').value;

var w = document.getElementById('textarea').value;

      
         if( x == "") {
            alert( "Please provide your name!  required *" );
            return false;
         }

          if( x.length <=2|| x.length>20) {
            alert( "name length should be greater than 2 and less than 20" );
            return false;
         }

          if( !isNaN(x)) {
            alert( "name can not be number only characters are allowed" );
            return false;
         }
         if( y === "" ) {
            alert( "Please provide your Email!  required *" );
            return false;
         }

        if( (y.indexOf('@')<=0) & (y.charAt(y.length-4)!='.') ) {
            alert( "Invalid email " );
            return false;
         }

         if(( y.charAt(y.length-4)!='.' )&&( y.charAt(y.length-3)!='.' )) {
            alert( "Invalid email " );
            return false;
         }

         if( z== "" ) {
            
            alert( "Please provide a phone number! required *." );
            return false;
         }

         if(isNaN(z)) {
            
            alert( "phone no should only contain number " );
            return false;
         }
         if( z.length<10 ) {
            
            alert( "phone no length can not be less than 10" );
            return false;
         }
         if( w == "" ) {
            alert( "Please give some message!" );
            return false;
         }
         else{
         	alert("sorry we are unable to send message site under construction");
         }
       
      }



// home page slide show


// var images=[" \front end development ca 3\imagesi1\slid-1.jpg ",
//              " \front end development ca 3\imagesi1\slid-2.jpg ", 
//               "\front end development ca 3\imagesi1\slid-3.jpg", 
//                "\front end development ca 3\imagesi1\slid-4.jpg" ,
//                 "\front end development ca 3\imagesi1\slid-5.jpg" ]




// var i=0;


// function slides(){
// document.getElementById("inimg1").src=images[i];
// if (i<(images.length-1))
// {
// 	i++
// }
// else
// {
// 	i=0;
// }
// }


// setInterval(slides,3000)

        var slide_index = 1;  
        displaySlides(slide_index);  
        function nextSlide(n) {  
            displaySlides(slide_index += n);  
        }  
        function currentSlide(n) {  
            displaySlides(slide_index = n);  
        }  
        function displaySlides(n) {  
            var i;  
            var slides = document.getElementsByClassName("showSlide");  
            if (n > slides.length) { slide_index = 1 }  
            if (n < 1) { slide_index = slides.length }  
            for (i = 0; i < slides.length; i++) {  
                slides[i].style.display = "none";  
            }  
            slides[slide_index - 1].style.display = "block";  
        }  















