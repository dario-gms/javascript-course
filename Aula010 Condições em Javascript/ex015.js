var agora = new Date()
var diaSem = agora.getDay()
/*
    0 - Domingo
    1 - Segunda
    3 - Terça
    4 - Quarta
    5 - Quinta
    6 - Sexta
*/

switch (diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia Inválido!')
}