<!DOCTYPE html>
<html>
<head>
    <title>ボールを取り出す</title>
</head>
<body>
    <button id="drawButton" onclick="drawBall()" disabled>ボールを取り出す</button>
    <div id="result"></div>

    <script>
        let balls = Array.from({ length: 40 }, (_, i) => (i < 20 ? `青${i + 1}` : `白${i - 19}`));
        let drawButton = document.getElementById("drawButton");
        let resultElement = document.getElementById("result");

        function drawBall() {
            if (balls.length === 0) {
                resultElement.textContent = "ボールがありません。";
                drawButton.disabled = true; // ボタンを無効にする
            } else {
                const randomIndex = Math.floor(Math.random() * balls.length);
                const selectedBall = balls.splice(randomIndex, 1)[0];
                resultElement.textContent = `選ばれたボール: ${selectedBall}`;
            }
        }
    </script>
</body>
</html>
