// ログインフォーム送信時の処理
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email && password) {
        alert('登録完了！ホーム画面に遷移します。');
        // window.location.href = 'index.html';
    } else {
        document.getElementById('errorAlert').classList.remove('d-none');
    }
});
// エラーメッセージの自動非表示
document.getElementById('email').addEventListener('input', function () {
    document.getElementById('errorAlert').classList.add('d-none');
});
document.getElementById('password').addEventListener('input', function () {
    document.getElementById('errorAlert').classList.add('d-none');
});