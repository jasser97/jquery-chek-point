


$(document).ready(function(){
    
    
       
    $("#bt1").click(function(e){
     
        if(e.target.innerHTML=="1HyperText Markup Language."){
             $("#bt1").css("background-color","green")}
        else{
            $("#bt1").css("background-color","red");
            $("#bt2").css("background-color","green");
            $("#bt3").css("background-color","red");
        }
    });
   
   
       
    $("#bt2").click(function(e){
      
        if(e.target.innerHTML=="HyperText Markup Language."){
            $("#bt2").css("background-color","green")}
        else{
            $("#bt2").css("background-color","red");
         }
    });


    $("#bt3").click(function(e){
        if(e.target.innerHTML=="HyperText Markup Language."){
             $("#bt3").css("background-color","green")}
        else{
             $("#bt3").css("background-color","red");
             $("#bt1").css("background-color","red");
             $("#bt2").css("background-color","green");
        }   
    }); 


});
$("#switch").click(function(a){
    var gText=document.getElementById("p1").innerHTML;
    console.log(gText);
    if(gText=="html est ?")
    {
    $("#p1").css("text-transform","uppercase");
    $("#bt1").css("text-transform","uppercase");
    $("#bt2").css("text-transform","uppercase");
    $("#bt3").css("text-transform","uppercase");
    p1.innerHTML="HTML EST ?";
    console.log(p1.innerHTML);
    } 
    
    else if(p1.innerHTML=="HTML EST ?"){
     
        $("#p1").css("text-transform","lowercase");
        $("#bt1").css("text-transform","lowercase");
        $("#bt2").css("text-transform","lowercase");
        $("#bt3").css("text-transform","lowercase");
        p1.innerHTML="html est ?";
    }
});


 $("#box3").css("display","none");

    $("#netx1").click(function(){
        $("#box1").hide(2000);
        $("#box2").show("slow");
        $("#box3").show(2000);
    });

    $("#slector").css("visibility","hidden");
var a=0;
    $("#size").click(function(){
        switch(a){
            case 0 : $("#slector").css("visibility","visible");
            a++;
            break;
            case 1 : $("#slector").css("visibility","hidden");
            a--;
            break;
        }
       
    
    
    });
var a=0;
    $(document).ready(function(){
document.getElementById('selct').addEventListener("change",function(c){

switch(c.target.value){
    case "14px": 
        $("#bt4").css("font-size","14px");
        $("#bt5").css("font-size","14px");
        $("#bt6").css("font-size","14px");
        break;
    case "15px": 
        $("#bt4").css("font-size","15px");
        $("#bt5").css("font-size","15px");
        $("#bt6").css("font-size","15px");
     break; 
     case "Verdana": 
        $("#bt4").css("fontFamily","Verdana");
        $("#bt5").css("fontFamily","Verdana");
        $("#bt6").css("fontFamily","Verdana");
     break; 
     default:
        $("#bt4").css({"font-size":"13px","fontFamily":"Arial"});
        $("#bt5").css({"font-size":"13px","fontFamily":"Arial"});
        $("#bt6").css({"font-size":"13px","fontFamily":"Arial"});
     
}

        })

});



    $(document).ready(function(){
    
    
       
        $("#bt4").click(function(e){
            if(e.target.innerHTML=="Est un langage informatique utilisé sur l'internet pour mettre en forme le texte contenu sur les pages HTML."){
                 $("#bt4").css("background-color","green")}
            else{
                $("#bt4").css("background-color","red");
                $("#bt6").css("background-color","green");
                $("#bt5").css("background-color","red");
            }
        });
       
       
           
        $("#bt5").click(function(e){
            if(e.target.innerHTML=="Est un langage informatique utilisé sur l'internet pour mettre en forme le texte contenu sur les pages HTML.."){
                $("#bt5").css("background-color","green");}
            else{
                $("#bt4").css("background-color","red");
                $("#bt5").css("background-color","red");
                $("#bt6").css("background-color","green");
                
             }
        });
    
    
        $("#bt6").click(function(e){
            if(e.target.innerHTML=="Est un langage informatique utilisé sur l'internet pour mettre en forme le texte contenu sur les pages HTML."){
                 $("#bt6").css("background-color","green");}
            else{
                 $("#bt6").css("background-color","red")
            }   
        }); 
    
    
    });
  $(document).ready(function(){
    
    
       
        $("#bt7").click(function(e){
            if(e.target.innerHTML=="Est un langage de programmation de scripts principalement employé dans les ... Masquage"){
                 $("#bt7").css("background-color","green")}
            else{
                $("#bt7").css("background-color","red")
            }
        });
       
       
           
        $("#bt8").click(function(e){
            if(e.target.innerHTML=="Est un langage de programmation de scripts principalement employé dans les ... Masquage"){
                $("#bt8").css("background-color","green")}
            else{
                $("#bt8").css("background-color","red");
                $("#bt7").css("background-color","green");
                $("#bt9").css("background-color","red");
             }
        });
    
    
        $("#bt9").click(function(e){
            if(e.target.innerHTML=="Est un langage de programmation de scripts principalement employé dans les ... Masquage"){
                 $("#bt9").css("background-color","green")}
            else{
                 $("#bt9").css("background-color","red");
                 $("#bt7").css("background-color","green");
                 $("#bt8").css("background-color","red");
            }   
        }); 
    
    
    });
    




    
  


