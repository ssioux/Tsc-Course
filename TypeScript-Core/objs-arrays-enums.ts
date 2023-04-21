// const person: {
//     name: string;
//     age: number;
// } = {
    
//      const person: {
//         name: string;
//         age: number;
//         hobbies: string[];
//         role: [number, string]
//      } = {
//     name: "maximilian",
//     age: 30,
//     hobbies: ["Sports", "Cooking"],
//     role: [2, "author"]
// };
   
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN = "ADMIN", READ_ONLY = 0, AUTHOR = "AUTHOR"};

const person = {
name: "maximilian",
age: 30,
hobbies: ["Sports", "Cooking"],
role: Role.ADMIN
};



// person.role.push("admin")
//  console.log("🚀 ~ file: app.ts:17 ~ role", person.role)

// person.role[1] = 10

// person.role = [0, "admin", "user"]
     
let favouriteActivities: string[];
favouriteActivities = ["Sports"]

console.log("🚀 ~ file: app.ts:15 ~ person", person.name)

for (const hobby of person.hobbies) {
    console.log("for", hobby.toUpperCase())
    // console.log(hobby.map())  // !!! ERROR !!!
}

if (person.role === Role.ADMIN)
 {
    console.log("is ADMIN")
 }
