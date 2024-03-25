function solution(arrayA, arrayB) {
    const gcd = (a, b) => {
        const remainder = a % b
        if(remainder === 0) return b
        return gcd(b, remainder)
    }
    let answer = 0

    // 자기 손에 있는 패는 다 나눌 수 있어야 합니다.
    // 조건에 부합하는 가장 큰 양의 정수니까 최대 공약수를 기준으로 합니다.
    // 배열 A, B의 최대 공약수를 구합니다.
    const maxA = arrayA.reduce((p, c) => gcd(p, c), arrayA[0])
    const maxB = arrayB.reduce((p, c) => gcd(p, c), arrayB[0])
    let A = 0
    let B = 0
    
    // 자신의 최대 공약수의 약수 중에서 상대방 패를 나눌 수 없는 가장 큰 수를 찾습니다.
    for(let i = maxA; i > 1; i--){
        if(maxA % i !== 0) continue
        
        if(arrayB.every(card => card % i !== 0)){
            A = i
            break
        }
    }
    for(let i = maxB; i > 1; i--){
        if(maxB % i !== 0) continue

        if(arrayA.every(card => card % i !== 0)){
            B = i
            break
        }
    }
    
    return Math.max(A, B)
}