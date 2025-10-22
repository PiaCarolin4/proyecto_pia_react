export default function Productos(){ return(
    <nav>
        <main class="container py-5">
    <h1 class="section-title mb-4">Catálogo</h1>

   
    <div class="input-group mb-4">
      <span class="input-group-text"><i class="bi bi-search"></i></span>
      <input id="qProducts" class="form-control" placeholder="Buscar por nombre, categoría o código"></input>
    </div>

    
    <div id="catalogo" class="row g-3"></div>
  </main>

  
  
    </nav>
) }