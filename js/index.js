$(".nav-link").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

$("#send").click(function (event) {
  let name = $("#name").val();
  let email = $("#email").val();
  let mensaje = $("#mensaje").val();

  if ($("#form")[0].checkValidity()) {
    $("#form")[0].reset();
    $("#msg").addClass("status-msg").text("Mensaje enviado correctamente ✔");
    $("#msg").removeClass("status-disabled");
    setTimeout(() => {
      $("#msg").removeClass("status-msg");
      $("#msg").addClass("status-disabled");
    }, 3000);
  } else {
    console.log("incompleto");
    $("#msg").addClass("status-msg").text("Todos los campos son obligatorios");
    $("#msg").removeClass("status-disabled");
    setTimeout(() => {
      $("#msg").removeClass("status-msg");
      $("#msg").addClass("status-disabled");
    }, 3000);
  }
});
