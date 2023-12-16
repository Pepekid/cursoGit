const btn = document.querySelector('.btn');
function saludar() {
	btn.textContent = 'Boton apretado';
	setTimeout(() => {
		alert('Hola desde Javascript');
	}, 1000);
}
