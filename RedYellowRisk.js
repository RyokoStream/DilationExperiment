document.addEventListener("DOMContentLoaded", function() {
    const balls = Array.from({ length: 40 }, (_, i) => (i < 20 ? `R${i + 1}` : `Y${i - 19}`));

    const drawButton = document.getElementById("drawButton");
    const resultElement = document.getElementById("result");

    drawButton.addEventListener("click", function() {
        if (balls.length === 0) {
            resultElement.textContent = "ボールがありません。";
            return;
        }

        // ランダムにボールのインデックスを選ぶ
        const randomIndex = Math.floor(Math.random() * balls.length);
        const selectedBall = balls.splice(randomIndex, 1)[0];

        resultElement.textContent = `選ばれたボール: ${selectedBall}`;
    });
});
