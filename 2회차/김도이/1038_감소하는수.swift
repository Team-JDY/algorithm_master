import Foundation

// 감소하는 숫자
// 0~10까지는 감소하는 숫자
// 11번째부터는 20, 21 //
// 13번째부터는 30, 32, 31
// 16번째부터는 40, 41, 42, 43
// 20번째부터는 50, 51, 52, 53, 54
// 9,876,543,210 이후로는 감소하는 숫자가 없다.

let n = Int(readLine()!)! // n번째 감소하는 숫자
var list = Array(0...9)
var count = 1 // 0일 경우 해당 숫자를 반환할 것이므로
var current = 1

func searchNumber() -> Int{
    // if (0...10) ~= n { return n }
    if n == 0 { return 0 }
    // current를 n까지 키울 것
    while current < list.count {
        let num = list[current]
        let last = num % 10 // 끝자리 숫자
        current += 1
        if n == count { return num }
        if num > 9876543210 { return -1 }
        
        for i in 0..<last {
            let val = num * 10 + i
            list.append(val)
        }
        count += 1
    }
    return -1
}

print(searchNumber())
