function solution(numbers) {
    const N = numbers.length
    const answer = new Array(N)
    // 자기 큰 수의 index를 저장
    const biggerIndex = new Array(N)
    answer[N - 1] = -1
    biggerIndex[N - 1] = null

    for(let i = N - 2; i >= 0; i--) {
        // 이번에 확인할 숫자
        const number = numbers[i]
        // 큰수 확인을 시작할 index
        let index = i + 1
        
        while(index != null && numbers[index] <= number) {
            index = biggerIndex[index]
        }
        biggerIndex[i] = index
        answer[i] = index ? numbers[index] : -1
    }

    return answer
}
