const getMinSalesForOne = (memberDP) => {
    return Math.min(...memberDP.map(([x, o]) => o - x))
}

const makeTree = (links) => {
    const tree = {}
    
    links.forEach(([leader, member]) => {
        if (!tree[leader]) {
            tree[leader] = [member]
        } else {
            tree[leader].push(member)
        }
    })
    
    return tree
}

function solution(sales, links) {
    const tree = makeTree(links)
    const getMinSales = (leader) => {
        const memberDP = tree[leader]?.map(getMinSales)

        if (!memberDP?.length) {
            return [0, sales[leader - 1]]
        }
        const minimumSum = memberDP.reduce((p, c) => [
            p[0] + c[0],    // 아무도 참여 안했을 때 합
            p[1] + Math.min(...c) // 참여 상관없이 최소 합
        ], [0, 0])
        
        return [
            minimumSum[0] === minimumSum[1]
                ? minimumSum[0] + getMinSalesForOne(memberDP)
                : minimumSum[1],
            minimumSum[1] + sales[leader - 1],
        ]
    }
    
    return Math.min(...getMinSales(1))
}