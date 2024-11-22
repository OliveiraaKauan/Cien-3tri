const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-bikes.json'

async function vizualizarInformacoesGlobais() {
    try {
        const res = await fetch(url);
        const dados = await res.json();

        // Convertendo para bilhões (ajustando para dados sobre o uso de bicicletas)
        const bicicletasUsadas = (dados.total_bicicletas_usadas / 1e9).toFixed(2);  // Dados sobre bicicletas usadas globalmente
        const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9).toFixed(2);  // Total de pessoas no mundo

        // Convertendo tempo médio em horas e minutos
        const horas = Math.floor(dados.tempo_medio_uso); // Número inteiro de horas
        const minutos = Math.round((dados.tempo_medio_uso - horas) * 60); // Convertendo a parte decimal para minutos

        // Calculando a porcentagem de pessoas que usam bicicletas
        const porcentagemBicicletas = ((bicicletasUsadas / pessoasNoMundo) * 100).toFixed(2); // Porcentagem de pessoas que usam bicicletas

        // Criando o parágrafo com as informações
        const paragrafo = document.createElement('p');
        paragrafo.classList.add('graficos-container__texto');
        paragrafo.innerHTML = `
            Você sabia que o mundo tem <span>${pessoasNoMundo}</span> bilhões de pessoas e que aproximadamente 
            <span>${bicicletasUsadas}</span> bilhões estão utilizando bicicletas e passam em média 
            <span>${horas} horas</span> e <span>${minutos} minutos</span> pedalando.<br>
            Isso significa que aproximadamente <span>${porcentagemBicicletas}%</span> das pessoas estão praticando atividades ao ar livre usando bicicletas.`;

        // Adicionando o parágrafo ao container
        const container = document.getElementById('graficos-container');
        container.appendChild(paragrafo);

    } catch (error) {
        console.error('Erro ao carregar os dados:', error);
    }
}

// Chamando a função para exibir as informações
vizualizarInformacoesGlobais();
