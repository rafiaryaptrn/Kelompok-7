const readline = require('readline-sync');

function main() {
    var pin;
    var pinbenar = 123456;
    var percobaan = 0;
    var pilihanmenu = 0;
    var subpilihan = 0;
    var saldo = 1000000;
    var jumlahsetor = 0;
    var jumlahtarik = 0;
    var loginberhasil = false;

    console.log("=== Selamat datang di ATM Simulator ===");
    console.log("Silakan masukkan PIN Anda");

    while (percobaan < 3 && !loginberhasil) {
        pin = readline.question('Masukkan PIN: ');
        
        // Konversi input ke number agar perbandingan konsisten
        if (parseInt(pin) === pinbenar) {
            loginberhasil = true;
            console.log("PIN benar, selamat datang.\n");
        } else {
            percobaan = percobaan + 1;
            if (percobaan >= 3) {
                console.log("ATM Anda terblokir.");
            } else {
                console.log("PIN salah, silakan coba lagi.");
            }
        }
    }

    if (loginberhasil) {
        pilihanmenu = 0;
        while (pilihanmenu != 4) {
            console.log("\n=================");
            console.log("  ATM Simulator  ");
            console.log("=================");
            console.log("1. Cek saldo");
            console.log("2. Setor tunai");
            console.log("3. Tarik tunai");
            console.log("4. Selesai");
            
            pilihanmenu = parseInt(readline.question('Silahkan pilih menu (1-4): '));

            if (pilihanmenu === 1) {
                subpilihan = 0;
                while (subpilihan != 5) {
                    console.log("\n--- Cek Saldo ---");
                    console.log("Saldo Anda = Rp " + saldo);
                    console.log("5. Kembali");
                    subpilihan = parseInt(readline.question('Pilih: '));
                    if (subpilihan != 5) {
                        console.log("Pilihan tidak valid. Silakan pilih 5 untuk kembali.");
                    }
                }
            } else if (pilihanmenu === 2) {
                jumlahsetor = 0;
                while (jumlahsetor <= 0) {
                    console.log("\n--- Setor Tunai ---");
                    jumlahsetor = parseInt(readline.question('Masukkan jumlah setor: '));
                    if (isNaN(jumlahsetor) || jumlahsetor <= 0) {
                        console.log("Jumlah setor tidak valid.");
                        jumlahsetor = 0;
                    }
                }
                saldo = saldo + jumlahsetor;
                console.log("Setor tunai berhasil.");
                console.log("Saldo Anda sekarang = Rp " + saldo);

                subpilihan = 0;
                while (subpilihan != 5) {
                    console.log("5. Kembali");
                    subpilihan = parseInt(readline.question('Pilih: '));
                    if (subpilihan != 5) {
                        console.log("Pilihan tidak valid. Silakan pilih 5 untuk kembali.");
                    }
                }
            } else if (pilihanmenu === 3) {
                jumlahtarik = 0;
                while (jumlahtarik <= 0) {
                    console.log("\n--- Tarik Tunai ---");
                    jumlahtarik = parseInt(readline.question('Masukkan jumlah tarik: '));
                    if (isNaN(jumlahtarik) || jumlahtarik <= 0) {
                        console.log("Jumlah penarikan tidak valid.");
                        jumlahtarik = 0;
                    }
                }
                if (jumlahtarik > saldo) {
                    console.log("Saldo Anda tidak cukup.");
                } else {
                    saldo = saldo - jumlahtarik;
                    console.log("Penarikan berhasil.");
                    console.log("Saldo Anda sekarang = Rp " + saldo);
                }

                subpilihan = 0;
                while (subpilihan != 5) {
                    console.log("5. Kembali");
                    subpilihan = parseInt(readline.question('Pilih: '));
                    if (subpilihan != 5) {
                        console.log("Pilihan tidak valid. Silakan pilih 5 untuk kembali.");
                    }
                }
            } else if (pilihanmenu === 4) {
                // Keluar dari menu
                break;
            } else {
                console.log("Pilihan menu tidak valid. Silakan pilih 1, 2, 3, atau 4.");
            }
        }
        console.log("\nTerima kasih telah bertransaksi di ATM ini.");
    }
}

// Jalankan fungsi
main();