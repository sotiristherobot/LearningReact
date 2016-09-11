// request React libary
var React = require('react');
//request the dom renderer
var ReactDOM = require('react-dom');

//request react router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var History = ReactRouter.History;
var createBrowserHistory = require('history/lib/createBrowserHistory');


//helpers
var h = require('./helpers.js');

//App Component
var App = React.createClass({
   render : function() {
       return(
         <div className="catch-of-the-day">
            <div className="menu">
                <Header tagline = "Fresh Seafood Market"/>
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
    mixins : [History],
    goToStore: function (event) {
        //stops forms default event
        event.preventDefault();

        //get data from input

        //this refers to StorePicker not this function
        console.log(this.refs);
        var StoreID = this.refs.storeId.value;
        console.log(StoreID);
        //transition from StorePicker to App
        this.history.pushState(null, '/store/' + StoreID);
        
    },
    render : function () {
       //you can only return a single element
       return(
           <form className="store-selector" onSubmit={this.goToStore}>
               <h2>Please Enter a Store </h2>
               <input type="text" ref="storeId" defaultValue={h.getFunName()} required/>
               <input type="Submit"/>
           </form>
       )
   } 
});

//Not fount component
var NotFound = React.createClass({
    render : function(){
        return <h1>Not found!</h1>
    }
});

//Routes
var routes = (

    // did history to not get this in the url : /#/asdklasdkl;a
    <Router history={createBrowserHistory()}>
        <Route path="/" component={StorePicker}/>
        {/*{ because we don't know in advance how many stores we will have}*/}
        <Route path="/store/:storeid" component={App}/>
        <Route path="*" component={NotFound}/>
    </Router>
)

//DOM renderer
ReactDOM.render(routes, document.querySelector('#main'));