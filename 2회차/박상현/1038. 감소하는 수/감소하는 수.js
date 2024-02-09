const fs = require('fs')
let input = +fs.readFileSync("/dev/stdin").toString().trim()
// 현재 조건을 만족하는 숫자를 만드는 함수
const makeNumber = (tensDigit, num, remain, dp) => {
  if (remain === 0) {
    // num 으로 시작하는 숫자의 가장 첫 숫자를 반환한다
    // 한 자리 수 = x
    // 여러 자리 수 = x___ -> 0에서 남은 자릿수 거꾸로 해서 붙인거
    return tensDigit === 0
      ? String(num)
      : String(num) + Array.from({ length: tensDigit }, (_, i) => i).reverse().join('')
  }
  const nums = dp[tensDigit][num]
  return nums > remain
    ? String(num) + makeNumber(tensDigit - 1, 0, remain, dp) // 다음 단위로
    : makeNumber(tensDigit, num + 1, remain - nums, dp) // 다음 숫자로
}
// 한 자릿 수 제외
if (input < 10) {
    console.log(input)
    return
}
// 한 자릿 수일 경우는 제외했으니, input에서도 빼줌
input -= 10
// 숫자 길이, 시작 숫자로 가능한 조합을 저장할 dp
const dp = Array.from({ length: 10 }, () => [])
dp[0] = new Array(10).fill(1)
// 자릿수
let tensDigit = 1
// 시작 숫자
let num = 0

while (input >= 0) {
  // tensDigit 길이, num으로 시작하는 숫자가 가능한 갯수
  // 0으로 시작할 경우 한자릿 수일때만 1이고 나머지는 0
  const nums = dp[tensDigit][num] = num === 0
    ? dp[tensDigit][num] || 0
    : dp[tensDigit][num - 1] + dp[tensDigit - 1][num - 1]

  // 현재 가능한 숫자의 개수가 정답까지 남은 개수보다 많으면
  // num으로 시작하는 현재 자릿수에 정답이 있음
  // 정답 === num으로 시작하는 testDigit 길이의 문자 중 남은 input 번째 숫자
  if (nums > input) {
    console.log(makeNumber(tensDigit, num, input, dp))
    break
  }
  // 남은 input의 개수가 현재 가능한 조합보다 많으면
  // 남은 개수에서 현재 가능한 개수를 뺀다
  input -= nums
  // 9로 시작할 경우 다음에 시작할 숫자는 0이고 자릿수를 하나 증가시킨다
  // 아닐 경우 시작할 숫자만 증가시킨다
  if (num === 9) {
    num = 0
    tensDigit++
  } else {
    num++
  }
  // 감소하는 수의 최대 자릿수는 10개니까 그 이상일 경우 정답이 없다
  // '9876543210'
  if (tensDigit > 9) {
      console.log(-1)
      break
  }
}