$(document).ready(function(){
    $('.big').unslider({
        autoplay:true,
        nav:false,
        arrows:false,
        delay:6000
        
        
    });
    
    
    
    
//    få länk = för at kopp+la det till firebase variablenm 
      function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
// skapa varibel som sättas i firebase ref läken
 var namn = getQueryVariable("artikel");
    
    console.log(namn);

    
      new Firebase('https://devicenews.firebaseio.com/artiklar/'+namn).once('value', function(snap) {
   console.log('firebase artikeln', snap.val());
});
    
    new Firebase('https://devicenews.firebaseio.com/artiklar/'+namn+'/h1').once('value', function(snap) {
        var rubriken = snap.val();
        
        $("#Dna").text(rubriken);
//   byta img src med query , hämta den från firebase     

        
    });
   
   
   
   
   new Firebase('https://devicenews.firebaseio.com/artiklar/'+namn+'/img').once('value', function(snap) {
       
       
       var imgpath= snap.val();
       $('.bildbild').attr({
  src: snap.val()

});

//sätta alt så attt google har min hemsida som träff
$(".bildbild").prop("alt", namn);


       console.log(snap.val());
       
       $('.spinner').hide();
   });
   
   
    

});
    
    
    
    
    
    
    
    
    
