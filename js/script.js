

//Descrizione:
// Un alert() espone 5 numeri generati casualmente.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, 
//tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e 
//quali dei numeri da indovinare sono stati individuati.



document.addEventListener('DOMContentLoaded', function (){

    // THE FIRST STEP:
    //Creo un alert che contiene 5 numeri che deve apparire sulla pagina per 30 secondi; 
     var min=1;
     var max=100;
     var arrayAlert =[];

     function getRandomNum (min, max){
         return Math.floor(Math.random()*(max-min+1)+max);
     }
     

     while (  arrayAlert.length < 5) {
          var randomNum = getRandomNum(min, max);
        if (!arrayAlert.includes(randomNum)){
            arrayAlert.push(randomNum)
        }
     }

     alert ('Ricordati questi numeri' + ' ' + arrayAlert+'!')



    setTimeout (function(){

     //THE THIRD STEP:
     //In seguito, creo for oppure while (var i =0; i<=5; i++)
     var arrayUser=[]; 
        while ( arrayUser.length < 5){
         var askUser= parseInt (prompt ('Inserisci i numeri che hai visto precedentemente'));

        if(!arrayUser.includes(askUser)){
           arrayAlert.push(askUser)
        }
      }

      
      },  5000);



      
   
    //    //THE FOURTH STEP: PROBLEMA 1.
    //    //Come individuare quanti e quali dei numeri sono stati individuati???
      
    // }
    
    


});