import { GithubUser } from "./GitHubUser.js"

// classe da lógica dos dados
class Favorites{

    constructor(root){
        this.root = document.querySelector(root)
        this.load()
    }

    //carregamento dos dados
    load(){     
        /*
            tranformar os os dados em array pois antes estava como array em string  e salva nas entradas
            Caso o item estiver vazio ele transforma em array
        */
        this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
    } 
    
    //salvar as entradas no local storage
    save(){
        //tranformar os entries que é em array para json para salvar no local storage
        localStorage.setItem('@github-favorites:', JSON.stringify(this.entries)) 
    }

    //remove o usuário
    delete(user){
        //esta linha esta recriando um array, onde ele ver o que retornar nesse array , false ou true. False  elimina do array e true colocar no array
        const filteredEntries = this.entries
        .filter(entry => entry.login !== user.login) ////se o login for diferente 

        this.entries = filteredEntries
        this.update()
        this.save()
    }

    //recebe o nome do usuário para fazer a buscar
    async add(userName){
        //a estruturar a baixo tentar fazer o código e se der errado
        //try = tenter
        try{
            //verificar se o usuário já existe
            const userExist = this.entries.find(entry => entry.login.toUpperCase() === userName.toUpperCase())
            //o valor boolean nao chega na constante verificar isso!
            console.log(userExist)
            if(userExist){
                throw new Error('Usuário já cadastrado')
            }
            const user = await GithubUser.search(userName)

            if(user.login === undefined){
                throw new Error("Usuário não encotrado!")
            }

            //pegar os entries e adicionar o novo usuário
            this.entries = [user, ...this.entries]  //espalhar o array e colocar o novo usuário em primeiro
            this.update()
            this.save()
    
        }catch(error) //cath = capture o error(tratamento de error)
        {   
            alert(error.message)
        }
        
    }
}

//visualização dos dados
export class FavoritesView extends Favorites{  
    constructor(root){
        super(root) 

        // o tbody é criado nessa linha pois outras funções abaixo o recebem(como se fosse uma variavel global)
        this.tbody = this.root.querySelector('table tbody')
        this.update()
        this.onAdd()

    }

    //sempre que houver uma alteração ná página os dados é atualizado(ele remove tudo e reenscreve com os novos entries)
    update()
    {
        this.removeAllTr()


        //para cada entrada eue prenche com os novos dado o html 
        this.entries.forEach(user => 
            {
                //pega o html atraves da função
                const row = this.createRow()

                //alterar os dados com o novo usuário
                row.querySelector('.user img').src = `https://github.com/${user.login}.png`
                row.querySelector('.user img').alt =`Imagem de ${user.name}`
                row.querySelector('.user a').href = `https://github.com/${user.login}`
                row.querySelector('.user p').textContent = user.name
                row.querySelector('.user span').textContent = user.login
                row.querySelector('.repositories').textContent = user.public_repos
                row.querySelector('.followers').textContent = user.followers
                row.querySelector('.remove').onclick = () =>
                {
                    const isOk = confirm('Tem certez que deseja deletar essa linha?')
                    if(isOk)
                    {
                        this.delete(user)
                    }
                }
                //carrega os dados para o html
                this.tbody.append(row)
            }
        )
        this.hide()
    }

    //pegar o nome do usuário para fazer a busca
    onAdd(){
        const addButton = this.root.querySelector('.search button')
        addButton.onclick = () => {
            const {value} = this.root.querySelector('.search input') //pega o valor que tem dentro do input
            this.add(value)
        }

    }

    //Funções abaixo são chamadas no update()

    //criando o html
    createRow(){
        const tr  = document.createElement('tr')
        tr.innerHTML = `
        <td class="user">
            <img src="https://github.com/Joaov9620.png" alt="">
            <a href="https://github.com/Joaov9620 " target="_blank">
                <p>João Victor</p>
                /<span>Joaov9620</span>
            </a>
        </td>
        <td class="repositories">
            76
        </td>
        <td class="followers">
            104
        </td>
        <td>
            <button class="remove">
                Remover
            </button>
        </td>
     `  
     return tr
    }

    //removendo todos os html
    removeAllTr(){
       this.tbody.querySelectorAll('tr')
        .forEach((tr) =>{
            tr.remove()
        })
    }

       //se o banco estiver vazio ele mostrar uma tela
       hide(){
        const hide = document.querySelector('.noFavorites')
        if(this.entries.length != 0){
          
            hide.classList.add('hide')
        }else{
            hide.classList.remove('hide')
        }
    }
}