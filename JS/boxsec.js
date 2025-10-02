
    /*document.addEventListener('DOMContentLoaded', function () {
    console.log("El DOM completamente cargado.");  

    let productos = [];  
    let productosPorCargar = 6;
    let productosCargados = 6;  

    // 📌 Lista de IDs amigables (ajústala a tus 50 recetas reales)
    const productIds = [
            'cremoso-vainilla-1-step',
            'brownie',
            'butter-moist',
            'buñuelos',
            'cheesecake-de-frambueza',
            'vainilla-cremoso',
            'chocolate-delvis-1-2-3',
            'chocolate-holandes',
            'chocolate-ultra-1-step',
            'chocolate-y-vainilla',
            'concha-de-corazon',
            'conchas-integral',
            'cream-cake-chocolate-hr',
            'cream-cake-chocolate',
            'cream-cake-clasico-vainilla',
            'cream-cake-clasico-chocolate',
            'cream-cake-vainilla-hr',
            'crema-especial-chocolate',
            'crema-especial-vainilla',
            'crema-pastelera-frio',
            'crema-pastelera-miltra',
            'cremoso-chocolate-1-Step',
            'cremoso-vainilla',
            'deleite-chocolate',
            'delvis-vainilla-dleite',
            'donas-integral',
            'esponja-chocolate',
            'esponja-de-vainilla',
            'galletas-integral',
            'galletas-red-velvet',
            'harina-satin-cream-cake',
            'mix-retencion-chocolate',
            'mix-retencion-vainilla',
            'merengue-rico',
            'mix-crepas',
            'mix-esponja-lacteo',
            'mix-vainilla-amarilla',
            'mix-vainilla-ultra',
            'mix-zanahoria',
            'mix-deleite-chocolate',
            'pan-de muerto-chocolate',
            'pan-de muertos',
            'panettone',
            'panqueletas-integral',
            'pastel-amarillo-1-2-3',
            'pastel-red-velvet',
            'pastel-de-frutos-secos',
            'red-velvet',
            'rosca-de-reyes',
            'suggar-free',
        ];

    // 📌 Generar array de productos con ID + imagen + link
    for (let i = 1; i <= productIds.length; i++) {
      productos.push({
        id: productIds[i-1], 
        nombre: productIds[i-1].replace(/-/g, " "), // Nombre legible
        imagen: `../Img/fila/${i}.png`, 
        link: `../recetas/${i < 10 ? '0' : ''}${i}.html`,
      });
    }

    // 🔹 Renderizar productos
    function mostrarProductos(inicio, cantidad, lista = productos) {
      const container = document.getElementById('productos-container');
      const productosSlice = lista.slice(inicio, inicio + cantidad);

      productosSlice.forEach((producto) => {
        const productoHTML = `
          <div class="col-12 col-sm-6 col-md-4 mb-4">
            <div class="text-center">
              <a href="${producto.link}">
                <img src="${producto.imagen}" 
                     class="img-fluid imgre" 
                     id="${producto.id}" 
                     alt="${producto.nombre}" />
              </a>
              
            </div>
          </div>
        `;
        container.innerHTML += productoHTML;
      });
    }

    // 🔹 Cargar más productos
    function cargarMasProductos() {
      document.getElementById('loading-spinner').style.display = 'block';
      document.getElementById('load-more-btn').style.display = 'none';

      setTimeout(() => {
        mostrarProductos(productosCargados, productosPorCargar);
        productosCargados += productosPorCargar;

        document.getElementById('loading-spinner').style.display = 'none';
        if (productosCargados < productos.length) {
          document.getElementById('load-more-btn').style.display = 'inline-block';
        } else {
          document.getElementById('load-more-btn').style.display = 'none';
        }
      }, 800);
    }

    // 🔹 Cargar primeros productos
    function cargarPrimerosProductos() {
      const container = document.getElementById('productos-container');
      container.innerHTML = '';
      mostrarProductos(0, productosPorCargar);
    }

    // 🔹 Buscador: mostrar todas las coincidencias
    const searchForm = document.getElementById('productSearchForm');
    const searchInput = document.getElementById('searchInput');

    if (searchForm && searchInput) {
      searchForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const searchTerm = searchInput.value.toLowerCase().trim();
        const container = document.getElementById('productos-container');
        container.innerHTML = ""; // limpiar el grid

        if (searchTerm) {
          // Filtrar coincidencias en ID o en nombre
          const filtrados = productos.filter(p =>
            p.id.toLowerCase().includes(searchTerm) ||
            p.nombre.toLowerCase().includes(searchTerm)
          );

          if (filtrados.length > 0) {
            // Mostrar todas las coincidencias
            mostrarProductos(0, filtrados.length, filtrados);

            // Ocultar botón de cargar más mientras se muestran coincidencias
            document.getElementById('load-more-btn').style.display = 'none';
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Producto no encontrado',
              text: 'Verifica que el nombre esté bien escrito.',
              confirmButtonText: 'Aceptar',
              confirmButtonColor: '#3085d6',
            });

            // Restaurar la paginación normal
            productosCargados = productosPorCargar;
            cargarPrimerosProductos();
            document.getElementById('load-more-btn').style.display = 'inline-block';
          }
        } else {
          // Restaurar paginación normal si el input está vacío
          productosCargados = productosPorCargar;
          cargarPrimerosProductos();
          document.getElementById('load-more-btn').style.display = 'inline-block';
        }
      });
    }

    // Inicializar
    cargarPrimerosProductos();
    document.getElementById('load-more-btn').addEventListener('click', cargarMasProductos);
});*/

