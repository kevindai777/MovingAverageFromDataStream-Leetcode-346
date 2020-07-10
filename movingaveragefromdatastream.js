//Objective is to design a class that will add values to it's base
//and return it's average as new values are being added in. Once 
//the class reaches full capacity, it removes the first element added in


//Design of the class using a queue to hold the values.

class Average {
    constructor(size) {
        this.size = size 
        this.queue = []
        this.result = 0
    }

    next(val) {
        //Add the value to the queue unconditionally
        this.queue.push(val)

        //If the size is 3 but we have 4 elements,
        //we need to remove the first element and thus
        //subtract that element from our result as well
        while (this.queue.length > this.size) {
            this.result -= this.queue.shift()
        }

        //Add the value to the result unconditionally
        this.result += val 
        return this.result / this.queue.length 
    }
}

let test = new Average(4)
test.next(5)
test.next(7)