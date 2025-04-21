// https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript

/*
Создайте программу, которая фильтрует список строк и возвращает 
список, в котором указаны только имена ваших друзей. Если имя
состоит ровно из 4 букв, вы можете быть уверены, что оно должно
быть вашим другом! В противном случае вы можете быть уверены, что он не...
*/

function friend(friends) {
    return friends.filter((friend) => {return friend.length == 4});
};

console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));