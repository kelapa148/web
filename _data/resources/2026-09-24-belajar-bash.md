---
template: BlogPost
path: /resources/try-bash
date: 2026-09-24T07:08:53.137Z
title: "Belajar Bash: Dasar-Dasar Shell Script"
thumbnail: ""
metaDescription: "Tutorial dasar Bash untuk pemula: path, file, permission, operator, string, kondisi, perulangan, dan fungsi."
---

Halo semuanya!

Artikel ini membahas bahasa Bash yang sering dipakai di pekerjaan sehari-hari. Banyak tugas melibatkan CLI (Command Line Interface) secara intensif, jadi ini kesempatan untuk berbagi perintah-perintah Bash yang paling sering digunakan.

Yuk langsung mulai!

---

![bash logo](/assets/resources/try-bash/bash-logo.jpg)
*Ref: <https://itsfoss.com/bash-5-release/>*

## Apa itu Bash

Bash adalah salah satu shell script yang tersedia di sistem operasi UNIX. Beberapa shell lain di antaranya cmd dan powershell yang berjalan di Windows. Kita tidak perlu menginstal program apa pun untuk menjalankan Bash karena sudah terpasang bawaan.

---

## Bagian: Path

Di Unix, `~` menunjukkan root path, sedangkan `.` adalah direktori saat ini dan `..` adalah direktori induk (parent).

Untuk melihat nilai path saat ini, gunakan `pwd`. `ls` untuk menampilkan daftar file dan folder di path saat ini. Dan `cd` untuk berpindah direktori.

- `~`
  root path
- `.`
  direktori saat ini
- `..`
  direktori induk
- `pwd`: print working directory's name
  nilai path saat ini
- `ls`: list
  daftar file dan folder di path saat ini
- `cd`: change directory
  berpindah direktori

![bash path](/assets/resources/try-bash/ls.png)

Seperti contoh di atas, `ls` menampilkan file dan folder di path saat ini. Selain itu, `ls -la` (list – format **l**ong & **a**ll) menampilkan detail seperti permissions, nama pemilik, tanggal terakhir diubah, dan sebagainya dari setiap file/folder.

`pwd` menampilkan nilai path saat ini dan kita bisa berpindah direktori menggunakan `cd` dengan direktori tujuan. `cd ~` berarti pindah ke root directory (`/root`).

---

## Bagian: Mengelola file/folder

Membuat direktori baru dengan `mkdir` atau file kosong baru dengan `touch`. Ingin menghapus file? Gunakan `rm`, atau `rm -r` jika itu folder.

`cp` untuk menyalin file/folder, dan `mv` untuk memindahkan atau mengganti namanya.

- `rm`: remove
  menghapus file, untuk folder tambahkan `-r`.
- `mkdir`: make directory
  membuat folder baru
- `mv`: move
  memindahkan atau mengganti nama file/folder
- `cp`: copy
  menyalin file/folder
- `touch`
  membuat file kosong

![bash file management](/assets/resources/try-bash/pwd.png)

Saya membuat folder baru menggunakan `mkdir test01`. Lalu masuk ke dalamnya dengan `cd test01`, kemudian membuat file kosong dengan `touch test01_a.txt`. Setelah itu, menyalinnya menjadi file baru dengan `cp test01_a.txt test01_b.txt`.

Di dalam folder "test01", saya membuat folder baru bernama "test02", lalu memindahkan "test01_b.txt" menggunakan `mv test01_b.txt test02/`. Path "test01_b.txt" berubah menjadi "test02/test01_b.txt".

Untuk mengganti nama, kita harus menyebutkan nama file setelah memindahkannya, misalnya `mv test01_b.txt test02/test02_b.txt`.

---

## Bagian: Permissions

Kita perlu mengubah permissions file, bisa diterapkan dengan `chmod`, sedangkan `chown` untuk mengganti pemilik.

Untuk beberapa file yang membutuhkan hak akses lebih tinggi, `sudo` akan mengeksekusinya. Dan `su` untuk berganti pengguna di sistem.

