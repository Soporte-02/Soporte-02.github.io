document.addEventListener('DOMContentLoaded', function () {
    console.log("El DOM completamente cargado.");  // Verifica que se dispare el evento

    const searchForm = document.getElementById('productSearchForm');
    const searchInput = document.getElementById('searchInput');

    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const searchTerm = searchInput.value.toLowerCase().trim();

            const productIds = [
                'Dia-dia-del niño-del-niño',
                'Capacillo-Capacillos-capacillo-capacillos',
                ''
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
                alert('Producto no encontrado.');
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