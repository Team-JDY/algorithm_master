using System;
using System.Collections.Generic;
public class Solution
{
    static void Main(string[] args)
    {
        Solution s = new Solution();
        int[,] array = { { 2, 2 }, { 1, 4 }, { 3, 2 }, { 3, 2 }, { 2, 1 } };
        int result = s.solution(array);
        Console.WriteLine(result);  // 4
    }

    public int solution(int[,] scores)
    {
        int len = scores.GetLength(0);
        int Wanho_in = scores[0, 0], Wanho_team = scores[0, 1];
        int wanho_sum = Wanho_in + Wanho_team;
        var highers = new LinkedList<int>();
        for (int i = 1; i < len; i++)
        {
            int Score_in = scores[i, 0], Score_team = scores[i, 1];
            if (Wanho_in < Score_in && Wanho_team < Score_team) return -1;
            if (wanho_sum < Score_in + Score_team)
            {
                var HightScore = highers.First;
                while (HightScore != null)
                {
                    int Hight_in = scores[HightScore.Value, 0], Hight_team = scores[HightScore.Value, 1];
                    if (Score_in < Hight_in && Score_team < Hight_team)
                        break;
                    if (Hight_in < Score_in && Hight_team < Score_team)
                    {
                        var prev_h = HightScore;
                        HightScore = HightScore.Next;
                        highers.Remove(prev_h);
                    }
                    else HightScore = HightScore.Next;
                }
                if (HightScore == null)  highers.AddFirst(i);
            }
        }
        return highers.Count + 1;
    }
}