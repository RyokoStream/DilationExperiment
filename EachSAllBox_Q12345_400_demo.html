<!DOCTYPE html>
<html>
<head>
    <title>謝礼金を決める問題を選ぶ(デモンストレーション）</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
        }
        h1 {
            font-size: 28px;
            text-align: center;
        }
        .center {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 20px;
        }
        button {
            margin: 20px;
            padding: 10px 20px;
            font-size: 16px;
        }
        #subjectResults {
            max-height: 400px;
            overflow-y: auto;
            border: 1px solid #ccc;
            padding: 10px;
            width: 80%;
            margin: 20px auto;
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
    console.log("スクリプトが読み込まれました。");

    var startNumber = 399;
    var numberOfSubjects = 42;
    var subjects = Array.from({ length: numberOfSubjects }, (_, i) => startNumber + i);
    console.log("生成された被験者ID:", subjects);

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
        subjectResultsDiv.innerHTML = '';

        console.log("対象被験者:", subjects);

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

        console.log("すべての被験者の結果が表示されました。");
    }
</script>

</body>
</html>
