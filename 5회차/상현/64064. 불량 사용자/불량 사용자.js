function solution(user_id, banned_id) {
    // banned된 아이디를 정규표현식으로 변경
    const bannedRegExp = banned_id.map(e => '^' + e.replace(/\*/g, '.') + '$')
    // 정규표현식 별로 매치된 아이디를 배열로 저장
    const matchedIds = bannedRegExp.map((regExp) => user_id.filter((id) => id.match(regExp)))
    const combinations = new Set(
        matchedIds
            .reduce((p, c) => {
                // 이전 조합에서 중복되는 id가 있을 경우 스킵
                // 없을 경우 이전 조합에 id를 포함해서 새로운 조합을 만듦
                const newCombination = []
                c.forEach((id) => {
                  p.filter((set) => !set.includes(id)).forEach((set) => {
                      newCombination.push([...set, id])
                  })
                })
                return newCombination
            }, [[]])
            // 이차원 배열로 set을 만들수 없어서 ' ' 를 붙여서 문자열로 변환
            .map((set) => set.sort().join(' '))
    )

    return combinations.size
}