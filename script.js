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
        
         // Atualiza o valor do input com a formatação
        e.target.value = value;
    });

    // Configura o botão de limpar
    clearButton.addEventListener('click', function() {

         // Limpa o input e reseta todos os estados
        cpfInput.value = '';
        resultDiv.style.display = 'none';
        body.className = '';
        statusMessage.className = 'status-message';
        cpfInput.focus(); // Coloca o foco de volta no input
    });

    // Configura o botão de verificar
    verifyButton.addEventListener('click', function() {

         // Obtém o CPF sem formatação
        const cpf = cpfInput.value.replace(/\D/g, '');

         // Reseta os estados visuais
        body.className = '';
        statusMessage.className = 'status-message';

         // Validações básicas
        if (!cpf) {
            // Caso o campo esteja vazio
            showResult("Por favor, digite um CPF", "warning");
            body.classList.add('empty');
            statusMessage.textContent = "Caixa está vazia!!";
            statusMessage.classList.add('show');
            return;
        }

        if (cpf.length !== 11) {
            // Caso o CPF esteja incompleto
            showResult("CPF deve ter 11 dígitos", "warning");
            body.classList.add('incomplete');
            statusMessage.textContent = "CPF Incompleto!!";
            statusMessage.classList.add('show');
            return;
        }

        if (/^(\d)\1{10}$/.test(cpf)) {
            // Caso todos os dígitos sejam iguais
            showResult("CPF não pode ter todos dígitos iguais", "invalid");
            body.classList.add('invalid');
            statusMessage.textContent = "Você não existe!!";
            statusMessage.classList.add('show');
            return;
        }

        // Validação matemática do CPF
        if (validarCPF(cpf)) {
            // CPF válido
            showResult("CPF Válido", "valid");
            body.classList.add('valid');
            statusMessage.textContent = "Você está validado!";
            statusMessage.classList.add('show');

             } else {
            // CPF inválido
            showResult("CPF Inválido", "invalid");
            body.classList.add('invalid');
            statusMessage.textContent = "Você não existe!!";
            statusMessage.classList.add('show');
        }
    });

    // Função para mostrar o resultado da validação
    function showResult(message, type) {
        resultDiv.textContent = message;
        resultDiv.className = type;
        resultDiv.style.display = "block";
    }
});
