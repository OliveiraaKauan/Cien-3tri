// Função para pegar o valor de uma variável CSS
const getCSS = (variavel) => {
    // Tenta pegar o valor da variável diretamente do body
    const bodyStyles = getComputedStyle(document.body);
    const value = bodyStyles.getPropertyValue(variavel).trim(); // Remover espaços extras

    // Retorna o valor ou um valor padrão se a variável não for encontrada
    return value || 'initial';
};

// Configurações de estilo para os ticks
const tickConfig = {
    family: getCSS('--font'),       // Fonte definida na variável CSS
    size: 16,                       // Tamanho fixo do texto
    color: getCSS('--primary-color') // Cor primária definida na variável CSS
};

// Exportando a função e a configuração
export { getCSS, tickConfig };
