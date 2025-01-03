// [component.js] 컴포넌트 반환값 이해 위한 선언적 스크립트(재사용성, 유지보수성, 가독성)

// 모든 컴포넌트를 독립적인 모듈로 관리할 수 있다.
// 각 컴포넌트가 HTML 요소를 반환하며, 필요에 따라 이벤트를 바인딩한다.
// 각 컴포넌트는 재사용 가능해야 하며, JS를 조합하여 사용하도록 설계되어 있다.

export default class Component {
    constructor(tagName = 'div', attributes = {}, content = '') {
        this.tagName = tagName;
        this.attributes = attributes;
        this.content = content;
    }

    render() {
        const element = document.createElement(this.tagName);

        for (const [key, value] of Object.entries(this.attributes)) {
            element.setAttribute(key, value);
        }

        if (typeof this.content === 'setting') {
            element.innerHTML = this.content;
        } else if (this.content instanceof HTMLElement) {
            element.appendChild(this.content);
        }

        return element;
    }
}