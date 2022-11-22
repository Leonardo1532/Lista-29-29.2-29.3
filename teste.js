// De acordo com o diagrama de classes acima, crie as respectivas classes, todas devem ter
// um método construtor respeitando as seguintes indicações:
// 1. A propriedade Titular da classe PacoteViagem deve receber seu valor através da
// propriedade Passageiro da classe PassagemArea;
// 2. O método CalcularValor() da classe PassagemArea deve fazer um acréscimo de
// 50% no valor base caso a propriedade PrimeiraClasse seja “true”
// 3. O método ExibirResumo da classe PassagemArea deve exibir uma mensagem com
// as seguintes informações: “Passagem em nome de {nome do passageiro}, no
// assento {assento} do voo {número do voo}, com destino para {local de destino do
// voo}!”

// 1. Encapsular as propriedades de todas as classes e criar seus respectivos métodos
// get/set (para definição e leitura dos valores dessa propriedade));
// 2. Na classe Cliente criar as seguintes validações no método set das respectivas
// propriedades:
// a. Nome deve conter no máximo 50 caracteres;
// b. Cpf deve conter no máximo 11 caracteres;
// 3. Na classe PassagemArea criar as seguintes validações no método set das
// respectivas propriedades:
// a. PrimeiraClasse deve aceitar somente um valor booleano;
// b. Valor deve ser sempre maior do que zero;



// 1. Com base no exercício anterior, organize a execução do código da seguinte
// maneira:

// a. Dê a opção de cadastrar um cliente e salve esse objeto em um array;

// b. Faça também a opção de cadastrar um Voo e salve esse objeto em um
// array;

// c. Por último, dê a opção de cadastrar um Pacote de Viagem e salve em um
// array;

// 2. Considere as seguintes validações na hora de montar esse sistema:

// a. Quando for cadastrar um pacote de viagem, na hora de escolher a
// passagem de Ida mostra uma lista com todos os Voo cadastrados;

// b. Na hora de cadastrar a passagem de Volta, exibir apenas os Voo que tem o
// local de partida igual ao local de destino do Voo de Ida escolhido;

// c. Na hora de escolher um assento na passagem aérea, verifique se esse
// assento já não foi escolhido nesse voo, em caso positivo peça para escolher
// outro assento;

// Fique a vontade para criar funções para ajudar na execução / organização do seu
// código!

let Clientes = []
let Voos = []


class Cliente {
    #Nome
    #Cpf
    #DataNascimento

    constructor(nome, cpf, dataNascimento) {
        this.setNome(nome)
        this.setCpf(cpf)
        this.setDataNascimento(dataNascimento)
    }

    setNome(nome) {
        let continuar = true
        while (continuar) {
            if (nome.length > 50) {
                console.log("O nome deve ter no máximo 50 caracteres!")
                nome = prompt("Insira um novo nome")
            } else {
                this.#Nome = nome
                continuar = false
            }
        }
    }
    getNome() {
        return this.#Nome
    }
    setCpf(cpf) {
        let continuar2 = true
        while (continuar2) {
            if (cpf.length > 11) {
                console.log("O cpf deve ter no máximo 11 caracteres!")
                cpf = prompt("Insira um novo cpf")
            } else {
                this.#Cpf = cpf
                continuar2 = false
            }
        }
    }
    getCpf() {
        return this.#Cpf
    }
    setDataNascimento(dataNascimento) {
        this.#DataNascimento = dataNascimento
    }
    getDataNascimento() {
        return this.#DataNascimento
    }
}

class PassagemAerea {
    #Assento
    #PrimeiraClasse
    #Valor
    #Passageiro
    #Voo

    constructor(assento, primeiraClasse, valor, passageiro, voo) {
        this.setAssento(assento)
        this.setPrimeiraClasse(primeiraClasse)
        this.setValor(valor)
        this.setPassageiro(passageiro)
        this.setVoo(voo)
    }

    setAssento(assento) {
        this.#Assento = assento
    }
    getAssento() {
        return this.#Assento
    }
    setPrimeiraClasse(primeiraClasse) {
        if (primeiraClasse == "s") {
            primeiraClasse = true
            this.#PrimeiraClasse = primeiraClasse
        } else if (primeiraClasse == "n")
            primeiraClasse = false
    }
    getPrimeiraClasse() {
        return this.#PrimeiraClasse
    }
    setValor(valor) {
        let continuar3 = true
        while (continuar3) {
            if (valor <= 0) {
                console.log("O valor deve ser maior que zero (0)")
                valor = prompt("Insira um valor corretamente")
            } else {
                this.#Valor = valor
                continuar3 = false
            }
        }
    }
    getValor() {
        return this.#Valor
    }
    setPassageiro(passageiro) {
        this.#Passageiro = passageiro
    }
    getPassageiro() {
        return this.#Passageiro
    }
    setVoo(voo) {
        this.#Voo = voo
    }
    getVoo() {
        return this.#Voo
    }


