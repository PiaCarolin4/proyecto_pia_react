export default function Perfil(){ return(
    <nav>
        <main class="container py-5">
    <h1 class="section-title mb-4">Mi Perfil</h1>
    <div class="row g-4">
      <div class="col-lg-4">
        <div class="info-card p-3 rounded-4">
          <h5>Estado de cuenta</h5>
          <div class="small">Correo: <span id="pfEmail"></span></div>
          <div class="small">Descuento Duoc: <span id="pfDuoc" class="text-neon"></span></div>
          <div class="small">Puntos LevelUp: <span id="pfPoints" class="text-neon fw-bold"></span></div>
          <div class="small">Nivel: <span id="pfLevel" class="fw-bold"></span></div>
          <div class="mt-2">Tu código de referidos: <code id="pfRefCode"></code>
            <button class="btn btn-sm btn-outline-neon share-btn" data-title="Únete a LevelUp" id="btnShareRef">Compartir</button>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <form id="profileForm" class="info-card p-4 rounded-4">
          <h5>Actualizar información</h5>
          <div class="row g-3">
            <div class="col-md-6"><label class="form-label">Nombre</label><input id="pfName" class="form-control"></input></div>
            <div class="col-md-6"><label class="form-label">Preferencias</label><input id="pfPrefs" class="form-control" placeholder="Consolas, Mouse..."></input></div>
            <div class="col-12"><label class="form-label">Dirección de envío</label><input id="pfAddress" class="form-control"></input></div>
          </div>
          <div class="d-grid d-md-flex gap-2 mt-3"><button class="btn btn-neon" type="submit">Guardar cambios</button></div>
        </form>
      </div>
    </div>
  </main>
    </nav>
) }