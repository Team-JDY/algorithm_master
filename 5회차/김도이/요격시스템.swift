import Foundation

func solution(_ targets:[[Int]]) -> Int {
    var answer = 0
    let targets = targets.sorted(by: { prev, next in
        prev[1] < next[1] 
        // end값이 작은 순대로 정렬
       // 시작점이 앞서도 끝점이 더 길어질 수 있기 때문에                          
    })
    
    var shotPoint = 0 // 요격포인트 
    for target in targets {
        // 다음 시작점이 끝점보다 안쪽에 있을 경우 겹침 
        if target[0] >= shotPoint { // start가 end보다 클 경우
            shotPoint = target[1] 
            answer += 1
        }
    }
    return answer
}