/***********************SIN SCROLL******************* */
/*document.addEventListener('DOMContentLoaded', function () {
    console.log("El DOM completamente cargado.");  

    let productos = [];  
    let productosPorCargar = 6;
    let productosCargados = 6;  

    // 📌 Lista de IDs amigables (50 recetas)
    const productIds = [
        'cremoso-vainilla-1-step', 'brownie', 'butter-moist', 'buñuelos', 'cheesecake-de-frambueza',
        'vainilla-cremoso', 'chocolate-delvis-1-2-3', 'chocolate-holandes', 'chocolate-ultra-1-step',
        'chocolate-y-vainilla', 'concha-de-corazon', 'conchas-integral', 'cream-cake-chocolate-hr',
        'cream-cake-chocolate', 'cream-cake-clasico-vainilla', 'cream-cake-clasico-chocolate',
        'cream-cake-vainilla-hr', 'crema-especial-chocolate', 'crema-especial-vainilla', 'crema-pastelera-frio',
        'crema-pastelera-miltra', 'cremoso-chocolate-1-Step', 'cremoso-vainilla', 'deleite-chocolate',
        'delvis-vainilla-dleite', 'donas-integral', 'esponja-chocolate', 'esponja-de-vainilla',
        'galletas-integral', 'galletas-red-velvet', 'harina-satin-cream-cake', 'mix-retencion-chocolate',
        'mix-retencion-vainilla', 'merengue-rico', 'mix-crepas', 'mix-esponja-lacteo', 'mix-vainilla-amarilla',
        'mix-vainilla-ultra', 'mix-zanahoria', 'mix-deleite-chocolate', 'pan-de muerto-chocolate',
        'pan-de muertos', 'panettone', 'panqueletas-integral', 'pastel-amarillo-1-2-3', 'pastel-red-velvet',
        'pastel-de-frutos-secos', 'red-velvet', 'rosca-de-reyes', 'suggar-free'
    ];

    // 📌 Generar array de productos con ID + imagen + link
    for (let i = 1; i <= productIds.length; i++) {
        productos.push({
            id: productIds[i-1], 
            nombre: productIds[i-1].replace(/-/g, " "), // Nombre legible
            imagen: `../Img/fila/${i}.png`, 
            link: `../recetas/${i < 10 ? '0' : ''}${i}.html`,
        });
    }

    // 🔹 Renderizar productos
    function mostrarProductos(inicio, cantidad, lista = productos) {
        const container = document.getElementById('productos-container');
        const productosSlice = lista.slice(inicio, inicio + cantidad);

        productosSlice.forEach((producto) => {
            const productoHTML = `
                <div class="col-12 col-sm-6 col-md-4 mb-4">
                    <div class="text-center">
                        <a href="${producto.link}">
                            <img src="${producto.imagen}" 
                                 class="img-fluid imgre" 
                                 id="${producto.id}" 
                                 alt="${producto.nombre}" />
                        </a>
                    </div>
                </div>
            `;
            container.innerHTML += productoHTML;
        });
    }

    // 🔹 Cargar más productos
    function cargarMasProductos() {
        document.getElementById('loading-spinner').style.display = 'block';
        document.getElementById('load-more-btn').style.display = 'none';

        setTimeout(() => {
            mostrarProductos(productosCargados, productosPorCargar);
            productosCargados += productosPorCargar;

            document.getElementById('loading-spinner').style.display = 'none';
            if (productosCargados < productos.length) {
                document.getElementById('load-more-btn').style.display = 'inline-block';
            } else {
                document.getElementById('load-more-btn').style.display = 'none';
            }
        }, 800);
    }

    // 🔹 Cargar primeros productos
    function cargarPrimerosProductos() {
        const container = document.getElementById('productos-container');
        container.innerHTML = '';
        mostrarProductos(0, productosPorCargar);
    }

    // 🔹 Buscador: coincidencia por palabra completa
    const searchForm = document.getElementById('productSearchForm');
    const searchInput = document.getElementById('searchInput');

    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const searchTerm = searchInput.value.toLowerCase().trim();
            const container = document.getElementById('productos-container');
            container.innerHTML = ""; // limpiar el grid

            if (!searchTerm) {
                // 🔹 SweetAlert2 si no hay nada para buscar
                Swal.fire({
                    icon: 'info',
                    title: 'Campo vacío',
                    text: 'No hay nada para buscar.',
                    confirmButtonText: 'Aceptar',
                    confirmButtonColor: '#3085d6',
                });

                productosCargados = productosPorCargar;
                cargarPrimerosProductos();
                document.getElementById('load-more-btn').style.display = 'inline-block';
                return;
            }

            // 🔹 Filtrar productos que contengan la palabra completa en ID o nombre
            const filtrados = productos.filter(p =>
                p.id.toLowerCase().split('-').includes(searchTerm) ||
                p.nombre.toLowerCase().split(' ').includes(searchTerm)
            );

            if (filtrados.length > 0) {
                mostrarProductos(0, filtrados.length, filtrados);
                document.getElementById('load-more-btn').style.display = 'none';
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Producto no encontrado',
                    text: 'Verifica que el nombre esté bien escrito.',
                    confirmButtonText: 'Aceptar',
                    confirmButtonColor: '#3085d6',
                });

                productosCargados = productosPorCargar;
                cargarPrimerosProductos();
                document.getElementById('load-more-btn').style.display = 'inline-block';
            }
        });
    }

    // Inicializar
    cargarPrimerosProductos();
    document.getElementById('load-more-btn').addEventListener('click', cargarMasProductos);
});*/
 
