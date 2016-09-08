// request React libary
var React = require('react');
//request the dom renderer
var ReactDOM = require('react-dom');


//App Component
var App = React.createClass({
   render : function() {
       return(
         <div className="catch-of-the-day">
            <div className="menu">
                <Header/>
            </div>
             <Order/>
             <Inventory/>
         </div>
       )
   } 
});

// Header
var Header = React.createClass({

    render : function(){

        return(
            <p>Header</p>
        )


    }
});



// Order
var Order = React.createClass({

    render : function(){

        return(
            <p>Order</p>
        )


    }
});

// Inventory
var Inventory = React.createClass({

    render : function(){

        return(
            <p>Inventory</p>
        )


    }
});



// StorePicker component
//this will give us the <StorePicker/>
var StorePicker = React.createClass({
   render : function () {
       //you can only return a single element
       return(
           <form className="store-selector">
               <h2>Please Enter a Store </h2>
               <input type="text" ref="storeId" required/>
               <input type="Submit"/>
           </form>
       )
   } 
});


//DOM renderer
ReactDOM.render(<App/>, document.querySelector('#main'));