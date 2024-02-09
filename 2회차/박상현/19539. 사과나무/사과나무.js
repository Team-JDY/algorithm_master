const fs = require('fs')
const [N, M] = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const trees = M.split(' ').map(Number)
// 크기가 2인 물뿌리개를 사용하는 횟수와 전체 나무의 길이의 총 합을 구함
// 크기가 2인 물뿌리개의 횟수를 구하는 이유는 1은 나무의 남은 길이가 얼마든지 사용할 수 있지만,
// 2인 물뿌리개는 2이상일 경우에만 사용할 수 있기에 1인 물뿌리개보다 우선적으로 사용하게 해야함
// 거스름돈 줄때 큰거부터 계산하는 거랑 같은 원리
const [two, sum] = trees.reduce((p, c) => {
    p[0] += Math.floor(c / 2)
    p[1] += c
    return p
}, [0, 0])
// 나무 길이의 총 합이 3의 배수가 아니면 완성할 수 없음
// 한 번에 크기가 1/2인 물뿌리개를 사용 => 무조건 3씩 늘어남
if (sum % 3 !== 0) {
    console.log('NO')
} else {
    // 크기가 2인 물뿌리개 사용 횟수와 비교하는 이유
    // 크기가 2인 물뿌리개를 사용한 날 = x
    // 전체 나무를 키우는데 필요한 일수 = n
    // 2x + x(크기가 1인 물뿌리개도 같이 사용하니까) = 3n
    // 3x = 3n
    // x = n
    // 둘이 같으면 YES 틀리면 NO
    sum / 3 <= two
        ? console.log('YES')
        : console.log('NO')
}