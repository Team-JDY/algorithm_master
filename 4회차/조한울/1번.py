def solution(land):
    answer = []
    detected = []
    width = len(land[0])
    height = len(land)
    def detect(gps):
        h = gps[0]
        w = gps[1]
        if h > 0:  # 상
            if land[h-1][w] == 1 and (h-1, w) not in detected:
                detected.append((h-1, w))
                detect((h-1, w))
        if h < height-1:  # 하
            if land[h+1][w] == 1 and (h+1, w) not in detected:
                detected.append((h+1, w))
                detect((h+1, w))
        if w > 0:  # 좌
            if land[h][w-1] == 1 and (h, w-1) not in detected:
                detected.append((h, w-1))
                detect((h, w-1))
        if w < width-1:  # 우
            if land[h][w+1] == 1 and (h, w+1) not in detected:
                detected.append((h, w+1))
                detect((h, w+1))

    for i in range(width):
        for j in range(height):
            if land[j][i] == 1 and (j, i) not in detected:
                detected.append((j, i))
                detect((j, i))
        answer.append(len(detected))
        detected = []

    return max(answer)


def solution2(land):
    width = len(land[0])
    height = len(land)
    detected = [[False for _ in range(width)] for _ in range(height)]
    result_dic = {}
    def detect(h, w):
        if h < 0 or h > height-1 or w < 0 or w > width-1 or land[h][w]==0 or detected[h][w]:
            return 0, set()
        detected[h][w] = True
        size = 1
        column = {w}
        for i, j in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            size_sum, column_sum = detect(h+i, w+j)
            size += size_sum
            column.update(column_sum)

        return size, column

    for w in range(width):
        for h in range(height):
            if land[h][w] == 1 and not detected[h][w]:
                size, columns = detect(h, w)
                for col in columns:
                    if col in result_dic:
                        result_dic[col] += size
                    else:
                        result_dic[col] = size

    return max(result_dic.values())


def solution3(land):
    width = len(land[0])
    height = len(land)
    detected = [[False for _ in range(width)] for _ in range(height)]
    result_dic = {}

    def detect(h, w):
        if land[h][w] == 0 or detected[h][w]:
            return 0, set()
        stack = [(h, w)]
        size = 0
        columns = set()
        while stack:
            h, w = stack.pop()
            if 0 <= h < height and 0 <= w < width and not detected[h][w] and land[h][w] == 1:
                detected[h][w] = True
                size += 1
                columns.add(w)
                for i, j in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                    stack.append((h + i, w + j))
        return size, columns

    for w in range(width):
        for h in range(height):
            if land[h][w] == 1 and not detected[h][w]:
                size, columns = detect(h, w)
                for col in columns:
                    result_dic[col] = result_dic.get(col, 0) + size

    return max(result_dic.values())
