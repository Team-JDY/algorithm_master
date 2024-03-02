function solution(targets) {
    let answer = 0, lastLoc = 0
    // 끝나는 지점을 기준으로 오름차순 정렬
    targets.sort((a, b) => a[1] - b[1])
    
    for (let i = 0; i < targets.length; i++) {
        const target = targets[i]
        // 미사일은 끝나는 지점을 포함하지 않기 때문에
        // 시작 지점이 끝 점을 포함해도 미사일을 발사해야 합니다
        if (target[0] >= lastLoc) {
            lastLoc = target[1]
            answer++
        }
    }
    
    return answer
}