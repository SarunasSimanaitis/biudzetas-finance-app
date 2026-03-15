**Finansų programėlė**



**Tai yra internetinė asmeninių finansų valdymo sistema, sukurta naudojant React, Node.js, Express ir MongoDB.**



**Programėlė leidžia vartotojui registruotis, prisijungti, pridėti išlaidas, peržiūrėti išlaidų sąrašą ir matyti išlaidų statistiką pagal kategorijas.**



**Naudotos technologijos**

**Frontend**

\- React

\- Vite

\- JavaScript

\- Bootstrap

\- React Router DOM



**Backend**

\- Node.js

\- Express.js

\- MongoDB

\- Mongoose

\- bcryptjs

\- jsonwebtoken

\- cors

\- dotenv



\---



**Programėlės funkcionalumas**



Vartotojas gali:



\- registruotis

\- prisijungti

\- pridėti išlaidas

\- peržiūrėti išlaidų sąrašą

\- ištrinti išlaidas

\- matyti bendrą išlaidų statistiką

\- matyti išlaidas pagal kategorijas



Sistemoje naudojamos kategorijos, kurios saugomos duomenų bazėje ir gali būti pridėtos per API.



\---



**REST API endpointai**



**Autentifikacija**



POST /api/auth/register  

Naujo vartotojo registracija



\---------------------



POST /api/auth/login  

Vartotojo prisijungimas



\---



**Kategorijos**



GET /api/categories  

Gauti visas kategorijas



\---------------------





POST /api/categories  

Sukurti naują kategoriją



\---------------------





DELETE /api/categories/:id  

Pašalinti kategoriją



\---



**Išlaidos**



GET /api/expenses  

Gauti visas išlaidas



\---------------------





GET /api/expenses/stats  

Gauti išlaidų statistiką pagal kategorijas



\---------------------





POST /api/expenses  

Sukurti naują išlaidą



\---------------------





DELETE /api/expenses/:id  

Pašalinti išlaidą



\---



**Kaip paleisti projektą**



**Backend**



Pereiti į backend folderį:



cd backend



Įrašyti dependencies:



npm install



Paleisti backend serverį:



npm run dev



Backend serveris veiks adresu:



http://localhost:5000



**Frontend**



Pereiti į frontend folderį:



cd frontend



Įrašyti dependencies:



npm install



Paleisti frontend:



npm run dev



Frontend aplikacija veiks adresu:



http://localhost:5173



\---



**Projekto struktūra**



backend/

&#x20; src/

&#x20;   config/

&#x09;db.js

&#x20;   controllers/

&#x09;authController.js

&#x09;categoryController.js

&#x09;expenseController.js

&#x20;   models/

&#x09;Category.js

&#x09;Expense.js

&#x09;User.js

&#x20;   routes/

&#x09;authRoutes.js

&#x09;categoryRoutes.js

&#x09;expenseRoutes.js

&#x20;   utils/

&#x09;generateToken.js

&#x20;   server.js

&#x20;   .env



frontend/

&#x20; src/

&#x20;   api/

&#x09;authApi.js

&#x09;categoryApi.js

&#x09;expenseApi.js

&#x20;   components/

&#x09;ExpenseForm.jsx

&#x09;ExpenseList.jsx

&#x09;StatsCard.jsx

&#x20;   pages/

&#x09;DashboardPage.jsx

&#x09;LoginPage.jsx

&#x09;RegisterPage.jsx

&#x20;   utils/

&#x09;auth.js

&#x20;   App.jsx

&#x20;   main.jsx

