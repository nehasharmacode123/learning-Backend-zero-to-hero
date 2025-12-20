/* 
🧠 PART 1: JavaScript (Backend-Focused)

❌ Frontend JS (DOM, events) = ignore
✅ Backend JS = logic + data + async
*/

let name = "Neha"; 
const role = "backend";

// 👉 Backend me 90% const use hota hai

// 2️⃣ Data Types (Daily backend use)

string = "User";
number = 24;
boolean = true;
array = ["admin", "user"];
object = {email: "a@b.com", age: 22};

// 📌 Backend me object sabse zyada important

// 3️⃣ Functions (API ka base)

// function sum(a,b){
//     return a+b;
// }

// console.log(sum(2,3))

// 👉 API ke andar yehi functions chalte hain

// 4️⃣ Arrow Functions (Industry standard)

// const multiply = (a,b) => a*b;

// 📌 Express + Node me yeh zyada use hota hai

/* 
⏱️ PART 2: Asynchronous JavaScript (🔥 MOST IMPORTANT)
Problem samjho:

Backend me:

Database slow hota hai

File upload slow hota hai

API call slow hoti hai

Isliye JS wait nahi karta
*/

// 5️⃣ setTimeout (Async example)

// console.log("Start");

// setTimeout(() => {
//     console.log("Database created");
    
// }, 2000)

// console.log("End");



/* 
Output in terminal
node script.js
Start
End
Database response
*/

// 6️⃣ Promise (Real backend style)

const getData = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("User data");
        }, 1000);
    })
}

getData().then(data => {
    console.log(data);
})

// 7️⃣ async / await (🔥 MUST KNOW)

const fetchData = async () => {
    const data = await getData()
    console.log(data)
    
}

fetchData();

// 📌 95% backend code async/await hota hai