    CalcularValor() {
        let valorPrimeiraClasse = 0
        if (this.#PrimeiraClasse == true) {
            valorPrimeiraClasse = this.#Valor + (this.#Valor * 0.5)
            console.log("Com o acréscimo da Primeira Classe o valor total é:     R$ " + valorPrimeiraClasse)
            this.#Valor = valorPrimeiraClasse
        } else {
            valorPrimeiraClasse = this.#Valor
            console.log("Sua passagem Aérea foi de classe econômica!")
        }
    }
    ExibirResumo(passagemAereaAssento, vooNumero, vooLocalDestino) {

        console.log("Passagem em nome de: " + this.#Passageiro.Nome)
        console.log("No assento: " + passagemAereaAssento)
        console.log("Do voo: " + vooNumero)
        console.log("Com destino para: " + vooLocalDestino)
    }
}

class Voo {
    #Empresa
    #Numero
    #Data
    #Horario
    #LocalPartida
    #LocalDestino

    constructor(empresa, numero, data, horario, localPartida, localDestino) {
        this.setEmpresa(empresa)
        this.setNumero(numero)
        this.setData(data)
        this.setHorario(horario)
        this.setLocalPartida(localPartida)
        this.setLocalDestino(localDestino)
    }

    setEmpresa(empresa) {
        this.#Empresa = empresa
    }
    getEmpresa() {
        return this.#Empresa
    }
    setNumero(numero) {
        this.#Numero = numero
    }
    getNumero() {
        this.#Numero
    }
    setData(data) {
        this.#Data = data
    }
    getData() {
        return this.#Data
    }
    setHorario(horario) {
        this.#Horario = horario
    }
    getHorario() {
        return this.#Horario
    }
    setLocalPartida(localPartida) {
        this.#LocalPartida = localPartida
    }
    getLocalPartida() {
        return this.#LocalPartida
    }
    setLocalDestino(localDestino) {
        this.#LocalDestino = localDestino
    }
    getLocalDestino() {
        return this.#LocalDestino
    }
}

class PacoteViagem {
    #Titular
    #PassagemIda
    #PassagemVolta
    #ValorTotal

    constructor(titular, passagemIda, passagemVolta, valorTotal) {
        this.setTitular(titular)
        this.setPassagemIda(passagemIda)
        this.setPassagemVolta(passagemVolta)
        this.setValorTotal(valorTotal)
    }

    setTitular(titular) {
        this.#Titular = titular
    }
    getTitular() {
        return this.#Titular
    }
    setPassagemIda(passagemIda) {
        this.#PassagemIda = passagemIda
    }
    getPassagemIda() {
        return this.#PassagemIda
    }
    setPassagemVolta(passagemVolta) {
        this.#PassagemVolta = passagemVolta
    }
    getPassagemVolta() {
        return this.#PassagemVolta
    }
    setValorTotal(valorTotal) {
        this.#ValorTotal = valorTotal
    }
    getValorTotal() {
        return this.#ValorTotal
    }
}

// 1. Com base no exercício anterior, organize a execução do código da seguinte
// maneira:

// a. Dê a opção de cadastrar um cliente e salve esse objeto em um array;

// b. Faça também a opção de cadastrar um Voo e salve esse objeto em um
// array;

// c. Por último, dê a opção de cadastrar um Pacote de Viagem e salve em um
// array;

// 2. Considere as seguintes validações na hora de montar esse sistema:

// a. Quando for cadastrar um pacote de viagem, na hora de escolher a
// passagem de Ida mostra uma lista com todos os Voo cadastrados;

// b. Na hora de cadastrar a passagem de Volta, exibir apenas os Voo que tem o
// local de partida igual ao local de destino do Voo de Ida escolhido;

// c. Na hora de escolher um assento na passagem aérea, verifique se esse
// assento já não foi escolhido nesse voo, em caso positivo peça para escolher
// outro assento;

// Fique a vontade para criar funções para ajudar na execução / organização do seu
// código!


let continuarExecutando = true
while (continuarExecutando) {
    let opcao = prompt("Para cadastrar um cliente insira (1), Para cadastrar um Voo (2), Para cadastrar um pacote de viagem (3)")
    switch (opcao) {
        case "1":
            let nome = prompt("Insira um nome")
            let cpf = prompt("Insira um cpf")
            let dataNascimento = prompt("Insira uma data de nascimento")
            let clinte1 = new Cliente(nome, cpf, dataNascimento)
            Clientes.push(clinte1)
            break;
        case "2":
            let empresa = prompt("Insira a Empresa")
            let numero = prompt("Insira o numero do voo")
            let data = prompt("Insira a data do voo")
            let horario = prompt("Insira o horário do voo")
            let localPartida = prompt("Insira o local de partida do voo")
            let localDestino = prompt("Insira o local de destino do voo")
            let Voo1 = new Voo(empresa, numero, data, horario, localPartida, localDestino)
            Voos.push(Voo1)
            break;

            
        case "3":

            break
    }
    let desejaContinuar = prompt("Deseja continuar executando? s ou n")
    if (desejaContinuar != "s") {
        continuarExecutando = false
    }
}



let Voo1 = new Voo("Emirates", "427816728390", "21/12/2022", 15, "GRU Airport(São Paulo, Brasil)", "Aeroporto Internacional de Dubai(Al Garhoud, Dubai)")

let Voo2 = new Voo("Emirates", "168203978283", "31/12/2022", 8, "Aeroporto Internacional de Dubai(Al Garhoud, Dubai)", "GRU Airport(São Paulo, Brasil)")

let PassagemAerea1 = new PassagemAerea(28, true, 12000, Cliente1, Voo1)

let PassagemAerea2 = new PassagemAerea(44, false, 12000, Cliente1, Voo2)

let PacoteViagem1 = new PacoteViagem(Cliente1, PassagemAerea1, PassagemAerea2, 30000)