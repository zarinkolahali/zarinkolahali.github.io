document.addEventListener('DOMContentLoaded', function() {
    const bioText = "من علی زرینکلاه هستم و عاشق نرم‌افزارهای آزادم، نه فقط متن‌باز. به فلسفه آزادی کاربر و اشتراک دانش باور دارم و سعی می‌کنم در این اکوسیستم مشارکت کنم.";
    const bioElement = document.getElementById('bio');
    let i = 0;
    const cursorElement = document.querySelector('.cursor');

    function typeWriter() {
        if (i < bioText.length) {
            cursorElement.style.display = 'none';
            bioElement.innerHTML += bioText.charAt(i);
            i++;
            cursorElement.style.display = 'inline-block';
            setTimeout(typeWriter, 50);
        }
    }

    bioElement.appendChild(cursorElement);
    typeWriter();
});
