var funcionarios = []; //aqui ficaraum funcionarios e seus atributos

function adicionaFuncionario () {
    var nome = document.getElementById("input_nome").value;
    var rapidez = -1;
    var obs_rapidez = document.getElementById("obs_rapidez").value;
    var qualidade = -1;
    var obs_qualidade = document.getElementById("obs_qualidade").value;
    var custo = -1;
    var obs_custo = document.getElementById("obs_custo").value;
    var problemas = -1;
    var obs_problemas = document.getElementById("obs_problemas").value;
    var media = -1;

    var num_atributos = 0;
    
    document.getElementsByName("rapidez").forEach(radio => {
        if(radio.checked){
            rapidez = parseInt (radio.value);
            num_atributos++;
        }
    });

    document.getElementsByName("qualidade").forEach(radio => {
        if(radio.checked){
            qualidade = parseInt (radio.value);
            num_atributos++;
        }
    });

    document.getElementsByName("custo").forEach(radio => {
        if(radio.checked){
            custo = parseInt (radio.value);
            num_atributos++;
        }
    });

    document.getElementsByName("problemas").forEach(radio => {
        if(radio.checked){
            problemas = parseInt(radio.value);
            num_atributos++;
        }
    });

    media = ((rapidez + qualidade + custo + problemas) / num_atributos);

    var funcionario = [nome,rapidez,obs_rapidez,qualidade,obs_qualidade,custo,obs_custo,problemas,obs_problemas,media];

    funcionarios.push(funcionario);

    document.getElementById("input_nome").value = "";

    document.getElementsByName("rapidez").forEach(radio => {
        if(radio.checked){
            radio.checked = false;
        }
    });
    document.getElementById("obs_rapidez").value = "";

    document.getElementsByName("qualidade").forEach(radio => {
        if(radio.checked){
            radio.checked = false;
        }
    });
    document.getElementById("obs_qualidade").value = "";

    document.getElementsByName("custo").forEach(radio => {
        if(radio.checked){
            radio.checked = false;
        }
    });
    document.getElementById("obs_custo").value = "";

    document.getElementsByName("problemas").forEach(radio => {
        if(radio.checked){
            radio.checked = false;
        }
    });
    document.getElementById("obs_problemas").value = "";

}
function printaResultados () {

}