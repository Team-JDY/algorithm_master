import Foundation

func solution(_ n:Int, _ m:Int, _ x:Int, _ y:Int, _ r:Int, _ c:Int, _ k:Int) -> String {
    
    // let move = [[-1,0], [1,0], [0,1], [0,-1]] // l, r, u, d
    let moveX = [-1, 1, 0, 0]
    let moveY = [0, 0, 1, -1] // 순서대로 좌우상하 l,r,u,d
    let command = ["l","r","u","d"]
    
    var result: [String] = []
    
    @discardableResult
    func search(_ x: Int, _ y: Int, _ path: String, _ moveCount: Int) -> Bool {
        if moveCount == k { 
            if x == r && y == c { 
                result.append(path)
                return true
            } else { return false }
        }
        
        // l, r, u, d 순
        for i in 0...3 {
            let (nextX, nextY) = (x+moveX[i],y+moveY[i])
            
            if (0...n ~= nextX) && (0...n ~= nextY) && result.isEmpty { 
                if search(nextX, nextY, path + command[i], moveCount + 1) {
                    break
                }
            }
        }
        return false
    }
    search(x, y, "", 0)
    if !result.isEmpty { return result[0]} 
    else { return "impossible" }
    
    
}
