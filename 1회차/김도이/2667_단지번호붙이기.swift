/* 
DFS
참고: https://www.youtube.com/watch?v=3_eVkTkBbJE
https://sapjilkingios.tistory.com/entry/SwiftDFS-%EB%B0%B1%EC%A4%80-2667%EB%B2%88-%EB%8B%A8%EC%A7%80%EB%B2%88%ED%98%B8%EB%B6%99%EC%9D%B4%EA%B8%B0
*/

let n = Int(String(readLine()!))!
var arr = [[Int]]()
for _ in 1...n {
    arr.append(readLine()!.map { Int(String($0))!})
}
var visited = Array(repeating: Array(repeating: false, count: n), count: n)

let dx = [0, 0, 1, -1]
let dy = [1, -1, 0, 0]

var count = 0

var result = [Int]()
for i in 0..<n {
    for j in 0..<n {
        if arr[i][j] == 1 && !visited[i][j] {
            count = 0
            dfs(i, j)
            result.append(count)
        }
    }
}

private func dfs(_ x: Int, _ y: Int) {
    count += 1
    visited[x][y] = true
    for i in 0..<4 {
        let nx = x + dx[i]
        let ny = y + dy[i]
        
        if (0..<n) ~= nx && (0..<n) ~= ny {
            if arr[nx][ny] == 1 && !visited[nx][ny] {
                dfs(nx, ny) 
            }
        }
    }
}

print(result.count)
result.sort()
print(result.map{String($0)}.joined(separator: "\n"))

