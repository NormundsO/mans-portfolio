// var form=document.querySelector()

$(document).ready(function(){
var $form=$('#contact form');

$form.submit(function(event) {
event.preventDefault();

    var $heading=$form.find('h5');
    
    var $fName=$form.find('input[name="fname"]');
    var $email=$form.find('input[name="email"]');
    var $number=$form.find('input[name="number"]');
    var $subject=$form.find('textarea[name="subject"]');

    $heading.text('Paldies, '+ $fName.val());

    console.log($fName.val(), $email.val(), $number.val(), $subject.val()  );

    });
});

