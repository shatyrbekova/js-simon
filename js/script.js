

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
    //alert('34, 44, 5, 103, 34');
    //var alert = document.getElementById('text-to-disappear');
    
    //var al = window.open ('34, 44, 5, 103, 34');
    setTimeout (function(){
       alert ('34, 44, 5, 103, 39');
      },  5000);


    //THE SECOND STEP:
    //In seguito, creo for oppure while (var i =0; i<=5; i++)
    //con parseInt (prompt ('Inserisci i numeri che hai visto precedentemente'));
      
    for ( var i=0; i < 5; i++){
        var askUser = parseInt(prompt('Inserisci un numero che hai visto precedentemente'));
       //THE THIRD STEP: PROBLEMA 1.
       //Come individuare quanti e quali dei numeri sono stati individuati???
      // if (askUser === )
    }
    
    


});