import Foundation

func solution(_ info:[Int], _ edges:[[Int]]) -> Int {
    var maxSheeps: Int = 0
    var visited: [Bool] = Array(repeating: false, count: info.count)
    visited[0] = true // 루트노드는 향상 양이니까 
    
    
    func dfs(_ sheepTotal: Int, _ wolfTotal: Int) {    
        if wolfTotal >= sheepTotal { return }
        else { maxSheeps = max(maxSheeps, sheepTotal) }
        // edge[0]은 부모노드숫자, edge[1]은 자식노드숫자
        for edge in edges {
            let sup = edge[0] ; let sub = edge[1]
            // 0은 양, 1은 늑대, 다음으로 가게되면 현재 상태에 양 갯수, 늑대갯수 저장한 next
            let next: [Int] = info[sub] == 0 ?[1, 0] : [0, 1]
            
            if !visited[sub] && visited[sup] {
                visited[sub] = true 
                dfs(sheepTotal + next[0], wolfTotal + next[1])
                visited[sub] = false // 이게 약간 이해가 ㅎ 
            }
        }
    }
    dfs(1, 0) // 루트노드에서 시작할 것이므로 양이 1

    return maxSheeps
}


// 하 런타임 에러... 
