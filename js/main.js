$(document).ready(() => {

    $('#developer').click(() => {
        if ($('#img1').is(":visible")) {
            $("#img1").addClass("d-none");
            $('#part1').removeClass('d-none');
        } else if ($('#img1').is(":hidden")) {
            $("#img1").removeClass("d-none");
            $('#part1').addClass('d-none');
        }
    });

    $('#code').click(() => {
        if ($('#img2').is(":visible")) {
            $("#img2").addClass("d-none");
            $('#part2').removeClass('d-none');
        } else if ($('#img2').is(":hidden")) {
            $("#img2").removeClass("d-none");
            $('#part2').addClass('d-none');
        }

    });

    $('#profile').click(() => {
        if ($('#img3').is(":visible")) {
            $("#img3").addClass("d-none");
            $('#part3').removeClass('d-none');
        } else if ($('#img3').is(":hidden")) {
            $("#img3").removeClass("d-none");
            $('#part3').addClass('d-none');
        }
    });



    $("#mc-embedded-subscribe-form").on('submit',(e)=>{
       
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#textarea').val();
        
        if(validate(name,email,message)){
            alert("Thank you  " + name +"  we have received your message. Thank you for reaching out to us.")
        }
    });


    function validate(name,email,message){
        var bool =  true ;
        if((name == "")){
            $('#nameerro').removeClass('d-none');
            $('#namemess').text("Please enter Name");
            bool = false;
        }
        else{
            $('#namesuccess').removeClass('d-none');
            $('#namemess').text("Success");
        }
        if(email == ""){
            $('#emailmess').text("Please enter email");
            $('#emailerror').removeClass('d-none');
            bool = false;
        }else{
            $('#emailmess').text("Success");
            $('#emailsuccess').removeClass('d-none');
        }
        if(message == ""){
            $('#messageerror').removeClass('d-none');
            $('#messerr').text("Please enter Message");
            bool = false;
            
        }else{
            $('#messagesuccess').removeClass('d-none');
            $('#messerr').text("Success");
        }

          
        

        return bool;
    }


});