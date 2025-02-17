<!DOCTYPE html>
<html>
<head>
    <title>謝礼金を決める問題を選ぶ(デモンストレーション）</title>
    <style>
        h1 {
            font-size: 28px;
            text-align: center;
        }
        .center {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            flex-direction: column;
        }
        button {
            margin: 20px;
            padding: 10px 20px;
            font-size: 16px;
        }
    </style>
</head>
<body>

<div class="center">
    <h1>謝礼金を決める問題２つを選ぶ</h1>

    <button onclick="rollUniformVirtualDice()">被験者に対応したサイコロ</button>

    <div id="subjectResults"></div>
</div>

<script>
console.log("生成された被験者ID:", subjects);

    var startNumber = 398;
    var numberOfSubjects = 43;
    var subjects = Array.from({ length: numberOfSubjects }, (_, i) => startNumber + i);
    var problemMapping = {
        1: "問題１＆問題２",
        2: "問題１＆問題３",
        3: "問題１＆問題４",
        4: "問題１＆問題５",
        5: "問題２＆問題３",
        6: "問題２＆問題４",
        7: "問題２＆問題５",
        8: "問題３＆問題４",
        9: "問題３＆問題５",
        10: "問題４＆問題５"
    };

    function rollUniformVirtualDice() {
        var subjectResultsDiv = document.getElementById('subjectResults');
        subjectResultsDiv.innerHTML = ''; // 既存の結果をクリア

        console.log("対象被験者:", subjects); // デバッグ用ログ

        subjects.forEach(subjectId => {
            var min = 1;
            var max = 10;
            var uniformVirtualDiceResult = Math.floor(Math.random() * (max - min + 1)) + min;
            var result = problemMapping[uniformVirtualDiceResult];
            if (!result) {
                console.error(`Error: No mapping found for dice result ${uniformVirtualDiceResult}`);
                result = "未定義のペア";
            }
            var subjectDiv = document.createElement('div');
            subjectDiv.innerHTML = `被験者 ${subjectId}: ${result}`;
            subjectResultsDiv.appendChild(subjectDiv);
        });
    }
</script>

</body>
</html>
