import {User} from '../entities/User.js'
import {Repository} from './Repository.js'

export class UserRepository extends Repository{
    
    constructor(Storage){
        super(Storage)
        this.setStorageTable('user')
    }

    async save(user){
        const newUser = await super.save(user)
        return new User(newUser)
    }

    // getById --> findOne
    async getById (id){
        const user = await super.getById(id)

        if(!user) return null

        return new User(user)
    }

    // getALL --> findAll

    async getAll (){
        const users = await super.getAll()
        return users.map(user => new User(user))
    }

    // update --> findOneAndUpdate

    async update (user){
        const userUpdate = await super.update(user)
        return new User(userUpdate)

    }

}