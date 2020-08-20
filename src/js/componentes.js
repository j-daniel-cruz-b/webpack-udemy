
import '../css/componentes.css';

export const saludar = (nombre) => {
    console.log('Hola: ', nombre);

    const h1 = document.createElement('h1');
    h1.innerText = `Hola soy ${nombre}, mucho gusto a todos c:`;

    document.body.append(h1);
}