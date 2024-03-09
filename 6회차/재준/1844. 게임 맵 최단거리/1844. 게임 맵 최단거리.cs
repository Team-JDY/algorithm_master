using System;
using System.Collections.Generic;
public class Solution
{
    static void Main(string[] args)
    {
        Solution s = new Solution();
        int[,] array1 = { { 1, 0, 1, 1, 1 }, { 1, 0, 1, 0, 1 }, { 1, 0, 1, 1, 1 }, { 1, 1, 1, 0, 1 }, { 0, 0, 0, 0, 1 } };
        int[,] array2 = { { 1, 0, 1, 1, 1 }, { 1, 0, 1, 0, 1 }, { 1, 0, 1, 1, 1 }, { 1, 1, 1, 0, 0 }, { 0, 0, 0, 0, 1 } };
        int result = s.solution(array1);
        Console.WriteLine(result);
    }
    public int solution(int[,] maps)
    {
        //maps의 길이저장
        int n = maps.GetLength(0), m = maps.GetLength(1);

        //dfs진행
        MoveBFS(maps);

        //만약 모든 길을 돌아도 목적지에 도달하지 못하면 도착점의 값은 도달 횟수가 아닌 1로 되어 있을 것이다.
        if (maps[n - 1, m - 1] == 1) return -1;
        else return (maps[n - 1, m - 1]);
    }

    private void MoveBFS(int[,] maps)
    {
        // 전진 > 왼쪽 > 후진 > 오른쪽 순으로 반복(캐릭터기준) 
        int[] move_x = { 1, 0, -1, 0 };
        int[] move_y = { 0, 1, 0, -1 };
        Queue<(int, int)> Check = new Queue<(int, int)>();

        Check.Enqueue((0, 0));   // 시작점 넣기.

        while (Check.Count > 0)  // Check리스트가 없어질 때까지.
        {
            (int x, int y) = Check.Dequeue();   // 현재 Chcek값 저장

            for (int move = 0; move < 4; move++)
            {
                // 현재 위치에서 move_x만큼 이동(상하좌우)
                int check_x = x + move_x[move];
                int check_y = y + move_y[move];

                // 이동한 위치가 0보다 작거나 maps의 범위보다 클 경우 == 구역을 벗어났기 때문에 실패(continue)
                if (check_x < 0 || check_x >= maps.GetLength(0) || check_y < 0 || check_y >= maps.GetLength(1)) continue;

                // 이동한 위치가 0일 경우 == 구역의 벽에 도착했기 때문에 실패(continue)
                if (maps[check_x, check_y] == 0) continue;

                // 이동한 위치가 1일 경우 == 옳바른 길이기 때문에 해당 위치를 Check에 저장.
                if (maps[check_x, check_y] == 1)
                {
                    maps[check_x, check_y] = maps[x, y] + 1;
                    Check.Enqueue((check_x, check_y));
                }
            }
        }
    }
}