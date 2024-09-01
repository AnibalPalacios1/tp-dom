
document.addEventListener("DOMContentLoaded", function () {

  
  const expresiones = {
    titulo: /^[a-zA-Z0-9\_\-]{1,16}$/, // Letras, numeros, guion y guion_bajo
    detalle: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  }

  
  const formulario=document.getElementById("sugerencia-form")
  const titulo=document.getElementById("sugerencia-titulo")
  const sugerencia=document.getElementById("sugerencia")

  titulo.addEventListener("keyup", (e) => {
    validarCampo(expresiones.titulo, e.target, "sugerencia-titulo");  
  });

  titulo.addEventListener("blur", (e) => {
    validarCampo(expresiones.titulo, e.target, "sugerencia-titulo");  
  });

  sugerencia.addEventListener("keyup", (e) => {
    validarCampo(expresiones.detalle, e.target, "sugerencia");      
  });
  
  sugerencia.addEventListener("blur", (e) => {
    validarCampo(expresiones.detalle, e.target, "sugerencia");      
  });

  const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
      document.getElementById(`${campo}`).classList.remove('formulario__grupo-incorrecto');
      document.getElementById(`${campo}`).classList.add('formulario__grupo-correcto');
      if (campo=="sugerencia-titulo") {
        document.querySelector(".sugerencias-input-error").classList.remove('sugerencias-input-error-activo');
      }
      
    } else {
      document.getElementById(`${campo}`).classList.add('formulario__grupo-incorrecto');
      document.getElementById(`${campo}`).classList.remove('formulario__grupo-correcto');
      if (campo=="sugerencia-titulo") {
        document.querySelector(".sugerencias-input-error").classList.add('sugerencias-input-error-activo');
      }
   }
  }
  


  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    // Validar Campos del formulario

    
    // Traer valores del formulario 5 datos
    const title = document.getElementById("sugerencia-titulo").value;
    const description = document.getElementById("sugerencia").value;
    const imageUrl =
       document.getElementById("sugerencia-image").value ||
        "https://loremflickr.com/320/240/cake";
    const bgColor = document.getElementById("sugerencia-bg-color").value;
    const borderColor = document.getElementById("sugerencia-border-color").value;

    // Mostrar por consola valores del formulario
    console.log({
      title: title,
      description: description,
      imageUrl: imageUrl,
      bgColor: bgColor,
      borderColor: borderColor,
    });

    // Crear nueva card
    const cardContainer = document.getElementById("sugerencias-container");
    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.style.backgroundColor = bgColor;
    newCard.style.borderColor = borderColor;
   
    //Maquetar la card

    newCard.innerHTML = `
    <img src="${imageUrl}" alt="Card Image">
    <div class="card-content"> 
        <p>${title}</p>
        <p>${description}</p>
    </div>               
`;


      //Añadir la nueva card al contenedor
    cardContainer.appendChild(newCard);

      //Limpiar campos del formulario
    document.getElementById("sugerencia-form").reset();
  });

});