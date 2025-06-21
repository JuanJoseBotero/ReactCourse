const url = "https://jsonplaceholder.typicode.com/comments"
const url2 = "https://jsonplaceholder.typicode.com/todos"
const url3 = "https://jsonplaceholder.typicode.com/photos"

const consultarAPI = async () => {
    const startTime = performance.now();
    try {
        const responses = await Promise.all([fetch(url), fetch(url2), fetch(url3)])
        const lista = [
            {nombre : "Comentarios", response: responses[0]},
            {nombre : "Tareas", response: responses[1]},
            {nombre : "Fotos", response: responses[2]}
        ];
        lista.forEach( (object) => {
            if (!object.response.ok){
                console.error(`Error en la consulta de ${object.nombre}: HTTP status ${object.response.status}`);
            }
        })
    }
    catch (error) {
        console.error(error);
    }
    const endTime = performance.now();
    console.log(`Tiempo total de consulta: ${(endTime - startTime).toFixed(2)} ms`);
}

consultarAPI()