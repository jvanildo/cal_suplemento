const calcular = document.getElementById('calcular');

function dose () {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    var creatina=0.06;
    var whey=1.3;

    if (nome !== '' && peso !== '') {
 
        const DOSEcrea = peso * creatina.toFixed(2);
        const DOSEwhey = peso * whey.toFixed(2);


        resultado.textContent = `${nome} sua dose de creatina é ${DOSEcrea.toFixed(2)} gramas e de whey é de: ${DOSEwhey.toFixed(2)} gramas.`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', dose);