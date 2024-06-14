import sys
from collections import deque

def solution(land):
    answer = 0
    
    n = len(land)
    m = len(land[0])
    check = [[False] * m for i in range(n)] # n,m 전체 범위 False 처리
    result = [0 for i in range(m)]

    for i in range(n): 
        for j in range(m):
            if not check[i][j] and land[i][j] == 1:
                bfs(i, j, check, n, m, land, result)

    answer = max(result)

    return answer

def bfs(x, y, check, n, m, land, result):
    queue = deque([(x, y)])
    check[x][y] = True # 중복방문 방지 
    areaAmount = 0
    
    startY, endY = sys.maxsize, -sys.maxsize

    while queue: 
        cx, cy = queue.popleft()
        areaAmount += 1
        startY, endY = min(startY, cy), max(endY, cy)

        for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nx = cx + dx
            ny = cy + dy

            if 0 <= nx < n and 0 <= ny < m and not check[nx][ny] and land[nx][ny] == 1:
                queue.append((nx, ny))
                check[nx][ny] = True
    
    for col in range(startY, endY + 1):	# 해당 col범위에 대해 석유량 누적
        result[col] += areaAmount