const urlBase = 'http://localhost:4000/api';

exports.getTodosLosAutos =  () => {
    console.log("en servicio")
    try {
        fetch(urlBase+'/autos/todos')
        .then(response => response.json())
        .then(autos => console.log(autos))
    } catch (error) {
        
    }
}