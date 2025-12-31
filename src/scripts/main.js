document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('bt-click');
    button.addEventListener('click', function() {
        let texto = document.getElementById('result');
        texto.style.display = 'block';
        let resultado = document.querySelector('.result-number');
        resultado.style.display = 'inline';
        resultado.innerText = +resultado.innerText + 1;
    });
});