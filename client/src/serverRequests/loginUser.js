export default async function loginUser(credentials) {
    return fetch('http://localhost:4000/api/admin/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        withCredentials: true,
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}
