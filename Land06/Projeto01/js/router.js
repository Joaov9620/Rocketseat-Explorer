export class Router{

    routes = {};

    add(routeName, pages){
        this.routes[routeName] = pages;
    }

    route(event){
        event = event ||window.event
        event.preventDefault();

        window.history.pushState({}, "", event.target.href)
        this.handle()
    }

    handle(){
        //pega o href e colocar no historico
        const {pathname} = window.location
        //salvar a rota no route
        const route = this.routes[pathname]

        fetch(route)
        .then(data => data.text())
        .then(html =>{
            document.querySelector('.app').innerHTML = html
        })
    }
}