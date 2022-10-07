// como criar uma "classificação" da nossa entidade para modelar os nossos atributos.

//class User {

//}

// como atribuir valores a nossa classe?

class User {
    constructor(name, email, password){ //referenciando para a classe conseguir criar um objeto com esses valores
        this.name = name;
        this.email = email;
        this.password = password;

    }

    getName() {
        return 'Seja bem vinde, ${this.name}'
    }

}


const user1 = new User("Deborah", "debbsgomes@gmail.com", "senha420");
const user2 = new User("Deborah", "debbsgomes@gmail.com", "senha420");
const user3 = new User("Deborah", "debbsgomes@gmail.com", "senha420");



console.log(user1, user2, user3)

console.log(user1.getName())

/*const createUser = {
    name: "Deborah",
    email: "debbsgomes@gmail.com",
    password: "senha420"
}

createUser.map( user => {
    const createPerfil = new User()
})*/




// o constructor vai nos auxiliar a receber nossos atributos.
// o que está dentro do constructor é um atributo e o this é usado para acessar esses atributos.
// metodos são funções.
// o this está fazendo referência ao atributo, o constructor precisa dessa referência para atribuir qualquer tipo de valor. Estamos contestualizando um atributo.
// o que está dentro dos parentes do constructor é pra mostrar oq terá que ser atribuido quando a gente instanciar o objeto.
// o this.name é como se fosse uma variável dentro da classe, não é o mesmo do parâmetro.
// como a gente tem o mesmo nome, usa o this para saber que é o atributo da classe e não o parâmetro que a gente recebeu.
// new é uma instância, você pega uma classe para criar um objeto.
// a classe é o desenho da casa e a instancia é a casa construida
// o map é um iterador que retorna um array de dados
// método é a ação que eu vou fazer com os dados que eu tenho
// o parametro a ser usado nos metodos é o this

