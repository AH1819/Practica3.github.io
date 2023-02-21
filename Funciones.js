$(document).ready(function () {

    var contador = 1;

    $("#rowAdder").click(function () {
        newRowAdd =
            '<div id="row">'+
            '<label for="entrada" class="jugador">Jugador: ' + contador + '</label>' +
            '<input type="text" class="form-control m-input">' +
            '<button class=" btn-danger" id="DeleteRow" type="button">' +
            '<img src =eliminar.png></button> </div>';
        $('#newinput').append(newRowAdd);
        contador++;
    });

    $("body").on("click", "#DeleteRow", function () {
        contador--;
        $(this).parents("#row").remove();
    })

});