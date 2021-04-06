// 获取九个格子
let cells = document.querySelectorAll(".cell")
// 获取提示div
let gameBord = document.querySelector("#bord")
// 获取信息面板
let message = document.getElementById("message") as HTMLDivElement
// 获胜者
let winner = document.getElementById("winner") as HTMLParagraphElement
// 重新开始游戏
let restart = document.getElementById("restart") as HTMLButtonElement
// 枚举玩家
enum Player {
    x = "x",
    o = "o"
}
// 玩家变量
let currentPlayer = Player.x
// let currentPlayer: Player = Player.x

// 判赢数组
let winArr = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
]
// 已下棋的步数
let steps = 0;


// 每个添加点击事件
cells.forEach(function (item) {
    // console.log(item);

    // 类型断言
    let cell = item as HTMLDivElement
    /**
     * 事件对象也应该进行类型断言
     */
    cell.addEventListener('click', clickCill, { once: true })
})

restart.addEventListener("click", function(){
    // 重置数据
    message.style.display = 'none'
    // 重置下棋步数
    steps = 0
    // 默认玩家为x
    currentPlayer = Player.x
    // 重置下棋提示为x
    gameBord.classList.remove(Player.x, Player.o)
    gameBord.classList.add(Player.x)

    // 清空棋盘
    cells.forEach(function(item){
        let cell = item as HTMLDivElement
        cell.classList.remove(Player.x, Player.o)
        // 移除单元格的事件，因为开始设置事件只触发一次， 重新给单元格绑定点击事件
        cell.removeEventListener('click', clickCill)
        cell.addEventListener("click", clickCill, {once: true})
    })
})

// 处理单元格click事件函数
function clickCill(event: MouseEvent) {
    // 获取被点击的对象
    let target = event.target as HTMLDivElement
    // 添加类名
    target.classList.add(currentPlayer)

    // 已下棋
    steps++;

    // 下棋的那一刻，判断是否赢了
    let isWin = checkWin(currentPlayer)
    // console.log(isWin);

    if (isWin) {
        // console.log("当前玩家获胜了");
        // 显示获胜信息面板
        message.style.display = 'block'
        winner.innerText = currentPlayer + " 赢了"
        return
    }

    // 判断是否平局
    if(steps === 9){
        // console.log("平局");
        message.style.display = 'block'
        winner.innerHTML = '平局'
        return
    }

    // 切换玩家
    currentPlayer = currentPlayer === Player.x ? Player.o : Player.x
    // 切换提示，移除游戏面板中的x和o的类名，添加下一个玩家对应的类名
    gameBord.classList.remove(Player.x, Player.o)
    gameBord.classList.add(currentPlayer)
}

// 封装判赢函数
function checkWin(player: Player) {
    return winArr.some(function (item) {
        // 获取到每种获胜情况对应的三个单元格元素
        // 先拿到没中获胜情况的三个索引
        let cellIndex1 = item[0]
        let cellIndex2 = item[1]
        let cellIndex3 = item[2]
        // console.log(cellIndex1, cellIndex2, cellIndex3);

        // 判断这三个单元格元素是否同时包含类名
        if (hasClass(cells[cellIndex1], player) && hasClass(cells[cellIndex2], player) && hasClass(cells[cellIndex3], player)){
            return true
        }
        return false;
    })
}

// 封装函数。判断dom元素是否包含某个类名
function hasClass(el: Element, name: string) {
    return el.classList.contains(name)
}