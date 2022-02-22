console.clear()

const data = new Date()
const ServerDate = () => {
    const data = new Date()
        .toISOString()
        .split('.')
    const serverDate = new Date(`${data[0]}.00-1000`)
    return serverDate
}
