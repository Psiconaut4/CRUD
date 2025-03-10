'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome: "Nome",
    email: "email@email.com",
    celular: "11123459876",
    cidade: "SC"
}

//CRUD = create read update delete

const createClient = (client) => {
    localStorage.setItem("teste", 'tste para o crud')
}


//Eventos

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)