- `chmod`: **ch**ange **mod**e
  mengubah permissions file/folder
- `chown`: **ch**ange **own**ership
  mengubah pemilik file/folder
- `sudo`: **su**peruser **do**
  mengeksekusi perintah dengan hak akses lebih tinggi
- `su`: **s**witch **u**ser
  berganti pengguna

![bash permissions](/assets/resources/try-bash/chmod.png)

Seperti gambar di atas, `ls -la` pada file "test01_a.txt" menampilkan permissions sebagai berikut:

![permissions matrix](/assets/resources/try-bash/chmod-EN.drawio.png)

```sh
ls -la
-rw-r--r –  1 root  root    0 Nov 10 14:27 test01_a.txt
# (-)rw-r--r – ==> text01_a.txt adalah sebuah file
# -(rw-)r--r – ==> OWNER bernama "root" bisa membaca atau menulis file tetapi tidak bisa mengeksekusinya
# -rw-(r--)r – ==> GROUP bernama "root" bisa membaca tetapi tidak bisa menulis atau mengeksekusinya
# -rw-r--(r--) ==> OTHERS bisa membaca tetapi tidak bisa menulis atau mengeksekusinya
```

`chmod +x` akan menambahkan hak eksekusi file untuk semua (OWNER, GROUP, OTHERS). Perintah itu mengubah permissions menjadi `-rwxr-xr-x`. Dan saya menggunakan `chown -R` (Recursive ke subfolder) untuk mengubah OWNER dari root menjadi tester untuk dirinya dan subfolder-subfoldernya.

Terakhir, berganti pengguna ke tester dengan `su tester`.

---

## Bagian: Operator

- `|` (pipe)
  Eksekusi berurutan. Perintah kiri harus selesai dieksekusi dulu, baru perintah kanan dijalankan. Hasilnya berasal dari perintah kanan.
- `&` (ampersand)
  Eksekusi paralel. Perintah di kedua sisi operator ini dijalankan bersamaan. Hasilnya dari keduanya tanpa urutan tertentu.
- `||` (logical OR)
  Eksekusi alternatif. Program dianggap sukses jika SALAH SATU perintah berhasil. Hasilnya dari perintah pertama yang berhasil.
- `&&` (logical AND)
  Eksekusi alternatif. Program dianggap sukses jika SEMUA perintah berhasil. Hasilnya dari semua perintah yang berhasil.

![bash operator](/assets/resources/try-bash/operator.png)

Pertama, `echo "a" | echo "b"`, perintah kiri selesai lalu perintah kanan selesai. Hasilnya dari yang kanan yaitu "b".

Kedua, `echo "a" & echo "b"`, keduanya dieksekusi bersamaan dan yang kanan selesai lebih dulu. Hasilnya "b" lalu "a".

Ketiga, `echo "a" || echo "b"`, perintah kiri berhasil dieksekusi dan hasilnya "a". Yang kanan tidak ikut dieksekusi. Program sukses.

Terakhir, `echo "a" && echo "b"`, perintah kiri berhasil lalu yang kanan juga. Hasilnya "a" lalu "b". Program sukses.

---

## Bagian: String

Kita memakai perintah `echo` untuk menampilkan string atau nilai, dan `cat` untuk membaca file.

Ada banyak perintah untuk memproses string. Berikut contoh perintah yang sering digunakan:

- `echo`
  menampilkan string atau nilai
- `cat`: con**cat**enate
  membaca isi file
- `sed`: **s**tream **ed**itor
  mengganti string di dalam string lain
- `grep`: **g**lobal search – **r**egular **e**xpression – **p**rint
  mencari dan menampilkan string di dalam string dengan regular expression
- `cut`
  mengambil substring

```sh
echo "start"
cat sample_back.sh
echo "a dog wags its tail" | sed -e "s/dog/cat/g"
echo "a fish swims in a jar" | cut -c 1-5
echo "my telephone number is 1234" | grep -o "[0-9]*"
```

