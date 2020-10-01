import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'element-theme-default';
import { i18n } from 'element-react'
import locale from 'element-react/src/locale/lang/en'

i18n.use(locale);

// class Forms extends React.Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        comment: ''
//     }
//   }

//   handleComment = (event) => {
//     this.setState({
//       comment : event.target.value
//     })
//   }

//   render() {
//     return (
//       <form>
//         <h1> the comment to add is {this.state.comment}</h1>
//         Comments: <textarea value= {this.state.comment} onChange = {this.handleComment}></textarea>
//       </form>
//     )
//   }
  
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
