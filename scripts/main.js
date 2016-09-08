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
                <Header tagline = "Freash Seafood Market"/>
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
            <header className="top">

                <h1>Catch
                    <span className="ofThe">
                        <span className="of">of</span>
                        <span className="the">the</span>
                    </span> Day
                </h1>
                <h3 className="tagline"><span>{this.props.tagline}</span></h3>
            </header>
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