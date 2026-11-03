# Kampüs Etkinlikleri — Sprint 6 & Vize Teslimi

**Canlı Link (Vercel):** [https://engindaglayan-frontend.vercel.app](https://engindaglayan-frontend.vercel.app)

- **Öğrenci Adı:** Engin Dağlayan
- **Öğrenci Numarası:** 2416501069



---

## 🗺️ Route Haritası (10 Adres, 10 Sayfa)

React Router (`react-router-dom`) kullanılarak tanımlanan 10 rota:

| Adres | Sayfa Bileşeni | Açıklama |
|---|---|---|
| `/` | `HomePage` | Yaklaşan 2 etkinliği ve tüm etkinliklere giden bağlantıyı listeler |
| `/events` | `EventsPage` | Arama ve kategori filtreleme ile tüm etkinlikleri listeler |
| `/events/:id` | `EventDetailPage` | Parametre olarak gelen id'ye göre etkinliğin künye ve detaylarını gösterir |
| `/admin` | `AdminPage` | Tüm etkinliklerin yönetim tablosu (Düzenle, Sil, Yeni Etkinlik) |
| `/admin/new` | `AddEventPage` | Yeni etkinlik ekleme formu |
| `/admin/:id/edit` | `EditEventPage` | Mevcut bir etkinliği güncelleme formu |
| `/login` | `LoginPage` | E-posta ve şifre doğrulamalı kullanıcı giriş sayfası |
| `/register` | `RegisterPage` | Ad, e-posta, şifre ve şifre tekrarı kurallı kayıt sayfası |
| `/forgot-password` | `ForgotPasswordPage` | Şifre sıfırlama bağlantısı gönderme sayfası |
| `*` | `NotFoundPage` | Tanımsız veya bulunamayan adresler için 404 sayfası |

---

## 🛠️ Projede Tamamlanan Özellikler

1. **Dinamik Site Başlığı (Header & Title):**
   - Açılan rotaya ve seçilen etkinliğin adına/kategorisine göre üst başlık alanı dinamik olarak güncellenir.
   - Tarayıcı sekmesi başlığı (`document.title`) otomatik senkronize edilir.

2. **React Router Entegrasyonu:**
   - Tüm sayfa geçişleri `NavLink` ve `Link` ile sayfa yenilenmeden, tarayıcı geçmişi ve URL ile tam uyumlu olarak çalışır.

3. **Context API (`EventsContext`):**
   - Etkinlik listesi, `addEvent`, `updateEvent` ve `deleteEvent` fonksiyonları tek bir merkezde toplanarak tüm sayfalara bağlanmıştır.

4. **CRUD İşlemleri & Kalıcılık:**
   - **Ekle:** `/admin/new` üzerinden yeni etkinlik eklenir ve tabloya yönlendirilir.
   - **Güncelle:** `/admin/:id/edit` üzerinden var olan etkinlik bilgileri güncellenir.
   - **Sil:** `/admin` sayfasında silme işleminden önce `window.confirm` ile onay istenir.
   - Yapılan değişiklikler anında Ana Sayfa, Etkinlikler ve Yönetim sayfalarına yansır.

5. **Form Doğrulama (Validation):**
   - **Etkinlik Formu (`validateEvent`):** 7 zorunlu alan kontrolü (Etkinlik adı en az 3 karakter, kategori seçimi, tarih/saat/yer zorunlu, kontenjan 1-1000 arası tam sayı, açıklama en az 10 karakter).
   - **Giriş Formu:** E-postada `@` işareti kontrolü, en az 6 karakterli şifre kuralı.
   - **Kayıt Formu:** Ad-soyad (en az 3 karakter), e-posta, şifre (en az 6 karakter) ve iki şifrenin eşleşmesi kontrolü.
   - **Şifremi Unuttum:** E-posta doğrulama ve demo başarı mesajı.

6. **Duyarlı (Responsive) Mobil Görünüm:**
   - 360px - 699px arası mobil ekranlarda yönetim tablosu `data-baslik` öznitelikleriyle kart görünümüne dönüşür.
   - Masaüstünde ise düzenli bir tablo olarak gösterilir.
   - Menü ve formlar tüm ekran boyutlarında kusursuz çalışır.
