document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
    const idCardInput = document.getElementById('idCard');
    const bankCardInput = document.getElementById('bankCard');

    const phoneError = document.getElementById('phoneError');
    const idCardError = document.getElementById('idCardError');
    const bankCardError = document.getElementById('bankCardError');

    // 实时监控手机号码输入
    phoneInput.addEventListener('input', function() {
        if (!validatePhone(phoneInput.value)) {
            phoneError.textContent = '请输入有效的手机号码';
            phoneError.style.display = 'block';
        } else {
            phoneError.style.display = 'none';
        }
    });

    // 实时监控身份证号码输入
    idCardInput.addEventListener('input', function() {
        if (!validateIdCard(idCardInput.value)) {
            idCardError.textContent = '请输入有效的身份证号码';
            idCardError.style.display = 'block';
        } else {
            idCardError.style.display = 'none';
        }
    });

    // 实时监控银行卡号输入
    bankCardInput.addEventListener('input', function() {
        if (!validateBankCard(bankCardInput.value)) {
            bankCardError.textContent = '请输入有效的银行卡号';
            bankCardError.style.display = 'block';
        } else {
            bankCardError.style.display = 'none';
        }
    });

    // 表单提交逻辑
    document.getElementById('infoForm').addEventListener('submit', function(event) {
        // 阻止默认提交行为
        event.preventDefault();

        // 无论输入是否有效，都跳转到提交完成页面
        window.location.href = 'submit.html';
    });
});

function validatePhone(phone) {
    let phoneRegex = /^1[3456789]\d{9}$/;
    return phoneRegex.test(phone);
}

function validateIdCard(idCard) {
    let idCardRegex = /^\d{17}[\dXx]$/;
    return idCardRegex.test(idCard);
}

function validateBankCard(bankCard) {
    let bankCardRegex = /^\d{16,19}$/;
    return bankCardRegex.test(bankCard);
}