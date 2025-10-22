export default function Login(){ return(
    <nav>
        <main class="d-flex align-items-center justify-content-center min-vh-100">
    <div class="container">
      <form id="loginForm" class="info-card p-4 rounded-4 needs-validation" novalidate>
        <h1 class="section-title mb-4 text-center">Iniciar Sesión</h1>

        <div class="mb-3">
          <label class="form-label">Correo</label>
          <input type="email" id="email" class="form-control form-control-lg" required></input>
          <div class="invalid-feedback">Ingresa un correo válido.</div>
        </div>

        <div class="mb-3">
          <label class="form-label">Contraseña</label>
          <input type="password" id="password" class="form-control form-control-lg" minlength="6" required></input>
          <div class="invalid-feedback">Mínimo 6 caracteres.</div>
        </div>

        <div class="d-grid gap-2">
          <button class="btn btn-neon btn-lg" type="submit">Entrar</button>
          <a class="btn btn-outline-neon" href="registro.html">Crear cuenta</a>
        </div>
      </form>
    </div>
  </main>
    </nav>
) }