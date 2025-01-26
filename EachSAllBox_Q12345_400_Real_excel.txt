<!DOCTYPE html>
<html>
<head>
    <title>被験者問題ペア割り当て</title>
    <style>
        #container {
            text-align: center;
            margin-top: 20px;
        }
        button {
            width: 200px;
            height: 50px;
            font-size: 16px;
            cursor: pointer;
        }
        #subjectResults {
            text-align: center;
            margin-top: 20px;
        }
        .resultLine {
            text-align: center;
            margin-top: 5px;
        }
    </style>
</head>
<body>
    <h1 style="text-align: center;">被験者問題ペア割り当て</h1>
    <div id="container">
        <button id="assignButton" onclick="assignPairs()">被験者に問題ペアを割り当てる</button>
        <button id="downloadButton" onclick="downloadCSV()" disabled>結果をダウンロード</button>
    </div>
    <div id="subjectResults"></div>

    <script>
        var subjects = [];
        var problemPairs = [
            "問題１＆問題２",
            "問題１＆問題３",
            "問題１＆問題４",
            "問題１＆問題５",
            "問題２＆問題３",
            "問題２＆問題４",
            "問題２＆問題５",
            "問題３＆問題４",
            "問題３＆問題５",
            "問題４＆問題５"
        ];
        var numSubjects = 40;  // 被験者数を401から440までの40人に設定

        function assignPairs() {
            subjects = [];  // 既存のデータをクリア

            for (var i = 0; i < numSubjects; i++) {
                var pair = problemPairs[Math.floor(Math.random() * problemPairs.length)];
                var subject = { id: 401 + i, pair: pair };
                subjects.push(subject);
            }

            updateSubjectResults();
            document.getElementById('assignButton').disabled = true; // ボタンを無効化
            document.getElementById('downloadButton').disabled = false; // ダウンロードボタンを有効化
        }

        function updateSubjectResults() {
            var subjectResultsDiv = document.getElementById('subjectResults');
            subjectResultsDiv.innerHTML = '';

            subjects.forEach(function(subject) {
                var subjectDiv = document.createElement('div');
                subjectDiv.className = 'resultLine';
                subjectDiv.innerHTML = `被験者 ${subject.id}: ${subject.pair}`;
                subjectResultsDiv.appendChild(subjectDiv);
            });
        }

        function downloadCSV() {
            var csvContent = "data:text/csv;charset=utf-8,\uFEFF"; // UTF-8 BOMを追加

            // CSVのヘッダー
            csvContent += "被験者ID,問題ペア\n";

            // CSVの各行
            subjects.forEach(function(subject) {
                var row = `${subject.id},${subject.pair}`;
                csvContent += row + "\n";
            });

            var encodedUri = encodeURI(csvContent);
            var link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "results_401_to_440.csv");
            document.body.appendChild(link); // Required for FF

            link.click();
            document.body.removeChild(link);
        }
    </script>
</body>
</html>
