console.log('test')

// タスク分けして考える

// .menu-buttonを取得する
const menu = document.querySelector('.menu-button')

// .gnavを取得する
const gnav = document.querySelector('.gnav')

// .gnav-closeを取得する
const close = document.querySelector('.gnav-close')

// bodyを取得する
const body = document.querySelector('body')

console.log(menu, gnav)

// menuをクリックした時
menu.addEventListener('click', () => {
    console.log('menu-button click!')

    //gnavにonクラスをつける
    gnav.classList.toggle('on')
})

close.addEventListener('click', () => {
    console.log('close click!')

    //gnavのonクラスを削除する
    gnav.classList.remove('on')
})


//文字列 string シングルコーテーションを使う
const str = '文字列'

console.log(str)
console.log(typeof str)

// 数字 number

const num = 12

const num1 = -1

console.log(num, num1)

console.log(typeof num)



// 論理値 boolean true falseがあります

const bool = true

const bool2 = false



console.log(bool, bool2)

console.log(typeof bool)


// 型の変換
// 数字に変換

console.log(10 + 10)

console.log('10' + 10, typeof ('10' + 10))


const width = '10px'

console.log(width + 10)

console.log(parseInt(width) + 10)


// 論理型に変換

console.log((10).toString() + 10)

console.log(Boolean(1))

console.log(Boolean(-1))

console.log(Boolean(0))


console.log(Boolean('こんにちは'))

console.log(Boolean('0'))

console.log(Boolean(''))


console.log(undefined)

console.log(null)


console.log(Boolean(null))

console.log(Boolean(undefined))


// Q1.1から100までの偶数だけ表示する
for(let i = 1; i <= 100; i++) {
    if(i % 2 === 0){
        console.log(i)
    }
}

// 書き換え
for(let i = 0; i <= 100; i += 2) {
        console.log(i)
}


// Q2.100までの数字のうち、10〜30, 70〜90の場合のみ表示する
for(let i = 1; i <= 100; i++) {
    if(i >= 10){
        if(i <= 30){
            console.log(i)
        }
    }if(i >= 70){
        if(i <= 90){
            console.log(i)
        }
    }
}

// 書き換え
for(let i = 1; i <= 100; i++){
    if (
        (i >= 10 && i <= 30) ||  // &&(and)や||(or)を使う
        (i >= 70 && i <= 90)
    ){
        console.log(i)
    }
}


// Q3.1から100までの3の倍数だけ表示する
for(let i = 1; i <= 100; i++) {
    if(i % 3 === 0){
        console.log(i)
    }
}

// 書き換え
for(let i = 0; i <= 100; i += 3) {
    console.log(i)
}


//1900年から2100年までの閏年の年をすべて表示する
for(let i = 1900; i <= 2100; i++) {
    if(i % 4 === 0){
        if(i % 100 !== 0){
            console.log(i)
        }
    }else if(i % 400 === 0){
        console.log(i)
    }
}

// 書き換え
for(let i = 1900; i <= 2100; i++){
    if(
        (i % 4 === 0 && i % 100 !== 0) ||
        (i % 400 === 0)
        ){
        console.log(i) // ()を付け忘れないようにする
    }
}
