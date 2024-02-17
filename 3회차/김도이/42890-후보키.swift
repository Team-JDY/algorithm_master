// 다른 풀이 보면서 하는데도 어렵네요 흑 

import Foundation

func solution(_ relation:[[String]]) -> Int {
    var (row, col) = (relation.count, relation[0].count) // 갯수
    var colList = [[String]](repeating: [], count: col)  // 컬럼리스트 e.g. 100/ryan/music/2

    for i in 0..<colList.count {
        for j in relation {
            colList[i].append(j[i]) // column 요소끼리 배열로 들어가게된다. 100/200/300... | ryan, apeach, tube... 
        }
    }

    /// 후보키 만들기 
    /// 후보키가 되는 모든 조합 
    func combineCandidateKeys(_ arr: [Int]) -> Bool {
        var flag = true
        var dict = [String:Int]()

        for i in (0..<row) {
            var candiKey = "" // 후보키조합
            for colIdx in arr { 
                candiKey += colList[colIdx][i]+"x" // 결합했을 때 같아지는 케이스를 방지하기 위해서 
            }
            if let _ = dict.updateValue(0, forKey: candiKey) { 
                flag = false // 후보키 조합이 있을 경우 false
                break
            }
        }
        return flag
    }

    var answer = 0
    var correction = Set<[Int]>()

    for r in 1...colList.count {
        var tmp = [Int](repeating:0, count: r) 

        if r > colList.count {
            break
        }

        /// 
        func dfs(step: Int, next: Int, r: Int) {
            if step == r {
                if combineCandidateKeys(tmp) {
                    for elem in correction { 
                        if Set(tmp).isSuperset(of: Set(elem)) { // 최소성을 만족하는지 체크 
                            return
                        }
                    }
                    correction.insert(tmp)
                answer += 1
                }
                return
            }

            for i in next..<colList.count {
                tmp[step] = i
                dfs(step: step + 1, next: i + 1, r: r)
            }
        }
        dfs(step: 0, next: 0, r: r)
    }

    return answer
}
