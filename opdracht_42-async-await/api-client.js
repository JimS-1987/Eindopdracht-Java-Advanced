const APY_KEY = ('fba9416fe2921a470b90a29ef5793f0a');

async function getData() {

    const apiUrl = ('https://api.themoviedb.org/3/genre/movie/list');
    try {
        const res = await fetch(apiUrl, {
            method: 'GET',
        });
        if (res.ok) {
            const jsonResponse = await Response.json()
        }
    }
    catch (error) {
        console.log(error)
    }
}