![bash string](/assets/resources/try-bash/sed.png)

Saya telah membuat file bernama sample_back.sh berisi teks "this is a sample file for reading".

Dan file lain bernama sample_front.sh berisi perintah-perintah berikut:

- `echo "start"`. Akan menampilkan "start"
- `cat sample_back.sh`. Membaca file sample_back.sh dan mendapatkan kalimat yang sama yaitu "this is a sample file for reading".
- Berikutnya, `sed -e "s/dog/cat/g"` mengubah kata "dog" menjadi "cat" dan menghasilkan kalimat akhir "a cat wags its tail".
- `cut -c 1-5` memotong semua huruf (termasuk spasi dan karakter khusus lainnya) antara posisi 1-5 dari kalimat asli. Hasilnya "a fis".
- Terakhir, `grep -o "[0-9]*"` mengekstrak hanya angka dari "my telephone number is 1234" dan menghasilkan "1234". (`[0-9]*` adalah regular expression untuk menangkap angka 0 sampai 9 ditambah `*` yang berarti kemunculan angka sebanyak apa pun).

---

## Bagian: Struktur kondisi

### IF-ELSE

```sh
if [[ $a == 1 ]]; then
    echo "a is 1"
elif [[ $a == 2 ]]; then
    echo "a is 2"
else
    echo "a is not 1 nor 2"
fi
```

![bash if-else](/assets/resources/try-bash/if.png)

Strukturnya adalah `if`–`then`–`elif`–`then`–`else` dan ditutup `fi` di akhir.

### FOR-loop

```sh
for i in $list; do
    echo this is $i
done
```

![bash for-loop](/assets/resources/try-bash/for.png)

Paling sering dipakai ketika kita harus melakukan sesuatu untuk setiap item dalam sebuah daftar.

### WHILE-loop

```sh
while [[ $a -le 10 ]]; do # cek apakah a kurang dari atau sama dengan 10
    echo "$a";
    a=$((a+1)); # a = a + 1
done
```

![bash while-loop](/assets/resources/try-bash/while.png)

Jangan sampai membuat infinite loop.

### TRY-CATCH

Sebenarnya Bash tidak punya blok try-catch, tapi kita bisa menerapkannya seperti ini.

```sh
{
    # try
} || {
    # catch
}
```

Kode di atas menjalankan blok try, dan jika gagal baru menjalankan blok catch. Keduanya dihubungkan dengan `||`.

```sh
{
    # try
} && {
    # then
}
```

Dan kode di atas menjalankan blok try, dan jika berhasil baru menjalankan blok then. Keduanya dihubungkan dengan `&&`.

![bash try-catch](/assets/resources/try-bash/try-catch.png)

- File pertama – test02_v1.sh
  Saya menambahkan `exit 1` untuk memicu error dan mendefinisikan "**jika gagal**, tampilkan this is part 2". Kita mendapat pesan part 2 karena blok pertama gagal.
- File kedua – test02_v2.sh
  Saya mengubah kondisinya menjadi "**jika berhasil**, tampilkan this is part 2". Kita tidak mendapat apa-apa karena blok pertama gagal.
- File ketiga – test02_v3.sh
  Saya menghapus `exit 1` dan mempertahankan kondisi "**jika berhasil**, tampilkan this is part 2". Kita mendapat part 1 dan part 2 karena blok pertama berhasil.

Ini adalah penanganan error dasar yang penting untuk mengatur alur pekerjaan.

> perhatikan spasi di antara tanda kurung dan operator.

---

## Bagian: Tanggal dan waktu

Perintah yang paling sering saya gunakan hanya satu, yaitu `date`, tetapi ada banyak penerapannya.

