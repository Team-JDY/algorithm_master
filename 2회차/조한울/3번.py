import sys

_ = int(input())
heights = list(map(int, sys.stdin.readline().split()))

total_height = sum(heights)  # 나무 높이의 총합

if total_height % 3 == 0:  # 총합이 3의 배수인지 확인
    count = sum(height // 2 for height in heights)  # 2만큼 성장시키는 횟수
    if count >= total_height / 3:  # 최소한 3의 n배수 만큼은 2성장 횟수가 많아야 함
        print("YES")
    else:
        print("NO")
else:
    print("NO")