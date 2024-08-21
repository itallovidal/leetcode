export class Stack{
    private items: number[] = []
    private counter = -1

    push(value: number){
        console.log(`Elemento ${value} adicionado à posição ${this.counter +1} da pilha.`)

        this.counter++
        this.items[this.counter] = value
    }

    pop(){
        if(this.counter === -1 ) {
            console.log(`Sem mais elementos para retirar.`)
            return undefined
        }

        console.log(this.counter)


        const lastElement = this.items[this.counter]

        console.log(`Elemento retirado -> ${lastElement}.`)

        this.items = this.items.filter((v, i)=> {
            if(i !== this.counter){
                return v
            }
        })

        this.counter--


        console.log('->')
        console.log(this.items)

        return lastElement
    }

    peek(){
        console.log(`O ultimo elemento -> ${this.items[this.counter]}.`)

        return this.items[this.counter]
    }

    size(){
        console.log(this.counter + 1)

        return this.counter + 1
    }

    isEmpty(){
        console.log(`Está vazia -> ${!(!!(this.counter + 1))}`)
        return !(!!(this.counter + 1))
    }

    show(){
        // console.log(this.counter)
        for (let i = 0; i <= this.counter; i++) {
            console.log(this.items[i])
        }
    }

    // critério de debug
    log(){
        console.log(this.items)
    }
}