```sh
$(date +"%Y-%m-%d")
$(date -d "-[n] day" +"%Y-%m-%d")
$(date -d "[n] day ago" +"%Y-%m-%")
$(date -d "$(date -d @[epoch_in_seconds])" +"%Y-%m-%d" )
$(date -d "$[target_date] [n] day" +"%Y-%m-%d")
if [[ $(date -d "$date_one" +%s) -le $(date -d "$date_two" +%s) ]]; then
    echo "$date_one is LESS THAN OR EQUAL TO $date_two"
else
    echo "$date_one is GREATER THAN $date_two"
fi
```

![bash date](/assets/resources/try-bash/date.png)

`-d` akan menerjemahkan string menjadi objek tanggal. Seperti contoh di atas, `-1 day` sama dengan `1 day ago` yang berarti kemarin, sehingga `2019-01-01 1 day` berarti "1 hari setelah 2019-01-01" yaitu 2019-01-02.

`@[epoch_in_second]` adalah UNIX epoch, bentuk integer dari objek tanggal, misalnya `@1546300800` sama dengan "2019-01-01 00:00:00 AM" (informasi lebih lanjut di [epochconverter.com](https://www.epochconverter.com)).

`+"..."` mendefinisikan format keluaran. Contohnya, `+"%Y-%m-%d"` berarti "tahun-bulan-tanggal" misalnya 2019-01-10, dan `+"%s"` berarti format epoch seperti yang disebutkan sebelumnya. Format terakhir bisa dipakai untuk membandingkan dua tanggal seperti kumpulan perintah terakhir di atas.

---

## Bagian: Eksekusi eksternal

- `source`
  Merujuk ke file Bash lain
- `sh`
  Mengeksekusi file Bash dari luar

![bash exec](/assets/resources/try-bash/source.png)

File pertama – "test01.sh" berisi "test_var". Setelah `source test01.sh`, kita bisa menampilkan nilai "test_var" dari luar.

File kedua – "test02.sh" berisi perintah `echo`. Setelah `sh test02.sh`, ia memicu `echo` dan menampilkan teksnya.

---

## Bagian: Fungsi

Struktur fungsi dijelaskan di bawah ini:

```sh
sample_func() {
  local a=$1 # variabel lokal
  local b=$2 # variabel lokal
  echo "first is $a and second is $b"
}

sample_func 1 2
```

![bash func](/assets/resources/try-bash/func.png)

Kita harus mendefinisikan fungsi sebelum menggunakannya. Cara memanggilnya adalah dengan mengetik nama fungsinya diikuti parameter yang dipisahkan spasi.

Seperti contoh, kita memanggil `sample_func` dengan parameter 1 dan 2. Di dalam fungsi, nilai "1" menjadi `$1` dan ditugaskan ke variabel a, sedangkan nilai "2" menjadi `$2` lalu ditugaskan ke variabel b. Di akhir, ia menampilkan "first is 1 and second is 2".

---

## Bagian: Komentar

Ada 2 cara menambahkan komentar

- sisipkan `#` di depan baris
- mulai komentar multiline dengan `: << [word]` dan akhiri dengan `[word]`

```sh
# ini komentar satu baris
: << 'comment'
    ini
    adalah
    komentar
    beberapa
    baris
comment
```

![bash comment](/assets/resources/try-bash/comment.png)

Seperti contoh, "b" tidak akan tampil karena ia komentar. Begitu juga "d", "e", dan "f" karena berada dalam komentar multiline yang dikendalikan oleh kata "a_comment".

---

Seperti yang saya katakan, ini adalah perintah-perintah yang paling sering saya gunakan dalam pekerjaan. Masih ada banyak perintah lain yang tidak disebutkan di sini. Semoga bermanfaat!

---

## Referensi

- <https://www.tecmint.com/add-users-in-linux/>
- <https://en.wikipedia.org/wiki/AWK>
- <https://support.rackspace.com/how-to/checking-linux-file-permissions-with-ls/>
- <https://stackoverflow.com/questions/6961389/exception-handling-in-shell-scripting/6961470>
- <https://bashitout.com/2013/05/18/Ampersands-on-the-command-line.html>
