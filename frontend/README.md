# Kampüs Etkinlikleri — Frontend

Bu proje, **Sprint 6 ve Vize Teslimi** kapsamında geliştirilmiş React tabanlı modern bir kampüs etkinlikleri yönetim uygulamasıdır.

Canlı Yayın (Vercel): [https://engindaglayan-frontend.vercel.app](https://engindaglayan-frontend.vercel.app)

- **Öğrenci Adı:** Engin Dağlayan
- **Öğrenci Numarası:** 2416501069

---

## 🚀 Başlangıç ve Kurulum

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları uygulayın:

### 1. Bağımlılıkları Yükleme
```bash
npm install
```

### 2. Geliştirme Sunucusunu Başlatma
```bash
npm run dev
```
Uygulama varsayılan olarak `http://localhost:5173` adresinde çalışacaktır.

### 3. Derleme (Production Build)
```bash
npm run build
```
Derleme çıktısı `dist/` klasörüne oluşturulur.

### 4. Kod Denetimi (Lint)
```bash
npm run lint
```

---

## 📁 Proje Klasör Yapısı

```
frontend/
├── src/
│   ├── components/
│   │   ├── layout/       # Header, Navigation, Footer
│   │   ├── events/       # EventCard, EventList, EventFilter, EventDetail
│   │   └── forms/        # EventForm
│   ├── context/          # EventsContext.tsx (Global state ve CRUD metodları)
│   ├── pages/            # 10 adet sayfa bileşeni
│   │   ├── HomePage.tsx
│   │   ├── EventsPage.tsx
│   │   ├── EventDetailPage.tsx
│   │   ├── AdminPage.tsx
│   │   ├── AddEventPage.tsx
│   │   ├── EditEventPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── RegisterPage.tsx
│   │   ├── ForgotPasswordPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── data/             # Başlangıç etkinlik verileri (events.ts)
│   ├── types/            # TypeScript tip tanımları (campus-event.ts)
│   ├── utils/            # filter-events, format-date, validate-event
│   ├── App.tsx           # Rotaları içeren ana uygulama kabuğu
│   ├── App.css           # Tasarım ve duyarlı (responsive) CSS kuralları
│   ├── index.css
│   └── main.tsx          # Giriş noktası (BrowserRouter ve EventsProvider)
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🗺️ Route (Yönlendirme) Listesi

| Adres | Sayfa | Açıklama |
|---|---|---|
| `/` | `HomePage` | Yaklaşan 2 etkinliği ve tüm etkinliklere geçiş butonunu listeler. |
| `/events` | `EventsPage` | Arama ve kategori filtresi ile tüm etkinlikleri listeler. |
| `/events/:id` | `EventDetailPage` | İlgili etkinliğin afişini, künyesini ve detaylarını gösterir. |
| `/admin` | `AdminPage` | Tüm etkinliklerin yönetim tablosu (Düzenle, Sil, Yeni Etkinlik). |
| `/admin/new` | `AddEventPage` | Yeni etkinlik ekleme formu. |
| `/admin/:id/edit` | `EditEventPage` | Mevcut bir etkinliği güncelleme formu. |
| `/login` | `LoginPage` | Doğrulamalı kullanıcı giriş sayfası. |
| `/register` | `RegisterPage` | Doğrulamalı yeni kullanıcı kayıt sayfası. |
| `/forgot-password` | `ForgotPasswordPage` | Şifre sıfırlama bağlantısı talep sayfası. |
| `*` | `NotFoundPage` | Tanımsız adresler için 404 sayfası. |

---

## ✨ Özellikler ve Mimari

1. **Dinamik Başlık (Header):**
   - Açık olan sayfaya ve seçili etkinliğe göre `<h1>` başlığı ve açıklama metni otomatik güncellenir.
   - Tarayıcı sekme başlığı (`document.title`) etkinliğin veya sayfanın adına göre dinamik olarak ayarlanır.

2. **React Router DOM v7:**
   - Sayfa yenilenmesi olmadan `NavLink` ve `Link` ile hızlı geçiş.
   - Menüde aktif olan sayfayı otomatik vurgulayan `aria-current="page"` desteği.

3. **Merkezi Durum Yönetimi (EventsContext):**
   - Tüm sayfaların paylaştığı tek veri havuzu.
   - `addEvent`, `updateEvent`, `deleteEvent` fonksiyonları ile tam CRUD desteği.
   - Yönetim panelinden yapılan ekleme, silme ve düzenlemelerin tüm sayfalara eşzamanlı yansıması.

4. **Kapsamlı Form Doğrulama (Validation):**
   - **Etkinlik Formu:** 7 alan için kurallar (ad &ge; 3 karakter, kategori zorunlu, tarih/saat/yer zorunlu, kontenjan 1-1000 arası tam sayı, açıklama &ge; 10 karakter).
   - **Kullanıcı Girişi:** `@` içeren geçerli e-posta ve en az 6 karakterli şifre.
   - **Kayıt Formu:** Ad-soyad (&ge; 3 karakter), e-posta, şifre ve şifrelerin birbiriyle eşleşmesi kontrolü.
   - **Şifremi Unuttum:** E-posta format doğrulaması ve demo bildirim mesajı.

5. **Duyarlı (Responsive) Mobil Tasarım:**
   - 360px - 699px genişliğindeki mobil cihazlarda yönetim tablosu otomatik olarak kart düzenine geçer.
   - 700px ve 1000px üzeri ekranlarda sırasıyla 2 ve 3 sütunlu ızgara (grid) yerleşimi kullanılır.
