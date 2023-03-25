const formHitung = document.getElementById("hitung");
const nilaiTertinggi = document.getElementById("nilaiTertinggi");
const jumlah = document.getElementById("jumlah");

formHitung.addEventListener("submit", function(event) {
    event.preventDefault();

    var angkaTerbesar = 0;
    var hitungPertama = 0;
    var total = 0;

    var array = [
        parseInt(document.getElementById("num-1").value),
        parseInt(document.getElementById("num-2").value),
        parseInt(document.getElementById("num-3").value)
    ];
            
    var operation = [
        document.getElementById("operator-1").value,
        document.getElementById("operator-2").value
    ];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > angkaTerbesar) {
            angkaTerbesar = array[i];
            
        }
    }

    if (operation[1] == '*' || operation[1] == '/') {
        switch (operation[1]) {
            case '*':
                hitungPertama = array[1] * array[2];
                break;
            case '/':
                hitungPertama = array[1] / array[2];
                break;
        }

        hitungPertama;

        switch (operation[0]) {
        case '+':
            total = array[0] + hitungPertama;
            break;
        case '-':
            total = array[0] - hitungPertama;
            break;
        case '*':
            total = array[0] * hitungPertama;
            break;
        case '/':
            total = array[0] / hitungPertama;
            break;
        default:
            total = array[0] + hitungPertama;
            break;
    }

    } else if (operation[1] != '*' || operation[1] != '/') {
        switch (operation[0]) {
            case '+':
                hitungPertama = array[0] + array[1];
                break;
            case '-':
                hitungPertama = array[0] - array[1];
                break;
            case '*':
                hitungPertama = array[0] * array[1];
                break;
            case '/':
                hitungPertama = array[0] / array[1];
                break;
            default:
                hitungPertama = array[0] + array[1];
                break;
        }

        hitungPertama;

        switch (operation[1]) {
            case '+':
                total = hitungPertama + array[2];
                break;
            case '-':
                total = hitungPertama - array[2];
                break;
            case '*':
                total = hitungPertama * array[2];
                break;
            case '/':
                total = hitungPertama / array[2];
                break;
            default:
                total = hitungPertama + array[2];
                break;
        }
    } 

    hitungPertama;

    nilaiTertinggi.innerHTML = "Angka Terbesar : " + angkaTerbesar;
    
    jumlah.innerHTML="Total : " + total;

})