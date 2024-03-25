function solution(weights) {
    let answer = 0
    const memo = {}
    // memo를 통해 weight 정보를 저장합니다.
    for (const weight of weights) {
        // weight 정보를 등록해두고 시작하면 중복되는 것을 줄여야 합니다.
        // 어차피 짝꿍중 둘 다 등록되었을 때 한 번 더해지기 때문에 그냥 순회를 돌아도 괜찮습니다.
        answer += memo[weight] || 0
        // 2m, 3m 쌍 확인
        answer += (memo[(weight * 2) / 3] || 0) + (memo[(weight * 3) / 2] || 0)
        // 3m, 4m 쌍 확인
        answer += (memo[(weight * 3) / 4] || 0) + (memo[(weight * 4) / 3] || 0)
        // 4m, 2m 쌍 확인
        answer += (memo[(weight * 4) / 2] || 0) + (memo[(weight * 2) / 4] || 0)
        memo[weight] = memo[weight] + 1 || 1
    }
    
    return answer
}