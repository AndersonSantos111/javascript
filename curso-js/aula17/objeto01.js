let amigo = {nome: 'Paulo', idade: 19, peso: 75.6, engordar(p){
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Km`)