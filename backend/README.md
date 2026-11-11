# Kampüs Etkinlikleri — Backend REST API (Sprint 7)

- **Öğrenci Adı:** Engin Dağlayan  
- **Öğrenci Numarası:** 2416501069  

Bu proje, Kampüs Etkinlikleri platformunun Express tabanlı RESTful API sunucusudur. Etkinlik verilerini bellek içi (in-memory) tutarak istemcilere JSON formatında sunar.

---

## 🚀 Kurulum ve Çalıştırma

### 1. Bağımlılıkları Yükleme
```bash
cd backend
npm install
```

### 2. Geliştirme Sunucusunu Başlatma
Sunucu `node --watch` desteğiyle kod değişikliklerinde otomatik yeniden başlar:
```bash
npm run dev
```

Sunucu varsayılan olarak `http://localhost:3000` adresinde dinlemeye başlar.

### 3. Normal Başlatma
```bash
npm start
```

---

## ⚙️ Ortam Değişkenleri (.env)

Sunucu portu `.env` dosyası üzerinden yapılandırılır:

| Değişken | Açıklama | Varsayılan |
|---|---|---|
| `PORT` | API sunucusunun çalışacağı port | `3000` |

Örnek `.env` dosyası repoda `.env.example` olarak yer almaktadır. Gerçek `.env` dosyası ve `node_modules` klasörü `.gitignore` ile korunmakta ve repoya eklenmemektedir.

---

## 📜 REST API Sözleşmesi

Tüm endpoint'ler `http://localhost:3000` adresi üzerinden sunulmaktadır.

| Yöntem (Method) | Endpoint | Amaç | Başarılı Yanıt | Hata Yanıtı | Durum |
|---|---|---|---|---|---|
| `GET` | `/health` | Sunucu sağlık ve öğrenci bilgisi kontrolü | `200 OK` | — | Bu sprint (Sprint 7) |
| `GET` | `/events` | Tüm etkinlik listesini getirir (kategori filtresi destekler) | `200 OK` | — | Bu sprint (Sprint 7) |
| `GET` | `/events/:id` | ID'si verilen tek bir etkinliğin detaylarını getirir | `200 OK` | `404 Not Found` | Bu sprint (Sprint 7) |
| `POST` | `/events` | Yeni etkinlik oluşturur | `201 Created` | `400 Bad Request` | Bu sprint (Sprint 7) |
| `PATCH` | `/events/:id` | Mevcut bir etkinliği günceller | `200 OK` | `400 / 404` | Gelecek sprint (Sprint 9) |
| `DELETE` | `/events/:id` | Etkinliği siler | `204 No Content` | `404 Not Found` | Gelecek sprint (Sprint 9) |

---

## 📊 HTTP Durum Kodları (Status Codes)

- **200 OK:** İstek başarılı, veri döndürüldü.
- **201 Created:** Yeni kaynak başarıyla oluşturuldu.
- **204 No Content:** İşlem başarılı ancak döndürülecek içerik yok (Silme işlemi).
- **400 Bad Request:** Eksik veya geçersiz veri gönderildi.
- **404 Not Found:** İstenen rota veya kaynak bulunamadı.

---

## ⚠️ Standart Hata Formatı

Tüm hata yanıtları standart JSON şemasında iletilir:

```json
{
  "error": {
    "message": "Hata açıklaması"
  }
}
```

Örnekler:
- ID bulunamadığında (404):
  ```json
  {
    "error": {
      "message": "Event not found"
    }
  }
  ```
- Tanımsız bir route'a istek atıldığında (404):
  ```json
  {
    "error": {
      "message": "Route not found"
    }
  }
  ```
- Zorunlu alanlar eksik olduğunda (400):
  ```json
  {
    "error": {
      "message": "title, category and date are required"
    }
  }
  ```

---

## 🧪 Postman İstek Koleksiyonu

Test senaryoları `backend/requests/kampus-api.json` dosyası içinde Postman Collection v2.1 formatında sunulmuştur:

1. `1 Health`: `GET http://localhost:3000/health` (200 OK)
2. `2 Etkinlik listesi`: `GET http://localhost:3000/events` (200 OK, 6 etkinlik)
3. `3 Tek etkinlik`: `GET http://localhost:3000/events/event-2` (200 OK, event-2 detayı)
4. `4 Olmayan etkinlik (404)`: `GET http://localhost:3000/events/yok` (404 Not Found)
5. `5 Etkinlik oluştur (201)`: `POST http://localhost:3000/events` (201 Created, tam body)
6. `6 Eksik veri (400)`: `POST http://localhost:3000/events` (400 Bad Request, sadece title)
