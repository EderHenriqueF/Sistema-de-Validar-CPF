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
        
    });
});
