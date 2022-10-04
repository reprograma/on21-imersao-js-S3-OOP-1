class Avatar{
    constructor(usuario){
        this.usuario = usuario
    }

    renderComCreate() {
        const avatarDiv = document.createElement('div')
        avatarDiv.setAttribute("class", "avatar background")
    }
}