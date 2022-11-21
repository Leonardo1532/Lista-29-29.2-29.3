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
        this.#Nome = nome
    }
    getNome() {
        return this.#Nome
    }
    setCpf(cpf) {
        this.#Cpf = cpf
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
        this.Assento = assento
        this.PrimeiraClasse = primeiraClasse
        this.Valor = valor
        this.Passageiro = passageiro
        this.Voo = voo
    }

    setAssento(assento) {
        this.#Assento = assento
    }
    getAssento(){
        return this.#Assento
    }

    CalcularValor() {
        let valorPrimeiraClasse = 0
        if (this.PrimeiraClasse == true) {
            valorPrimeiraClasse = this.Valor + (this.Valor * 0.5)
            console.log("Com o acréscimo da Primeira Classe o valor total é:     R$ " + valorPrimeiraClasse)
            this.Valor = valorPrimeiraClasse
        } else {
            valorPrimeiraClasse = this.Valor
            console.log("Sua passagem Aérea foi na classe econômica!")
        }
    }
    ExibirResumo(passagemAereaAssento, vooNumero, vooLocalDestino) {

        console.log("Passagem em nome de: " + Cliente1.Nome)
        console.log("No assento: " + passagemAereaAssento)
        console.log("Do voo: " + vooNumero)
        console.log("Com destino para: " + vooLocalDestino)
    }
}

class Voo {
    Empresa
    Numero
    Data
    Horario
    LocalPartida
    LocalDestino

    constructor(empresa, numero, data, horario, localPartida, localDestino) {
        this.Empresa = empresa
        this.Numero = numero
        this.Data = data
        this.Horario = horario
        this.LocalPartida = localPartida
        this.LocalDestino = localDestino
    }
}

class PacoteViagem {
    Titular
    PassagemIda
    PassagemVolta
    ValorTotal

    constructor(titular, passagemIda, passagemVolta, valorTotal) {
        this.Titular = titular
        this.PassagemIda = passagemIda
        this.PassagemVolta = passagemVolta
        this.ValorTotal = valorTotal
    }
}

let Cliente1 = new Cliente("Leonardo", "123678972-30", "25/09/2002")

let Voo1 = new Voo("Emirates", "427816728390", "21/12/2022", 15, "GRU Airport(São Paulo, Brasil)", "Aeroporto Internacional de Dubai(Al Garhoud, Dubai)")

let Voo2 = new Voo("Emirates", "168203978283", "31/12/2022", 8, "Aeroporto Internacional de Dubai(Al Garhoud, Dubai)", "GRU Airport(São Paulo, Brasil)")

let PassagemAerea1 = new PassagemAerea(28, true, 12000, Cliente1, Voo1)

let PassagemAerea2 = new PassagemAerea(44, false, 12000, Cliente1, Voo2)

let PacoteViagem1 = new PacoteViagem(Cliente1, PassagemAerea1, PassagemAerea2, 30000)