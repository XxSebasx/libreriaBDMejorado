document.getElementById("addProductForm").addEventListener("submit", addLibro);
document.getElementById("getLibroISBN").addEventListener("click", getLibro);
document.getElementById("getLibros").addEventListener("click", getLibros);
document.getElementById("eliminarLibro").addEventListener("click", deleteLibro);

getLibros();

async function addLibro(event) {
  event.preventDefault();
  const ISBN = document.getElementById("ISBN").value;
  const autor = document.getElementById("autor").value;
  const titulo = document.getElementById("titulo").value;

  try {
    const response = await fetch("/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ISBN, autor, titulo }),
    });

    const data = await response.json();
    console.log(data)
    if (data.ISBN) {
      getLibros();
    } else {
      alert("No se puedo añadir");
    }
  } catch (error) {
    console.log("Error inesperado");
  }
}



async function getLibro() {
  let ISBN = document.getElementById("ISBNNUevo").value;

  try {
    const response = await fetch(`/book/${ISBN}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data)
    fila = `<tr><td>${data.ISBN}</td>
        <td>${data.titulo}</td>
        <td>${data.autor}</td>
        </tr>`;
    document.getElementById("productList").innerHTML = fila;
  } catch (error) {
    console.log("Error inesperado");
  }
}

async function getLibros() {
  try {
    const response = await fetch("/getBooks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    filas = "";
    for (let index = 0; index < data.length; index++) {
      libro = data[index];
      fila = `<tr><td>${libro.ISBN}</td>
             <td>${libro.titulo}</td>
             <td>${libro.autor}</td></tr>`;
      filas += fila;
    }
    document.getElementById("productList").innerHTML = filas;
  } catch (error) {
    console.log(error);
  }
}

async function deleteLibro() {
  let ISBN = document.getElementById("ISBNNUevo").value;
  try {
    const response = await fetch(`/book/${ISBN}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if(data){
      getLibros();
    }
    
  } catch (error) {
    console.log("Hubo un problema");
  }
}