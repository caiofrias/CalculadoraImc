var peso;
var altura;
var imc;
var resultado;

function calcular(){

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    imc = peso/(altura*altura)
   
    if(imc < 17 ){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<strong> Muito abaixo do peso </strong>';
        return false;
    }else if (imc >17 && imc < 18.49) {
        resultado = document.getElementById('resultado')
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<strong> Abaixo do peso </strong>'
        return false;
    }else if (imc > 18.50 && imc < 24.99) {
        resultado = document.getElementById('resultado')
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<strong> Peso ideal </strong>'
        return false;
    }else {
        resultado = document.getElementById('resultado')
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<strong> Acima do peso </strong>'
        return false;
    }
}