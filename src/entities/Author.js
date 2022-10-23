// autor pode ter 0 a n receitas
// autor tem que ser um user, por isso que pegamos o userId pq esta 1:1

export class Author{
    #id
    #receitas
    #userId

    constructor({id, receitas=[], userId}){
        this.#id = id
        this.#receitas = new Set(receitas)
        this.#userId = userId
    }

    get id(){
        return this.#id
    }
    set id(id){
        return this.#id = id
    }

    get receitas(){
        return  Array.from(this.#receitas.values())
    }
    set receitas(receitas){
        return this.#receitas = new Set(receitas)
    }

    addReceita(receita){
        this.#receitas.add(receita)
    }
    removeReceita(receita){
        this.#receitas.delete(receita)
        this.#receitas.delete(receita.id)
    }

    get userId(){
        return this.#userId
    }
    set userId(userId){
        return this.#userId = userId
    }

    toObject(){
      return {
          id: this.id,
          receitas: this.receitas,
          userId: this.userId
      }
    }
}