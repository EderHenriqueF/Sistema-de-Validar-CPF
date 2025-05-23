📋 Validador de CPF - Documentação Completa
Preview da Aplicação (Adicione uma screenshot real do projeto aqui)

🔍 Visão Geral
Um validador de CPF interativo que:

Valida matematicamente números de CPF

Aplica máscara automática durante a digitação

Muda dinamicamente cores e feedbacks visuais

Funciona 100% no navegador sem necessidade de backend

✨ Funcionalidades Principais
Validação em tempo real com algoritmo matemático oficial

Design responsivo que se adapta a qualquer dispositivo

Feedback visual completo:

Mudança de cor de fundo conforme o estado

Mensagens animadas no topo da tela

Resultados detalhados no container

Formatação automática do CPF (XXX.XXX.XXX-XX)

Botão de limpar para reiniciar a validação

🛠️ Tecnologias Utilizadas
HTML5 - Estrutura semântica

CSS3 - Estilos modernos com transições suaves

JavaScript - Lógica de validação e interatividade

Design Responsivo - Funciona em mobile e desktop

🚀 Como Usar
Digite um CPF no campo (a máscara será aplicada automaticamente)

Clique em "Verificar CPF" para validar

Veja o resultado:

✅ Válido: Fundo verde + mensagem de confirmação

❌ Inválido: Fundo vermelho + alerta

⚠️ Incompleto: Fundo amarelo + aviso

Use "Limpar" para reiniciar

📝 Algoritmo de Validação
O sistema implementa o cálculo oficial de dígitos verificadores:

Calcula o primeiro dígito verificador (posição 10)

Calcula o segundo dígito verificador (posição 11)

Compara com os dígitos informados

Verifica se todos os dígitos não são iguais

javascript
function validarCPF(cpf) {
    // Implementação completa do algoritmo
    // ... (código conforme fornecido)
}
🎨 Design System
Elemento	Cor	Uso
Fundo padrão	#1976D2 (Azul)	Estado inicial
CPF válido	#4CAF50 (Verde)	Validação aprovada
CPF inválido	#F44336 (Vermelho)	Validação reprovada
Campo vazio	#FFEB3B (Amarelo)	Quando não há input
CPF incompleto	#FFC107 (Amarelo)	Quando faltam dígitos
📱 Responsividade
Container centralizado com largura máxima de 350px

Adaptável a telas de qualquer tamanho

Botões com tamanho flexível

Fonte legível em todos os dispositivos

🔧 Possíveis Melhorias
Adicionar opção de gerar CPF válido

Implementar validação por API dos órgãos oficiais

Adicionar histórico de consultas

Criar versão acessível para leitores de tela

📜 Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.

Desenvolvido com ❤️ por Eder Henrique de Souza Filho