// numberString.js

/*  Computes and displays statistics about numbers or text entered into form
  NOTES:
  I built off of Dave's first assignment, knowing that:
  1. I need to differentiate between numbers and text, and
  2. I need to concatenate the strings as well as count, add and average.
  
*/


(function() {
'use strict';
//=============================================================================

var numbers = [];
var count = 0;
var sum = 0;
var average;


DisplayStats( );

$('#submit').on( 'click', processForm );
$('#reset').on( 'click', reset );
$('#the-number').on( 'focus', clearMessage );

//=============================================================================

function processForm( evt ) {
    var val = $('#the-number').val();
    var num = parseFloat( val );
    if ( isNaN( num ) ) {
       );
    } else {
        processNumber( num );
    }
    evt.preventDefault( );
}

//=============================================================================

function processNumber( number ) {
    numbers.push( number );
    ComputeStats( );
    DisplayStats( );
}

//============================================================================  
  
  function processText ( text ) {
    text.push( text );
    
  }
  
  
  
//=============================================================================

  function DisplayWords() {
    
  }
  
  
  
  
  
//=============================================================================  
  
function ComputeStats( ) {
    var i;
    var sum2 = 0;
    var diff;
    var variance;

    count = numbers.length;

    sum = 0;
    for ( i = 0; i < count; ++i ) {
        sum += numbers[ i ];
    }

    if ( count > 0 ) {
        average = sum / count;
    } else {
        average = undefined;
    }

}

//=============================================================================

function DisplayStats( ) {
    displayValue( '#count', count );
    displayValue( '#sum', sum );
    displayValue( '#average', average );
    

    //-------------------------------------------------------------------------

    function displayValue( selector, value ) {
        if ( value === undefined ) {
            $( selector ).empty( );
        } else {
            $( selector ).text( value );
        }
    }
}

//=============================================================================

function reset( ) {
    numbers = [];
    ComputeStats( );
    DisplayStats( );
}

//=============================================================================

function showMessage( msg ) {
    $('#message' ).text( msg );
}

//-----------------------------------------------------------------------------

function clearMessage( ) {
    $('#message' ).text( '' );
}

//=============================================================================
})();

