Modul Simgos dibuat sebagai pelengkap aplikasi Simgos Kemenkes

Setelah clonning, jalankan :

1. composer install
2. npm install
3. php artisan key:generate -> jika key belum ada
4. npm run build -> agar tidak harus menjalankan npm run dev di server

Untuk merubah nama rumah sakit, lakukan perubahan pada value HOSPITAL_NAME di file .env

Untuk menarik perubahan terbaru, bisa menggunakan perintah git pull origin master di /var/www/html/modul-simgos/ menggunakan terminal, selanjutnya akan SimgosAppData akan di update dengan menu-menu baru yang telah di tambahkan 
