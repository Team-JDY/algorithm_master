data1 = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]
data2 = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]

def solution(maps):
    width, height = len(maps[0]), len(maps)
    detect_map = [[False for _ in range(width)] for _ in range(height)]
    result_list = []
    if maps[height-2][width-1] == 0 and maps[height-2][width-2] == 0 and maps[height-1][width-2] == 0:
            return -1
    def detection(h, w, dist):
        if (h, w) == (height-1, width-1):
                result_list.append(dist)
                return

        for i, j in [(-1, 0), (1, 0), (0, -1), (0, 1)]:  # 상 하 좌 우
                if 0 <= h+i < height and 0 <= w+j < width and maps[h+i][w+j] == 1 and not detect_map[h+i][w+j]:
                        detect_map[h][w] = True
                        detection(h+i, w+j, dist+1)
                        detect_map[h][w] = False
        return
    detection(0, 0, 1)

    return min(result_list)

solution(data1)


from collections import deque

def solution(maps):
    h, w = len(maps), len(maps[0])
    visited = [[False for _ in range(w)] for _ in range(h)]
    queue = deque([(0, 0, 1)])

    while queue:
        y, x, dist = queue.popleft()

        if y == h - 1 and x == w - 1:
            return dist

        for i, j in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            ny, nx = y+j, x+i
            if 0 <= ny < h and 0 <= nx < w and maps[ny][nx] == 1 and not visited[ny][nx]:
                visited[ny][nx] = True
                queue.append((ny, nx, dist+1))

    return -1

solution(data1)