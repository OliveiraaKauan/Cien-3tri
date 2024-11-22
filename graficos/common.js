// Função para pegar o valor de uma variável CSS
const getCSS = (variavel) => {
    // Tenta pegar o valor da variável diretamente do body
    const bodyStyles = getComputedStyle(document.body);
    const value = bodyStyles.getPropertyValue(variavel).trim(); // Remover espaços extras

    // Retorna o valor ou um valor padrão se a variável não for encontrada
    return value || 'initial';
};

// Configurações de estilo para os ticks no gráfico, adaptado para o tema "Bikes"
const tickConfig = {
    family: getCSS('--font'),       // Fonte definida na variável CSS (pode ser algo como 'BikeFont' se houver)
    size: 16,                       // Tamanho fixo do texto
    color: getCSS('--primary-color') // Cor primária, que pode representar a cor do quadro da bicicleta, por exemplo
};

// Exportando a função e a configuração
export { getCSS, tickConfig };
