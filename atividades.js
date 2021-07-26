// atividade 1*
function Atv1() {
    let nome = prompt("Qual o nome do funcionário")
    let salario = prompt("Qual o seu salário? ")
    let percaumento = prompt("Qual seu percentual de aumento? ")
    let novoSalario = parseFloat(salario) + (parseFloat(salario) * (parseFloat(percaumento) / 100))

    if (novoSalario > 5000) {
        var frase = `Olá ${nome}, seu novo salário é ${novoSalario}`
    }
    else {
        var frase = "Parabéns pelo aumento"
    }
    console.log(frase)
}

// atividade 2*
function Atv2() {
    let n1 = prompt("Digite um valor: ")
    let n2 = prompt("Digite mais um valor: ")
    let n3 = prompt("Digite um ultimo valor: ")
    n1 = parseFloat(n1)
    n2 = parseFloat(n2)
    n3 = parseFloat(n3)

    let d = n2 * n2 - 4 * n1 * n3

    console.log(`x1: ${(-n2 + Math.sqrt(d)) / (2 * n1)}`, `x2: ${(-n2 - Math.sqrt(d)) / (2 * n1)}`)
}
// atividade 3*

function Atv3() {
    const numeros = [12, 3, 8, -2, 18, 5, 6, -1]
    const pares = []
    const impares = []
    var aux

    for (var i = 0; i < 4; i++) {
        aux = parseInt(prompt("Digite um numero: "))
        numeros.push(aux)
    }
    for (var a = 0; a < numeros.length; a++) {
        if (numeros[a] % 2 == 0) {
            impares[a] = numeros[a]
            if (impares[a] < 0) {
                impares[a] = null
            }
        }
        else {
            pares[a] = numeros[a]
            if (pares[a] < 0) {
                pares[a] = null
            }
        }
    }
    console.log(impares, pares)
}

// atividade 4*

function Atv4() {
    const funcionarios = [
        {
            nome: "Lucas",
            sexo: "Masculino",
            curso: [
                {
                    titulo: "computação",
                    faculdade: "unime",
                    endereco: "lauro de freitas",
                    ano: 2021
                }
            ]
        },
        {
            nome: "Leo",
            sexo: "Feminino",
            curso: [
                {
                    titulo: "criador de sites de entretenimento adulto",
                    faculdade: "unime",
                    endereco: "lauro de freitas",
                    ano: 2021
                }
            ]
        },
        {
            nome: "Berg",
            sexo: "Feminino",
            curso: [
                {
                    titulo: "computação",
                    faculdade: "unime",
                    endereco: "lauro de freitas",
                    ano: 2021
                }
            ]
        },
    ]

    funcionarios.forEach(funcionario => {

        if (funcionario.curso)
            console.log(`${funcionario.nome} fez os cursos: `)
        funcionario.curso.forEach(cursos => {
            console.log(`${cursos.titulo} na faculdade ${cursos.faculdade} no ano ${cursos.ano}`)
        })
    })
}

// ATIVIDADE 5*

function Atv5() {
    const numbers = [12, 3, 8, -2, 18, 5, 6, -1]

    const resultado = [[], []]

    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            resultado[0].push(numbers[i])
        }
        else {
            resultado[1].push(numbers[i])
        }

    }
    console.log(resultado)
}

// ATIVIDADE 6*
const listName = ["Lucas", "Paulo", "Vinicius", "Berg", "Natã"]
const item = document.querySelector("#name")
const listSelect = document.getElementById("listNames")
const button = document.querySelector("#button")
const itens = document.querySelector(".list-group")


for (i = 0; i < listName.length; i++) {
    var option = listName[i]
    var select = document.createElement("option")
    select.setAttribute("id", `${i}`)
    select.textContent = option
    select.value = option
    listSelect.appendChild(select)

}

function montarListaItem() {
    itens.innerHTML = ""
    listName.forEach(element => {
        itens.innerHTML += `<li class="list-group-item">${element}</li>`
    })
}

button.addEventListener("click", () => {

    listName.splice(listSelect.selectedIndex, 1, item.value)
    montarListaItem()
    item.value = ""
})

function Atv6() {
    const atv6 = document.getElementById("atv6")
    if (atv6.style.display !== "none") {
        atv6.style.display = "none"
    }
    else {
        atv6.style.display = "block"
    }
}

// ATIVIDADE 7*
let aux1 = 0
let aux2 = 0
let aux3 = 0

function getId(clicou) {
    switch (clicou.id) {
        case '1':
            console.log(`Você clicou ${++aux1} vezes na porta ${clicou.id}`)
            break
        case '2':
            console.log(`Você clicou ${++aux2} vezes na porta ${clicou.id}`)
            break
        case '3':
            console.log(`Você clicou ${++aux3} vezes na porta ${clicou.id}`)
            break
    }
}

function Atv7() {
    const atv7 = document.getElementById("atv7")
    if (atv7.style.display !== "none") {
        atv7.style.display = "none"
    }
    else {
        atv7.style.display = "block"
    }
}

// ATIVIDADE 8*

const cardFuncionarios = document.querySelector('#cardFuncionarios')
const employees = [{
    nome: "Silvana Santos",
    filhos: [
        { nome: "Joao", idade: 8 },
        { nome: "Maria", idade: 17 },
        { nome: "Mariana", idade: 23 }
    ]
}, {
    nome: "Carlos Peres",
    filhos: [
        { nome: "Pedro", idade: 9 }
    ]
}, {
    nome: "Faustina Silva",
    filhos: []
}]


