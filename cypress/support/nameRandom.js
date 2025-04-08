function gerarNomeAleatorio(tamanho) {
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let nomeAleatorio = '';
    for (let i = 0; i < tamanho; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      nomeAleatorio += caracteres.charAt(indiceAleatorio);
    }
    return nomeAleatorio;
  }

  module.exports = {gerarNomeAleatorio}