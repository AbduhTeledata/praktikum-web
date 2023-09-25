# Praktikum-Web-Javascript
# Modul-1 Pendahuluan
# Modul-2 Variabel, Type Data dan Operator 

- Variabel pada Javascript menggunakan keyword: var, let dan const

# Tugas-01

- Modifikasi program pada modul-2 agar dapat melakukan operasi pengurangan, perkalian dan pembagian !!
- Tugas upload ke github dan kirimkan alamat github ke email abduhsttmandala@gmail.com

# Modul-3 Percabangan

- Bentuk percabangan if-else

if (kondisi1)
{
    //pernyataan1 dieksekusi
    //bila kondisi1 terpenuhi
}
else if (kondisi2)
{//pernyataan2 dieksekusi
    //bila kodisi1 tidak terpenuhi
}
else
{
    //pernyataan3 dieksekusi
    //bila kodisi2 tidak terpenuhi
}

- Bentuk percabangan switch

switch (kondisi)
{
    case 1:
        pernyataan-1;
        break;
    case 2:
        pernyataan-2;
        break;
    case n:
        pernyataan-n
}

# Tugas-02 Membuat kallkulator sederhana

**Petunjuk:**

- Buat sebuah fungsi dengan nama `calculator` yang mempunyai 3 parameter: `num1`, `num2` dan    `operator`. Dimana operator `+`, `-`, `*` atau `/`. Fungsi tersebut dapat mengembalikan hasil   perhitungan dan akan menampilkan pesan error apabila melakukan selain operator tersebut.

- Tugas upload ke github dan kirimkan alamat github ke email abduhsttmandala@gmail.com

# Modul-4-Array-dan-object

Array pada javasecript dipandang sebagai 'object' dan 'struktur data' yang dapat menyimpan berbagai type data

Array
const fruits = [2, 'apple', 'pear', 'orange']; / Array numerik

Object // array assosiatif
const todos = [
  { id: 1, name: 'Buy Milk' },
  { id: 2, name: 'Pickup kids from school' },
  { id: 3, name: 'Take out trash' },
];

# Tugas-03

### Step 1
Buat array objek yang disebut `library`. Tambahkan 3 objek dengan properti `title`, `author`, `status`. Judul dan penulis harus berupa string dan status harus berupa objek lain dengan properti `own`, `reading`, dan `read`. Yang semuanya harus berupa nilai boolean. Untuk semua status, atur `own` ke `true` dan `reading` dan `read` ke false.

### Step 2
Apabila telah selesai membaca semua buku. Tetapkan nilai `baca` untuk semuanya menjadi true. Jangan mengedit inisial objek. Tetapkan nilai menggunakan notasi titik.

### Step 3
Ubah struktur judul dari buku pertama dan ganti nama variabel menjadi `firstBook`

### Step 4
Rubah objek `library` menjadi bentuk JSON

<details>
    <summery>Click untuk Solusi</summery>

</details>


