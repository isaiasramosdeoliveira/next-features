"use server"

export async function refresh(token: string) {
    const res = await fetch("http://localhost:4000/api/refresh", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh_token:"" }),
        next: {
            revalidate: 5
        }
    })
        .then((res) => {
            return res.json();
        })
        .catch((err) => console.log("Error"));
    console.log(res);
    return res;
}