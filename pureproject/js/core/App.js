// [App.js] 컴포넌트들의 렌더링 통합/로직 통합 역할


// <CONSTRAINTS>
// 현재 값과 이전 값의 상호 작용을 파악해야 함!
// 이전 입력값을 고려해서 이전 값 상태에 대한 변수를 사용해야 함!


// [연산자와 닷] if (isNaN(char) == true)
//   [연산자] if (isNaN(char) == true && char != '.') <CONSTRAINT: 연산자와 닷만 존재>
//   [닷] if (isNaN(char) == true && char == '.')
// [숫자] if (isNaN(char) == false)

// <CONSTRAINTS>
// [연산자 중복] 연산자 다음 연산자 x, 연산자 다음 숫자 o, 숫자 다음 연산자 o, 숫자 다음 숫자 o
// [닷 중복] 닷이 있는 숫자에서 닷을 또 사용x, 닷이 없는 숫자에서 닷을 사용o, 앞에 숫자 없이 닷 사용 △
// <CONSTRAINT OF CONSTRAINTS>: 숫자 : 연산자 및 닷뿐만 아니라 연산자 : 닷 관계 존재
// 1. 앞에 숫자 없이 닷 뒤에 숫자 O
// 2. 앞에 숫자 없이 닷 뒤에 연산자 X
// 3. 연산자를 사용할 시 dotClicked = false;
// 이를 위해 Clicked의 위계를 둠! (닷이 연산자와 숫자에 종속적임!)

// 연산자와 닷과 숫자 간의 삼중 관계를 고려해야 함!
// 그 안에서 CONSTRAINT로 인한 Functional Dependency 고려

// 조건을 따져가며 코드 연계성과 효율성을 고려!!
// 문제는 연산자와 닷에서 확인되므로 if (isNaN(char) == true) 문에서 세부 문제 파악
// 그 세부 문제에서 연산자 중복과 닷 중복이 있을 것
// 내부 if (char != '.')
// 내부 if (char == '.')
// 마지막으로 clicked 변경!

import createComponent from './component.js';
import Display from '../components/display.js'
import Buttons from '../components/buttons.js'

export default class App {
    constructor(root) {
        this.state = {
            currentInput: '',
            result: '',
            nonNumberClicked: false,
            dotClicked: false
        };

        this.root = root;
        this.display = new Display(this.state);
        this.buttons = new Buttons(this.onEnumerate.bind(this), this.onReset.bind(this), this.onCalculate.bind(this));

        this.render();
    }

    onEnumerate(value) {
        if (isNaN(value) == true) {
            if (value != '.') {
                if (this.state.nonNumberClicked == true) {
                    alert("Next input must be Number! Please enter Number.");
                    return;
                }
                this.state.dotClicked = false;
            }
            else if (value == '.') {
                if (this.state.dotClicked == true) {
                    alert("Dot is overlapped in a number! Please enter other symbol.");
                    return;
                }
                this.state.dotClicked = true;
            }
            this.state.nonNumberClicked = true;
        }
        else {
            this.state.nonNumberClicked = false;
        }

        this.state.currentInput += value;
        this.render();
    }

    onReset() {
        this.state = { currentInput: '', result: '', nonNumberClicked: false, dotClicked: false };
        this.render();
    }

    onCalculate() {
        try {
            if (this.state.nonNumberClicked == true) {
                alert("Last input in the field must be Number! Please enter Number.");
            } else {
                this.state.result = eval(this.state.currentInput.replace('×', '*').replace('÷', '/'));
            }
        } catch {
            this.state.result = 'ERROR!';
        }
        this.render();
    }

    render() {
        this.root.innerHTML = '';
        this.root.appendChild(this.display.render(this.state));
        this.root.appendChild(this.buttons.render()); // 비효율적인 것 같은데?
    }
}


/*
        function enumerate(char) {
            if (isNaN(char) == true) {
                if (char != '.') {
                    if (nonNumberClicked == true) {
                        alert("Next input must be Number! Please enter Number.");
                        return;
                    }
                    dotClicked = false;
                }
                if (char == '.') {
                    if (dotClicked == true) {
                        alert("Dot is overlapped in a number! Please enter other symbol!");
                        return;
                    }
                    dotClicked = true;
                }
                nonNumberClicked = true;
                }
                else {
                    nonNumberClicked = false;
                }
            $display.value += char;
        }
        */