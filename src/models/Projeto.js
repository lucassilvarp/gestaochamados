class Projeto {
    constructor(nome, descricao, fornecedorId, dataInicio, dataFim, status) {
        this.nome = nome;
        this.descricao = descricao;
        this.fornecedorId = fornecedorId;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.status = status;
    }

    atualizarStatus(novoStatus) {
        this.status = novoStatus;
    }

    exibirInformacoes() {
        return `Projeto: ${this.nome}\nDescrição: ${this.descricao}\nFornecedor ID: ${this.fornecedorId}\nData de Início: ${this.dataInicio}\nData de Fim: ${this.dataFim}\nStatus: ${this.status}`;
    }
}

module.exports = Projeto;