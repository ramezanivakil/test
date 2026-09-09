document.addEventListener('DOMContentLoaded', () => {
    const headerCallBtn = document.getElementById('headerCallBtn');
    const phoneModal = document.getElementById('phoneModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const copyPhoneBtn = document.getElementById('copyPhoneBtn');
    const copyToast = document.getElementById('copyToast');
    const phoneNumber = "09127442394";

    // تشخیص دقیق مرورگر موبایل یا ابعاد صفحه موبایل
    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
    }

    // عملکرد دکمه تماس
    if (headerCallBtn) {
        headerCallBtn.addEventListener('click', () => {
            if (isMobileDevice()) {
                window.location.href = `tel:${phoneNumber}`;
            } else {
                phoneModal.classList.add('active');
            }
        });
    }

    // بستن پاپ‌آپ
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', () => {
            phoneModal.classList.remove('active');
        });
    }

    if (phoneModal) {
        phoneModal.addEventListener('click', (e) => {
            if (e.target === phoneModal) {
                phoneModal.classList.remove('active');
            }
        });
    }

    // کپی شماره تلفن
    if (copyPhoneBtn) {
        copyPhoneBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(phoneNumber).then(() => {
                copyToast.classList.add('show');
                setTimeout(() => {
                    copyToast.classList.remove('show');
                }, 2000);
            });
        });
    }
});
