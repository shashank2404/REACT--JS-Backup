

// function customRender(container,reactElement){
//     console.log(container )
//     console.log(reactElement)
//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML= reactElement.Children;
//     domElement.setAttribute('href',reactElement.props.href);
//     domElement.setAttribute('target',reactElement.props.target);
// console.log(reactElement.props.href)
//     container.appendChild(domElement);
// }

function customRender(container,reactElement){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.Children;
    for (const prop in reactElement.props) {
        if(prop ==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    container.appendChild(domElement);
}
const reactElement = {
    type : 'a',
    props : {
        href:"https://google.com",
        target : '_blank'
    },
    Children : 'Click on visit',
}
const mainContainer = document.querySelector('#root');

customRender(mainContainer,reactElement)