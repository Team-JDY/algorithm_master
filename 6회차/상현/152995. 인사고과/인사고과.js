function solution(scores) {
    // 이름이 완호인데 잘못봤습니다..
    const wonho = scores[0]
    let maxScore = 0
    let answer = 1
    // [0]내림, [1]오름차순으로 정렬해서 [1]의 최댓값만 maxScore에 저장해서 사용합니다.
    scores.sort((a, b) => {
            return b[0] === a[0]
                ? a[1] - b[1]
                : b[0] - a[0]
        })
    
    for (const score of scores) {
        // score[1]이 maxScore보다 작을 경우
        if (score[1] < maxScore) {
            // 완호일 경우에만 -1
            if (score === wonho) return -1
        } else {
            // 완호보다 점수 잘받았을때만 answer++
            if (wonho[0] + wonho[1] < score[0] + score[1]) answer++
            // maxScore 갱신
            maxScore = Math.max(maxScore, score[1])
        }
    }
    
    return answer
}