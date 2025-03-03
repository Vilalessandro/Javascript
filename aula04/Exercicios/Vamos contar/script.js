function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp') 
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = '<strong>Impossivel contar, falta alguma coisa \u{1FAE4}</strong>'
        //window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        res.innerHTML = '<strong>Contando:</strong> <br> '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if (p <= 0){
            window.alert('Passo inválido. Começando do PASSO 1')
            p = 1
        }
        /* c recebe i(inicio) Enquanto o c, for menor ou igual o f(fim), o c soma e recebe o p(passo)  */
        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p)  {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}