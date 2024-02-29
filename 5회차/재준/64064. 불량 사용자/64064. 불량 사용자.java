import java.util.*;

class Solution {
    static HashSet<HashSet<String>> ans = new HashSet<>();  //리스트를 나눠 진행.
    /*
    ans는 중복되지 않는 banned_id_list이다.
    내부는 HashSet<String> set이 여러개 있다고 생각하면 편하다.
    */

    public int solution(String[] user_id, String[] banned_id) {
        int answer = 0;
        DFS(new LinkedHashSet<>(), user_id, banned_id);
        answer = ans.size();
        return answer;
    }
    
    public void DFS(HashSet<String> set, String[] user_id, String[] banned_id){
        if(set.size() == banned_id.length){ // 밴된 id들과 banned_id에 있는 id들의 길이 매칭
            if(isMapping(set, banned_id)) ans.add(new HashSet<>(set));
            return ;
        }
        for(String id : user_id){
            if(set.add(id)){    //중복되는 id가 없을 경우(성공)
                DFS(set, user_id, banned_id);
                set.remove(id);
            }
        }
    }
    public boolean isMapping(HashSet<String> set, String[] banned_id){
        int index = 0;
        for(String id : set){
            if(id.length() != banned_id[index].length()) return false; // user_id의 id길이와 banned_id의 id길이 매칭 실패
            for(int i = 0; i < banned_id[index].length(); i++){
                if(banned_id[index].charAt(i) == '*') continue;
                if(id.charAt(i) != banned_id[index].charAt(i)) return false;  // user_id의 id와 banned_id의 id 매칭 실패
            }
            index++;
        }
        return true; // 길이 매칭 성공, id 매칭
    }
}