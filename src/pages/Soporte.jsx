export default function Soporte(){ return(
    <nav>
        <main class="container py-5">
    <h1 class="section-title mb-4">Soporte Técnico</h1>

    <div class="info-card p-4 rounded-4 mb-4">
      <h5 class="mb-2">¿Necesitas reparación?</h5>
      <p class="mb-0">
        <strong>¿Tienes tu consola o PC en mal estado y necesitas arreglo?</strong> Escríbenos y te contactamos a la brevedad.
      </p>
    </div>

    <div class="row g-4">
      <div class="col-md-6">
        <div class="info-card p-4 rounded-4">
          <h5 class="mb-3">Contáctanos</h5>

          <div id="supportNotice" class="alert alert-success d-none" role="alert">
            <i class="bi bi-check-circle-fill"></i>
            ¡Gracias! Hemos recibido tu solicitud. Te contactaremos a la brevedad.
          </div>

          <form id="supportForm" class="needs-validation" novalidate>
            <div class="mb-3">
              <label class="form-label">Nombre</label>
              <input type="text" id="name" class="form-control form-control--light" placeholder="Tu nombre" required></input>
              <div class="invalid-feedback">Ingresa tu nombre.</div>
            </div>

            <div class="mb-3">
              <label class="form-label">Correo</label>
              <input type="email" id="email" class="form-control form-control--light" placeholder="tucorreo@ejemplo.com" required></input>
              <div class="invalid-feedback">Ingresa un correo válido.</div>
            </div>

            <div class="mb-3">
              <label class="form-label">Mensaje</label>
              <textarea id="message" class="form-control form-control--light" rows="4" placeholder="Cuéntanos el problema" required></textarea>
              <div class="invalid-feedback">Escribe tu mensaje.</div>
            </div>

            <div class="d-grid gap-2">
              <button class="btn btn-neon" type="submit">
                <i class="bi bi-send"></i> Enviar
              </button>
              <button class="btn btn-outline-neon" type="button" id="btnVolver">
                <i class="bi bi-arrow-left"></i> Volver
              </button>
            </div>
          </form>
        </div>
      </div>

      
      <div class="col-md-6">
        <div class="card p-4 h-100">
          <h5 class="mb-3">Horarios y canales</h5>
          <ul class="mb-0">
            <li>Atención: Lun a Vie 10:00–18:00</li>
            <li>WhatsApp: +56 9 1234 5678</li>
            <li>Correo: soporte@levelup.cl</li>
          </ul>
        </div>
      </div>
    </div>
  </main>
    </nav>
)}