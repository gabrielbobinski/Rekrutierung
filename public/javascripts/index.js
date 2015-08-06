var lastContainer = 0;
var logInStatus = 0;
var viewHeight = $( window ).width();


function faqBeschriebung(faqId) {
    
    var heightFaq = $('#faqBe_' + faqId).height();
    
    if(heightFaq !== 0){
        
        $( '#faqBe_' + faqId ).css('padding', 0);
        $( '#faqBe_' + faqId ).css('height', 0);
        $( '#faqBe_' + faqId ).css('borderBottomWidth', 0);
        
    }else{
    
        $( '#faqBe_' + faqId ).css('padding', '6vh');
        $( '#faqBe_' + faqId ).css('paddingLeft', '8vw');
        $( '#faqBe_' + faqId).css('height', 'auto');
        $( '#faqBe_' + faqId ).css('borderBottomWidth', '1px');
    
    }
    
    
    
};



function diensteAnsicht(DienstId) {
    if (lastContainer !== 0) {
        
        $( '#dienstAnsicht_' + lastContainer ).css('height', 0);
        $( '#dienstAnsicht_' + lastContainer ).css('opacity', '0');
        
    }
    
    if(lastContainer === DienstId){
        
        $( '#dienstAnsicht_' + DienstId ).css('height', 0);
        $( '#dienstAnsicht_' + DienstId ).css('opacity', '0');
        
        lastContainer = 0;
        
    }else{
    
        $( '#dienstAnsicht_' + DienstId).css('height', '40vh');
        $( '#dienstAnsicht_' + DienstId).css('opacity', '1');
    
        lastContainer = DienstId;
        
    }
    
};






function fadeIn(){
    $('#div_1').animate({opacity:"1"}, 4000, 'linear',
                         function(){
                         //document.getElementById('sB_'+id).style.opacity="0";
                         });
    $('#slogan').animate({opacity:"1"}, 2000, 'linear',
                           function(){
                           //document.getElementById('sB_'+id).style.opacity="0";
                           });
}


function loadFooter(){

    $( '#footer' ).load( "/userMiddleContent/footer.html" );
    
}


function userMenuHoverOut( hoverIdOut ){
    
    $('#uMenu_' + hoverIdOut).animate({opacity:"0.5"}, 100, 'linear',
                            function(){
                            });
    
    
}

function userMenuHover( hoverId ){
    
    $('#uMenu_' + hoverId).animate({opacity:"1"}, 100, 'linear',
                                     function(){
                                     });
    
    
}



function userMenu(id2){

    var MenuNr = id2;
    
    
    if(MenuNr === 1){
        
        $( '#userMiddleContent' ).load( "/userMiddleContent/abo.html" );
        
        document.getElementById('uMenu_1').style.color= "rgba(102,204,255,1)";
        document.getElementById('uMenu_2').style.color= "rgba(0,0,0,0.9)";
        document.getElementById('uMenu_3').style.color= "rgba(0,0,0,0.9)";
        document.getElementById('uMenu_4').style.color= "rgba(0,0,0,0.9)";
        document.getElementById('uMenu_5').style.color= "rgba(0,0,0,0.9)";
        
    }else if(MenuNr === 2){
        
        $( '#userMiddleContent' ).load( "/userMiddleContent/verlauf.html" );
        document.getElementById('uMenu_1').style.color= "rgba(0,0,0,0.9)";
        document.getElementById('uMenu_2').style.color= "rgba(128,204,229,1)";
        document.getElementById('uMenu_3').style.color= "rgba(0,0,0,0.9)";
        document.getElementById('uMenu_4').style.color= "rgba(0,0,0,0.9)";
        document.getElementById('uMenu_5').style.color= "rgba(0,0,0,0.9)";
        
    }else if(MenuNr === 3){
        
        $( '#userMiddleContent' ).load( "/userMiddleContent/bezahlung.html" );
        
        document.getElementById('uMenu_1').style.color= "rgba(0,0,0,0.9)";
        document.getElementById('uMenu_2').style.color= "rgba(0,0,0,0.9)";
        document.getElementById('uMenu_3').style.color= "rgba(153,204,204,1)";
        document.getElementById('uMenu_4').style.color= "rgba(0,0,0,0.9)";
        document.getElementById('uMenu_5').style.color= "rgba(0,0,0,0.9)";
        
    }else if(MenuNr === 4){
        
        $( '#userMiddleContent' ).load( "/userMiddleContent/einstellungen.html" );
        
        document.getElementById('uMenu_1').style.color= "rgba(0,0,0,0.9)";
        document.getElementById('uMenu_2').style.color= "rgba(0,0,0,0.9)";
        document.getElementById('uMenu_3').style.color= "rgba(0,0,0,0.9)";
        document.getElementById('uMenu_4').style.color= "rgba(188,216,204,1)";
        document.getElementById('uMenu_5').style.color= "rgba(0,0,0,0.9)";
        
    }else if(MenuNr === 5){
        
        $( '#userMiddleContent' ).load( "/userMiddleContent/hilfe.html" );
        
        document.getElementById('uMenu_1').style.color= "rgba(0,0,0,0.9)";
        document.getElementById('uMenu_2').style.color= "rgba(0,0,0,0.9)";
        document.getElementById('uMenu_3').style.color= "rgba(0,0,0,0.9)";
        document.getElementById('uMenu_4').style.color= "rgba(0,0,0,0.9)";
        document.getElementById('uMenu_5').style.color= "#eccc9f";
        
    }

}

function loadTagesansicht(){

    $( '#userMiddleContent' ).load( "/userMiddleContent/tage.html" );
    
}

function loadTagesDetailAnsicht(){

    $( '#userMiddleContent' ).load( "/userMiddleContent/tagesansicht.html" );
    
}





$( document ).ready(function(){
                    setDimensions();
                    });

$( window ).resize(function(){
                   setDimensions();
                   });



function regstrieren(){
    $('#regIn').animate({top:"0px"}, 250, 'linear',
                              function(){
                              });

}

function closeReg(){
    $('#regIn').animate({top:"100vh"}, 250, 'linear',
                        function(){
                        });
}

function abonementBestellen(){
    $('#AboBestellung').animate({top:"0px"}, 250, 'linear',
                        function(){
                        });
    
}

function closeAbonementBestellen(){
    $('#AboBestellung').animate({top:"100vh"}, 250, 'linear',
                        function(){
                        });
}



function logIn(){
    $('#logIn').animate({top:"0px"}, 250, 'linear',
                        function(){
                        });
}

function closeLogIn(){
    $('#logIn').animate({top:"100vh"}, 250, 'linear',
                        function(){
                        });
}





function RegistrierenSwipeFunction1(){
    
    $('#RegistrierenSwipe').animate({left:"-100vw"}, 250, 'linear',
                        function(){
                        });
    
}

function RegistrierenSwipeFunction2(){
    
    $('#RegistrierenSwipe').animate({left:"-200vw"}, 250, 'linear',
                                    function(){
                                    });
    
}

function RegistrierenSwipeZuruck1(){
    
    $('#RegistrierenSwipe').animate({left:"0"}, 250, 'linear',
                                    function(){
                                    });
    
}






