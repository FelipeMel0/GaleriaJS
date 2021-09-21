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

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")
    // container.innerHTML += `
    //     <a href="${urlImagem}" class="galeria-itens">
    //         <img src="${urlImagem}" alt="">
    //     </a>
    // `
    const novoLink = document.createElement("a")
    novoLink.href = urlImagem
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src="${urlImagem}" alt="">`
    container.appendChild(novoLink)
}

const carregarImagens = () => imagens.forEach(criarItem)

carregarImagens()
