const form = document.getElementById('form1');

function maiorQue(a,b){
    if(a<b){
        alert('O formulário é valido!')
    }
    else{
        alert('O formulário é invalido!')
    }
}
form.addEventListener('submit', function(e){   

    e.preventDefault();
    let ca = document.getElementById('campoA').value;
    let cb = document.getElementById('campoB').value;
    maiorQue(ca,cb);

})


