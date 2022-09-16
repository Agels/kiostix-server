# kiostix-server
## RUNNING PROJECT

# Clone repository
```bash
 https://github.com/Agels/kiostix-server.git
```
# masukan ke folder project yang sudah di clone
```bash
 cd {nama_project}
```
# install semua depency yang dibutuhkan
```bash
npm install 
```
# jalankan project
```bash
nodemon
```

## Fitur 
-buku
-kategori
-penulis

# Buku
### `GET`
```bash
 https://localhost:3000/api/buku
```
### `POST`
```bash
 https://localhost:3000/api/buku
 request: nama_buku, id_penulis, id_kategori
```

### `PUT`
```bash
 https://localhost:3000/api/buku/{id}
```
### `DELETE`
```bash
 https://localhost:3000/api/buku/{id}
```

# PENULIS
### `GET`
```bash
 https://localhost:3000/api/penulis
```
### `POST`
```bash
 https://localhost:3000/api/penulis
 request: nama_penulis
```
### `PUT`
```bash
 https://localhost:3000/api/penulis/{id}
```
### `DELETE`
```bash
 https://localhost:3000/api/penulis/{id}
```

# KATEGORI
### `GET`
```bash
 https://localhost:3000/api/kategori
```
### `POST`
```bash
 https://localhost:3000/api/kategori
 request: nama_kategori
```
### `PUT`
```bash
 https://localhost:3000/api/kategori/{id}
```
### `DELETE`
```bash
 https://localhost:3000/api/kategori/{id}
```
