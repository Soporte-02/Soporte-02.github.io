document.addEventListener('DOMContentLoaded', function () {
    console.log("El DOM completamente cargado.");  // Verifica que se dispare el evento

    const searchForm = document.getElementById('productSearchForm');
    const searchInput = document.getElementById('searchInput');

    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const searchTerm = searchInput.value.toLowerCase().trim();

            const productIds = [
                'Dia-dia-del niño-del-niño-niños-dia del niño',
                'Capacillo-Capacillos-capacillo-capacillos',
                'Utensilios-utensilios',
                'Letreros-letreros',
                'Decoracion-decoracion-Decoración-decoración',
                'Electrodomesticos-electrodomesticos',
                'Colorantes-colorantes-colorante-Colorante',
                'Moldes-moldes-Molde-molde',
                'Otoño-otoño',
                'Primavera-primavera',
                'Fiestas-Patrias-fiesta-patria-Mexico-mexico-fiestas patrias',
                'Dia-San-Valentin-dia-san-valentin',
                'Dia-De-Muertos-dia-de-muertos',
                'Dia-de las-Madres-dia-de-las-madres',
                'Navidad-navidad',
                'Verano-verano',
                'Harinas-harinas',
                'Haloween-haloween-halowen-halowin',
                'Sprinkles-sprinkles',
                'Perlas-perlas',
                'Platos-platos-Desechables-desechables',
                'Quimicos-quimicos',
                'Materias-Primas-materias-primas',
                'Resposteria-reposteria',
                'Jarabe-Monin-jarabe-monin',
                '',
            ];

            // Limpiar resaltado previo
            const previouslyHighlighted = document.querySelectorAll('.highlight-cat');
            previouslyHighlighted.forEach(el => el.classList.remove('highlight-cat'));

            // Buscar coincidencias
            const matchingProductIds = productIds.filter(id => id.toLowerCase().includes(searchTerm));

            if (matchingProductIds.length > 0) {
                // Resaltar productos encontrados
                matchingProductIds.forEach(productId => {
                    const productElement = document.getElementById(productId);
                    if (productElement) {
                        productElement.classList.add('highlight-cat');
                    }
                });

                // Desplazar al primer resultado
                const firstMatch = document.getElementById(matchingProductIds[0]);
                if (firstMatch) {
                    firstMatch.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                //alert('Producto no encontrado o mal escrito.');
                 Swal.fire({
                        icon: 'error',
                        title: 'Producto no encontrado',
                        text: 'Verifica que el nombre esté bien escrito.',
                        confirmButtonText: 'Aceptar',
                        confirmButtonColor: '#3085d6',
                    });
            }
        });
    } else {
        console.error("No se encontró el formulario o el campo de búsqueda.");
    }
});

// Limpia highlight-cat al cambiar el hash
window.addEventListener('hashchange', function () {
    const currentHash = window.location.hash.substring(1);
    const highlightedElements = document.querySelectorAll('.highlight-cat');

    highlightedElements.forEach(el => {
        if (el.id !== currentHash) {
            el.classList.remove('highlight-cat');
        }
    });
});

// Aplica highlight-cat si hay hash inicial
if (window.location.hash) {
    const initialHash = window.location.hash.substring(1);
    const initialElement = document.getElementById(initialHash);
    if (initialElement) {
        initialElement.classList.add('highlight-cat');
    }
}