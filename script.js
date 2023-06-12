fetch('https://raymond-cors-anywhere.up.railway.app/http://www.raydelto.org/agenda.php')
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById("lista");
    data.sort((a, b) => a.nombre.localeCompare(b.nombre));
    data.forEach(userInfo => {
        const itemList = document.createElement("li");
        itemList.textContent = `${userInfo.nombre} ${userInfo.apellido} - ${userInfo.telefono}`;
        list.appendChild(itemList);
    })
  })
  .catch(error => console.error(error));

  const button = document.getElementById("Save");
  button.addEventListener("click", (event) => {
    event.preventDefault();
    newContact();
  });

  const newNombre = document.getElementById("nombre");
  const newApellido = document.getElementById("apellido");
  const newTelefono = document.getElementById("telefono");

  newContact = () => {
    const objt = {
        nombre : newNombre.value,
        apellido : newApellido.value,
        telefono : newTelefono.value,
    };

    fetch('https://raymond-cors-anywhere.up.railway.app/http://www.raydelto.org/agenda.php', {
        method: "POST",
        body: JSON.stringify(objt),
        headers: {
            "Content-Type" : "application/json",
        },
    })
    .then((res) => res.json())
    .then((response) => console.log("Success:", response))
    .catch((error) => console.error("Error:", error));
  }


  function mostrarFormulario() {
    var formulario = document.getElementById("formulario");
    if (formulario.style.display === "none") {
      formulario.style.display = "block";
    } else {
      formulario.style.display = "none";
    }
  }




