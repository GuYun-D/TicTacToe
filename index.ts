// 获取九个格子
let cells = document.querySelectorAll(".cell") as NodeList
// 获取提示div
let gameBord = document.querySelector("#bord")
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

// 处理单元格click事件函数
function clickCill(event: MouseEvent) {
    // 获取被点击的对象
    let target = event.target as HTMLDivElement
    // 添加类名
    target.classList.add(currentPlayer)

    // 下棋的那一刻，判断是否赢了
    let isWin = checkWin(currentPlayer)
    console.log(isWin);

    if (isWin) {
        console.log("当前玩家获胜了");
    }

    // 切换玩家
    currentPlayer = currentPlayer === Player.x ? Player.o : Player.x
    // 切换提示，移除游戏面板中的x和o的类名，添加下一个玩家对应的类名
    gameBord.classList.remove(Player.x, Player.o)
    gameBord.classList.add(currentPlayer)
}

// 封装判赢函数
function checkWin(player: Player) {
    let isWin = winArr.some(function (item) {
        // 获取到每种获胜情况对应的三个单元格元素
        // 先拿到没中获胜情况的三个索引
        let cellIndex1 = item[0]
        let cellIndex2 = item[1]
        let cellIndex3 = item[2]
        // console.log(cellIndex1, cellIndex2, cellIndex3);

        // 通过三个索引从cells中获取到相应的单元格元素
        let cell1 = cells[cellIndex1] as HTMLDivElement
        let cell2 = cells[cellIndex2] as HTMLDivElement
        let cell3 = cells[cellIndex3] as HTMLDivElement
        // console.log(cell1, cell2, cell3);as HTMLDivElement
        console.dir(cell1)
        // console.log('----------------------------------------------------');

        // 判断这三个单元格元素是否同时包含类名
        if(
            cell1.classList.contains(player) &&
            cell2.classList.contains(player) &&
            cell3.classList.contains(player) 
            {
            return true
        }

        return false

    })
    return isWin
}