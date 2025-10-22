export default function Eventos(){ return(
    <nav>
        <main class="container py-5">
    <header class="mb-4">
      <h1 class="section-title title-glow mb-2">Eventos gamers en Chile</h1>
      <p>Explora próximos torneos, lanzamientos y meetups. Haz clic en “Ver detalles” para más info.</p>
    </header>

    <section>
      <div id="eventsGrid" class="row g-4">
      </div>
    </section>
  </main>

  <div class="modal fade" id="eventModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
      <div class="modal-content bg-black text-white border border-neon rounded-4">
        <div class="modal-header">
          <h5 class="modal-title" id="modalTitle"></h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <img id="modalImage" class="w-100 rounded-3 mb-3" alt=""></img>
          <p id="modalDesc"></p>
          <ul class="list-unstyled small">
            <li><i class="bi bi-calendar-event"></i> <span id="modalFecha"></span></li>
            <li><i class="bi bi-geo-alt"></i> <span id="modalLugar"></span></li>
            <li><i class="bi bi-ticket-perforated"></i> <span id="modalEntrada"></span></li>
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

  
    </nav>
)}