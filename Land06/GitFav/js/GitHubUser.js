export class GithubUser{
    static search(username){
        const endpoint = `https://api.github.com/users/${username}`

      
        return fetch(endpoint)        //fetch(promesa) =  busca as coisas na internet
        .then(data => data.json())  //transformar o dado em json
        .then
        (({
            login,
            name,
            public_repos,
            followers}) => ({
            login,
            name,
            public_repos,
            followers}
        ))                          //dentro da data(json) pegar o login, name, public_repos, followers e retorna salvando eles 
                                        
        /*
        .then(data => ({
            login:  data.login,
            name: data.name,
            public_repos: data.public_repos,
            followers: data.followers
        })
        O objeto está entre parentes pois está retornando
        */
    }
}