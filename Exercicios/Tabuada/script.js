function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value) //Quando cria uma variavel, ele vem como String, dai a conversão para numero.
        let c = 1
        tab.innerHTML = ""
        while(c <=10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}` 
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}