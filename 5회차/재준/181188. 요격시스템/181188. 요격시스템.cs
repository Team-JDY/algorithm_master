using System;
using System.Collections.Generic;

public class Solution {
    
    public class Amissile
    {
        public int Start;
        public int End;

        public Amissile(int Start, int End)
        {
            this.Start = Start;
            this.End = End;
        }
    }
    private int CompareTo(Amissile a1, Amissile a2) // 대조 후 높은 친구 출력
    {
        if (a1.Start == a2.Start) return 0;
        return (a1.Start > a2.Start) ? 1 : -1;
    }
    
    public int solution(int[,] targets) {
        List<Amissile> AList = new List<Amissile>();;
        for (int i = 0; i < targets.GetLength(0); i++)
            AList.Add(new Amissile(targets[i, 0], targets[i, 1]));
        AList.Sort((a1, a2) => CompareTo(a1, a2)); //Start를 대상으로 데이터 정렬(-1=유지,0=유지,1=스왑)

        //초기 값 세팅
        int Bmissile = int.MaxValue;
        int answer = 1;   //첫발은 조건 상관없이 발포.
        foreach(Amissile Amissile in AList)
        {
            Bmissile = (Bmissile > Amissile.End) ? Amissile.End : Bmissile;  // 기존[,]의 범위를 이탈했으니 포함되는 새로운 End로.
            if (Bmissile <= Amissile.Start)  // 기존[,]의 범위를 이탈했으니 포함되는 새로운 End로.
            {
                Bmissile = Amissile.End;
                answer++;
            }
        }
        return answer;
    }
}