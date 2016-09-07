// request React libary
var React = require('react');
//request the dom renderer
var ReactDOM = require('react-dom');


// StorePicker component
//this will give us the <StorePicker/>
var StorePicker = React.createClass({
   render : function () {
       //you can only return a single element
       return(
       {/* these are comments in jsx */}
           <form className="store-selector">
               <h2>Please Enter a Store </h2>
               <input type="text" ref="storeId" required/>
               <input type="Submit"/>
           </form>
       )
   } 
});


//DOM renderer
ReactDOM.render(<StorePicker/>, document.querySelector('#main'));