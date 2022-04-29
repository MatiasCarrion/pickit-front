const urlBase = "http://localhost:4000/api";

exports.getTodosLosAutos = async () => {
  try {
    const response = await (await fetch(urlBase + "/autos/todos")).json();
    return response;
  } catch (error) {
      console.log(error)
  }
};
