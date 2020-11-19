$(document).ready(function () {

    $('[data-toggle="tooltip"]').tooltip();

    /*Smooth Scroll*/
    $("a").click(function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var gato = this.hash
            $("html, body").animate({
                scrollTop: $(gato).offset().top
            }, 800, function () {
                window.location.hash = gato;
            });
        }
    });

    /*GotoURL*/
    $("#buttonMeetandCoffee").click(function () {
        window.location.href = "https://github.com/paolafdlc/meetandcoffee";
    });

    $("#buttonIguana").click(function () {
        window.location.href = "https://github.com/paolafdlc/Iguanapage";
    });

    $("#buttonSuricata").click(function () {
        window.location.href = "https://github.com/paolafdlc/desafiosuricata";
    });

    $("#buttonCuppon").click(function () {
        window.location.href = "https://github.com/paolafdlc/desafiocuppon";
    });

    $("#buttonRicomida").click(function () {
        window.location.href = "https://github.com/paolafdlc/desafioricomida";
    });

    $("#buttonEspacioV").click(function () {
        window.location.href = "http://espaciov.cl/";
    });
});