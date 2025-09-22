  /*Ejecutar: node server*/

const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;
  
app.use(express.json());
app.use(express.static(__dirname)); // sirve index.html e imágenes

// 📌 GET → obtener productos
app.get("/productos", (req, res) => {
  fs.readFile("productos.json", "utf8", (err, data) => {
    if (err) return res.status(500).send("Error al leer productos");
    res.json(JSON.parse(data));
  });
});

// 📌 POST → actualizar precio
app.post("/actualizar", (req, res) => {
  const { codigo, nuevoPrecio } = req.body;

  fs.readFile("productos.json", "utf8", (err, data) => {
    if (err) return res.status(500).send("Error al leer productos");

    let productos = JSON.parse(data);
    let producto = productos.find(p => p.codigo === codigo);

    if (producto) {
      producto.precio = nuevoPrecio;
      fs.writeFile("productos.json", JSON.stringify(productos, null, 2), err => {
        if (err) return res.status(500).send("Error al guardar producto");
        res.send("✅ Precio actualizado correctamente");
      });
    } else {
      res.status(404).send("❌ Producto no encontrado");
    }
  });
});

// 📌 POST → agregar producto
app.post("/agregar", (req, res) => {
  const { nombre, codigo, precio, imagen } = req.body;

  fs.readFile("productos.json", "utf8", (err, data) => {
    if (err) return res.status(500).send("Error al leer productos");

    let productos = JSON.parse(data);

    if (productos.find(p => p.codigo === codigo)) {
      return res.status(400).send("⚠️ Ya existe un producto con ese código");
    }

    productos.push({ nombre, codigo, precio, imagen });

    fs.writeFile("productos.json", JSON.stringify(productos, null, 2), err => {
      if (err) return res.status(500).send("Error al guardar producto");
      res.send("✅ Producto agregado correctamente");
    });
  });
});

// 📌 DELETE → eliminar producto
app.post("/eliminar", (req, res) => {
  const { codigo } = req.body;

  fs.readFile("productos.json", "utf8", (err, data) => {
    if (err) return res.status(500).send("Error al leer productos");

    let productos = JSON.parse(data);
    const nuevosProductos = productos.filter(p => p.codigo !== codigo);

    if (productos.length === nuevosProductos.length) {
      return res.status(404).send("❌ Producto no encontrado");
    }

    fs.writeFile("productos.json", JSON.stringify(nuevosProductos, null, 2), err => {
      if (err) return res.status(500).send("Error al guardar cambios");
      res.send("🗑️ Producto eliminado correctamente");
    });
  });
});

app.listen(PORT, () => console.log('Servidor corriendo en 👉 http://localhost:${PORT}'));