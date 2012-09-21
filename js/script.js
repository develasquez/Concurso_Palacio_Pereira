

$(function(){
  
 

  $(".divImagenPalacio").on("click",function(){ 
    $("#imgFull").width("auto");
    $("#imgFull").height("auto");
    $("#overlay").css("height",$(document).height())
    $("#overlay").show();
    $("#imgFull").show();
    $("#imgFull").attr("src",$(this).children().attr("src"))
    if ($(this).children().hasClass("imagenPalacioLand")){
        $("#imgFull").width("90%");

    }else{
      $("#imgFull").height("90%");
    }
        
    $("#imgFull").css({'top':($(window).height() - $("#imgFull").height())/2 + window.scrollY,'left':($(window).width() - $("#imgFull").width())/2 });



   })
  $("#overlay").click(function(){
    $(this).hide();
    $("#imgFull").hide();
  })

 $("#imgFull").click(function(){
    $("#overlay").hide();
    $("#imgFull").hide();
  })
  $("#background").height($(window).height())
 /* $("body").prepend($("<div/>").attr("id","fondo"))
  $("#fondo").append($("<img/>").attr({"src":"img/background.png","id":"imgFondo"}))
  */
  
  $(".accordion").accordion({
    autoHeight: false,
    navigation: true,
    collapsible: true,
    active: false,
    alwaysOpen: false
  }
                           );
  
  $(".accordionActive").accordion({
    autoHeight: false,
    navigation: true,
    collapsible: true
  }
                                 );
  $(".logo").on("mouseover",function(){

    $(this).attr("src","img/" + $(this).attr("id") + ".png");

  })
  
  $(".logo").on("mouseout",function(){

    $(this).attr("src","img/" + $(this).attr("id")+ "_bn.png");

  })
  $(".ventana").dialog({
    autoOpen:false,
    closeOnEscape: false,
    height:myMaxHeight(),
    hide: "slide",
    width:myMaxWidth()
  }
                      )
    $("#btnVerRegistro").on("click",function(){
      
      $("#ventanaRegistro").dialog("open");
    }
                           )       
      $("#btnVerConsultas").on("click",function(){
        
        $("#ventanaConsultas").dialog("open");
    }
                            )
      $(".iframe").width(myMaxWidth()-40);
  
  $(".iframe").height(myMaxHeight()-55);
  
  $(".accordion").accordion("activate",false)
    $.each($(".doc"),function(i,e){
      $(e).attr("href","docs/" + docs[$(e).attr("id")]);
    }
          )
      
}
 );

function myMaxHeight(){
  //
  return ($(window).height()<961 && $(window).width()<641 ?$(window).height():600);
}
function myMaxWidth(){
  //
  return ($(window).width()<641?$(window).width():700);
}



var docs =  [
  "",
  "001. ANEXO I. Levantamiento topográfico.rar",
  "002. ANEXO II. Levantamiento crítico del edificio.rar",
  "003.Anexo III.informe estado estructural.pdf",
  "004. ANEXO IV. Criterios de intervencion.pdf",
  "005. ANEXO V.informe conservacion.pdf",
  "006. ANEXO VI.informe arqueologico.pdf",
  "007.ANEXO VII. antecedentes historicos.pdf",
  "008.ANEXO VIII.esquema funcional.pdf",
  "009.ANEXO IX. organigrama.pdf",
  "010.ANEXO X. CIP.pdf",
  "011. ANEXO XI.Ord.181 DOM.pdf",
  "012.ANEXO XII. Decreto MH.pdf",
  "013.ANEXO XIII..resolucion exenta BBNN.pdf",
  "014. Anexo XIV. Vineta tipo.rar",
  "015.ANEXO XV.terminos de referencia.pdf",
  "DTO 513.pdf",
  "Bases Generales Res Nº144.pdf"
  
]