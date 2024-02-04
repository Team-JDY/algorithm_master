class Friend {
    constructor(name) {
        this.influence = 0
        this.netGift = {}
    }
    
    giveGiftTo(name) {
        this.influence++
        if (!this.netGift[name]) {
            this.netGift[name] = 0
        }
        this.netGift[name]++
    }
    receiveGiftFrom(name) {
        this.influence--
        if (!this.netGift[name]) {
            this.netGift[name] = 0
        }
        this.netGift[name]--
    }
}

function solution(friends, gifts) {
    const friendsObject = Object.fromEntries(friends.map((name) => [name, new Friend(name)]))

    gifts.forEach((gift) => {
        const [giver, recipient] = gift.split(' ')
        
        friendsObject[giver].giveGiftTo(recipient)
        friendsObject[recipient].receiveGiftFrom(giver)
    })

    const giftNumsForNextYear = (friend, from) => {
        const net = friend.netGift[from]

        if (net > 0) {
            return 1
        } else if (net < 0) {
            return 0
        }
        if (friend.influence > friendsObject[from].influence) {
            return 1
        }
        return 0
    }
    
    return friends.reduce((max, name) => {
        const friend = friendsObject[name]
        const giftNum = friends
            .reduce((num, from) => num + giftNumsForNextYear(friend, from), 0)
        return Math.max(max, giftNum)
    }, 0)
}