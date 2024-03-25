function solution(storey) {
    let answer = 0
    // 각 자리수 별로 필요한 돌의 개수를 합쳐서 더하는 방식
    while(storey) {
        const one = storey % 10
        
        // 자리수가 6 이상일 경우 +1을 눌러서 10의 자리를 늘린 후 -10을 하는게 더 효율적이다.
        if(one > 5) {
            storey += 10
            answer += 10 - one
        // 자리수가 5일 경우 다음 자리수가 6이상이라면 +5를 해서 다음 자리수를 늘리는게 더 효율적이다.
        // 코드는 5이상일 경우 +5를 하도록 되어있는데 5일 경우는 더하든 빼든 상관없으니 그냥 넘어가자.
        // ex) 65(+5) -> 70(+30) -> 100(-100) = 9
        // ex) 65(-5) -> 60(+40) -> 100(-100) = 10
        } else if(one === 5 && storey / 10 % 10 > 5) {
            storey += 10
            answer += 10 - one
        } else {
        // 1, 2, 3, 4또는 위의 조건을 만족하지 않는 5일 경우 그냥 빼주면 된다.
            answer += one
        }
        // 다음 자리수로 변경
        storey = Math.floor(storey / 10)
    }
    
    return answer
}