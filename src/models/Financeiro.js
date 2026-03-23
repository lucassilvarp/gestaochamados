class Financeiro {
    constructor(ticketId, fornecedorId, parceiroId, valorReceber, valorPagar, statusReceber, statusPagar, dataRecebimento, dataPagamento) {
        this.ticketId = ticketId;
        this.fornecedorId = fornecedorId;
        this.parceiroId = parceiroId;
        this.valorReceber = valorReceber;
        this.valorPagar = valorPagar;
        this.statusReceber = statusReceber;
        this.statusPagar = statusPagar;
        this.dataRecebimento = dataRecebimento;
        this.dataPagamento = dataPagamento;
    }

    registrarRecebimento(valor, data) {
        this.valorReceber = valor;
        this.dataRecebimento = data;
        this.statusReceber = 'recebido';
    }

    registrarPagamento(valor, data) {
        this.valorPagar = valor;
        this.dataPagamento = data;
        this.statusPagar = 'pago';
    }

    exibirInformacoes() {
        return {
            ticketId: this.ticketId,
            fornecedorId: this.fornecedorId,
            parceiroId: this.parceiroId,
            valorReceber: this.valorReceber,
            valorPagar: this.valorPagar,
            statusReceber: this.statusReceber,
            statusPagar: this.statusPagar,
            dataRecebimento: this.dataRecebimento,
            dataPagamento: this.dataPagamento
        };
    }
}

module.exports = Financeiro;