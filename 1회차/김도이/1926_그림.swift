/* 참고강의
https://www.youtube.com/watch?v=ansd5B27uJM&feature=shared
*/

// 갯수
let nm = readLine()!.split(separator: " ").map { Int(String($0))!}
let n = nm[0]
let m = nm[1]

var array = [[Int]]()

// 전체 
for _ in 0..<n {
    array.append(readLine()!.split(separator: " ").map{ Int(String($0))!})
}

var picCount = 0
var maxSize = 0

for i in 0..<n {
    for j in 0..<m {
        if array[i][j] == 1{
            let size = bfs(i,j)
            picCount += 1
            maxSize = max(maxSize, size)
        }
    }
}

internal func bfs(_ x: Int, _ y: Int) -> Int {
    var size = 1 // 일단 1이 하나 있어서 bfs 들어왔으므로
    array[x][y] = 0 
    
    let dx = [1,-1,0,0]
    let dy = [0,0,1,-1]
    
    var queue = [(x, y)]
    var idx = 0
    
    while queue.count > idx {
        let (cx, cy) = queue[idx] // 큐에 넣어놓은 x, y 값
        idx += 1
        
        for i in 0..<4 {
            let nx = cx + dx[i]
            let ny = cy + dy[i]
            
            if (0..<n) ~= nx && (0..<m) ~= ny && array[nx][ny] == 1  {
                array[nx][ny] = 0
                queue.append((nx, ny))
                size += 1
            }
        }
    }
    return size
}

print(picCount)
print(maxSize)
