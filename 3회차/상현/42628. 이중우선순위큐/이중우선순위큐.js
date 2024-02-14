class Queue {
    constructor() {
        this.head = null
    }
    
    addNode(value) {
        if (!this.head) {
            this.head = { value, next: null }
        } else if (this.head.value < value) {
            this.head = { value, next: this.head }
        } else {
            let node = this.head
            while(node.next && node.next.value > value) {
                node = node.next
            }
            node.next = { value, next: node.next || null }
        }
    }
    // 1 최댓값 제거, -1 최솟값 제거
    removeNode(sort) {
        if (!this.head) {
            return
        }
        if (sort === 1) {
            this.head = this.head.next
        } else {
            let node = this.head
            while(node.next?.next) {
                node = node.next
            }
            node === this.head
                ? this.head = null
                : node.next = null
        }
    }
    get edgeValue() {
        if (!this.head) {
            return [0, 0]
        }
        let node = this.head
        while(node.next) {
            node = node.next
        }
        return [this.head.value, node.value]
    }
}

function solution(operations) {
    const queue = new Queue()
    
    operations.forEach((operation) => {
        const [command, value] = operation.split(' ')
        
        switch(command) {
            case 'I':
                queue.addNode(+value)
                break
            case 'D':
                queue.removeNode(+value)
                break
        }
    })
    
    return queue.edgeValue
}