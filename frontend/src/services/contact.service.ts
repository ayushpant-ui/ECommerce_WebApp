export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactMessage(data: ContactFormData) {
  console.log(process.env.NEXT_PUBLIC_BACKEND_URL);
  const response = await fetch(
    `http://localhost:8000/api/contacts`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    }
  );

const result = await response.json();

console.log("STATUS:", response.status);
console.log("RESULT:", result);

if (!response.ok) {
  throw new Error(result.message);
}
  return result;
}

