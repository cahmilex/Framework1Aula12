var qtdsecos, qtdmolhados, qtdfrageis, maxsecos, maxmolhados, maxfrageis;
var totalsecos, totalmolhados, totalfrageis, erro;

setInterval(function(){
    $("#titulo")
        .fadeOut(900)
        .fadeIn(900);

}, 1000);

//alert("Caso não tenha comprado algum grupo de produto, informe 0 !");
inputs('#maxsecos');
inputs('#maxmolhados');
inputs('#maxfrageis');
inputs('#qtdsecos');
inputs('#qtdmolhados');
inputs('#qtdfrageis');

function inputs (id){
    $(function(){
        $(id).focus(function(){
            $(id).css("background-color", "black");
            $(id).css("color", "white");
        });
    
        $(id).blur(function(){
            $(id).css("background-color", "white");
            $(id).css("color", "black");
    
        });
    });

}


function pegarDados(){
    var nome;
    nome = prompt("Digite seu nome e sobrenome: \n(Mínimo de 5 caracteres) ");
        if (nome.length < 5){
            alert("Texto muito pequeno!");
            erro = true;
        }
        else{
           var posicao =nome.indexOf(" ");
        }
    
    maxsecos = document.getElementById("maxsecos");
    if (maxsecos.value == "" || maxsecos.value == "0" || maxsecos.value == null){
        corCalcular("#maxsecos");
        erro = true;
    }

    qtdsecos = document.getElementById("qtdsecos");

    if (qtdsecos.value == "" || qtdsecos.value == "0" || qtdsecos.value == null){
        corCalcular("#qtdsecos");
        erro = true;
    }

    maxmolhados = document.getElementById("maxmolhados");

    if (maxmolhados.value == "" || maxmolhados.value == "0" || maxmolhados.value == null){
        corCalcular("#maxmolhados");
        erro = true;
    }

    qtdmolhados = document.getElementById("qtdmolhados");

    if (qtdmolhados.value == "" || qtdmolhados.value == "0" || qtdmolhados.value == null){
        corCalcular("#qtdmolhados");
        erro = true;
    }

    maxfrageis = document.getElementById("maxfrageis");

    if (maxfrageis.value == "" || maxfrageis.value == "0" || maxfrageis.value == null){
        corCalcular("#maxfrageis");
        erro = true;
    }

    qtdfrageis = document.getElementById("qtdfrageis");

    if (qtdfrageis.value == "" || qtdfrageis.value == "0" || qtdfrageis.value == null){
        corCalcular("#qtdfrageis");
        erro = true;
    }

    if (erro == true){
        alert("Preencha os dados corretamente");
        
    }else{
        calculaSecos(parseInt(qtdsecos.value), parseInt(maxsecos.value));
        calculaMolhados(parseInt(qtdmolhados.value), parseInt(maxmolhados.value));
        calculaFrageis(parseInt(qtdfrageis.value), parseInt(maxfrageis.value));

        alert("Sr. " + nome.substring(posicao,10000) + "\nQuantidade de sacolas que o cliente precisa é de:\nItens Secos: "
        + parseInt(qtdsecos.value) + ", divididos em: " + Math.round(totalsecos) + " sacolas.\n" + 
        "Itens Molhados: " + parseInt(qtdmolhados.value) + ", divididos em: "
        + Math.round(totalmolhados) + " sacolas.\n" + "Itens Frágeis: " + parseInt(qtdfrageis.value)
        + ", divididos em: " + Math.round(totalfrageis) + " sacolas.\n");
    }
}

function calculaSecos (qs, ms){
    totalsecos = parseInt(qs) / parseInt(ms);
}

function calculaMolhados (qm, mm){
    totalmolhados = parseInt(qm) / parseInt(mm); 
}

function calculaFrageis (qf, mf){
    totalfrageis = parseInt(qf) / parseInt(mf);
}

function corCalcular(id){
    $(function(){
        $(id).ready(function(){
            $(id).css("background-color", "red");
            $(id).css("color", "white");
        });
    });
};