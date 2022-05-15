export enum Modalidad {
    Teleconsulta = "Teleconsulta",
    EnConsultorio = "EnConsultorio",
}

export enum StatusConsulta {
    cancelada = 0,
    porAsignarFechaySinConfirmar = 1,
    conFechaHoraSinConfirmar = 2,
    conFechaHoraConfirmada = 3,
    enProceso = 4,
    finalizada = 5,
}

// status = porAsignarFechaySinConfirmar
// status = conFechaHoraSinConfirmar
// status = conFechaHoraConfirmado / status = Cancelada
// status = enProceso
// status = Finalizada
