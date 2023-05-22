function setVh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Execute a função uma vez quando a página é carregada
setVh();

// Execute a função novamente sempre que a janela é redimensionada
window.addEventListener('resize', setVh);

  