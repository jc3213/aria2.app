const hotkeyMap = document.querySelectorAll('[hotkey]')
const hotkeyCombo = {};

for (let i = 0, l = hotkeyMap.length; i < l; i++) {
    let el = hotkeyMap[i];
    let keys = el.getAttribute('hotkey').toLowerCase().split('\n');

    for (let j = 0, m = keys.length; j < m; j++) {
        let k = keys[j].trim();

        if (k) {
            hotkeyCombo[k] = el;
        }
    }
}

document.addEventListener('keydown', (event) => {
    let keys = [];

    if (event.ctrlKey) {
        keys.push('ctrl');
    }

    if (event.altKey) {
        keys.push('alt');
    }

    if (event.shiftKey) {
        keys.push('shift');
    }

    keys.push(event.key.toLowerCase());

    let combo = keys.join('+');
    let hotkey = hotkeyCombo[combo];

    if (hotkey) {
        event.preventDefault();
        hotkey.click();
    }
});
