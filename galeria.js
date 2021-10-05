"use strict"

const limpar = (elemento) => {
    while (elemento.firstChild){
        elemento.removeChild(elemento.lastChild)
    }
}

const pegarImagens = (raca) => fetch(`https://dog.ceo/api/breed/${raca}/images`)

// const pegarImagens = () => fetch(`https://dog.ceo/api/breed/doberman/images`)

const procurarImagens = async (evento) => {

    if (evento.key === 'Enter') {
        const raca = evento.target.value
        const imagensResponse = await pegarImagens(raca)
        const imagens = await imagensResponse.json()

        limpar(document.querySelector(".galeria-container"))
        limpar(document.querySelector(".slide-container"))

        carregarImagens(imagens.message)
        carregarSlides(imagens.message)

    }

}

const limparId = (urlImagem) => {
    const posBarra = urlImagem.lastIndexOf('/') + 1
    const posPonto = urlImagem.lastIndexOf('.')
    return urlImagem.substring(posBarra, posPonto)
}

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")
    // container.innerHTML += `
    //     <a href="${urlImagem}" class="galeria-itens">
    //         <img src="${urlImagem}" alt="">
    //     </a>
    // `
    const novoLink = document.createElement("a")
    novoLink.href = `#${limparId(urlImagem)}`
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src="${urlImagem}" alt="">`
    container.appendChild(novoLink)
}

const carregarImagens = (imagens) => imagens.forEach(criarItem)

const criarSlide = (urlImagem, indice, arr) => {
    const container = document.querySelector(".slide-container")
    const slide = document.createElement("div")
    slide.classList.add("slide")
    slide.id = limparId(urlImagem)

    const indiceAnterior = indice > 0 ? indice - 1 : arr.length - 1
    const idAnterior = limparId(arr[indiceAnterior])

    const indiceProximo = indice < arr.length - 1 ? indice + 1 : 0
    const idProximo = limparId(arr[indiceProximo])

    // let indiceAnterior

    // if (indice > 0){
    //     indiceAnterior = indice - 1
    // }
    // else{
    //     indiceAnterior = arr.length - 1
    // }

    slide.innerHTML = `
    <div class="imagem-container">
        <a href="#" class="fechar">&#128473;</a>
        <a href="#${idAnterior}" class="navegacao anterior">&#171;</a>
        <img src="${urlImagem}" alt="">
        <a href="#${idProximo}" class="navegacao proximo">&#187;</a>
    </div>
`
    container.appendChild(slide)
}

const carregarSlides = (imagens) => imagens.forEach(criarSlide)

// procurarImagens()

document.querySelector(".pesquisa-container input").addEventListener('keypress', procurarImagens)

// carregarImagens()

// carregarSlides()