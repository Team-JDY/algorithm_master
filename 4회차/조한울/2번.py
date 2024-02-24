def solution(n, m, x, y, r, c, k):
    routes = []
    direction = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    index = ["u", "d", "l", "r"]

    stack = [[x, y, 0, ""]]
    while stack:
        now_x, now_y, move_count, path = stack.pop()

        if move_count > k:
            continue

        if move_count == k and (now_x, now_y) == (r, c):
            routes.append(path)
            continue

        for i, (dx, dy) in enumerate(direction):
            next_x, next_y = now_x + dx, now_y + dy
            if 1 <= next_x <= n and 1 <= next_y <= m:
                stack.append([next_x, next_y, move_count + 1, path + index[i]])

    return sorted(routes)[0] if routes else "impossible"

solution(3,4,2,3,3,1,5)


def solution2(n, m, x, y, r, c, k):
    best_routes = "z"
    direction = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    index = ["u", "d", "l", "r"]

    stack = [[x, y, 0, ""]]
    while stack:
        now_x, now_y, move_count, path = stack.pop()
        if best_routes < path:
            continue

        if move_count > k:
            continue

        if move_count == k and (now_x, now_y) == (r, c):
            best_routes = path
            continue

        for i, (dx, dy) in enumerate(direction):
            next_x, next_y = now_x + dx, now_y + dy
            if 1 <= next_x <= n and 1 <= next_y <= m:
                stack.append([next_x, next_y, move_count + 1, path + index[i]])

    return best_routes if best_routes != "z" else "impossible"

solution2(3,4,2,3,3,1,5)



def solution3(n, m, x, y, r, c, k):
    best_routes = "z"
    direction = [(1, 0), (0, -1), (0, 1), (-1, 0)]
    index = ["d", "l", "r", "u"]

    stack = [[x, y, 0, ""]]
    while stack:
        now_x, now_y, move_count, path = stack.pop()
        if best_routes < path:
            continue

        if move_count > k:
            continue

        if move_count == k and (now_x, now_y) == (r, c):
            best_routes = path
            continue

        for i, (dx, dy) in enumerate(direction):
            next_x, next_y = now_x + dx, now_y + dy
            if 1 <= next_x <= n and 1 <= next_y <= m:
                stack.append([next_x, next_y, move_count + 1, path + index[i]])

    return best_routes if best_routes != "z" else "impossible"

solution3(3,4,2,3,3,1,5)


def solution4(n, m, x, y, r, c, k):
    manhattan = abs(x - r) + abs(y - c)
    if manhattan > k or (k - manhattan) % 2 == 1:
        return "impossible"

    best_routes = "z"
    direction = [(1, 0), (0, -1), (0, 1), (-1, 0)]
    index = ["d", "l", "r", "u"]

    stack = [[x, y, 0, ""]]
    while stack:
        now_x, now_y, move_count, path = stack.pop()
        if best_routes < path:
            continue

        if move_count > k:
            continue

        if move_count == k and (now_x, now_y) == (r, c):
            best_routes = path
            continue

        for i, (dx, dy) in enumerate(direction):
            next_x, next_y = now_x + dx, now_y + dy
            if 1 <= next_x <= n and 1 <= next_y <= m:
                stack.append([next_x, next_y, move_count + 1, path + index[i]])

    return best_routes

solution4(3,4,2,3,3,1,5)

import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**8)

def solution5(n, m, x, y, r, c, k):
    manhattan = abs(x - r) + abs(y - c)
    if manhattan > k or (k - manhattan) % 2 == 1:
        return "impossible"

    best_routes = "z"
    direction = [(1, 0), (0, -1), (0, 1), (-1, 0)]
    index = ["d", "l", "r", "u"]

    def detect(dx, dy, cnt, path, limit):
        nonlocal best_routes
        if path > best_routes:
            return

        rm, dt = limit - cnt, abs(dx - r) + abs(dy - c)
        if dt > rm or (rm - dt) % 2 == 1:
            return

        if cnt == limit and (dx, dy) == (r, c):
            best_routes = path
            return

        for i, (j, k) in enumerate(direction):
            next_x, next_y = dx + j, dy + k
            if 1 <= next_x <= n and 1 <= next_y <= m:
                detect(next_x, next_y, cnt+1, path + index[i], limit)

    detect(x, y, 0, "", k)

    return best_routes

solution5(3,4,2,3,3,1,5)