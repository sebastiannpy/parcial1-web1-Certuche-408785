const sections = {
  muro: `
    <h2>Muro</h2>
    <div class="card">
      <div class="profile-header">
        <img src="img/9bfbef1f-7c91-411d-9d66-620201ce08f4.jpg" alt="Foto de perfil" class="profile-pic">
        <div>
          <h3>Sebastian Certuche</h3>
          <p>Hola, soy estudiante de desarrollo de software</p>
        </div>
      </div>
      <div class="profile-body">
        <p>Me gusta conocer lugares nuevos, me gusta la historia, la ciencia y poder obtener conocimientos de todo, me gusta leer libros y en mis tiempos libres suelo realizar cursos de robotica</p>
      </div>
    </div>
  `,
 info: `
  <h2>Info</h2>
  <div class="card">
    <div class="info-text">
      <p>
        Hola mi nombre es Sebastian Certuche, naci en Cali el 3 de Marzo del año 2006, me gusta cocinar cuando tengo tiempo, tambien me llama la atencion la robotica. Me gusta tambien estar en forma entonces por lo general siempre hago algun tipo de deporte, cuando era niño practicaba natacion y ciclismo, lo deje un tiempo y luego volvi a natacion, estuve entrenando durante 2 años y luego me sali por temas de tiempo. Actualmente estoy en 4 semetre de Desarrollo de Softwaer y planeo especializarme en computacion en la nube o ciencia de datos. 
      </p>
    </div>
    <div class="info-images">
      <img src="img/nines.png" alt="Imagen 1">
      <img src="img/pizza.png" alt="Imagen 2">
      <img src="img/deporte.png" alt="Imagen 3">
      <img src="img/robot.png" alt="Imagen 4">
    </div>
  </div>

  `,
  photos: `
  <h2>Photos</h2>
  <div class="photos-gallery">
    <img src="img/samy.jpg" alt="Foto 1">
    <img src="img/8cbf97e9-e4d8-45cf-9464-a5292227f004.jpg" alt="Foto 2">
    <img src="img/37279df7-9110-40fb-bfbb-4a1bfae15e58.jpg" alt="Foto 3">
    <img src="img/paisaje.png" alt="Foto 4">
    <img src="img/cocora.png" alt="Foto 5">
    <img src="img/Iglesia.png" alt="Foto 6">
  </div>
`,

  boxes: `
    <h2>Boxes</h2>
    <p>Zzz</p>
  `
};


function loadSection() {
  const hash = window.location.hash.substring(1) || "muro";
  const content = document.getElementById("content");

  if (sections[hash]) {
    content.innerHTML = sections[hash];
  } else {
    content.innerHTML = "<h2>Sección no encontrada</h2>";
  }
}

window.addEventListener("hashchange", loadSection);

window.addEventListener("load", loadSection);

