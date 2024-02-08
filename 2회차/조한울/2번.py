# Try1
n = int(input())

if n == 0:  # 0 예외처리
    print(0)
    exit()

result = -1
count = 0
goal_flag = False  # 재귀 탈출 용도

def gen_number(num, max_digit):
    global count, result, goal_flag  # 전역변수화
    if goal_flag:  # 재귀 탈출
        return
    if len(str(num)) == max_digit:  # 자릿수 도달
        count += 1
        if count == n:  # 요청 갯수 도달
            goal_flag = True
            result = num
            return
        return
    alpha_range = num % 10  # 마지막 자리 숫자 탐색
    for alpha in range(0, alpha_range):  # 상위 자릿수 재귀 연산
        gen_number(num * 10 + alpha, max_digit)

for dg in range(1, 11):  # 자릿수 (최대 가능 숫자 9876543210 10자리 숫자)
    if goal_flag: break
    for num in range(1, 10):  # 맨 앞자리 숫자
        if goal_flag: break
        gen_number(num, dg)

print(result)


# Try2
n = int(input())

def total_number(num, length):
    if length > 10:  # 최대 가능 숫자 9876543210 10자리 숫자
        return
    result_list.append(num)
    for alpha in range(0, num % 10):  # 상위 자릿수 재귀 연산
        total_number(num * 10 + alpha, length + 1)

result_list = []  # 전체 감소하는 수 저장 리스트
for i in range(10):  # 맨 앞자리 숫자
    total_number(i, 1)

result_list.sort()  # 리스트 오름차순 정렬

if n < len(result_list):
    print(result_list[n])
else:
    print(-1)