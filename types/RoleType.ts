export enum StatusType {
    USER,
    ADMIN,
    TESTER
}

function getRole(role: StatusType): string {
    switch (role) {
        case StatusType.USER:
            return "Usuário";
        case StatusType.ADMIN:
            return "Administrador";
        case StatusType.TESTER:
            return "Testador";
        default:
            return "Role desconhecida";
    }
}