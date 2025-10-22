export default function Registro(){ return(
    <nav>
        <main class="container py-5">
    <h1 class="section-title mb-4">Crea tu cuenta</h1>

    <form id="registerForm" class="info-card p-4 rounded-4 needs-validation" novalidate>
      
      <div id="formAlerts"></div>

      <div class="row g-3">
        
        <div class="col-md-6">
          <label class="form-label">Nombre</label>
          <input id="rName" class="form-control" required maxlength="100" placeholder="Tu nombre"></input>
          <div class="invalid-feedback">Campo obligatorio (máx. 100).</div>
        </div>

       
        <div class="col-md-6">
          <label class="form-label">Apellido</label>
          <input id="rLast" class="form-control" maxlength="100" placeholder="Tu apellido"></input>
        </div>

        
        <div class="col-12">
          <label class="form-label">Correo</label>
          <input
            id="rEmail"
            type="email"
            class="form-control"
            required
            maxlength="100"
            placeholder="tu@duoc.cl"
            pattern="^[^\s@]{1,100}@(?:duoc\.cl|profesor\.duoc\.cl|gmail\.com)$"></input>
          <div class="form-text">Permitidos: @duoc.cl, @profesor.duoc.cl, @gmail.com (máx. 100).</div>
          <div class="invalid-feedback">Correo inválido o dominio no permitido.</div>
        </div>

        
        <div class="col-md-6">
          <label class="form-label">Contraseña</label>
          <input id="rPass" type="password" class="form-control" required minlength="4" maxlength="10" placeholder="4 a 10 caracteres"></input>
          <div class="invalid-feedback">Debe tener entre 4 y 10 caracteres.</div>
        </div>

        
        <div class="col-md-6">
          <label class="form-label">Confirmar contraseña</label>
          <input id="rPass2" type="password" class="form-control" maxlength="10" placeholder="Repite la contraseña"></input>
          <div class="invalid-feedback">Las contraseñas no coinciden.</div>
        </div>

        
        <div class="col-12">
          <label class="form-label">Código de referido (opcional)</label>
          <input id="rRefCode" class="form-control" placeholder="Ej: ABC123"></input>
        </div>

        <div class="col-12">
          <label class="form-label">Preferencias (categorías favoritas)</label>
          <input id="rPrefs" class="form-control" placeholder="Consolas, Mouse, Sillas..."></input>
        </div>

        <div class="col-12 d-grid d-md-flex gap-2">
          <button class="btn btn-neon" type="submit">Crear cuenta</button>
          <a class="btn btn-outline-neon" href="login.html">Ya tengo cuenta</a>
        </div>
      </div>
    </form>
  </main>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script type="module" src="JS/main.js"></script>

  
  
    </nav>
)}