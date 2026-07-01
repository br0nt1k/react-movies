# React Movies Search App 🎬

## 🌍 **International Version**

### 📌 Project Description

👋 This repository showcases an interactive movie search web application integrated with **The Movie Database (TMDB) REST API**. The project focuses on asynchronous operations, secure DOM rendering via React Portals, clean application structure, and strict typing.

### 💻 Core Technologies & Skills:

- 🔧 **Core:** React & TypeScript for solid logic and component encapsulation.
- ⚡ **Build Tool:** Vite for fast bundling and optimized development environment.
- 🌐 **Data Fetching:** Axios with token authorization headers to communicate with external APIs securely.
- ⭐ **Styling:** CSS Modules & modern-normalize for browser-independent styling and container safety.
- 🚀 **Deployment:** Seamlessly hosted and deployed via Vercel with protected env variables.

### 💡 Key Skills & Concepts Implemented:

- **Asynchronous State Management:** Segregating API communication into a distinct service layer (`movieService.ts`). Correctly synchronizing data fetching timelines with component lifecycles using loading handles (`isLoading`) and global errors (`isError`).
- **Environment Configuration (.env):** Implementing strict server-side authentication through `VITE_TMDB_TOKEN` to protect secret keys from source code visibility.
- **Modern Form Handling:** Applying modern React `action` methods along with native `FormData` extraction instead of binding heavy controlled state to inputs.
- **React Portals (`createPortal`):** Directing modal window outputs directly to `document.body` to bypass nested layout overflow restrictions while keeping logic bound to the React element tree.
- **Effect Cleanup Processes:** Handling browser window events through `useEffect` by appending dynamic listeners (e.g., `Escape` key close actions) and locking target dimensions (`body` scroll blocking) with robust unmount lifecycles.

### 📂 Project Structure:

```text
src/
├── components/
│   ├── App/
│   │   ├── App.tsx
│   │   └── App.module.css
│   ├── SearchBar/
│   ├── MovieGrid/
│   ├── MovieModal/
│   ├── Loader/
│   └── ErrorMessage/
├── services/
│   └── movieService.ts   # Shipped Axios request configurations
└── types/
    └── movie.ts          # Unified global movie interface

```

### 🔗 Live Site:

👉 [View Movie Search App on Vercel](https://react-movies-beta-cyan.vercel.app)

---

## 🇺🇦 **Ukrainian Version**

### 📌 Опис проєкту

👋 Цей репозиторій демонструє інтерактивний вебзастосунок для пошуку фільмів, інтегрований із **REST API сервісу The Movie Database (TMDB)**. Проєкт орієнтований на відпрацювання асинхронних операцій, безпечний рендеринг модальних вікон через React Portals, чисту архітектуру та сувору типізацію.

### 💻 Основні Технології та Навички:

- 🔧 **Core:** React & TypeScript для надійної логіки та інкапсуляції компонентів.
- ⚡ **Build Tool:** Vite для швидкої збірки та оптимізації розробки.
- 🌐 **Data Fetching:** Axios із авторизаційними заголовками токена для безпечного зв'язку з зовнішніми API.
- ⭐ **Стилізація:** CSS Modules та modern-normalize для кросбраузерності та ізоляції стилів компонентів.
- 🚀 **Розгортання:** Хостинг та деплой успішно налаштовані через Vercel із захищеними змінними оточення.

### 💡 Отримані навички та практичний досвід:

- **Асинхронне управління станом:** Винесення комунікації з API в окремий сервісний шар (`movieService.ts`). Чітка синхронізація запитів із життєвим циклом компонентів через стани завантаження (`isLoading`) та обробку помилок (`isError`).
- **Безпечна робота з оточенням (.env):** Реалізація авторизації запитів за допомогою змінної `VITE_TMDB_TOKEN`, що виключає зберігання приватних ключів у відкритому коді репозиторію.
- **Сучасна обробка форм:** Застосування атрибута `action` та об'єкта `FormData` для збору даних з форми замість важких контрольованих інпутів, що оптимізує рендеринг.
- **Портали (React Portals):** Рендеринг модалки `MovieModal` напряму в `document.body` за допомогою `createPortal`, що гарантує незалежність вікна від обмежуючих стилів батьківських контейнерів.
- **Очищення ефектів (Cleanup):** Робота з全局ними подіями браузера через `useEffect`: блокування прокрутки фону сторінки та додавання слухача клавіші `Escape` із обов'язковим видаленням під час розмонтування.

### 🔗 Живий сайт:

👉 [Переглянути застосунок на Vercel](https://react-movies-beta-cyan.vercel.app)
