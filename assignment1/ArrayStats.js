// ArrayStats.js

/*  Computes and displays statistics about numbers entered into form OR concatenates text.
  NOTES:
 1. 
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
$('#the-info').on( 'focus', clearMessage );

//=============================================================================

function processForm( evt ) {
   
    if (number) {
       DisplayStats();
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
    DisplayText( );
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
