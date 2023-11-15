const prompt = require('prompt-sync')();

let score = 0;
let jawaban_benar = 0;
let jawaban_salah = 0;
let point_per_soal = 2;

let soal = [
    {
        "q": "Yang merupakan member JKT 48?",
        "o": [
            'Jokowi',
            'Freya',
            'Nadin Amizah',
            'Igun Mama Takut',
        ],
        "a": 1
    },
    {
        "q": "Nama kakak Upin dan Ipin adalah...",
        "o": [
            'Kak Rose',
            'Kak Jeane',
            'Monkey D. Luffy',
            'Igun Mama Takut',
        ],
        "a": 0
    },
    {
        "q": "Apa itu flora fauna?",
        "o": [
            'Tumbuhan dan hewan',
            'Tumbuh dan hewan',
            'Hewan yang tumbuh',
            'Tumbuh dengan hewan',
        ],
        "a": 0
    },
    {
        "q": "Mengapa dinamakan nasi...",
        "o": [
            'Karena dari beras',
            'Karena dimasak dengan air',
            'Karena Dina lapar',
            'Karena bingung',
        ],
        "a": 2
    },
    {
        "q": "Siapakah nama kucing peliharaan Upin dan Ipin...",
        "o": [
            'Ros',
            'Siti',
            'Apin',
            'Fizi',
        ],
        "a": 2
    }
]

let nama = prompt('Input nama: ')

for (let i = 0; i < soal.length; i++) {
    
    console.log(soal[i].q);
    for (let a = 0; a < soal[i].o.length; a++) {
        console.log((a) + ". " + soal[i].o[a]);
    }
    console.log("\n");
    let jawaban = prompt("Jawaban (0,1,2,3) : ");
    if (jawaban == soal[i].a) {
        jawaban_benar += 1;
        score += point_per_soal;
        console.log("Jawaban benar :D");
    } else {
        jawaban_salah += 1;
        console.log("Jawaban salah :(");
    
    }

}

console.log("\n")
console.log("Statistic Kuis")
console.log('Nama\t\t:',nama)
console.log('Score\t\t:',score)
console.log('Jawaban benar\t:',jawaban_benar)
console.log('Jawaban salah\t:',jawaban_salah)