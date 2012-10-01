

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
    $("body").append($('<p class="fotosBy">Fotografías por <b>Cristián Domínguez</b> </p>').css("top",($(window).height()+ window.scrollY)- 64));


   })
  $("#overlay").click(function(){
    $(this).hide();
    $("#imgFull").hide();
    $(".fotosBy").remove();
  })

 $("#imgFull").click(function(){
    $("#overlay").hide();
    $("#imgFull").hide();
    $(".fotosBy").remove();
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
  $(".ui-dialog-titlebar").append($('<a href="#" class="ui-dialog-titlebar-close ui-corner-all imprimir" role="button"><span class="ui-icon ui-icon-print">close</span></a>').click(function(){
          window.print();
          return false;
      }))
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
  "Bases%20Especiales.pdf",
  "001.%20ANEXO%20I.%20Levantamiento%20topogarfico.rar",
  "002.%20ANEXO%20II.%20Levantamiento%20critico%20del%20edificio.rar",
  "003.Anexo%20III.informe%20estado%20estructural.pdf",
  "004.%20ANEXO%20IV.%20Criterios%20de%20intervencion.pdf",
  "005.%20ANEXO%20V.informe%20conservacion.pdf",
  "006.%20ANEXO%20VI.informe%20arqueologico.pdf",
  "007.ANEXO%20VII.%20antecedentes%20historicos.pdf",
  "008.ANEXO%20VIII.esquema%20funcional.pdf",
  "009.ANEXO%20IX.%20organigrama.pdf",
  "010.ANEXO%20X.%20CIP.pdf",
  "011.%20ANEXO%20XI.Ord.181%20DOM.pdf",
  "012.ANEXO%20XII.%20Decreto%20MH.pdf",
  "013.ANEXO%20XIII..resolucion%20exenta%20BBNN.pdf",
  "014.%20Anexo%20XIV.%20Vineta%20tipo.rar",
  "Anexo%20N%20XV%20TDR.pdf",
  "DTO%20513.pdf",
  "Bases%20Generales%20Res%20N144.pdf" 
]