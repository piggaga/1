// 定義變數來儲存累積及目前使用者數量
var cumulativeCount = 10; // 累積使用者數量的初始值，您可以根據實際情況修改
var currentCount = 5; // 目前使用者數量的初始值，您可以根據實際情況修改

// 更新使用者數量的函式
function updateUserCount() {
    // 更新 HTML 元素中顯示的累積使用者數量及目前使用者數量
    document.getElementById('cumulativeCount').innerText = cumulativeCount;
    document.getElementById('currentCount').innerText = currentCount;
}

// 當頁面載入時呼叫函式來顯示使用者數量
updateUserCount();
