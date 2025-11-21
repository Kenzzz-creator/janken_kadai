// $(".d").on("click", function () {

//   // --- じゃんけんの手を決定（0=グー,1=チョキ,2=パー） ---
//   var player = Math.floor(Math.random() * 3);
//   var robot  = Math.floor(Math.random() * 3);

//   var hands = ["✊", "✌️", "✋"];

//   // --- 画像 → 手の絵文字に置き換える ---
//   $(".sazae").replaceWith(`<span class="sazae">${hands[player]}</span>`);
//   $(".robot").replaceWith(`<span class="robot">${hands[robot]}</span>`);

//   $(".sazae, .robot").css({
//     "font-size": "300px",
//     "padding": "10px"
//   });

//   // --- 勝敗判定 ---
//   let resultType = "";
  
//   if (player === robot) {
//     resultType = "aiko"; // あいこ
//   } else if (
//     (player === 0 && robot === 1) || 
//     (player === 1 && robot === 2) || 
//     (player === 2 && robot === 0)
//   ) {
//     resultType = "win"; // 勝ち
//   } else {
//     resultType = "lose"; // 負け
//   }

//   // --- 0.7秒後に結果を表示 ---
//   setTimeout(() => {

//     // 既存 result があれば削除
//     $(".result").remove();

//     let element = "";

//     // --- 結果ごとの表示内容（2倍サイズ） ---
//     if (resultType === "win") {
//       // ⭐ 勝利 → 動画（2倍）
//       element = `<video class="result" src="movie/win.mp4" autoplay muted playsinline width="600"></video>`;
//     } else if (resultType === "lose") {
//       // ⭐ 負け → 画像（2倍）
//       element = `<img class="result" src="img/lose.jpeg" width="600">`;
//     } else {
//       // ⭐ あいこ → 画像（2倍）
//       element = `<img class="result" src="img/aiko.jpeg" width="600">`;
//     }

//     // じゃんけんの下に結果を追加
//     $(".janken").after(element);

//   }, 700); // ← 0.7秒後に実行
// });


$(".hand-btn").on("click", function () {

    // --- あなたの選んだ手 ---
    var player = Number($(this).data("hand"));  // 0,1,2
    var hands = ["✊", "✌️", "✋"];

    // --- PC の手をランダムで決定 ---
    var robot = Math.floor(Math.random() * 3);

    // --- 画面に手を表示 ---
   
    $(".sazae").text(hands[player]).addClass("big-hand");
    $(".robot").text(hands[robot]).addClass("big-hand");


    // --- 既存の結果を消す ---
    $("#result-area").empty();

    // --- 勝敗判定 ---
    let resultType = "";
    
    if (player === robot) {
        resultType = "aiko";  // あいこ
    } else if (
        (player === 0 && robot === 1) || 
        (player === 1 && robot === 2) || 
        (player === 2 && robot === 0)
    ) {
        resultType = "win";   // 勝ち
    } else {
        resultType = "lose";  // 負け
    }

    // --- 0.7秒後に結果画像 or 動画を表示 ---
    setTimeout(() => {

        let element = "";

        if (resultType === "win") {
            // ⭐勝ち → 動画（2倍サイズ）
            element = `
                <video class="result" src="movie/win.mp4" autoplay muted playsinline width="600"></video>
            `;
        } else if (resultType === "lose") {
            // ⭐負け
            element = `
                <img class="result" src="img/lose.jpeg" width="600">
            `;
        } else {
            // ⭐あいこ
            element = `
                <img class="result" src="img/aiko.jpeg" width="600">
            `;
        }

        $("#result-area").html(element);

    }, 700);
});
