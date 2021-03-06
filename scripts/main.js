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

    getInitialState : function () {
      return {
          fishes: {},
          order: {}
      }
    },

    addFish : function (fish) {
        var timeStamp = (new Date()).getTime();
        //update state object
        this.state.fishes['fish-' + timeStamp] = fish;
        //set state object
        this.setState({fishes : this.state.fishes});

    },

    loadSamples : function(){
      this.setState({fishes : require('./sample-fishes')});
    },

   render : function() {
       return(
         <div className="catch-of-the-day">
            <div className="menu">
                <Header tagline = "Fresh Seafood Market"/>
            </div>
             <Order/>
             <Inventory addFish = {this.addFish} loadSamples = {this.loadSamples }/>
         </div>
       )
   } 
});

//Add Fish Form

var AddFishForm = React.createClass({

    createFish : function(event){

        //stop form from submitting
        event.preventDefault();

        //create an object from data in the form
        var fish = {
            name : this.refs.name.value,
            price : this.refs.price.value,
            status :this.refs.status.value,
            desc :this.refs.desc.value,
            image :this.refs.image.value
        };

        //add fish to app state
        this.props.addFish(fish);
        this.refs.fishForm.reset();



    },

    render : function(){
        return(
            <form className="fish-edit" ref="fishForm" onSubmit={this.createFish}>
                <input type="text" ref="name" placeholder="Fish Name"/>
                <input type="text" ref="price" placeholder="Fish Price" />
                <select ref="status">
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea type="text" ref="desc" placeholder="Desc"></textarea>
                <input type="text" ref="image" placeholder="URL to Image" />
                <button type="submit">+ Add Item </button>
            </form>

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
            <div>
                <h2>Inventory</h2>
                <AddFishForm {...this.props}/>
                <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
            </div>
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

//Not found component
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