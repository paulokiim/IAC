function submit () {
    var usuario = document.getElementById ("usuario").value;
    var senha = document.getElementById ("senha").value;
    if (usuario == "admin" && senha == "admin") {
        window.location.href = "index.html";
    }
}