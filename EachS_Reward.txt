<!DOCTYPE html>
<html>
<head>
    <title>謝礼金を決める問題を選ぶ</title>
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

    <button onclick="rollUniformVirtualDice()">被験者に対応したサイコロ</button>

    <div id="subjectResults"></div>
</div>

<script>
    var subjects = [201, 202, 203, 204, 205, 206];
    var currentIndex = 0;

    function rollUniformVirtualDice() {
        if (currentIndex >= subjects.length) {
            return;
        }

        var min = 1;
        var max = 6;
        var uniformVirtualDiceResult = Math.floor(Math.random() * (max - min + 1)) + min;
        var subject = {
            id: subjects[currentIndex],
            result: `サイコロ ${uniformVirtualDiceResult}`
        };
        currentIndex++;
        updateSubjectResults(subject);
    }

    function updateSubjectResults(subject) {
        var subjectResultsDiv = document.getElementById('subjectResults');
        var subjectDiv = document.createElement('div');
        subjectDiv.innerHTML = `被験者 ${subject.id}: ${subject.result}`;
        subjectResultsDiv.appendChild(subjectDiv);
    }
</script>

</body>
</html>
