export default function Carrito(){ return(
    <nav>
        <main class="container py-5">
    <h1 class="section-title mb-4">Tu Carrito</h1>
    <div class="row g-4">
      <div class="col-lg-8">
        <div id="cartList" class="vstack gap-3"></div>
      </div>

      <aside class="col-lg-4">
        <div class="info-card p-3 rounded-4">
          <h5>Resumen</h5>
          <div class="d-flex justify-content-between">
            <span>Subtotal</span><span id="cSubtotal"></span>
          </div>
          <div class="d-flex justify-content-between">
            <span>Descuento Duoc (20%)</span><span id="cDuoc"></span>
          </div>
          <div class="d-flex justify-content-between fw-bold border-top pt-2">
            <span>Total</span><span id="cTotal" class="text-neon"></span>
          </div>

          <button id="btnCheckout" class="btn btn-neon w-100 mt-3">Pagar (demo)</button>

          <div class="mt-4 d-grid gap-2">
            <a href="login.html" class="btn btn-outline-neon">
              ¿Eres estudiante Duoc? Inicia sesión aquí para el descuento
            </a>
            <a href="registro.html" class="btn btn-outline-neon">
              ¿No tienes cuenta? Regístrate aquí
            </a>
          </div>
        </div>
      </aside>
    </div>
  </main>
    </nav>
) }