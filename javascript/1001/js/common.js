// console.log('文字列')
// console.log(typeof '文字列')

// const myName = 'おさべひびき'

// console.log(myName.length)
// console.log('あなたの名前は' + myName.length + '文字です。')

// console.log('文字列'[1])
// console.log(myName[1])

// // 0から始まりというところに注意
// console.log('文字列'[0])
// console.log(myName[0])

// // 何文字目から、何文字目まで取得する的な
// console.log(myName.slice(3, 6))
// console.log(myName.slice(3, myName.length))

// // 検索して、何文字目に存在してるかを返す
// console.log(myName.indexOf('ひび'))
// console.log(myName.indexOf('さとう'))

// // その文字列が存在している場合はtrueを返す
// console.log(myName.indexOf('ひび') > 0)
// console.log(myName.indexOf('さとう') > 0)


// // 配列
// const empty = [] //配列を空で定義
// const empty = ['りんご', 'バナナ', '', '', '', '']

// じゃんけん
const janken = ['ぐー', 'ちょき', 'ぱー']

const user1 = janken[Math.floor(Math.random() * 3)]
const user2 = janken[Math.floor(Math.random() * 3)]

console.log(user1,user2)

if((user1 === 'ぐー' && user2 === 'ちょき')||(user1 === 'ちょき' && user2 === 'ぱー')||(user1 === 'ぱー' && user2 === 'ぐー')){
    console.log('user1の勝ちです。')
}else if((user2 === 'ぐー' && user1 === 'ちょき')||(user2 === 'ちょき' && user1 === 'ぱー')||(user2 === 'ぱー' && user1 === 'ぐー')){
    console.log('user1の負けです。')
}else{
    console.log('引き分けです。')
}