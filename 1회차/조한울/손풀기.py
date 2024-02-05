# https://www.acmicpc.net/problem/1374
import heapq

n = int(input())
lectures = sorted([list(map(int, input().split())) for _ in range(n)], key=lambda x: x[1])

rooms = []
heapq.heappush(rooms, lectures[0][2])

for lecture in lectures[1:]:
    if lecture[1] >= rooms[0]:
        heapq.heappop(rooms)
    heapq.heappush(rooms, lecture[2])

print(len(rooms))


# https://www.acmicpc.net/problem/1026
import sys

n = int(input().split()[0])
data = [list(map(int, sys.stdin.readline().split())) for _ in range(2)]

result = 0

for _ in range(n):
    a_min = min(data[0])
    b_max = max(data[1])

    result += (a_min * b_max)

    data[0].remove(a_min)
    data[1].remove(b_max)

print(result)


# https://www.acmicpc.net/problem/1049
import sys, math

n, m = map(int, input().split())
data = [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

package_min = min(value[0] for value in data)
one_min = min(value[1] for value in data)

temp_one_min = one_min * 6
if temp_one_min <= package_min:
    result = one_min * n
elif temp_one_min > package_min:
    temp_list = []
    temp_list.append(package_min * math.ceil(n/6))
    temp_list.append((package_min * (n//6)) + (one_min * (n % 6)))

    result = min(temp_list)

print(result)


# https://www.acmicpc.net/problem/7568
import sys

n = int(input().split()[0])
data = [list(map(int, sys.stdin.readline().split())) for _ in range(n)]

for i in range(n):
    rank = 1
    for j in range(n):
        if data[i][0] < data[j][0] and data[i][1] < data[j][1]:
            rank += 1
    print(rank, end = " ")