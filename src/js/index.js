import 'jquery';
import 'bootstrap';
import "../styles/styles.scss";

var today = new Date();
document.querySelector('#app time').innerHTML = today.toDateString();

$( "#button" ).click(function() {
  $('#sticky-header').toggleClass('open');
});

$('#text-checkbox').change(function() {
    // this will contain a reference to the checkbox   
    $('.text').toggleClass('hide'); 
});

$('#images-checkbox').change(function() {
    // this will contain a reference to the checkbox   
    $('.image').toggleClass('hide'); 
});

$('#video-checkbox').change(function() {
    // this will contain a reference to the checkbox   
    $('.video').toggleClass('hide'); 
});

$('#social-checkbox').change(function() {
    // this will contain a reference to the checkbox   
    $('.video').toggleClass('hide'); 
});

$('#infographics-checkbox').change(function() {
    // this will contain a reference to the checkbox   
    $('.video').toggleClass('hide'); 
});