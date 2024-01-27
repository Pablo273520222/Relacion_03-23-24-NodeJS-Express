function generarTabla(base) {
    let tabla = '<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>Tabla de Multiplicar</title>\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">\n</head>\n<body>\n';
    tabla += `<h1>Tabla de multiplicar del ${base}</h1>\n`;
    tabla += `<div class="table-responsive">\n`;
    tabla += `<table class="table table-bordered">\n<thead><tr><th>Base</th><th>X</th><th>Resultado</th></tr></thead>\n<tbody>\n`;
  
    for (let i = 1; i <= 10; i++) {
      const resultado = base * i;
      tabla += `<tr><td>${base}</td><td>${i}</td><td>${resultado}</td></tr>\n`;
    }
  
    tabla += `</tbody></table></div>\n</body>\n</html>`;
    return tabla;
  }
  
  module.exports = async function multiplicar(base) {
    return new Promise((resolve, reject) => {
      if (!Number.isInteger(base)) {
        reject(new Error('La base no es un número entero.'));
        return;
      }
  
      const tablaHTML = generarTabla(base);
      resolve(tablaHTML);
    });
  };
  