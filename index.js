var funcionarios = []; //aqui ficaraum funcionarios e seus atributos
var auxFuncionarios = [];

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
    let tabela = document.getElementById("resultadoTabela");

    let texto;
    let novaCelula;
    for (let i = 0; i < funcionarios.length; i++) {
        let novaColuna = tabela.insertRow(-1);
        for (let j = 0; j < funcionarios[i].length; j++) {
            novaCelula = novaColuna.insertCell(j);
            texto = document.createTextNode(funcionarios[i][j])
            novaCelula.appendChild (texto);
        }
        novaCelula = novaColuna.insertCell(funcionarios[i].length);
        texto = document.createTextNode(i+1+".pdf");
        novaCelula.appendChild (texto);
    }

    for (let i = 0; i < funcionarios.length; i++){
        auxFuncionarios.push(funcionarios.pop(i));
    }
}

function geraPDFTodos () {
    let doc = new jsPDF();
    let k = 1;
    for(let i = 0; i < auxFuncionarios.length; i ++) {
        for (let j = 0; j < auxFuncionarios[i].length; j++){
            if (j === 0) doc.text(20, 30 + (k * 10), document.getElementById(j).innerHTML + ': ' + String (auxFuncionarios[i][j]));
            else if (j === 1) doc.text(20, 30 + (k * 10), document.getElementById(j).innerHTML + ': ' + String (auxFuncionarios[i][j]));
            else if (j === 2) doc.text(20, 30 + (k * 10), document.getElementById(j).innerHTML + ': ' + String (auxFuncionarios[i][j]));
            else if (j === 3) doc.text(20, 30 + (k * 10), document.getElementById(j).innerHTML + ': ' + String (auxFuncionarios[i][j]));
            else if (j === 4) doc.text(20, 30 + (k * 10), document.getElementById(j).innerHTML + ': ' + String (auxFuncionarios[i][j]));
            else if (j === 5) doc.text(20, 30 + (k * 10), document.getElementById(j).innerHTML + ': ' + String (auxFuncionarios[i][j]));
            else if (j === 6) doc.text(20, 30 + (k * 10), document.getElementById(j).innerHTML + ': ' + String (auxFuncionarios[i][j]));
            else if (j === 7) doc.text(20, 30 + (k * 10), document.getElementById(j).innerHTML + ': ' + String (auxFuncionarios[i][j]));
            else if (j === 8) doc.text(20, 30 + (k * 10), document.getElementById(j).innerHTML + ': ' + String (auxFuncionarios[i][j]));
            else if (j === 9) doc.text(20, 30 + (k * 10), document.getElementById(j).innerHTML + ': ' + String (auxFuncionarios[i][j]));
            k++;
        }
        k+=3;
    }
    doc.save ("Funcionario.pdf");
}