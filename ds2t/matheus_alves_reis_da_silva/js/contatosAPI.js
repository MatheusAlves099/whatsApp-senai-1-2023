export const loadProfile = async (idProfile) => {
    const url = `http://localhost:8080/v1/whatsapp/profile/id/${idProfile}`
    const response = await fetch(url)
    const contato = await response.json()

    const urlImage = `http://localhost:8080/v1/whatsapp/profile/image/id/${idProfile}`
    const responseImage = await fetch(urlImage)
    const images = await responseImage.json()

    return {
        contatos: contato,
        img: images
    }
}