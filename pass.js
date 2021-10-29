
function passGen() {
    let x = document.getElementById('leng').value;
    let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let cap = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let special = ['@', '#', '$', '%', '&', '*', '_'];
    let pass = "";
    for (let y = 0; y < x; y++) {
        let z = Math.floor(Math.random() * 4);
        if (z === 0) {
            let sm = Math.floor(Math.random() * 26);
            pass = pass + alpha[sm];

        }
        if (z === 1) {
            let cp = Math.floor(Math.random() * 26);
            pass = pass + cap[cp];
        }
        if (z === 2) {
            let dg = Math.floor(Math.random() * 10)
            pass = pass + dg;
        }
        if (z === 3) {
            let sp = Math.floor(Math.random() * 7)
            pass = pass + special[sp];

        }

    }

    document.getElementById('gentexts').innerHTML = "Your Generated Password is: ";
    let text = document.getElementById('incopy').value = pass;
    async function clipboardCopy() {
        await navigator.clipboard.writeText(text);
        alert('Copied');
    }

}
