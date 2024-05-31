<!DOCTYPE html>
<html>
<head>
    <title>謝礼金を決める問題を選ぶ</title>
</head>
<body>

 <h1>謝礼金を決める問題を選ぶ</h1>
   

    <button onclick="rollUniformVirtualDice()">被験者に対応した問題</button>

    <div id="subjectResults"></div>

    <script>
        var subjects = [];

        function rollUniformVirtualDice() {
            var min = 1;
            var max = 3;
            var uniformVirtualDiceResult = Math.floor(Math.random() * (max - min + 1)) + min;
            var subject = {
                id: subjects.length + 1,
                result: uniformVirtualDiceResult
            };
            subjects.push(subject);
            updateSubjectResults();
        }

        function updateSubjectResults() {
            var subjectResultsDiv = document.getElementById('subjectResults');
            subjectResultsDiv.innerHTML = '';

            for (var i = 0; i < subjects.length; i++) {
                var subject = subjects[i];
                var subjectDiv = document.createElement('div');
                subjectDiv.innerHTML = `被験者 ${subject.id}: ${subject.result}`;
                subjectResultsDiv.appendChild(subjectDiv);
            }
        }
    </script>
</body>
</html>
