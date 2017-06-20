const h = require('virtual-dom/h');
const diff = require('virtual-dom/diff');
const patch = require('virtual-dom/patch');
const createElement = require('virtual-dom/create-element');

function render() {
    return h(
        'div', 
        { id: 'container' },
        [
            h(
                'div',
                { id: 'circle'},
                'Circle'
            ),
            h('br'),
            h(
                'div',
                { id: 'square'},
                'Square'
            )
        ]
    
    )
}

let tree = render(),
    rootNode = createElement(tree),
    document.body.appendChild(rootNode)
