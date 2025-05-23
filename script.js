// Espera o DOM carregar completamente antes de executar o código
document.addEventListener('DOMContentLoaded', function() {
// Obtém referências para os elementos do DOM
    const cpfInput = document.getElementById('cpfInput');
    const verifyButton = document.getElementById('verifyButton');
    const clearButton = document.getElementById('clearButton');
    const resultDiv = document.getElementById('result');
    const statusMessage = document.getElementById('statusMessage');
    const body = document.body;

     // Adiciona máscara automática para o CPF enquanto o usuário digita
    cpfInput.addEventListener('input', function(e) {

        // Remove todos os caracteres não numéricos
        let value = e.target.value.replace(/\D/g, '');

        // Aplica a formatação do CPF (XXX.XXX.XXX-XX)
        if (value.length > 9) {
            value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        } else if (value.length > 6) {
            value = value.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
        } else if (value.length > 3) {s
            value = value.replace(/(\d{3})(\d{1,3})/, '$1.$2');
        }
        
    });
});
