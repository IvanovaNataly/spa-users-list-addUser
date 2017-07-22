const FriendsListKey = "friendsListKey";

class FriendsService {

    set(friendsNumberList) {
        let str = JSON.stringify(friendsNumberList);
        localStorage.setItem(FriendsListKey, str);
    }

    get(){
        let str = localStorage.getItem(FriendsListKey);
        return JSON.parse(str);
    }
}

export default new FriendsService();