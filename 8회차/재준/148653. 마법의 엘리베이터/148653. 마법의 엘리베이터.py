def solution(storey):
    answer = 0
    
    share = storey // 10 
    while storey :  
        remain = storey % 10 
        
        if remain > 5 : # 6 ~ 9
            answer += 10-remain
            storey += 10
        elif remain < 5 : # 0 ~ 4
            answer += remain 
        elif remain == 5 : # 5
            if (storey // 10) % 10 > 4 : 
                storey += 10 
            answer += remain
                
        storey = storey // 10 
        
    return answer