export class User{
    #id
    #name
    #email
    #photo

    constructor({id,name,email,photo}={}){
        this.#id = id
        this.#name = name
        this.#email = email
        this.#photo = photo
    }

    get id(){
        return this.#id
    }
    set id(id){
        return this.#id = id
    }

    
    get name(){
        return this.#name
    }
    set name(name){
        return this.#name = name
    }

    get email(){
        return this.#email
    }
    set email(email){
        return this.#email = email
    }

    get photo(){
        return this.#photo
    }
    set photo(photo){
        return this.#photo = photo
    }
    toObject(){
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            photo: this.photo
        }
    }
}