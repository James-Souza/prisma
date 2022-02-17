console.clear()
const data = new Date().toISOString()

const dataUTC = data.split('.')
console.log(dataUTC)


const dataAtual = `${dataUTC[0]}.${'00-1100'}`
const novaData = new Date(dataAtual)

console.log('')
console.log(`UTC: ${novaData.toUTCString()}`)
console.log(`Data Editada: ${novaData}`)
console.log(`Texto: ${dataAtual}`)
console.log('')
