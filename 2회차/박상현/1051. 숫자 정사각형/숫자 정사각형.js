const fs = require('fs')
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const [N, M] = input.shift().split(' ').map(Number)
let max = 0
// 현재 가장 큰 사각형보다 작을때는 비교할 필요가 없으니 (사각형 크기 - max) 까지만
for(let i = 0; i < N - max; i++) {
  for(let j = 0; j < M - max; j++) {
    // 현재 위치의 숫자
    const num = input[i][j]
    // max보다 클때만 보면 되니까 max + 1부터 확인
    // 현재 위치에서 확인할 길이(k)가 사각형을 벗어나지 않는 범위에서 길이(k) 증가시키면서 확인
    for(let k = max + 1; i + k < N && j + k < M; k++) {
      // 각 꼭짓점이 현재 위치의 숫자와 같다면 max를 현재 길이(k)로 변경
      if ([input[i + k][j], input[i][j + k], input[i + k][j + k]]
        .every((value) => value === num)
      ) {
        max = k
      }
    }
  }
}

console.log((max + 1) ** 2)