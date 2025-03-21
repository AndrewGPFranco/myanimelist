export enum StatusType {
    ONGOING,
    PLANNED,
    DROPPED,
    COMPLETED,
}

function getStatus(status: StatusType): string {
    switch (status) {
        case StatusType.ONGOING:
            return "Em andamento...";
        case StatusType.PLANNED:
            return "Planejando...";
        case StatusType.DROPPED:
            return "Dropado";
        case StatusType.COMPLETED:
            return "Completo";
        default:
            return "Status desconhecido";
    }
}