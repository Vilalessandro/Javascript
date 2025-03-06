function carregar (){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minuto(s).`
    if (hora >= 0 && hora <= 12 ){
        //BOM DIA
        img.src = 'manha.jpg'
        document.body.style.background = '#ACBABF'
    } else if (hora >= 13 && hora <= 18){
        //BOA TARDE
        img.src = 'tarde.jpg'
        document.body.style.background ='#e9b2949f'
    } else {
        //BOA NOITE
        img.src = 'noite.jpg'
        document.body.style.background =' #636363b4'
    }
}