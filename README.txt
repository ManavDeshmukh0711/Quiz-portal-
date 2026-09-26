SMART ONLINE LEARNING & QUIZ PORTAL
====================================

Requirements:
1. Node.js installed
2. MongoDB installed and running
3. VS Code recommended

Folder:
QuizPortal/
  public/
    index.html
    css/style.css
    js/script.js
  routes/
    quizRoutes.js
  server.js
  package.json

INSTALL:
Open terminal inside QuizPortal folder and run:

npm install

RUN:
1. Start MongoDB.
2. Run:
   npm start

3. Open browser:
   http://localhost:3000

MongoDB database:
Database: quizportal
Collection: scores

API:
POST /api/submit-score
GET  /api/leaderboard
