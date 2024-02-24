function solution(land) {
    const row = land.length
    const col = land[0].length
    const dydx = [[0, -1], [0, 1], [-1, 0], [1, 0]]
    const oilSize = {}
    let oilGroup = 2
    let answer = 0
    // 인접한 타일을 oilGroup으로 묶을 함수입니다.
    // 석유(1)일 경우 해당 땅을 oilGroup으로 저장합니다.
    const getOilTiles = (visit) => {
        const newVisit = []

        while (visit.length) {
            const [row, col] = visit.pop()
            dydx.forEach(([dy, dx]) => {
                const [r, c] = [row + dy, col + dx]
                if (land[r]?.[c] !== 1) {
                    return
                }
                land[r][c] = oilGroup
                oilSize[oilGroup]++
                newVisit.push([r, c])
            })
        }
        if (newVisit.length) getOilTiles(newVisit)
    }
    // 처음부터 끝까지 순회하면서 석유(1)인 타일에서 getOilTiles로 인접한 석유들을 하나로 묶습니다.
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (land[i][j] === 1) {
                land[i][j] = oilGroup
                oilSize[oilGroup] = 1
                getOilTiles([[i, j]], oilGroup)
                oilGroup++
            }
        }
    }
    // 0 ~ N까지 시추되는 석유 그룹들의 사이즈를 더해서 가장 큰 사이즈를 저장합니다.
    for (let i = 0; i < land[0].length; i++) {
        const oils = [...new Set(land.map((row) => row[i]))]
        answer = Math.max(
            answer,
            oils.reduce((p, c) => p + (oilSize[c] || 0), 0)
        )
    }

    return answer
}