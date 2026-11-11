# Kampüs Etkinlikleri — Sprint 7 (Express REST API)

- **Öğrenci Adı:** Engin Dağlayan  
- **Öğrenci Numarası:** 2416501069  
- **Canlı Frontend Linki (Vercel):** [https://engindaglayan-frontend.vercel.app](https://engindaglayan-frontend.vercel.app)  

---

## 🏗️ Proje Mimarisi

Bu sprintte frontend uygulamasının yanına Express tabanlı RESTful API sunucusu eklenmiştir:

```
sprint-07/
├── frontend/               # React + Vite (Port: 5173 / Vercel)
└── backend/                # Node.js + Express REST API (Port: 3000)
    ├── src/
    │   ├── app.js          # Express app, middleware ve route eşleşmeleri
    │   ├── server.js       # Sunucu başlatıcı (.env okur, portu dinler)
    │   ├── routes/
    │   │   └── event-routes.js       # /events rotaları
    │   ├── controllers/
    │   │   └── event-controller.js   # İş mantığı ve endpoint yanıtları
    │   └── data/
    │       └── events.js   # Bellek içi 6 özgün etkinlik verisi
    ├── requests/
    │   └── kampus-api.json # Postman Collection v2.1 (6 test isteği)
    ├── .env.example        # Port yapılandırma örneği
    ├── .gitignore          # node_modules ve .env engellemesi
    ├── package.json        # Paket bağımlılıkları ve çalıştırma komutları
    └── README.md           # Backend REST API sözleşmesi ve çalıştırma kılavuzu
```

---

## 🚀 Hızlı Başlangıç

### Backend'i Çalıştırma
```bash
cd backend
npm install
npm run dev
```
Sunucu `http://localhost:3000` adresinde çalışmaya başlar.

- Sağlık kontrolü: `http://localhost:3000/health`
- Etkinlikler: `http://localhost:3000/events`

### Frontend'i Çalıştırma
```bash
cd frontend
npm install
npm run dev
```
Uygulama `http://localhost:5173` adresinde açılır.

---

## 📜 REST API Özeti

Detaylı sözleşme tablosu için [backend/README.md](file:///backend/README.md) dosyasına bakabilirsiniz.

| Yöntem | Endpoint | Açıklama | Başarılı | Hata |
|---|---|---|---|---|
| `GET` | `/health` | Sağlık kontrolü ve öğrenci no | 200 | — |
| `GET` | `/events` | Tüm etkinlik listesi (filtreleme destekler) | 200 | — |
| `GET` | `/events/:id` | Tek etkinlik detayı | 200 | 404 |
| `POST` | `/events` | Yeni etkinlik ekleme | 201 | 400 |

---

## 🗺️ Frontend Rota Haritası (Sprint 6)

| Adres | Sayfa Bileşeni | Açıklama |
|---|---|---|
| `/` | `HomePage` | Yaklaşan 2 etkinliği ve tüm etkinliklere giden bağlantıyı listeler |
| `/events` | `EventsPage` | Arama ve kategori filtreleme ile tüm etkinlikleri listeler |
| `/events/:id` | `EventDetailPage` | Parametre olarak gelen id'ye göre etkinliğin detaylarını gösterir |
| `/admin` | `AdminPage` | Tüm etkinliklerin yönetim tablosu (Düzenle, Sil, Yeni) |
| `/admin/new` | `AddEventPage` | Yeni etkinlik ekleme formu |
| `/admin/:id/edit` | `EditEventPage` | Etkinlik güncelleme formu |
| `/login` | `LoginPage` | Kullanıcı giriş sayfası |
| `/register` | `RegisterPage` | Kayıt sayfası |
| `/forgot-password` | `ForgotPasswordPage` | Şifre sıfırlama sayfası |
| `*` | `NotFoundPage` | 404 sayfası |
