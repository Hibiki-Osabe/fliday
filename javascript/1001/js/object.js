// じゃんけん
const janken = ['ぐー', 'ちょき', 'ぱー']

const user1 = janken[Math.floor(Math.random() * 3)]
const user2 = janken[Math.floor(Math.random() * 3)]

console.log(user1,user2)

// if((user1 === 'ぐー' && user2 === 'ちょき')||(user1 === 'ちょき' && user2 === 'ぱー')||(user1 === 'ぱー' && user2 === 'ぐー')){
//     console.log('user1の勝ちです。')
// }else if((user2 === 'ぐー' && user1 === 'ちょき')||(user2 === 'ちょき' && user1 === 'ぱー')||(user2 === 'ぱー' && user1 === 'ぐー')){
//     console.log('user1の負けです。')
// }else{
//     console.log('引き分けです。')
// }

// 書き換え
if((user1 === 'ぐー' && user2 === 'ぐー') ||
   (user1 === 'ちょき' && user2 === 'ちょき') ||
   (user1 === 'ぱー' && user2 === 'ぱー')) {
    console.log('引き分けです。')
}else if((user1 === 'ぐー' && user2 === 'ちょき') ||
         (user1 === 'ちょき' && user2 === 'ぱー') ||
         (user1 === 'ぱー' && user2 === 'ぐー')){
          console.log('user1の勝ちです。')
}else{
    console.log('user1の負けです。')
}