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
});