// [index.js]: 애플리케이션의 엔트리 포인트 역할 (다른 파일과 의존성 최소화 필요)

import createComponent from './core/component.js';
import App from './core/App.js'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById("root");
    new App(root);
})


/*
window.enumerate = enumerate;
window.calculate = calculate;
window.reset = reset;
*/