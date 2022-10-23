export class Storege{
    #table
    #storege
    constructor(table){
        this.#table = table
        this.#storege = window.localStorage
    }

    get table(){
        return this.#table
    }
    set table(table){
        return this.#table = table
    }


    async save(data){
        const id = this.#generateId()
        const key = this.#getKey(id)

        const newData = {
            ...data,
            id
        }
        this.#storege.setItem(key, JSON.stringify(newData))
        return newData
    }

    async findOne(id){
        return JSON.parse(this.#storege.getItem(this.#getKey(id)))
    }

    async findAll(){
       return Object.entries(this.#storege)
        .filter(entrie => entrie[0].startsWith(this.table))
        .map(([_, obj])=> JSON.parse(obj) )
        
    }

    async findOneAndUpdate(id,data){
        const item = await this.findOne(id)
        const newData = {
            ...item,
            ...data,
            id: item.id
        }
        
        this.#storege.setItem(this.#getKey(id), JSON.stringify(newData))
        return newData
    }

    async remove(id){
        return this.#storege.removeItem(this.#getKey(id))
    }

    async removeAll(){
        const items = await this.findAll()
        return Promise.all(items.map(item => this.remove(item.id)))
        // Promise. all -> pq remove e uma operação async e o promise.all vai liberar o then
        // quando todas operação estive feita
        

    }

    #generateId(){
        let get = ()=>{
            return Math.floor((1 + Math.random())* 0x10000)
            .toString(16)
            .substring(1)
        }

        return `${get()}-${get()}-${get()}-${get()}-${get()}-${get()}`
    }
    #getKey(id){
        return this.table+'-'+id
    }
}