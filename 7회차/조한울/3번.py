def gcd(a, b):
    return a if b % a == 0 else gcd(b % a, a)

def solution(arrA, arrB):
    answer = 0
    arrs = [arrA, arrB]
    for index, arr_now in enumerate(arrs):
        temp_num = arr_now[0]
        for num in arr_now:
            temp_num = gcd(temp_num, num)
        result = temp_num
        for target in arrs[1-index]:
            if target % temp_num == 0:
                result = temp_num // gcd(target, temp_num)
        answer = max(answer, result)

    return 0 if answer == 1 else answer