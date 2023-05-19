import { GithubUser } from "./GithubUser.js"

//classe que vai conter a lógica dos dados
//como os dados serão estruturados
class Favorites{
    constructor(root){
        this.root=document.querySelector(root)
        this.load()
    }

    load(){
    
        this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
    }

    save(){
        //stringify = tranforma em string para salvar no localStorage
        localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
    }

    async add(userName)
    {
    //try = tente fazer isso aqui

        try
        {
            //find = econtre
            //this.entries é uma array e se o find encontra o dado ele devolve como objeto
            const userExists = this.entries.find(entry => entry.login === userName)
            if(userExists){
                throw new Error('Usuário já cadastrado!')    
            }
            //await = aguardar / espera de uma promessa e para usar essa palavra chave 
            //precisa colocar na funcão um async ,o async está dizendo que dentro terá código assincrono
            const user = await GithubUser.search(userName)
            //catch = capture{}
            if(user.login === undefined)
            {
                //throw =  desparar um novo erro
                throw new Error('Usuário não encontrado!')
            }

            // primeiro colocar o usario que pegou no github  depois espalhar eles
            this.entries = [user, ...this.entries]
            this.update()
            this.save()
        }catch(error)
        {
            alert(error.message)
        } 
    }


    delete(user){
        //
        const filteredEntries = this.entries
        .filter(entry => entry.login !== user.login)

        this.entries = filteredEntries
        this.update()
        this.save()
    }
}


//classe que vai criar a visualização e eventos do html
//através do extends estamos unindo as duas classes
export class FavoritesView extends Favorites{
    constructor(root){
        super(root) //essa linha chama o construtor de favorites passando o root

        this.tbody = this.root.querySelector('table tbody')

        this.update()
        this.onAdd()
    }

    onAdd(){
        const addButton = this.root.querySelector('.search button')
        addButton.onclick = () => {
            const {value} = this.root.querySelector('.search input')

            this.add(value)
        }
    }

    //toda vez que mudar um dado ou rodar um dado vai usar o update
    update(){
      this.removeAllTr()

        this.entries.forEach(user=>{
           const row  = this.createRow()

           row.querySelector('.user img').src = `https://github.com/${user.login}.png`
           row.querySelector('.user img').alt =`Imagem de ${user.name}`
           row.querySelector('.user a').href = `https://github.com/${user.login}`
           row.querySelector('.user p').textContent = user.name
           row.querySelector('.user span').textContent = user.login
           row.querySelector('.repositories').textContent = user.public_repos
           row.querySelector('.followers').textContent = user.followers
           row.querySelector('.remove').onclick = () =>{
            const isOk = confirm('Tem certez que deseja deletar essa linha?')
            if(isOk)
            {
                this.delete(user)
            }
           }

           //append  = funcionalidade da dom que recebe um elemento html
           this.tbody.append(row)
        })

    }

    createRow(){ 
        const tr = document.createElement('tr')

        tr.innerHTML =`
        <td class="user">
            <img src="https://github.com/Joaov9620.png" alt="">
            <a href="https://github.com/Joaov9620 " target="_blank">
                <p>João Victor</p>
                <span>Joaov9620</span>
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
                &times;
            </button>
        </td>
        `
        return tr
    }

     removeAllTr(){

        this.tbody.querySelectorAll('tr')
        .forEach((tr) => {
            tr.remove()
        }) //funcionalidade de array (para cada tr)
    }
}