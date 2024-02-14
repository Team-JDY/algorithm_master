const projectTuple = (tuple, combination) => {
    return combination
        .map((att) => tuple[att])
        .join(' ')
}

const countTuplesWithKey = (relation, combination) => {
    return new Set(relation.map((tuple) => projectTuple(tuple, combination))).size
}

function solution(relation) {
    const CARDINALITY = relation.length
    const DEGREE = relation[0].length
    const candidateKeys = []
    const needToVisit = Array.from({ length: DEGREE }, (_, i) => [i])

    while(needToVisit.length) {
        const current = needToVisit.shift()

        if (countTuplesWithKey(relation, current) === CARDINALITY) {
            if (!candidateKeys.some((combination) => (
                combination.every((att) => current.includes(att))
            ))) {
                candidateKeys.push(current)
            }
            continue
        }
        for (let i = current.at(-1) + 1; i < DEGREE; i++) {
            needToVisit.push([...current, i])
        }
    }

    return candidateKeys.length
}