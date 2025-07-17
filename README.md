## 1. Clone Repositori
git clone https://github.com/gadingsukma/videocon.git
cd nama-project

## 2. Install Dependency
npm install
atau jika menggunakan yarn:
yarn install

## 3. Buat File Environment (.env)
### baut akun clerk dan masukan kedua key di bawah
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

### baut akun stream dan masukan kedua key di bawah
NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=

NEXT_PUBLIC_BASE_URL=localhost:3000

## 4. Jalankan Proyek
npm run dev
atau:
yarn dev

## Aplikasi akan berjalan di: http://localhost:3000




