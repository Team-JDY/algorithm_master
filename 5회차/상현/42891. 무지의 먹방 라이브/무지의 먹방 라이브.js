// 참고 사이트: https://gwang920.github.io/algorithm/progreammers-2-42891/
// 1. 음식을 index, time 형태로 오름차순 정렬한다. => foods
// 2. 현재 음식 시간 = foods[i].time
// 3. 현재 음식보다 오래걸리는 음식의 수 = foods.length - i (오름차순 정렬했으니까)
// 4. 현재 음식의 총량 = (foods.length - i) * (foods[i].time - 이전 최소 시간)
// 5-1. 현재 음식의 총 량이 k보다 크거나 같을 경우
//      최소 음식보다 큰 음식 중 k % (foods.length - i) 번째 음식이 정답
//      단, 0번 인덱스가 1번 음식이니까 음식의 index + 1을 정답으로 한다
// 5-2. 현재 음식의 총 량이 k보다 작을 경우
//      k에서 현재 음식의 총 량을 뺀 후 계속한다
function solution(food_times, k) {
    const { foods, sum } = food_times
        .reduce((dict, time, index) => {
            dict.foods.push({ index, time })
            dict.sum += time
            return dict
        }, { foods: [], sum: 0})

    if (sum <= k) {
        return -1
    }
    let foodSize = food_times.length
    let prevTime = 0    
    foods.sort((a, b) => a.time - b.time)
    
    for (let i = 0; k && (i < foods.length); i++) {
        if (foods[i].time <= prevTime) continue
        const { time } = foods[i]
        const foodsToEat = foodSize - i
        const timeSum = (time - prevTime) * foodsToEat
        
        if (k <= timeSum) {
            return foods
                .filter((food) => time <= food.time)
                .sort((a, b) => a.index - b.index)
                [k % foodsToEat].index + 1
        }
        k -= timeSum
        prevTime = time
    }
}