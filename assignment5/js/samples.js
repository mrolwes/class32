/*$( "input" )
  .keyup(function() {
    var value = $( this ).val();
    $( "p" ).text( value );
  })
  .keyup();*/

/*---Function for text (value of an input box-http://api.jquery.com/val/)-----*/

$( "input" )
  .keyup(function() {
    var value = $( this ).val();
    $( ".words" ).text( value );
  })
  .keyup();

/*------Function for radio buttons---*/

function check(pets) {
  document.getElementById("critters").value=pets;
}

/*---------Function for textarea--------------*/


$( "moreWords" )
  .keyup(function() {
    var value = $( this ).val();
    $( ".morewords" ).text( value );
  })
  .keyup();

/*---------Function for color--------------*/


function bestColor() {
    var x = document.getElementById("myColor").value;
    document.getElementById("rainbow").innerHTML = x;
}

/*-----------function for datetime-------------*/

function todaysDate() {
    var y = document.getElementByID("bdaytime").value;
    document.getElementById("birthday").innerHTML = y;
  
}

/*-----------------Function for URL------------*/

function bestWeb() {
  var z = document.getElementById("besturl").value;
  document.getElementById("gothere").innerHTML = z;
}

/*----------------Function for email------------*/

function webFriends() {
  var w = document.getElementById("friends").value;
  document.getElementById("allfriends").innerHTML = w;
  
}

/*--------------Function for password-----------------*/

function browseSecure() {
  var v = document.getElementById("catname").value;
  document.getElementById("dogname").innerHTML = v;
}

/*---------------Function for dress size-----------*/

function springDress() {
  var u = document.getElementById("dress_size").value;
  document.getElementById("bestfit").innerHTML = u;
  
}

/*-------------------Function for checkboxes--------------------------*/

