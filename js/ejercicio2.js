function calcularResultados() {
    const radio = parseFloat(document.getElementById('radio').value);

    if (isNaN(radio) || radio <= 0) {
        alert('Por favor, ingrese un radio válido.');
        return;
    }

    const longitud = 2 * Math.PI * radio;
    const area = Math.PI * Math.pow(radio, 2);
    const volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);

    document.getElementById('longitud').textContent = `Longitud de la circunferencia: ${longitud.toFixed(2)} unidades`;
    document.getElementById('area').textContent = `Área del círculo: ${area.toFixed(2)} unidades cuadradas`;
    document.getElementById('volumen').textContent = `Volumen de la esfera: ${volumen.toFixed(2)} unidades cúbicas`;
}