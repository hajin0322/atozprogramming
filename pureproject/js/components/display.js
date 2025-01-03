// [display.js] currentInput+result을 rendering/functioning하는 역할

export default class Display {
    constructor(state) {
        this.state = state;
    }

    render(state) {
        const display = document.createElement('div');
        display.innerHTML = `
            <table border = "1">
                <tr><td colspan="4">
                    ${state.currentInput}
                </td></tr>
                <tr><td colspan="4" onclick="alert('해봐야 안다.')">
                    ${state.result}
                </td></tr>
        `;
        return display;

        // const setState = (newState) => {
        //    state = { ...state, ...newState };
        //    render();
        //}
        // 나중에 계산 결과 옆에 리스트로 나열하는 방식으로 진행!
    }
}