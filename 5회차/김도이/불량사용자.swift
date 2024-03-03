// 런타임 에러 

import Foundation

func solution(_ user_id:[String], _ banned_id:[String]) -> Int {
    // 밴 유저일 수 있는 유저 인덱스 저장
    var indicesArr: [[Int]] = Array(repeating: [], count: banned_id.count)
    //  정답 저장
    var answers = Set<[Int]>()
    
    // user와 band 비교하고 매핑이 가능한 경우면 유저 인덱스를 저장하기
    for userIdx in 0..<user_id.count {
        for banIdx in 0..<banned_id.count {
            // 글자길이가 같을 경우 비교 
            if user_id[userIdx].count == banned_id[banIdx].count {
                // 매핑할 수 있을 경우 저장
                if canMapped(user_id[userIdx], banned_id[banIdx]) {
                    indicesArr[banIdx].append(usrIdx)
                }
            }
        }
    }
    
    // 조합 구하기
    func visit(_ array: [Int], _ next: Int) {
        if array.count == banned_id.count {
            // 정렬하여 넣기 
            answers.insert(array.sorted())
        } else {
            if indicesArr.count > next {
                for i in indicesArr[next] {
                    if !array.contains(i) {
                        visit(array+[i], next+1)
                    }
                }
            }
        }
    }
    
    for i in indicesArr[0] {
        visit([i], 1)
    }
    
    return answers.count
}

// 단어 중간에 *이 들어가도 매칭될 수 있는지 판단 
func canMapped(_ original: String, _ masked: String) -> Bool {
    // 캐릭터 배열로 변경
    let original = Array(original)
    let masked = Array(masked)
    for i in 0..<original.count {
        if original[i] != masked[i] && masked[i] != "*" {
            return false
        }
    }
    return true
}


