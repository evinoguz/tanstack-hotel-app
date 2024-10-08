# Hotel App

Tüm oteller listelenir.<br />
Gelişmiş filtreleme ve sıralama seçenekleriyle arama yapılabilir.<br />
Her bir otel için detaylı bilgi sayfası, resimler, olanaklar ve fiyat bilgilerini içerir.<br />

React ile geliştirildi. <br />
Typescript ile tip güvenliğini sağlandı. <br />
Tailwindcss ile responsive tasarlandı. <br />
Toast ile kullanıcı deneyimini iyileştirmek için hata mesajları ve başarı bildirimleri kullanıldı. <br />
Veri çekme (GET) işlemi, TanStack Query ile cache'lenir. <br />
Veri gönderme (POST/PUT/DELETE) işlemleri, kullanıcıdan alınan verilerin backend'e iletilmesini ve kaydedilmesini sağlar. <br />
TanStack Query; otel ekleme, silme, listeleme ve filtreleme işlemlerinde kullanıldı. <br />
Sorgular (queries) ve mutasyonlar (mutations) tanımlandı.<br />
Bu yapı, modern frontend geliştirme için performanslı ve kullanımı kolay bir deneyim sunar.<br />
TanStack Query'nin sunduğu cache yönetimi ve otomatik veri senkronizasyonu, özellikle otel verilerinin ve kullanıcı hareketlerinin yoğun olduğu bir uygulamada oldukça faydalıdır. <br />

## Gif

![](/frontend/public/tanstack-hotel-app.gif)

## Projenin Çalıştırılması

Projeyi indiriniz veya fork ediniz. 'Visual Studio Code' editörü ile projeyi açınız.

```
git clone https://github.com/evinoguz/tanstack-hotel-app.git
```

Terminalde;

```
cd backend
npm install
npm start
```

sırasıyla bu komutları çalıştırarak backend kısmını ayağa kaldırınız, ardından yeni terminalde;

```
cd frontend
npm install
npm run dev
```

komutları ile frontend kısmını ayağa kaldırınız.
