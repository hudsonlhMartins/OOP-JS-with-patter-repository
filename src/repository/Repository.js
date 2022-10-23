

export class Repository{
    #lstorage
    constructor(Storage){
        this.#lstorage = new Storage
    }

    setStorageTable (table){
        this.#lstorage.table = table
    }

    async save(resource){
        const newResource = await this.#lstorage.save(resource.toObject())
        return newResource
    }

    // getById --> findOne
    async getById (id){
        const resource = await this.#lstorage.findOne(id)

        if(!resource) return null

        return resource
    }

    // getALL --> findAll
    async getAll (){
        const resources = await this.#lstorage.findAll()
        return resources
    }

    // update --> findOneAndUpdate
    async update (resource){
        const id = resource.id
        const resourceUpdate = await this.#lstorage.findOneAndUpdate(id, resource.toObject())

        return resourceUpdate

    }

    async remove (id){
        if(!id) return null

        return this.#lstorage.remove(id)
    }

    async removeAll (){
        return this.#lstorage.removeAll()
    }
}