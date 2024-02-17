import Foundation

func solution(_ operations:[String]) -> [Int] {
    var queue = [Int]()
    
    for op in operations {
        let operation = op.split(separator: " ").map({String($0)})
        if operation[0] == "I" {
            queue.append(Int(operation[1])!)
        } else if operation[0] == "D" && !queue.isEmpty {
            if operation[1] == "1" {
                queue.sort()
                queue.removeLast()
            } else {
                queue.sort()
                queue.removeFirst()
            }
        }
    }
    
    return queue.isEmpty ? [0, 0] : [queue.max()!, queue.min()!]
    
}
