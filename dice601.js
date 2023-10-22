function rollDice() {
    // 0から600の範囲で均一分布の乱数を生成
    var result = Math.floor(Math.random() * 602); // 0から601の範囲

    document.getElementById('diceResult').innerHTML = result; // 結果を表示する要素に代入
}
