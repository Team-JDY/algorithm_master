/*
참고: https://readble-ko.tistory.com/149
문제 이해가 잘 안되어서 참고.. ㅠ 
*/

let n = Int(readLine()!)! // 사과나무갯수
var array = readLine()!.split(separator:" ").map { Int(String($0))!}
var count = 0
var sum = 0

for i in 0..<n {
    sum += array[i]
    count += array[i]/2
}

if (sum % 3 != 0 ) { print("NO") }
else if (count >= sum/3) { print("YES") } 
else { print("NO")}