/**************CON SCROLL********************* */
document.addEventListener('DOMContentLoaded', function () {
    console.log("El DOM completamente cargado.");  

    let productos = [];  
    let productosPorCargar = 6;
    let productosCargados = 6;  

    const productIds = [
        'cremoso-vainilla-1-step', 'brownie', 'butter-moist', 'buñuelos', 'cheesecake-de-frambueza',
        'vainilla-cremoso', 'chocolate-delvis-1-2-3', 'chocolate-holandes', 'chocolate-ultra-1-step',
        'chocolate-y-vainilla', 'concha-de-corazon', 'conchas-integral', 'cream-cake-chocolate-hr',
        'cream-cake-chocolate', 'cream-cake-clasico-vainilla', 'cream-cake-clasico-chocolate',
        'cream-cake-vainilla-hr', 'crema-especial-chocolate', 'crema-especial-vainilla', 'crema-pastelera-frio',
        'crema-pastelera-miltra', 'cremoso-chocolate-1-Step', 'cremoso-vainilla', 'deleite-chocolate',
        'delvis-vainilla-dleite', 'donas-integral', 'esponja-chocolate', 'esponja-de-vainilla',
        'galletas-integral', 'galletas-red-velvet', 'harina-satin-cream-cake', 'mix-retencion-chocolate',
        'mix-retencion-vainilla', 'merengue-rico', 'mix-crepas', 'mix-esponja-lacteo', 'mix-vainilla-amarilla',
        'mix-vainilla-ultra', 'mix-zanahoria', 'mix-deleite-chocolate', 'pan-de muerto-chocolate',
        'pan-de muertos', 'panettone', 'panqueletas-integral', 'pastel-amarillo-1-2-3', 'pastel-red-velvet',
        'pastel-de-frutos-secos', 'red-velvet', 'rosca-de-reyes', 'suggar-free'
    ];

    // Generar array de productos
    for (let i = 1; i <= productIds.length; i++) {
        productos.push({
            id: productIds[i-1], 
            nombre: productIds[i-1].replace(/-/g, " "), // Nombre legible
            imagen: `../Img/fila/${i}.png`, 
            link: `../recetas/${i < 10 ? '0' : ''}${i}.html`,
        });
    }

    // Renderizar productos
    function mostrarProductos(inicio, cantidad, lista = productos) {
        const container = document.getElementById('productos-container');
        const productosSlice = lista.slice(inicio, inicio + cantidad);

        productosSlice.forEach((producto) => {
            const productoHTML = `
                <div class="col-12 col-sm-6 col-md-4 mb-4">
                    <div class="text-center">
                        <a href="${producto.link}">
                            <img src="${producto.imagen}" 
                                 class="img-fluid imgre" 
                                 id="${producto.id}" 
                                 alt="${producto.nombre}" />
                        </a>
                    </div>
                </div>
            `;
            container.innerHTML += productoHTML;
        });
    }

    // Cargar más productos
    function cargarMasProductos() {
        document.getElementById('loading-spinner').style.display = 'block';
        document.getElementById('load-more-btn').style.display = 'none';

        setTimeout(() => {
            mostrarProductos(productosCargados, productosPorCargar);
            productosCargados += productosPorCargar;

            document.getElementById('loading-spinner').style.display = 'none';
            if (productosCargados < productos.length) {
                document.getElementById('load-more-btn').style.display = 'inline-block';
            } else {
                document.getElementById('load-more-btn').style.display = 'none';
            }
        }, 800);
    }

    // Cargar primeros productos
    function cargarPrimerosProductos() {
        const container = document.getElementById('productos-container');
        container.innerHTML = '';
        mostrarProductos(0, productosPorCargar);
    }

    // Buscador: coincidencia por palabra completa
    const searchForm = document.getElementById('productSearchForm');
    const searchInput = document.getElementById('searchInput');
    const sectionProductos = document.getElementById('productos-container'); // 👈 scroll aquí

    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const searchTerm = searchInput.value.toLowerCase().trim();
            const container = document.getElementById('productos-container');
            container.innerHTML = ""; // limpiar el grid

            if (!searchTerm) {
                Swal.fire({
                    icon: 'info',
                    title: 'Campo vacío',
                    text: 'No hay nada para buscar.',
                    confirmButtonText: 'Aceptar',
                    confirmButtonColor: '#3085d6',
                });

                productosCargados = productosPorCargar;
                cargarPrimerosProductos();
                document.getElementById('load-more-btn').style.display = 'inline-block';
                return;
            }

            // Filtrar productos por ID o nombre
            const filtrados = productos.filter(p =>
                p.id.toLowerCase().split('-').includes(searchTerm) ||
                p.nombre.toLowerCase().split(' ').includes(searchTerm)
            );

            if (filtrados.length > 0) {
                mostrarProductos(0, filtrados.length, filtrados);
                document.getElementById('load-more-btn').style.display = 'none';

                // 👇 Scroll hacia los productos
                if (sectionProductos) {
                    sectionProductos.scrollIntoView({ behavior: "smooth", block: "start" });
                }

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Producto no encontrado',
                    text: 'Verifica que el nombre esté bien escrito.',
                    confirmButtonText: 'Aceptar',
                    confirmButtonColor: '#3085d6',
                });

                productosCargados = productosPorCargar;
                cargarPrimerosProductos();
                document.getElementById('load-more-btn').style.display = 'inline-block';
            }
        });
    }

    // Inicializar
    cargarPrimerosProductos();
    document.getElementById('load-more-btn').addEventListener('click', cargarMasProductos);
});
