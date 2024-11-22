const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    try {
        const res = await fetch(url);
        const dados = await res.json();

        // Convertendo para bilhões
        const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9).toFixed(2);
        const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9).toFixed(2);

        // Convertendo tempo médio em horas e minutos
        const horas = Math.floor(dados.tempo_medio); // Número inteiro de horas
        const minutos = Math.round((dados.tempo_medio - horas) * 60); // Converter a parte decimal para minutos

        // Calculando a porcentagem de pessoas conectadas
        const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo) * 100).toFixed(2);

        // Criando o parágrafo com as informações
        const paragrafo = document.createElement('p');
        paragrafo.classList.add('graficos-container__texto');
        paragrafo.innerHTML = `
            Você sabia que o mundo tem <span>${pessoasNoMundo}</span> bilhões de pessoas e que aproximadamente 
            <span>${pessoasConectadas}</span> bilhões estão conectadas em alguma rede social e passam em média 
            <span>${horas} horas</span> e <span>${minutos} minutos</span> conectadas.<br>
            Isso significa que aproximadamente <span>${porcentagemConectada}%</span> de pessoas estão conectadas em alguma rede social.
        `;

        // Adicionando o parágrafo ao container
        const container = document.getElementById('graficos-container');
        container.appendChild(paragrafo);

    } catch (error) {
        console.error('Erro ao carregar os dados:', error);
    }
}

// Chamando a função para exibir as informações
vizualizarInformacoesGlobais();
