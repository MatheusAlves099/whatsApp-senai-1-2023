'use strict'

// import {contatos} from "./contatos.js"
import { loadProfile } from "./contatosAPI.js"

const contatos = await loadProfile('2')

const createHeaderLeft = () => {
    const headerLeft = document.getElementById('header_left')
    headerLeft.classList.add('header_left')

    const userProfile = document.createElement('div')
    userProfile.classList.add('user_profile')

    const imgProfile = document.createElement('img')
    imgProfile.classList.add('img_profile')
    imgProfile.src = `./${contatos.img}`

    const navIconsLeft = document.createElement('nav')
    navIconsLeft.classList.add('nav_icons')

    const inputCheckbox = document.createElement('input')
    inputCheckbox.classList.add('checkbox')

    const labelCheckbox = document.createElement('label')
    labelCheckbox.classList.add('label')

    const iconMoon = document.createElement('i')
    iconMoon.classList.add('fas', 'fa-moon')

    const iconSun = document.createElement('i')
    iconSun.classList.add('fas', 'fa-sun')

    const ballCheckbox = document.createElement('div')
    ballCheckbox.classList.add('ball')

    const communityIcon = document.createElement('li')

    const iconCommunity = document.createElement('i')
    iconCommunity.classList.add('fa-solid', 'fa-users')

    const statusIcon = document.createElement('li')

    const iconStatus = document.createElement('i')
    iconStatus.classList.add('fas', 'fa-spinner')

    const newMessageIcon = document.createElement('li')

    const iconNewMessage = document.createElement('i')
    iconNewMessage.classList.add('fa-solid', 'fa-message')

    const moreOptionsIcon = document.createElement('li')

    const iconMoreOptions = document.createElement('i')
    iconMoreOptions.classList.add('fa-solid', 'fa-ellipsis-vertical')

    headerLeft.append(userProfile, navIconsLeft)

    userProfile.append(imgProfile)

    labelCheckbox.append(iconMoon, iconSun, ballCheckbox)

    navIconsLeft.append(
        inputCheckbox,
        labelCheckbox,
        communityIcon,
        iconCommunity,
        statusIcon,
        iconStatus,
        newMessageIcon,
        iconNewMessage,
        moreOptionsIcon,
        iconMoreOptions
    )

    return headerLeft
}

const createContact = (contato, index) => {
    const messages_chat = document.createElement('ul')
    messages_chat.classList.add('chat_list')

    messages_chat.addEventListener('click', () => {
        var container = document.getElementById('container_right_home')
        container.replaceChildren(createHeaderRight(index), createMessages(index), createMessageBar())
        scrollBar()
    })

    const chat = document.createElement('div')
    chat.classList.add('chat_active')

    const photo = document.createElement('img')
    photo.classList.add('img_contact')
    photo.src = `./${contato.image}`

    const details = document.createElement('div')
    details.classList.add('chat_details')

    const name = document.createElement('span')
    name.textContent = contato.name

    const message = document.createElement('span')
    message.classList.add('message_contact')
    message.textContent = contato.description

    messages_chat.append(chat)

    chat.append(photo, details, name)

    details.append(name, message)

    return messages_chat
}

const scrollBar = () => {
    window.scroll(0, document.body.scrollHeight);
}

const createHeaderRight = (index) => {
    const headerRight = document.createElement('div')
    headerRight.classList.add('header_right')

    const contactRightInfo = document.createElement('div')
    contactRightInfo.classList.add('contact_right_info')

    const contactRightImg = document.createElement('img')
    contactRightImg.classList.add('img_contact')
    contactRightImg.src = `./${contatos.contatos[index].image}`

    const contactRightText = document.createElement('div')
    contactRightText.classList.add('contact_text')

    const contactRightName = document.createElement('h4')
    contactRightName.classList.add('name_contact_right')
    contactRightName.textContent = contatos.contatos[index].name

    const contactRightStatus = document.createElement('span')
    contactRightStatus.classList.add('status_contact_right')
    contactRightStatus.textContent = contatos.contatos[index].description

    const navIconsRight = document.createElement('ul')
    navIconsRight.classList.add('nav_icons_right')

    const searchIcon = document.createElement('li')

    const search = document.createElement('i')
    search.classList.add('fa-solid', 'fa-magnifying-glass')

    const menuIcon = document.createElement('li')

    const menu = document.createElement('i')
    menu.classList.add('fa-solid', 'fa-ellipsis-vertical')

    headerRight.append(contactRightInfo, navIconsRight)

    contactRightInfo.append(contactRightImg, contactRightText)

    contactRightText.append(contactRightName, contactRightStatus)

    navIconsRight.append(searchIcon, menuIcon)

    searchIcon.append(search)

    menuIcon.append(menu)

    return headerRight
}

const createMessages = (index) => {

    const chatContainerRight = document.getElementById('container_right_home')
    chatContainerRight.classList.remove('container_home')
    chatContainerRight.classList.add('body_right');

    const chatBox = document.createElement('div')
    chatBox.classList.add('chatbox')

    contatos.contatos[index].messages.forEach((message) => {

        const myMessages = document.createElement('div')
        myMessages.classList.add('my_message')

        const friendMessages = document.createElement('div')
        friendMessages.classList.add('friend_message')

        const textMyMessage = document.createElement('span')
        textMyMessage.classList.add('text_myMessage')

        const hourMyMessage = document.createElement('span')
        hourMyMessage.classList.add('hour_myMessage')

        const textFriendMessage = document.createElement('span')
        textFriendMessage.classList.add('text_friendMessage')

        const hourFriendMessage = document.createElement('span')
        hourFriendMessage.classList.add('hour_friendMessage')

        if (message.sender == 'me') {

            textMyMessage.classList.add('text_myMessage')
            textMyMessage.textContent = message.content

            hourMyMessage.classList.add('hour_myMessage')
            hourMyMessage.textContent = message.time

            chatContainerRight.appendChild(chatBox)

            chatBox.append(myMessages, friendMessages)

            myMessages.append(textMyMessage, hourMyMessage)

        } else if (message.sender == contatos.contatos[index].name) {

            textFriendMessage.classList.add('text_friendMessage')
            textFriendMessage.textContent = message.content

            hourFriendMessage.classList.add('hour_friendMessage')
            hourFriendMessage.textContent = message.time

            chatContainerRight.appendChild(chatBox)

            chatBox.append(myMessages, friendMessages)

            friendMessages.append(textFriendMessage, hourFriendMessage)

        }
    })
    return chatBox
}

const carregarContatos = () => {
    const chat_messages = document.getElementById('chat_messages')
    const contactsMessages = contatos.contatos.map(createContact)

    chat_messages.replaceChildren(...contactsMessages)
}

const createMessageBar = () => {
    const messageBar = document.getElementById('chatInput')
    messageBar.classList.remove('chat_input_none')
    messageBar.classList.add('chat_input')
    return chatInput
}

createHeaderLeft()
carregarContatos()