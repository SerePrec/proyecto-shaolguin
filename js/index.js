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

document.querySelectorAll("a[data-link]").forEach(elem => {
  elem.addEventListener("click", function (e) {
    e.preventDefault();
    const hash = elem.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        const $element = document.getElementById(`${hash}`);
        const topCoord = $element.getBoundingClientRect().top;
        const navHeight = document.querySelector(
          ".navbar.navbar-expand-lg"
        ).clientHeight;
        document.documentElement.scrollBy({
          top: topCoord - navHeight,
          left: 0,
          behavior: "smooth"
        });
      }, 350);
    }
  });
});
