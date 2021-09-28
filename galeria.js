"use strict"

const imagens = [
    "./img/Aranha de Ferro.jpg",
    "./img/Homem-Aranha 2099.jpg",
    "./img/Homem-Aranha Aranhaverso.png",
    "./img/Homem-Aranha PS4.jpg",
    "./img/Homem-Aranha clássico.jpg",
    "./img/Homem-Aranha noir.jpg",
    "./img/Tobey Aranha.png",
    "./img/Tom Aranha.jpg"
]

const limparId = (urlImagem) => urlImagem
    .split("/")[2]
    .split(".")[0]
    .replace(" ", "-")
    .toLowerCase()

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

const carregarImagens = () => imagens.forEach(criarItem)

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
        <a href="${idAnterior}" class="navegacao anterior">&#171;</a>
        <img src="${urlImagem}" alt="">
        <a href="${idProximo}" class="navegacao proximo">&#187;</a>
    </div>
`
    container.appendChild(slide)
}

const carregarSlides = () => imagens.forEach(criarSlide)

carregarImagens()

carregarSlides()

// let imagens = document.querySelectorAll('.galeria-container')

// const anterior = () =>{
//     const container = document.querySelector(".galeria-container")
//     container.appendChild(imagens[0])
//     imagens = document.querySelectorAll(".galeria-container")
// }

// const proximo = () =>{
//     const container = document.querySelector(".galeria-container")
//     const ultimoItem = imagens[imagens.length - 1]
//     container.insertBefore(ultimoItem, imagens[0])
//     imagens = document.querySelectorAll(".galeria-container")
// }



