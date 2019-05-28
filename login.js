function submit () {
    var usuario = document.getElementById ("usuario").value;
    var senha = document.getElementById ("senha").value;
    if (usuario == "admin" && senha == "admin") {
        window.location.href = "menu.html";
    }
    else {
        document.getElementById ("usuario").value = "";
        document.getElementById ("senha").value = "";
        alert("Usuário e senha inválidos!");
    }
}