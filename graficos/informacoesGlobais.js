const url='https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    //console.log(dados)

    const paragrafo = document.createElement("p")
    paragrafo.classList.add("graficos-container__texto")

    paragrafo.innerHTML = 
        'Você sabia que o mundo tem $(dados.total_pessoas_mundo)bilhões de pessoas que aproximadamente 5.04 bilhões estão conectadas em alguma rede social e passam em média 2 horas e 38 minutos conectadas. Isso significa que aproximadamente 63.89% de pessoas conectadas em alguma rede social.'
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)

}

vizualizarInformacoesGlobais()