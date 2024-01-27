module.exports = function generarQuiniela() {
  const quiniela = [];
  for (let i = 0; i < 15; i++) {
    const opcion = Math.random() < 0.33 ? '1' : Math.random() < 0.66 ? 'X' : '2';
    quiniela.push(opcion);
  }
  return quiniela;
};