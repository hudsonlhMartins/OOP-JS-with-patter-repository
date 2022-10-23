// receita pode pertece somente a 1 autor
export class Receita{
    #id
    #title
    #image
    #totalPorcoes
    #tempoPreparo
    #ingredientes
    #modoPreparo
    #autorId // pq toda receita percese somente a um autor
    
    constructor({id, title, imagem, totalPorcoes, tempoPreparo, ingredientes=[], modoPreparo, autorId}){
        this.#id = id
        this.#title = title
        this.#image = imagem
        this.#totalPorcoes = totalPorcoes
        this.#tempoPreparo = tempoPreparo
        this.#ingredientes = new Set(ingredientes)
        this.#modoPreparo = modoPreparo
        this.#autorId = autorId
    }

    get id(){
        return this.#id
    }
    set id(id){
        return this.#id = id
    }
    get title(){
        return this.#title
    }
    set title (title){
        return this.#title = title
    }
    get image (){
        return this.#image
    }
    set image(image){
        return this.#image = image
    }
    get totalPorcoes(){
        return this.#totalPorcoes
    }
    set totalPorcoes (totalPorcoes){
        return this.#totalPorcoes = totalPorcoes
    }
    get tempoPreparo(){
        return this.#tempoPreparo
    }
    set tempoPreparo (tempoPreparo){
        return this.tempoPreparo = tempoPreparo
    }
    get ingredientes (){
        return Array.from(this.#ingredientes.values())
    }
    set ingredientes(ingredientes = []){
        return this.#ingredientes = new Set(ingredientes)
    }

    addIngrediente(ingredientes){
        this.#ingredientes.add(ingredientes)
    }

    removeIngrediente(ingredientes){
        this.#ingredientes.delete(ingredientes)
        this.#ingredientes.delete(ingredientes.id)
    }

    get modoPreparo(){
        return this.#modoPreparo
    }
    set modoPreparo(modoPreparo){
        return this.#modoPreparo = modoPreparo
    }

    get autorId(){
        return this.#autorId
    }
    set autorId(autorId){
        return this.#autorId = autorId
    }
}