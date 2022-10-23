import {Author} from '../entities/Author.js'

export class AuthorRepository{
    #lstorage
    constructor(Storage){
        this.#lstorage = new Storage('author')
    }

    async save(author){
        const newAuthor = await this.#lstorage.save(author.toObject())
        return new Author(newAuthor)
    }

    // getById --> findOne
    async getById (id){
        const author = await this.#lstorage.findOne(id)

        if(!author) return null

        return new Author(author)
    }

    // getALL --> findAll

    async getAll (){
        const authors = await this.#lstorage.findAll()
        return authors.map(author => new Author(author))
    }

    // update --> findOneAndUpdate

    async update (author){
        // esse author e uma instacia de Author
        const id = author.id // como e uma instacia da class author e essa class tem um getId para pegar o id
        const authorUpdate = await this.#lstorage.findOneAndUpdate(id, author.toObject())
        return new Author(authorUpdate)

    }

    async remove (id){
        if(!id) return null

        return this.#lstorage.remove(id)
    }

    async removeAll (){
        return this.#lstorage.removeAll()
    }
}