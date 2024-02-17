import Foundation

func solution(_ genres:[String], _ plays:[Int]) -> [Int] {
    var answer = [Int]()
    var genreDict = [String:[[Int]]]()
    
    /// ["장르": [ [인덱스, 재생횟수], [인덱스, 재생횟수]], ...]
    for i in 0..<genres.count {
        if genreDict[genres[i]] != nil {
            genreDict[genres[i]]!.append([i, plays[i]])
        } else {
            genreDict[genres[i]] = [[i, plays[i]]]
        }
    }
    
    // 재생횟수 총합이 많은 장르 순대로 딕셔너리 정렬
    let sorted = genreDict.sorted { (former, latter) in
        // [인덱스, 재생횟수] 이므로 $0[1]
        // reduce 로 합 구하기
        return former.value.map { $0[1]}.reduce(0, +) > latter.value.map { $0[1]}.reduce(0, +)
    }
    
    // 딕셔너리 안에서 정렬
    for i in 0..<sorted.count {
        // 딕셔너리 안에 있는 배열 기준으로 재생횟수가 큰 것을 앞으로 보내기
        // 재생횟수가 같은 노래일 경우 고유번호가 낮은 노래가 앞이어야하기 때문에 former == latter 일 경우 false
        let item = sorted[i].value.sorted { (former, latter) in
            return former[1] == latter[1] ? false : former[1] > latter[1]
        }
        for j in 0..<item.count {
            if j > 1 {
                // 2개씩이므로
                break
            }
            answer.append(item[j][0])
        }
    }
    
    return answer
}
