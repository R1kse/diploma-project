# Paidaly

Дизайн-система приложения доставки здорового питания (Казахстан).

🔗 [Открыть на GitHub Pages](https://r1kse.github.io/diploma-project/)

## Стек

- **React 18** (CDN) — без bundler, без npm
- **Babel Standalone** (CDN) — JSX in-browser transpilation
- **Nunito + Unbounded** (Google Fonts CDN)
- Всё работает как единый `index.html` — открывается локально через `file://`

## Экраны

### Клиент · iOS (11 экранов)
| ID | Экран |
|---|---|
| c1 | Онбординг |
| c2 | Главная |
| c3 | Меню (категории: Завтрак / Обед / Ужин / Детокс) |
| c4 | Карточка блюда |
| c5 | Корзина |
| c6 | Оформление заказа |
| c7 | Трекер + карта |
| c8 | История заказов |
| c9 | Профиль |
| c10 | Вход |
| c11 | Регистрация |

### Курьер · Dark mode (4 экрана)
k1 Список · k2 Детали · k3 Карта маршрута · k4 Статистика смены

### Диспетчер · Web (5 экранов)
d1 Дашборд · d2 Таблица заказов · d3 Карта курьеров · d4 Детали заказа · d5 Назначение курьера

## Цвета бренда

```
Зелёный:   #3A9E5F
Лайм:      #8BC34A
Тёмный:    #1B3A2D
Фон:       #F7FAF5
```

## Локальный запуск

Откройте `project/index.html` в любом браузере. Нужен интернет (CDN-зависимости).

## Структура

```
project/
├── index.html          — точка входа (GitHub Pages)
├── paidaly.html        — то же, рабочая копия
├── shared.jsx          — Icon, Plate, Blob, MiniMap
├── design-canvas.jsx   — Figma-like холст (pan/zoom)
├── ios-frame.jsx       — iOS 26 Liquid Glass фрейм
├── client.jsx          — 11 экранов клиента
├── courier.jsx         — 4 экрана курьера
├── dispatcher.jsx      — 5 экранов диспетчера
└── uploads/            — PNG референсы
```
