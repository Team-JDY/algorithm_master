function solution(info, edges) {
    // 그래프 정보를 저장할 배열입니다.
    // index: 부모 노드
    // value: 자식 노드 배열
    const graph = Array.from({ length: info.length }, () => [])
    for (const [p, c] of edges) {
        graph[p].push(c)
    }

    const dfs = (cur, farm, candidates) => {
        // 현재 노드를 다음 방문 노드에서 제거
        candidates.splice(candidates.indexOf(cur), 1)
        // 늑대 또는 양의 수 추가
        farm[info[cur]]++
        // 늑대가 양보다 크거나 같을 경우 현재 양의 마리수를 반환
        if (farm[0] <= farm[1]) {
            return farm[0]
        }
        graph[cur]?.forEach((node) => candidates.push(node))

        return Math.max(
            farm[0],
            // 항상 다음 방문할 노드들과 농장 현황을 복사해서 전달해야 다른 함수들에 영향을 미치지 않습니다.
            ...candidates.map((cur) => dfs(cur, [...farm], [...candidates]))
        )
  }

  return dfs(0, [0, 0], [0])
}