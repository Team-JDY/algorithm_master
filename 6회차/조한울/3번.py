import time
from heapq import heappush, heappop

def solution(n, start, end, roads, traps):
    queue = [(0, start, 0)]
    while queue:
        dist, location, traped = heappop(queue)

        if location == end:
            return dist

        if location in traps:
            traped = 1 if traped == 0 else 0

        for inform in roads:
            if inform[traped] == location:
                temp_location = 1 if traped == 0 else 0
                heappush(queue, (dist + inform[-1], inform[temp_location], traped))

        time.sleep(3)

solution(4,1,4,[[1,2,1],[3,2,1],[2,4,1]], [2,3])