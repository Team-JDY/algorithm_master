function solution(n, m, x, y, r, c, k) {
    // [row, col]에서 목적지 [r, c]까지의 거리를 반환하는 함수입니다.
    const getDistance = (row, col) => Math.abs(row - r) + Math.abs(col - c)
    // [row, col]까지 remain으로 갈 수 있는지를 반환하는 함수입니다.
    const isAvailableTo = (row, col, remain) => {
        const distance = getDistance(row, col)
        // 맵을 벗어날 경우
        //   ? false
        //   : 도달 가능한지
        return row < 1 || row > n || col < 1 || col > m
            ? false
            : distance <= remain
    }
    // 사전순으로 dlru 저장
    const dlru = {
        d: [1, 0],
        l: [0, -1],
        r: [0, 1],
        u: [-1, 0],
    }
    let answer = ''
    let loc = [x, y]
    // 일단 목적지까지가 거리가 k보다 크면 도달할 수 없습니다.
    // 또한 목적지까지 최소거리 = 3, k = 4 같이 목적지에 도달할 수 없는 조건일 경우도 'impossible'을 반환합니다.
    if (getDistance(x, y) > k || getDistance(x, y) % 2 !== k % 2) {
        return 'impossible'
    }
    // 사전 순에서 가장 빠른 문자열을 구하고 싶기 때문에 사전 순서대로 미로를 탈출하면 됩니다.
    // 1. d로 갈 수 있는가? => + 'd'
    // 2. l로 갈 수 있는가? => + 'l'
    // 3. r로 갈 수 있는가? => + 'r'
    // 4. u로 갈 수 있는가? => + 'u'
    while (k) {
        for (const direction in dlru) {
            const [dy, dx] = dlru[direction]
            const [row, col] = [loc[0] + dy, loc[1] + dx]
            if (isAvailableTo(row, col, k - 1)) {
                answer += direction
                loc = [row, col]
                k -= 1
                break
            }
        }
    }
    
    return answer
}