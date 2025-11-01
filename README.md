JJ# School Website - Fullstack Starter

This repo contains a starter **fullstack** project for a school website:
- **Frontend**: React (Vite), TailwindCSS, Framer Motion
- **Backend**: Node.js (Express), PostgreSQL
- **Features**: Events, Faculty, Academics, Announcements, Gallery (image upload)

## Quick setup

### Backend
1. cd server
2. copy `.env.example` -> `.env` and set your Postgres credentials
3. run `npm install`
4. ensure Postgres is running and create the DB:
   - `createdb schooldb` (or create via psql)
5. run `npm start`

### Frontend
1. cd client
2. run `npm install`J
3. run `npm run dev`
4. Open `http://localhost:5173`

API runs on `http://localhost:5000` by default.

## Notes
- Gallery uploads are stored in `server/uploads` and served statically at `/uploads`.
- This is a starter template — secure auth, validation, and production hardening are not included.

Enjoy! 🚀
