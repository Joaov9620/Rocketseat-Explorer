export class  GithubUser{
    static search(username){
        // Resumindo =  ele vai com o dado username busca na api, pega esse dado transformar em jason
        //desestruturar os dados que quero e retorno esse dado como objeto  
        const endpoint = `https://api.github.com/users/${username}`

        return fetch(endpoint)
        .then(data => data.json())
        //desestruturando direto como argumento
        .then(({login, name, public_repos,followers}) =>({
                    login,
                    name,
                    public_repos,
                    followers
                }))
        // .catch =  poderia ser usado aqui tambem
    }
}
