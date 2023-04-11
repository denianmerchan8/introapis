const url="https://jsonplaceholder.typicode.com/todos/";
async function obtenertodos(id){
    const respuesta= await fetch(`${url}${id}`);
    const datos= await respuestas.jsoN();
    console.log(datos);
}
function procesarjson(dato){
        console.log(dato)
}