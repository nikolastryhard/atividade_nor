const campoSenha = document.getElementById('senha');
const textoResultado = document.getElementById('resultado');

campoSenha.addEventListener('input', () => {
    const senha = campoSenha.value;
    const tamanho = senha.length;

    if (tamanho === 0) {
        textoResultado.innerText = "Aguardando...";
        textoResultado.className = "status";
    } else if (tamanho < 6) {
        textoResultado.innerText = "Fraca ❌";
        textoResultado.className = "status fraca";
    } else if (tamanho >= 6 && tamanho <= 10) {
        textoResultado.innerText = "Média ⚠️";
        textoResultado.className = "status media";
    } else {
        textoResultado.innerText = "Forte ✅";
        textoResultado.className = "status forte";
    }
});
