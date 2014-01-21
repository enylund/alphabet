$(document).ready(function(){

$("#fonts > #font1").attr('checked', true);
$("#fontWrap").addClass("font1");

$("#backgrounds > #background1").attr('checked', true);
$("#pageWrap").addClass("background1");



  function centerContent() {
      $('#print').css({
         'position' : 'absolute',
         'left' : '50%',
         'top' : '50%',
         'margin-left' : -$("#print").width()/2,
         'margin-top' : -$("#print").height()/2
        });
  }

$("#fonts > input").on("click", function() {
     if($( "#fonts > input:checked" ).val() == "font1"){
       $("#fontWrap").removeClass().addClass("font1");
     } else if($( "#fonts > input:checked" ).val() == "font2"){
       $("#fontWrap").removeClass().addClass("font2");
     } else if($( "#fonts > input:checked" ).val() == "font3"){
       $("#fontWrap").removeClass().addClass("font3");
     } else if($( "#fonts > input:checked" ).val() == "font4"){
       $("#fontWrap").removeClass().addClass("font4");
     } else if($( "#fonts > input:checked" ).val() == "font5"){
       $("#fontWrap").removeClass().addClass("font5");
     }
});

$("#backgrounds > input").on("click", function() {
  if($( "#backgrounds > input:checked" ).val() == "background1"){
       $("#pageWrap").removeClass().addClass("background1");
     } else if($( "#backgrounds > input:checked" ).val() == "background2"){
       $("#pageWrap").removeClass().addClass("background2");
     } else if($( "#backgrounds > input:checked" ).val() == "background3"){
       $("#pageWrap").removeClass().addClass("background3");
     } else if($( "#backgrounds > input:checked" ).val() == "background4"){
       $("#pageWrap").removeClass().addClass("background4");
     } else if($( "#backgrounds > input:checked" ).val() == "background5"){
       $("#pageWrap").removeClass().addClass("background5");
     }
});

$('#words').keyup(function() {

    var txt = $('#words').val();
    var text_array = txt.split("");

    var character_length = $(text_array).length;
    var characters_left = 26 - character_length;
    var new_value;

    $.each( text_array, function( key, value ) {
     new_value = "<span id='number" + (key + 1) + "'>" + value + "</span>";
     text_array[key] = new_value;
    });

    var output_array = text_array.join("");
    console.log(output_array);

    $('#print').html(output_array);
    $("#characters_left").html(characters_left);
    centerContent();
});


});
