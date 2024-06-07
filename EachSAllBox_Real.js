<!DOCTYPE html>
<html>
<head>
    <title>被験者のくじ割り当て</title>
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
            text-align: left;
            margin-top: 20px;
            margin-left: 20px;
        }
    </style>
</head>
<body>
    <h1 style="text-align: center;">謝礼金くじ割り当て本番</h1>
    <div id="container">
        <button id="assignButton" onclick="assignNumbers()">被験者にくじ番号を割り当てる</button>
    </div>
    <div id="subjectResults"></div>

    <script>
        var subjects = [];
        var boxNames = ['箱R', '箱AB', '箱AR', '箱B'];
        var numSubjects = 6;  // 被験者数を201から206までの6人に設定

        function assignNumbers() {
            subjects = [];  // 既存のデータをクリア

            for (var i = 0; i < numSubjects; i++) {
                var numbers = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
                var subject = { id: 201 + i, numbers: {} };
                
                boxNames.forEach(function(boxName, index) {
                    subject.numbers[boxName] = numbers[index];
                });
                
                subjects.push(subject);
            }

            updateSubjectResults();
            document.getElementById('assignButton').disabled = true; // ボタンを無効化
        }

        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        function updateSubjectResults() {
            var subjectResultsDiv = document.getElementById('subjectResults');
            subjectResultsDiv.innerHTML = '';

            subjects.forEach(function(subject) {
                var subjectDiv = document.createElement('div');
                var resultsText = `被験者 ${subject.id}: `;
                boxNames.forEach(function(boxName) {
                    resultsText += `${boxName}=${subject.numbers[boxName]} `;
                });
                subjectDiv.innerHTML = resultsText;
                subjectResultsDiv.appendChild(subjectDiv);
            });
        }
    </script>
</body>
</html>
