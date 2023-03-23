export const loadProfile = async (idProfile) => {
    const url = `http://localhost:8080/v1/whatsapp/profile/id/${idProfile}`
    const response = await fetch(url)
    const contato = await response.json()

    return contato
}