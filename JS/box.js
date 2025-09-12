/*document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('productSearchForm');
    const searchInput = document.getElementById('searchInput');

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const searchTerm = searchInput.value.toLowerCase().trim();

         const productIds = [
            'cremoso-vainilla-1-step',
            'brownie',
            'buñuelos',
            'butter-moist',
            'cheesecake-de-frambueza',
            
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
            'merengue-richs',
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
            'pastel-de-frutos-secos',
            'pastel-red-velvet',
            'red-velvet',
            'rosca-de-reyes',
            'suggar-free',
            'vainilla-cremoso',
        ];

        // ✅ 1. Limpiar resaltados anteriores
        const previouslyHighlighted = document.querySelectorAll('.highlight');
        previouslyHighlighted.forEach(el => el.classList.remove('highlight'));

        // ✅ 2. Buscar todos los productos que contengan el término de búsqueda
        const matchingProductIds = productIds.filter(id => id.toLowerCase().includes(searchTerm));

        if (matchingProductIds.length > 0) {
            // ✅ 3. Resaltar todos los elementos encontrados
            matchingProductIds.forEach(productId => {
                const productElement = document.getElementById(productId);
                if (productElement) {
                    productElement.classList.add('highlight');
                }
            });

            // ✅ 4. Desplazar al primero
            const firstMatch = document.getElementById(matchingProductIds[0]);
            if (firstMatch) {
                firstMatch.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            alert('Producto no encontrado.');
        }
    });

    window.addEventListener('hashchange', function () {
        const currentHash = window.location.hash.substring(1);
        const highlightedElements = document.querySelectorAll('.highlight');

        highlightedElements.forEach(el => {
            if (el.id !== currentHash) {
                el.classList.remove('highlight');
            }
        });
    });

    if (window.location.hash) {
        const initialHash = window.location.hash.substring(1);
        const initialElement = document.getElementById(initialHash);
        if (initialElement) {
            initialElement.classList.add('highlight');
        }
    }
});*/

document.addEventListener('DOMContentLoaded', function () {
    console.log("El DOM completamente cargado.");  // Verifica que se dispare el evento

    const searchForm = document.getElementById('productSearchForm');
    const searchInput = document.getElementById('searchInput');

    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const searchTerm = searchInput.value.toLowerCase().trim();

            const productIds = [
                'cremoso-vainilla-1-step', 'brownie', 'buñuelos', 'butter-moist', 'cheesecake-de-frambueza',
                'chocolate-delvis-1-2-3', 'chocolate-holandes', 'chocolate-ultra-1-step', 'chocolate-y-vainilla',
                'concha-de-corazon', 'conchas-integral', 'cream-cake-chocolate-hr', 'cream-cake-chocolate',
                'cream-cake-clasico-vainilla', 'cream-cake-clasico-chocolate', 'cream-cake-vainilla-hr',
                'crema-especial-chocolate', 'crema-especial-vainilla', 'crema-pastelera-frio', 'crema-pastelera-miltra',
                'cremoso-chocolate-1-Step', 'cremoso-vainilla', 'deleite-chocolate', 'delvis-vainilla-dleite',
                'donas-integral', 'esponja-chocolate', 'esponja-de-vainilla', 'galletas-integral', 'galletas-red-velvet',
                'harina-satin-cream-cake', 'mix-retencion-chocolate', 'mix-retencion-vainilla', 'merengue-rico',
                'mix-crepas', 'mix-esponja-lacteo', 'mix-vainilla-amarilla', 'mix-vainilla-ultra', 'mix-zanahoria',
                'mix-deleite-chocolate', 'pan-de muerto-chocolate', 'pan-de muertos', 'panettone', 'panqueletas-integral',
                'pastel-amarillo-1-2-3', 'pastel-de-frutos-secos', 'pastel-red-velvet', 'red-velvet', 'rosca-de-reyes',
                'suggar-free', 'vainilla-cremoso'
            ];

            // Limpiar resaltado previo
            const previouslyHighlighted = document.querySelectorAll('.highlight');
            previouslyHighlighted.forEach(el => el.classList.remove('highlight'));

            // Buscar coincidencias
            const matchingProductIds = productIds.filter(id => id.toLowerCase().includes(searchTerm));

            if (matchingProductIds.length > 0) {
                // Resaltar productos encontrados
                matchingProductIds.forEach(productId => {
                    const productElement = document.getElementById(productId);
                    if (productElement) {
                        productElement.classList.add('highlight');
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

window.addEventListener('hashchange', function () {
    const currentHash = window.location.hash.substring(1);
    const highlightedElements = document.querySelectorAll('.highlight');

    highlightedElements.forEach(el => {
        if (el.id !== currentHash) {
            el.classList.remove('highlight');
        }
    });
});

if (window.location.hash) {
    const initialHash = window.location.hash.substring(1);
    const initialElement = document.getElementById(initialHash);
    if (initialElement) {
        initialElement.classList.add('highlight');
    }
}



/****************PDF****************/
const pdfViewer = document.getElementById("pdfViewer");
const pdfModal = document.getElementById("pdfModal");
function openPDF(file){
 pdfViewer.src = file;
 pdfModal.showModal();   
}
pdfModal.addEventListener("click", (e)=> {
    if (e.target === pdfModal){
        pdfModal.closest();
    }
});