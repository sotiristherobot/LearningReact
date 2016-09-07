// request React libary
var React = require('react');
//request the dom renderer
var ReactDOM = require('react-dom');


// StorePicker component
//this will give us the <StorePicker/>
var StorePicker = React.createClass({
   render : function () {
       return(
           <p>Hello React </p>
       )
   } 
});


//DOM renderer
ReactDOM.render(<StorePicker/>, document.querySelector('#main'));