employees.forEach((funcionario, index) => {
    var bonus = 0
    var bonificavel = "Não"
    var aux = document.createElement("li")
    aux.setAttribute("id", `child${index}`)
    aux.innerHTML = "Idade dos filhos: "
    funcionario.filhos.forEach((filho, index) => {
        if (index === funcionario.filhos.length - 1) {
            aux.innerHTML += filho.idade
        } else {
            aux.innerHTML += filho.idade + ","
        }

        if (filho.idade < 10 || filho.idade <= 18) {
            bonificavel = "Sim"
            if (filho.idade < 10) {
                bonus += 70
            }
            else {
                bonus += 50
            }
        }
    })
    cardFuncionarios.innerHTML += `
    <div class="col-md-4">
        <div class="card">
            <div class="card-header text-center">${funcionario.nome}</div>
                <div class="card-body">
                    <ul id="list${index}">
                            <li>Total de Filhos: ${funcionario.filhos.length}</li>
                            <li>Bonificável: ${bonificavel} </li>
                    </ul>
                </div>
                <div class="card-footer text-center">Valor do Bônus: R$${bonus} </div>
            </div>
        </div>
    </div>`
    document.getElementById(`list${index}`).appendChild(aux)

})

function Atv8() {
    const atv8 = document.getElementById("atv8")
    if (atv8.style.display !== "none") {
        atv8.style.display = "none"
    }
    else {
        atv8.style.display = "block"
    }
}


// ATIVIDADE 9

const texts = document.querySelector("#texts")


function loadPosts() {
    const endpoint = "https://jsonplaceholder.typicode.com/posts"

    fetch(endpoint)
        .then(response => response.json())
        .then(json => {
            json.forEach(posts => {
                texts.innerHTML +=
                    `<li onclick="loadComments(${posts.id})" id="${posts.id}" class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">${posts.title}</div>
                                ${posts.body}
                            </div>
                            <div class="list-group" id="loadComment${posts.id}"></div>
                        </li>`
            })
        })

}

function loadComments(id) {
    const endpoint = `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    const commentId = document.querySelector(`#loadComment${id}`)

    fetch(endpoint)
        .then(response => response.json())
        .then(json => {
            commentId.innerHTML = ""
            json.forEach(comment => {
                commentId.innerHTML +=
                    `<li  id="${comment.id}" class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">${comment.name}</div>
                                ${comment.body}
                            </div>
                        </li>`
            })

        })
}

loadPosts()
function Atv9() {
    const atv9 = document.getElementById("atv9")
    if (atv9.style.display !== "none") {
        atv9.style.display = "none"
    }
    else {
        atv9.style.display = "block"
    }
}

// ATIVIDADE 10

const atv10 = new Vue({
    el: "#atv10",
    data: {
        name: "",
        login: "",
        location: "",
        gitUrl: "",
        repositories: [],
        picture: "",
        description: "",
        show: false
    },

    methods: {
        async loadProfile() {
            nameGit = atv10.name
            const endpoint = `https://api.github.com/users/${nameGit}`
            const gitRepos = `https://api.github.com/users/${nameGit}/repos`

            await fetch(gitRepos)
                .then(response => response.json())
                .then(json => {
                    json.forEach((project, index) => {
                        atv10.repositories[index] = {
                            name: project.name,
                            description: project.description,
                            gitUrl: project.html_url
                        }
                    })

                })

            fetch(endpoint)
                .then(response => response.json())
                .then(json => {

                    atv10.login = json.login
                    atv10.location = json.location
                    atv10.gitUrl = json.html_url
                    atv10.picture = json.avatar_url
                })
        },
    }
})

// ATIVIDADE 11

const atv11 = new Vue({
    el: "#atv11",
    data: {
        show: false,
        title: "Sugestões para você 😉",
        titleDesc: "Escolha seus assuntos favoritos e receba conteúdos selecionados para você!",
        selectedHint: "btn-danger",
        unselectedHint: "btn-outline-danger",
        quantity: 0,
        hints: [
            {
                id: 0,
                name: 'testando 1',
                select: false,
            },
            {
                id: 1,
                name: 'teste 2',
                select: false,
            },
            {
                id: 2,
                name: 'teste 3',
                select: false,
            },
            {
                id: 3,
                name: 'teste 4',
                select: false,
            },
            {
                id: 4,
                name: 'teste 5',
                select: false,
            },
            {
                id: 5,
                name: 'testando 6',
                select: false,
            },
            {
                id: 6,
                name: 'teste 7',
                select: false,
            },
            {
                id: 7,
                name: 'teste 8',
                select: false,
            },
            {
                id: 8,
                name: 'testando 9',
                select: false,
            },

        ]
    },
    methods: {
        clearList() {
            for (hint of this.hints) {
                hint.select = false
            }
            this.quantity = 0
        },
        followHint(id){
            if(this.hints[id].select === true){
                this.hints[id].select = false
                this.quantity--
            }
            else{
                this.hints[id].select = true
                this.quantity++
            }
        }

    },
    computed: {
        isDisabled() {
            return (this.quantity == 0)
        }
    }
},
)

// ATIVIDADE 12

const atv12 = new Vue({
    el: "#atv12",
    data:{
        
    },

    methods: {
        notice: function(event){
            alert('A atividade 12 está dentro da pasta atividade-12 desculpa fui preguiçoso :(')
        }
    }


})