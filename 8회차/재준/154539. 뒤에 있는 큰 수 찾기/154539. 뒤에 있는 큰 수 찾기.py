def solution(numbers):
    answer = [-1] * len(numbers)    # 사전에 미리 배열의 길이만큼 -1값을 부여
    stack = []  # 스택
    
    for index,num in enumerate(numbers):
        while stack and (numbers[stack[-1]] < num): # 스택이 채워져있고, 스택의 마지막 값(인덱스)기준 num이 뒷 큰수가 아닐 경우. 루프 종료
            answer[stack.pop()] = num # 해당 인덱스기준 stack의 인덱스값보다 큰수일때 저장하고 stack의 값 제거
        stack.append(index) # 보통 바로 다음 index가 더큰수가 아닐 경우 저장
    return answer
