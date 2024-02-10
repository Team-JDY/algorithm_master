// 읽어오기
let condition = readLine()!.split(separator:" ").map { Int(String($0))!}
let (n,m) = (condition[0], condition[1])
var array = [[Int]]()
for _ in 0..<n {
    let input = Array(readLine()!).map { Int(String($0))!}
    array.append(input)
}

// 정사각형 최대사이즈
let length = min(n,m)

/// 꼭지점 숫자가 모두 같은 사각형 찾기
func findSqureWithSameVertices(_ x: Int, _ y: Int, _ len: Int) -> Bool {
    // 기준값
    let value = array[x][y]
    // 우상, 우하, 좌하까지 값이 같은지 확인
    return value == array[x][y+len] && value == array[x+len][y] && value == array[x+len][y+len]
}

// 최소 숫자
// 조건이 일치하지 않으면 정사각형 크기는 무조건 1일 것이므로
var answer = 1

// 큰 숫자에서부터 줄어들기 때문에 바로 나갈 수 있음
loop: for len in stride(from:length, to:0, by:-1) {
    for i in 0...n-len {
        for j in 0...m-len {
            if findSqureWithSameVertices(i, j, len-1) {
                answer = len*len
                break loop
            }
        }
    }
}

print(answer)
