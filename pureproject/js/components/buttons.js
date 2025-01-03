// [buttons.js] button을 rendering/functioning하는 역할

export default class Buttons {
    constructor(onEnumerate, onReset, onCalculate) {
        this.onEnumerate = onEnumerate;
        this.onReset = onReset;
        this.onCalculate = onCalculate;
    }

    render() {
        const table = document.createElement('table');
        const items = [
            ['AC', '÷'],
            ['7', '8', '9', '×'],
            ['4', '5', '6', '-'],
            ['1', '2', '3', '+'],
            ['0', '.', '=']
        ];

        table.setAttribute('border', '1');

        items.forEach((row, rowIndex) => {
            const tr = document.createElement('tr');
            row.forEach( (item, colIndex) => {
                const td = document.createElement('td');
                td.textContent = item;

                if (item === 'AC') {
                    td.setAttribute('colspan', '3');
                    td.addEventListener('click', () => this.onReset());
                } else if (item === '=') {
                    td.addEventListener('click', () => this.onCalculate());
                } else if (item === '0') {
                    td.setAttribute('colspan', '2');
                    td.addEventListener('click', () => this.onEnumerate(item));
                } else {
                    td.addEventListener('click', () => this.onEnumerate(item));
                }
                tr.appendChild(td);
            });
            table.appendChild(tr);
        });
        return table;
    }
}