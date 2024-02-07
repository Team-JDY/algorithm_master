import sys

n, m = map(int, input().split())
data = [list(sys.stdin.readline().strip()) for _ in range(n)]

MAX = 1  # 최솟값 지정
MIN = min(n, m)  # 최대 변 길이

for i in range(n):  # row
    for j in range(m):  # column
        for k in range(1, MIN):  # 변 길이
            if i + k < n and j + k < m:  # 범위 내 인덱스만 실행
                if data[i][j] == data[i][j+k] == data[i+k][j] == data[i+k][j+k]:  # 꼭짓점 확인
                    MAX = max((k+1) ** 2, MAX)  # 최대값 갱신

print(MAX)