function validateForm() {
    var userID = document.getElementById('UserID').value;
    var password = document.getElementById('PIN').value;
    var errorMessage = document.getElementById('error-message');

    if (userID.length !== 6 || password.length !== 8) {
        errorMessage.innerHTML = 'الرجاء ادخال اسم مستخدم من 6 ارقام و رقم سري من 8 ارقام فقط';
        return false;
    }

    // Redirect to main.html if validation passes
    window.location.href = 'odus/main/main.html';
    return true;
}
