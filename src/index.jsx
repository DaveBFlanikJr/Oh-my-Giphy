import '../assets/stylesheets/application.scss';

import ReactDom from "react-dom";
import React from "react"; // importing the JSX

import App from './components/App';

const root = document.querySelector("#root");
console.log(root);

ReactDom.render(<App />, root);
// functional component
// const Hello = ({name, flag}) => {}  More complex
// const Hello = (props) => { // with reacting functional components use caps
//   const {name, flag} = props;
//   return (
//     <div>
//       <h1>Hello {name}!!! {flag}</h1>
//     </div>
//   );
// };

// class  Hello extends React.Component {
//   render() {
//     const { name, flag } = this.props;
//     return (
// <div>
//   <h1>Hello {name}!!!</h1>
// </div>
//   );
// }
