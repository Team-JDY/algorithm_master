// 00:00:00 ~ hh:mm:ss 까지 알람 횟수 구하는 함수
const getNumsOfAlarm = (hh, mm, ss) => {
    // 분당 2번씩 만남(분침, 시침)
    // 59에서 00 넘어갈땐 한번만 만나니까 시간만큼 빼줌
    // 00:00:00는 한번만 겹치니까 빼고 시작
    // 12시가 넘어가면 11:59:59에서 12:00:00일때 분침 시침 동시에 겹침,
    // 59분에서 00분 넘어갈때 분침, 시침 안겹치니까 2개 빼줌
    let nums = (hh * 60 + mm) * 2 - hh - 1 - (hh >= 12 ? 2 : 0)
    const hourDegree = (30 * (hh % 12)) + 0.5 * mm + (1 / 120 * ss)
    const minuteDegree = 6 * mm + (1 / 60 * ss)
    const secondDegree = 6 * ss
    // hh:mm:00 ~ hh:mm:ss까지 알람이 가능한지
    return nums + +(hourDegree <= secondDegree) + +(minuteDegree <= secondDegree)
}

function solution(h1, m1, s1, h2, m2, s2) {
    // 시작하는 초는 안세니까 00:00:00 or 12:00:00만 getNumsOfAlarm에서 빼준 1번을 더해줌
    return getNumsOfAlarm(h2, m2, s2) - getNumsOfAlarm(h1, m1, s1) + (!(h1 % 12) && !m1 && !s1 ? 1 : 0)
}