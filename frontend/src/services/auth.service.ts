import type { RegisterData } from "@/types/auth.types";

export async function registerUser(data:RegisterData){
const response = await fetch('http://localhost:8000/api/auth/register' ,
{
    method : "POST",
    headers : {
        "Content-Type":"application/json"
    },
    body : JSON.stringify(data)
});

const result = await response.json();
console.log("Status:", response.status);
console.log("Response:", result);
if(!response.ok){
    throw new Error(result.message);
}

return result ;
}