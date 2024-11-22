import { getCSS, tickConfig } from "./common.js"

async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()

    // Extrair os nomes das redes e as quantidades de usuários
    const nomeDasRedes = Object.keys(dados)
    const quantidadeDeUsuarios = Object.values(dados).map(num => (num / 1e9).toFixed(2)) // Convertendo para bilhões e arredondando

    // Dados para o gráfico
    const data = [
        {
            x: nomeDasRedes, 
            y: quantidadeDeUsuarios, 
            type: 'bar', // Tipo de gráfico: barras
            marker: {
                color: getCSS('--primary-color') // Usando a cor primária do CSS
            }
        }
    ]

    // Layout do gráfico
    const layout = {
        plot_bgcolor: getCSS('--bg-color'), // Cor de fundo do gráfico
        paper_bgcolor: getCSS('--bg-color'), // Cor de fundo da área fora do gráfico
        title: {
            text: 'Redes sociais com mais usuários',
            x: 0.5, // Centraliza o título
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                family: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig, // Configurações de fonte para os ticks (valores no eixo X)
            title: {
                text: 'Nome das redes',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig, // Configurações de fonte para os ticks (valores no eixo Y)
            title: {
                text: 'Bilhões de usuários ativos',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    }

    // Criar um elemento div para o gráfico e inseri-lo na página
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)

    // Gerar o gráfico usando o Plotly
    Plotly.newPlot(grafico, data, layout)
}

// Chama a função para gerar o gráfico
quantidadeUsuariosPorRede()
