<!DOCTYPE html>
<html>
<head>
    <title>11面サイコロ</title>
</head>
<body>
    <h1>11面サイコロ</h1>
    <p>サイコロを振るボタンをクリックしてください。</p>
    
    <button id="rollButton" onclick="rollDice()">サイコロを振る</button>
    
    <p>結果: <span id="diceResult">1</span></p>
    
    <script>
        function rollDice() {
            var result = Math.floor(Math.random  () * 11)+1 ; // 1から11の範囲
            document.getElementById('diceResult').innerHTML = result;
        }
    </script>
</body>
</html>
