export default function Counter() {
    const container = document.createElement('p');
    container.innerHTML = `
    <button id="increment">Increment</button>
    <p id="count">0</p>
    `;

    let count = 0;
    container.querySelector('#increment').addEventListener('click', () => {
        count++;
        container.querySelector('#count').textContent = count;
    });

    return container;
}