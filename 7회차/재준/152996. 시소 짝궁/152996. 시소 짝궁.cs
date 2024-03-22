using System;
using System.Collections.Generic;

public class Solution {
    public long solution(int[] weights) {
        long answer = 0;
        
        Array.Sort(weights);
        Dictionary<int,int> W_List = new Dictionary<int,int>();
        int count = 0;
        int BeforeWeight = 0;
        
        foreach(int w in weights)
        {
            for(int i = 2; i < 5; i++) // 2,3,4
            {
                if(!W_List.TryAdd(w*i , 1))//중복되는 Key일 경우 false 처리
                {
                    W_List[w*i]++;  // 있을 경우 Value값 증가.
                }
            }
            // 중복 체크
            count = (BeforeWeight == w) ? count+1 : 0; 
            if(count > 0) answer -= count * 2; // 중복일 경우 사전에 count 배제
            else BeforeWeight = w;
        }
        foreach(var item in W_List)
        {
            if(item.Value > 1){
                long match = 0;
                for(int i = 1; i < item.Value; i++) match += i;
                answer += match;
            }
        }
        return answer;
    }
}