class Fornecedor {
    constructor(nome, cnpj, endereco) {
        this.nome = nome;
        this.cnpj = cnpj;
        this.endereco = endereco;
    }

    // Method to display supplier information
    exibirInformacoes() {
        console.log(`Nome: ${this.nome}, CNPJ: ${this.cnpj}, Endereço: ${this.endereco}`);
    }
}

module.exports = Fornecedor;