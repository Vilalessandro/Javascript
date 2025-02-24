function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == '0' ||  Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.style.width = '250px'
        img.style.height = '250px'
        img.style.paddingTop = '5px'
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'meninoGimp.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemHomem.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'homemGimp.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosoGimp.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'meninaGimp.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemMulher.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'mulherGimp.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosaGimp.png')
            }
        }
        res.innerHTML = `Dectamos um(a) ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}