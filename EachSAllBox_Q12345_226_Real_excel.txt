<!DOCTYPE html>
<html>
<head>
    <title>謝礼金を決める問題を選ぶ(デモンストレーション）</title>
    <style>
        h1 {
            font-size: 36px;
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
            font-size: 18px;
        }
    </style>
</head>
<body>

<div class="center">
    <h1>謝礼金を決める問題２つを選ぶ</h1>

    <button id="assignButton" onclick="rollUniformVirtualDice()">被験者に対応したサイコロ</button>
    <button id="downloadButton" onclick="downloadCSV()" disabled>結果をダウンロード</button>

    <div id="subjectResults"></div>
</div>

<script>
    var startNumber = 226;
    var numberOfSubjects = 14;
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

    var results = [];

    function rollUniformVirtualDice() {
        var subjectResultsDiv = document.getElementById('subjectResults');
        subjectResultsDiv.innerHTML = ''; // 既存の結果をクリア
        results = []; // 結果をクリア

        subjects.forEach(subjectId => {
            var min = 1;
            var max = 10;
            var uniformVirtualDiceResult = Math.floor(Math.random() * (max - min + 1)) + min;
            var result = problemMapping[uniformVirtualDiceResult];
            var subjectDiv = document.createElement('div');
            subjectDiv.innerHTML = `被験者 ${subjectId}: ${result}`;
            subjectResultsDiv.appendChild(subjectDiv);
            results.push({ id: subjectId, result: result });
        });

        document.getElementById('assignButton').disabled = true; // ボタンを無効化
        document.getElementById('downloadButton').disabled = false; // ダウンロードボタンを有効化
    }

    function downloadCSV() {
        var csvContent = "data:text/csv;charset=utf-8,";

        // CSVのヘッダー
        csvContent += "被験者ID,結果\n";

        // CSVの各行
        results.forEach(function(subject) {
            var row = `${subject.id},${subject.result}`;
            csvContent += row + "\n";
        });

        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "results_207_to_225.csv");
        document.body.appendChild(link); // Required for FF

        link.click();
        document.body.removeChild(link);
    }
</script>

</body>
</html>
