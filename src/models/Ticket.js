class Ticket {
    constructor(numeroTicket, clienteId, projetoId, parceiroId, dataAtendimento, status) {
        this.numeroTicket = numeroTicket;
        this.clienteId = clienteId;
        this.projetoId = projetoId;
        this.parceiroId = parceiroId;
        this.dataAtendimento = dataAtendimento;
        this.status = status;
        this.valores = {
            chamado: { horaAdicional: 0, km: 0 }
        };
    }

    fecharTicket() {
        this.status = 'Fechado';
    }

    adicionarValores(horaAdicional, km) {
        this.valores.chamado.horaAdicional += horaAdicional;
        this.valores.chamado.km += km;
    }

    exibirInformacoes() {
        return {
            numeroTicket: this.numeroTicket,
            clienteId: this.clienteId,
            projetoId: this.projetoId,
            parceiroId: this.parceiroId,
            dataAtendimento: this.dataAtendimento,
            status: this.status,
            valores: this.valores
        };
    }
}

module.exports = Ticket;