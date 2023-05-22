function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //Good Morning
        img.src = 'fotomanha.png'
        document.body.style.background = '#dfac1b'
    } else if(hora >= 12 && hora < 18) {
        //Good Afternoon
        img.src = 'fototarde.png'
        document.body.style.background = '#9c5b25'
    } else {
        //Good Night
        img.src = 'fotonoite.png'
        document.body.style.background = '#332021'
    }
}
