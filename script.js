function formatJson() {
    const input = document.getElementById('input').value;
    try {
        const formatted = JSON.stringify(JSON.parse(input), null, 4);
        document.getElementById('output').value = formatted;
    } catch (e) {
        alert('Invalid JSON format');
    }
}

function minifyJson() {
    const input = document.getElementById('input').value;
    try {
        const minified = JSON.stringify(JSON.parse(input));
        document.getElementById('output').value = minified;
    } catch (e) {
        alert('Invalid JSON format');
    }
}

function copyOutput() {
    const output = document.getElementById('output');
    output.select();
    document.execCommand('copy');
}

function clearAll() {
    document.getElementById('input').value = '';
    document.getElementById('output').value = '';
}

function toggleTheme() {
    const body = document.body;
    const container = document.querySelector('.container');
    const textareas = document.querySelectorAll('textarea');
    const themeToggle = document.getElementById('theme-toggle');

    body.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode');
    textareas.forEach(textarea => textarea.classList.toggle('dark-mode'));
    themeToggle.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '☀️ Light Mode';
    } else {
        themeToggle.innerHTML = '🌙 Dark Mode';
    }
}