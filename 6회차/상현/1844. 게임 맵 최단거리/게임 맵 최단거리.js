const getNear = (x, y, map) => {
    return [[y, x - 1], [y, x + 1], [y - 1, x], [y + 1, x]]
        .filter(e => map[e[0]]?.[e[1]] === 1)
        .map(e => e.join(' '))
}
// 단순한 BFS/DFS 문제여서 BFS로 풀었습니다.
function solution(maps) {
    const map = new Map()
    const end = `${maps.length - 1} ${maps[0].length - 1}`
    let needVisit = ['0 0']
    let dist = 1
    
    maps[0][0] = 0
    
    while(needVisit.length){
        const length = needVisit.length
        
        for(let i = 0; i < length; i++){
            const cur = needVisit.shift()
            const [y, x] = cur.split(' ').map(Number)
            const near = getNear(x, y, maps)

            map.set(cur, Math.min(map.get(cur) ?? Infinity, dist))
            near.forEach(e => {
                const [y, x] = e.split(' ').map(e => +e)
                maps[y][x] = 0
            })

            needVisit = [...needVisit, ...near]
        }
        dist++
    }

    return map.get(end) ?? -1
}