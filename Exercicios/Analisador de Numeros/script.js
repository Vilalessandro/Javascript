let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Numero ${num.value} aggiunto!` 
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert(`Valore non valido o gìa presente nell'elenco!`)
    }
    num.value = ''
    num.focus()
}

function finire(){
    if (valores.length == 0){
        window.alert('Per favore, aggiunge qualsiase valore!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>In totale, abbiamo ${tot} numeri registrati.</p> `
        res.innerHTML += `<p>Il numero pìu alto riportato è stato ${maior}.</p>`
        res.innerHTML += `<p>Il numero pìu basso riportato è stato ${menor}.</p>`
        res.innerHTML += `<p>La somma dei numeri riportati è ${soma}.</p>`
        res.innerHTML += `<p>La media dei valori immessi è ${media}.</p>`
    }
}

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


