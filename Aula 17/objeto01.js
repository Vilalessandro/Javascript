var amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 84.5,
    engordar(p=0){
        this.peso += p
    }
}

amigo.engordar(5)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)