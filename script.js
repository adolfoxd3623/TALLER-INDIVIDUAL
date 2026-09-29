function ejecutarBucle() {
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    let contenedor = document.getElementById('resultados');
    
    contenedor.innerHTML = '';

    if (isNaN(n1) || isNaN(n2)) {
        alert('Por favor, ingresa ambos números.');
        return;
    }

    // Bucle de 5 iteraciones exactas
    for (let i = 1; i <= 5; i++) {
        let operacionTexto = '';
        let colorBorde = '#38bdf8';

        if (i === 1) {
            operacionTexto = `${n1} + ${n2} = ${n1 + n2}`;
            colorBorde = '#3b82f6'; // Azul
        } else if (i === 2) {
            operacionTexto = `${n1} - ${n2} = ${n1 - n2}`;
            colorBorde = '#10b981'; // Verde
        } else if (i === 3) {
            operacionTexto = `${n1} × ${n2} = ${n1 * n2}`;
            colorBorde = '#f59e0b'; // Amarillo
        } else if (i === 4) {
            operacionTexto = n2 === 0 ? 'División por 0 no permitida' : `${n1} ÷ ${n2} = ${(n1 / n2).toFixed(2)}`;
            colorBorde = '#ef4444'; // Rojo
        } else if (i === 5) {
            operacionTexto = n2 === 0 ? 'Módulo por 0 no permitido' : `${n1} % ${n2} = ${n1 % n2}`;
            colorBorde = '#8b5cf6'; // Morado
        }

        // Crear tarjeta visual para la iteración
        let card = document.createElement('div');
        card.className = 'result-card';
        card.style.borderLeftColor = colorBorde;
        card.innerHTML = `
            <span class="iter-badge">Iteración ${i}</span>
            <span>${operacionTexto}</span>
        `;
        contenedor.appendChild(card);
    }
}