let num = document.getElementById('fnum')
let list = document.getElementById('flist')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista (n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)){
        window.alert('Tudo OK')
    } else {
        window.alert('Valore invalido oppura già nella lista!')
    }
}
