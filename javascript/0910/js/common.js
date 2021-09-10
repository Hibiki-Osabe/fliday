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