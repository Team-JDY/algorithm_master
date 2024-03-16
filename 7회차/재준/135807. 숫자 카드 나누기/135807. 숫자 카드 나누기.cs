using System;

public class Solution {
    public int solution(int[] arrayA, int[] arrayB) {
        Array.Sort(arrayA);
        Array.Sort(arrayB);
        int A = GetMax(arrayA, arrayB);
        int B = GetMax(arrayB, arrayA);
        
        int answer = (A > B) ? A : B;
        
        return answer;
    }
    
    public int GetMax(int[] me, int[] you)
    {
        int result = me[0];
        foreach(int num in me)
        {
            result = gcd(result, num);
        }
        foreach(int num in you)
        {
            if(num % result == 0) return 0;
        }
        return result;
    }
    
    private int gcd(int a, int b) //유클리드 호재법 (최소 공배수)
    {
        if(b == 0) return a;
        return gcd(b, a%b);
    }
}