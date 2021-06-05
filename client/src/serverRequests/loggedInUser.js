export default async function loggedIn() {
    const response = await fetch('http://localhost:4000/api/admin/loggedIn', {
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        withCredentials: true,
    });
    const content = await response.json();
    return content;
}
