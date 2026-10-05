<h1 align="center">🎮 Game Next</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white">
  <img src="https://img.shields.io/badge/TanStack%20Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
  <img src="https://img.shields.io/badge/Zustand-2D3748?style=for-the-badge&logo=redux&logoColor=white">
  <img src="https://img.shields.io/badge/Auth.js-000000?style=for-the-badge&logo=auth0&logoColor=white">
  <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white">
  <img src="https://img.shields.io/badge/better--sqlite3-003B57?style=for-the-badge&logo=sqlite&logoColor=white">
  <img src="https://img.shields.io/badge/bcrypt-525252?style=for-the-badge&logo=letsencrypt&logoColor=white">
  <img src="https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white">
  <img src="https://img.shields.io/badge/Vidstack-FF4785?style=for-the-badge&logo=video.js&logoColor=white">
  <img src="https://img.shields.io/badge/RAWG%20API-000000?style=for-the-badge&logo=gamejolt&logoColor=white">
</p>

A modern game discovery web application built with **Next.js App Router**, **TypeScript**, **Material UI**, and the **RAWG Video Games Database API**.

Game Next lets users browse and search for games, filter games by genre, open detailed game pages, explore screenshots/videos/creators, create an account, sign in, and maintain a personal watchlist.

> Game data and media are provided by [RAWG](https://rawg.io/).

---

## ✨ Features

### 🎮 Game Discovery

- Browse games from the RAWG API.
- Search games by name.
- Filter games by genre.
- Paginated game results.
- Responsive game-card grid.
- Game ratings and review counts.
- Dynamic game detail routes using a game slug.

### 🔎 Game Details

Each game detail page can include:

- Game title and cover/background image.
- Release date.
- Rating.
- Alternative names.
- Official game website.
- Raw game description.
- Genres.
- Developers and publishers.
- Platforms and system requirements.
- Metacritic information.
- Screenshots.
- Trailers/game videos.
- Development team / creators.

### ❤️ Watchlist

Authenticated users can:

- Add games to their personal watchlist.
- Remove games from the watchlist.
- See whether a game is already in the watchlist.
- Browse watchlist items with pagination.
- Keep watchlists isolated per user.

Watchlist data is stored locally in SQLite and linked to the authenticated user.

### 🔐 Authentication

- Username/email + password login.
- User registration.
- Password hashing with `bcrypt`.
- Form validation with `Zod`.
- Credentials authentication through Auth.js / NextAuth.
- JWT-based sessions.
- Protected profile and watchlist routes.
- Automatic redirects for authenticated/unauthenticated users.
- Server Actions for login, signup, logout, and watchlist mutations.

### 🎨 UI & UX

- Material UI component system.
- Custom dark theme.
- Responsive navigation sidebar.
- Responsive search input.
- Mobile-friendly sidebar behavior.
- Loading skeletons for games and game details.
- Responsive game cards.
- MUI pagination.
- Custom theme palette for application surfaces, pagination, search, footer, and skeleton states.

### 🎬 Media

Game trailers are displayed with **Vidstack Player**, using its React media-player components and default video layout.

Screenshots and creator images are displayed with Next.js `<Image>`.

### ⚡ Data Fetching

The project uses **TanStack Query** for client-side data fetching and caching.

Server-rendered routes pre-hydrate queries using:

- `QueryClient`
- `dehydrate`
- `HydrationBoundary`

Client components then consume the hydrated data with `useQuery`.

### 🧠 Client State

**Zustand** is used for the global sidebar state.

The current store manages:

- Sidebar open/closed state.
- Sidebar state updates.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| [Next.js](https://nextjs.org/) | React framework and App Router |
| [React](https://react.dev/) | UI |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Material UI](https://mui.com/) | UI components and theming |
| [TanStack Query](https://tanstack.com/query/latest) | Server/client data fetching and caching |
| [Zustand](https://zustand.docs.pmnd.rs/) | Lightweight client state management |
| [Auth.js / NextAuth](https://authjs.dev/) | Authentication and sessions |
| [SQLite](https://www.sqlite.org/) | Local application database |
| [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) | SQLite access from Node.js |
| [bcrypt](https://www.npmjs.com/package/bcrypt) | Password hashing |
| [Zod](https://zod.dev/) | Request/form validation |
| [Vidstack](https://vidstack.io/) | Game video player |
| [RAWG API](https://rawg.io/apidocs) | Game data and media |

---

## 🏗️ Architecture

The application uses the **Next.js App Router** with route groups to separate authentication, marketing/game content, and profile areas.

```text
src/
├── action/
│   └── logout.ts
│
├── app/
│   ├── (auth)/
│   │   ├── icon.svg
│   │   ├── layout.tsx
│   │   ├── login/
│   │   │   ├── loginAction.ts
│   │   │   └── page.tsx
│   │   └── signup/
│   │       ├── page.tsx
│   │       └── signupAction.ts
│   │
│   ├── (marketing)/
│   │   ├── game/
│   │   │   └── [gameSlug]/
│   │   │       ├── GameCreators.tsx
│   │   │       ├── GameDetail.tsx
│   │   │       ├── GameInfo.tsx
│   │   │       ├── GameMain.tsx
│   │   │       ├── GameScreenShots.tsx
│   │   │       ├── GameTrailers.tsx
│   │   │       ├── Hero.tsx
│   │   │       ├── MediaTabs.tsx
│   │   │       └── page.tsx
│   │   ├── watchlist/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── (profile)/
│   │   ├── icon.svg
│   │   ├── layout.tsx
│   │   └── profile/
│   │       └── page.tsx
│   │
│   ├── api/
│   │   ├── auth/[...nextauth]/route.ts
│   │   ├── creators/route.ts
│   │   ├── game-detail/[gameSlug]/route.ts
│   │   ├── games/route.ts
│   │   ├── get-game/route.ts
│   │   ├── screenshots/route.ts
│   │   ├── trailers/route.ts
│   │   └── watchlist/route.ts
│   │
│   ├── MuiTheme.tsx
│   ├── icon.svg
│   └── layout.tsx
│
├── components/
│   ├── card/
│   ├── footer/
│   ├── header/
│   ├── providers/
│   └── skeletonLoading/
│
├── lib/
│   ├── auth.ts
│   ├── gamedb.ts
│   ├── proxyAgent.ts
│   ├── rawg.ts
│   └── user.ts
│
├── store/
│   └── store.ts
│
├── theme/
│   └── theme.ts
│
├── types/
│   └── type.ts
│
├── .gitignore
├── eslint.config.mjs
├── LICENSE
├── next.config.ts
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

---

## 📂 Project Structure

### `src/app`

Contains the application's routes, layouts, metadata, and API Route Handlers.

#### `(auth)`

Authentication-related routes:

- `/login`
- `/signup`

The auth layout prevents an already authenticated user from accessing the authentication pages and redirects them to `/profile`.

#### `(marketing)`

Main public-facing application area:

- `/`
- `/game/[gameSlug]`
- `/watchlist`

The marketing layout provides the main navigation, sidebar, page container, and footer.

#### `(profile)`

Authenticated profile area:

- `/profile`

The profile layout checks the current session and redirects unauthenticated users to `/login`.

#### `api`

Internal API endpoints that act as the application's server-side boundary for RAWG and SQLite operations.

Next.js Route Handlers are used for these endpoints.

---

## 🔌 API Routes

| Endpoint | Method | Purpose |
| --- | --- | --- |
| `/api/games` | `GET` | Fetch games with pagination, search, and genre filtering |
| `/api/game-detail/[gameSlug]` | `GET` | Fetch detailed information for a game |
| `/api/screenshots` | `GET` | Fetch game screenshots |
| `/api/trailers` | `GET` | Fetch game trailers/videos |
| `/api/creators` | `GET` | Fetch the game's development team |
| `/api/get-game` | `GET` | Get the authenticated user's watchlist game IDs |
| `/api/watchlist` | `GET` | Get paginated watchlist game details |
| `/api/auth/[...nextauth]` | `GET/POST` | Auth.js authentication handler |

The API layer keeps the RAWG API key on the server rather than exposing it directly to browser code.

---

## 🌐 RAWG Integration

RAWG is the primary external data source.

The integration is centralized in:

```text
src/lib/rawg.ts
```

The project currently uses RAWG endpoints for:

- Game lists
- Game details
- Screenshots
- Trailers/movies
- Development teams

The application also exposes its own internal `/api/*` endpoints and fetches RAWG data server-side through those endpoints.

RAWG requires an API key on requests and has attribution/usage requirements. This project displays a RAWG attribution link in the footer.

Learn more:

- [RAWG API documentation](https://rawg.io/apidocs)
- [RAWG terms and API usage information](https://rawg.io/apidocs#terms)

---

## ❤️ Watchlist Architecture

The watchlist is implemented using three SQLite tables:

```text
users
  │
  └── watchlist
        │
        └── watchlist_items
```

### Database relationships

- Every user can have one watchlist.
- A watchlist contains multiple game IDs.
- A game can only be added once to the same watchlist.
- Deleting a user cascades to their watchlist.
- Deleting a watchlist cascades to its items.

The database is initialized in:

```text
src/lib/gamedb.ts
```

Watchlist mutations are implemented as Server Actions:

```text
src/components/card/buttonAddAction.ts
src/components/card/buttonDeleteAction.ts
```

After a successful mutation, TanStack Query invalidates the relevant watchlist queries so the UI can refresh without a full page reload.

---

## 🔐 Authentication Flow

Authentication is implemented with Auth.js / NextAuth Credentials.

```text
Signup
  ↓
Zod validation
  ↓
bcrypt password hashing
  ↓
SQLite user creation
  ↓
Create user's watchlist
  ↓
Credentials sign-in
  ↓
JWT session
```

Login follows:

```text
Login form
  ↓
Zod validation
  ↓
Auth.js Credentials provider
  ↓
SQLite user lookup
  ↓
bcrypt password comparison
  ↓
JWT session
```

The authentication configuration lives in:

```text
src/lib/auth.ts
```

The current user helper lives in:

```text
src/lib/user.ts
```

---

## 🎨 Theming

The MUI theme is defined in:

```text
src/theme/theme.ts
```

The application extends MUI's palette with custom application-specific tokens such as:

- `darkSurface`
- `pagination`
- `footer`
- `search`
- `skeleton`

The theme is provided through:

```text
src/app/MuiTheme.tsx
```

MUI's `AppRouterCacheProvider` is also configured in the root layout for App Router integration.

---

## ⚡ TanStack Query & Hydration

The application uses a client-side `QueryClientProvider` from:

```text
src/components/providers/QueryProvider.tsx
```

Several server routes create and dehydrate a `QueryClient`, then pass the result through `HydrationBoundary`.

For example:

```text
Home page
  ↓
Server-side query
  ↓
dehydrate(QueryClient)
  ↓
HydrationBoundary
  ↓
CardComponent
  ↓
useQuery()
```

This allows the initial query data to be available to client components while retaining TanStack Query's client-side caching and refetching behavior.

---

## 🧠 Zustand

Zustand currently manages the sidebar state:

```text
src/store/store.ts
```

The store contains:

```text
openSidebar
setOpenSidebar()
```

It is consumed by the header, sidebar, and page layout components to coordinate responsive navigation.

---

## 🎬 Video Player

Game trailers are rendered with Vidstack:

```text
src/app/(marketing)/game/[gameSlug]/GameTrailers.tsx
```

The implementation uses:

- `MediaPlayer`
- `MediaProvider`
- `DefaultVideoLayout`
- Vidstack's default player theme and video layout styles

---

## 🖼️ Images

Next.js `Image` is used throughout the application.

RAWG images are allowed through the configured remote image pattern:

```text
media.rawg.io
```

The project also includes a local fallback image:

```text
public/no-image.svg
```

---

## 📄 Metadata & SEO

The project uses Next.js Metadata APIs.

The root layout defines the default title and description:

```text
Game Next
```

Game listing pages generate metadata dynamically from:

- Genre
- Search query
- Pagination

Game detail pages generate metadata from the selected game's RAWG data.

The dynamic game route also defines a canonical URL and Open Graph metadata.

---

## ⏳ Loading States

The project contains dedicated skeleton components for major loading states:

```text
src/components/skeletonLoading/
├── GameDetailHeroLoading.tsx
├── GameDetailLoading.tsx
├── GameInfoLoading.tsx
├── GameMainLoading.tsx
├── GameTabImagesLoading.tsx
└── GamesLoading.tsx
```

These are used while TanStack Query requests are pending.

---

## ⚙️ Requirements

Before running the project, make sure you have:

- Node.js 20+ recommended
- npm
- A RAWG API key

The project is built around:

```text
Next.js 16.3.6
React 19.2.8
TypeScript 5+
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd game-app-nextjs
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create environment variables

Create a `.env.local` file in the project root:

```env
API_KEY=your_rawg_api_key
```

Do not commit `.env.local` or expose the RAWG API key in client-side code.

### 4. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

---

## 🗃️ Database

The project uses SQLite through `better-sqlite3`.

The local database file is:

```text
game.db
```

The schema is created automatically by:

```text
src/lib/gamedb.ts
```

The database contains:

- `users`
- `watchlist`
- `watchlist_items`

Database files are excluded from Git through:

```gitignore
*.db
```

For that reason, a fresh clone creates/uses a local database rather than relying on a committed database file.

---

## 🔒 Environment & Security

Required environment variable:

```env
API_KEY=...
```

The project intentionally keeps the RAWG API key server-side.

The following should not be committed:

```text
.env
.env.local
.env.*
game.db
```

The repository's `.gitignore` already excludes environment files and SQLite database files.

---

## 🧩 Important Directories

| Directory | Responsibility |
| --- | --- |
| `src/action` | Shared Server Actions |
| `src/app` | Routes, layouts, pages, metadata, and API handlers |
| `src/components/card` | Game cards and watchlist controls |
| `src/components/header` | Header, sidebar, and navigation |
| `src/components/footer` | Footer and pagination |
| `src/components/providers` | TanStack Query and page layout providers |
| `src/components/skeletonLoading` | Loading skeleton UI |
| `src/lib` | Authentication, database, RAWG API, and user helpers |
| `src/store` | Zustand stores |
| `src/theme` | MUI theme configuration |
| `src/types` | Shared TypeScript types |
| `public` | Static assets |

---

## 🧪 Validation

Before opening a pull request or pushing a release build, run:

```bash
npm run lint
npm run build
```

---

## ⚠️ Notes

### RAWG API usage

This project depends on the RAWG API for game information and media. A valid API key is required.

RAWG's current API documentation also specifies attribution and usage conditions for its data and images. The application therefore includes a RAWG attribution link in the footer.

### Local database

`game.db` is intentionally not part of the source-controlled application state. Each local environment should maintain its own database.

### Authentication

Passwords are stored as bcrypt hashes rather than plaintext passwords.

### Description data

Game detail pages use the RAWG `description_raw` field for plain-text game descriptions instead of rendering the HTML `description` field.

---

## 📚 Official Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Next.js Route Handlers](https://nextjs.org/docs/app/getting-started/route-handlers)
- [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Material UI](https://mui.com/)
- [Material UI + Next.js integration](https://mui.com/material-ui/integrations/nextjs/)
- [TanStack Query](https://tanstack.com/query/latest)
- [TanStack Query — Advanced SSR](https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr)
- [Auth.js](https://authjs.dev/)
- [Zod](https://zod.dev/)
- [Zustand](https://zustand.docs.pmnd.rs/)
- [Vidstack](https://vidstack.io/docs/player/)
- [RAWG API](https://rawg.io/apidocs)
- [SQLite](https://www.sqlite.org/)
- [better-sqlite3](https://github.com/WiseLibs/better-sqlite3)

---

## 📄 License

This project is licensed under the **MIT License**.

See the `LICENSE` file for more information.

---

## 🗂️ Project

**Game Next** is a full-stack learning/project application focused on building a modern game discovery experience with Next.js, TypeScript, server-side APIs, authentication, local persistence, client-side caching, responsive UI, and third-party game data.

## 👨‍💻 Author

**Mahdi Gorbany**

- GitHub: [@mahdi911110](https://github.com/mahdi911110)

## 🙌 Acknowledgements

- Favicons from [SVG Repo](https://www.svgrepo.com/) and **Lucide-React**.
- Built with ❤️ using **React** and **NEXTJS**.