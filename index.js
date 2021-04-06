// 获取九个格子
var cells = document.querySelectorAll(".cell");
// 获取提示div
var gameBord = document.querySelector("#bord");
// 枚举玩家
var Player;
(function (Player) {
    Player["x"] = "x";
    Player["o"] = "o";
})(Player || (Player = {}));
// 玩家变量
var currentPlayer = Player.x;
// let currentPlayer: Player = Player.x
// 判赢数组
var winArr = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];
// 每个添加点击事件
cells.forEach(function (item) {
    // console.log(item);
    // 类型断言
    var cell = item;
    /**
     * 事件对象也应该进行类型断言
     */
    cell.addEventListener('click', clickCill, { once: true });
});
// 处理单元格click事件函数
function clickCill(event) {
    // 获取被点击的对象
    var target = event.target;
    // 添加类名
    target.classList.add(currentPlayer);
    // 下棋的那一刻，判断是否赢了
    var isWin = checkWin(currentPlayer);
    console.log(isWin);
    if (isWin) {
        console.log("当前玩家获胜了");
    }
    // 切换玩家
    currentPlayer = currentPlayer === Player.x ? Player.o : Player.x;
    // 切换提示，移除游戏面板中的x和o的类名，添加下一个玩家对应的类名
    gameBord.classList.remove(Player.x, Player.o);
    gameBord.classList.add(currentPlayer);
}
// 封装判赢函数
function checkWin(player) {
    return winArr.some(function (item) {
        // 获取到每种获胜情况对应的三个单元格元素
        // 先拿到没中获胜情况的三个索引
        var cellIndex1 = item[0];
        var cellIndex2 = item[1];
        var cellIndex3 = item[2];
        // console.log(cellIndex1, cellIndex2, cellIndex3);
        // 判断这三个单元格元素是否同时包含类名
        if (hasClass(cells[cellIndex1], player) && hasClass(cells[cellIndex2], player) && hasClass(cells[cellIndex3], player)) {
            return true;
        }
        return false;
    });
}
// 封装函数。判断dom元素是否包含某个类名
function hasClass(el, name) {
    return el.classList.contains(name);
}
