from collections import Counter
def solution(weights):
    cnt_dic, answer, ws = Counter(weights), 0, set(weights)
    answer += sum(v * (v-1) // 2 for v in cnt_dic.values() if v >= 2)
    answer += sum(cnt_dic[w] * cnt_dic[w*r] for w in ws for r in [1/2, 2/3, 3/4] if w*r in ws)
    return answer