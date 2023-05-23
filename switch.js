class SwitchBox extends HTMLElement {
    constructor() {
        super()
        const switchBox = document.createElement('div', 'switch')
        const content = document.createElement('div', 'content')
        const box = document.createElement('div', 'box')
        const check = document.createElement('div', 'check')
        const inp = document.createElement('input')
        inp.style.cssText = `
        position: absolute;
        cursor: none;
        opacity: 0;
        width: 0;
        height: 0;
        --webkit--user-select: none;
        caret-color: transparent;
        color: transparent;
        `
        switchBox.style.cssText = `
        width: 70px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        `
        content.style.cssText = `
        z-index: -2;
        position: absolute;
        width: 70px;
        height: 35px;
        border-radius: 25px;
        background-size: 100% 100%;
        background: yellow;
        `
        box.style.cssText = `
        z-index: 100;
        caret-color: transparent;
        box-sizing: border - box;
        padding: 5px;
        width: 70px;
        height: auto;
        border-radius: 50px;
        background-color: #ccc;
        cursor: pointer;
        `
        check.style.cssText = `
        position: relative;
        left: 0;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: white;
        transition: left 0.3s;
        color: #1162d3;
        `
        const contentApi = content.animate([{
                backgroundColor: 'greenyellow',
                width: '71px',
                height: '36px',
                opacity: '.9',
            },
            {
                backgroundColor: 'greenyellow',
                width: '73px',
                height: '38px',
                opacity: '.8',

            },
            {
                backgroundColor: 'greenyellow',
                width: '75px',
                height: '40px',
                opacity: '.7',

            },
            {
                backgroundColor: 'greenyellow',
                width: '77px',
                height: '42px',
                opacity: '.6',

            },
            {
                backgroundColor: 'greenyellow',
                width: '79px',
                height: '45px',
                opacity: '.5',

            },
            {
                backgroundColor: 'greenyellow',
                width: '81px',
                height: '47px',
                opacity: '.4',
            },
            {
                backgroundColor: 'greenyellow',
                width: '83px',
                height: '49px',
                opacity: '.2',
            },
            {
                backgroundColor: 'greenyellow',
                width: '85px',
                height: '51px',
                opacity: '.2',
            },
            {
                backgroundColor: 'greenyellow',
                width: '87px',
                height: '53px',
                opacity: '.1',
            },
            {
                backgroundColor: 'greenyellow',
                width: '89px',
                height: '55px',
                opacity: '0',
            },

        ], {
            easing: 'ease-in-out',
            duration: 500
        })
        switchBox.appendChild(content)
        switchBox.appendChild(box)
        box.appendChild(check)
        box.appendChild(inp)
        document.body.appendChild(switchBox)
        box.onclick = function ck() {
            contentApi.play()
            if (check.style.left === '35px') {
                check.style.left = '0px'
                box.style.backgroundColor = '#ccc'
            } else {
                check.style.left = '35px'
                box.style.backgroundColor = '#1677ff'
            }
        }
        // 自定义方法？
        this.customFn = new CustomEvent('changeVal', {
            detail: {
                value: true,
            }
        })
    }

}
customElements.define('switch-box', SwitchBox)