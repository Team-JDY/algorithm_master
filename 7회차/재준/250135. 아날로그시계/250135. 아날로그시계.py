def countMatchg(*time):
    hDegree = (time[0]*30+time[1]*0.5+time[2]*0.5/60)%360
    mDegree = (time[1]*6+time[2]*0.1)%360
    sDegree = time[2]*6
    
    match = -1 #00시00분00초를 제외

    # 초침이 분침과 시침보다 앞서 있을 경우, 일치 횟수를 증가시킵니다.
    if sDegree >= mDegree : match += 1
    if sDegree >= hDegree : match += 1
    

    match += (time[0]*60+time[1])*2
    match -= time[0]
    
    if time[0] >= 12 : match -= 2
    
    return match

def solution(h1, m1, s1, h2, m2, s2):
    answer = countMatchg(h2,m2,s2) - countMatchg(h1,m1,s1)

    # 00시00분00초거나 12시00분00초인 경우, 일치 횟수에 1 증가
    if (h1 == 0 or h1 == 12) and m1 == 0 and s1 == 0 : answer += 1
    return answer