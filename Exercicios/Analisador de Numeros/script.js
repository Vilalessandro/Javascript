let num = document.getElementById('fnum')
let lista = document.getElementById('flist')
let res = document.getElementById('res')
let valores = []

function numero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function naLista (n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (numero(num.value) && !naLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        window.alert('Valore invalido oppura già nella lista!')
    }
}

