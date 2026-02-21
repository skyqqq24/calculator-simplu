function verificaInputuri(num1, num2) {
    if (num1 === "" || num2 === "") {
        document.getElementById("rezultat").textContent = "Introdu ambele numere!";
        return false;
    }
    return true;
}

function adunare() {
    let num1 = document.getElementById("numar1").value;
    let num2 = document.getElementById("numar2").value;

    if (!verificaInputuri(num1, num2)) return;

    let rezultat = Number(num1) + Number(num2);
    document.getElementById("rezultat").textContent = "Rezultat: " + rezultat;
}

function scadere() {
    let num1 = document.getElementById("numar1").value;
    let num2 = document.getElementById("numar2").value;

    if (!verificaInputuri(num1, num2)) return;

    let rezultat = Number(num1) - Number(num2);
    document.getElementById("rezultat").textContent = "Rezultat: " + rezultat;
}

function inmultire() {
    let num1 = document.getElementById("numar1").value;
    let num2 = document.getElementById("numar2").value;

    if (!verificaInputuri(num1, num2)) return;

    let rezultat = Number(num1) * Number(num2);
    document.getElementById("rezultat").textContent = "Rezultat: " + rezultat;
}

function impartire() {
    let num1 = document.getElementById("numar1").value;
    let num2 = document.getElementById("numar2").value;

    if (!verificaInputuri(num1, num2)) return;

    if (Number(num2) === 0) {
        document.getElementById("rezultat").textContent = "Nu poți împărți la 0!";
        return;
    }

    let rezultat = Number(num1) / Number(num2);
    document.getElementById("rezultat").textContent = "Rezultat: " + rezultat;
}
