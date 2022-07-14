$(() => {

    $("#formulario-contacto").on("submit", function(e){
        console.log($("#nombre", this));
        e.preventDefault();
        var nombre = $("#nombre", this).val();
        var apellido = $("#apellido", this).val();
        var email = $("#correo", this).val();

        alert(`Gracias por contactarnos ${nombre} ${apellido}. Te escribiremos a ${email} muy pronto.`)
        $('#staticBackdrop').modal('hide')
        $("#form-suscripcion")[0].reset();
    })

})