var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var 

/*
  App
*/
var App = React.createClass({
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order/>
        <Inventory/>
      </div>
      );
  }
});

/*
  Header
  */
var Header = React.createClass ({
  render() {
    return (
      <header className="top">
        <h1>Catch
        <span className="ofThe"><span className="of">of</span><span className="the">the</span></span>
        Day</h1>
        <h3 className="tagline"><span>{ this.props.tagline }</span></h3>
      </header>
    );
  }
});

/*
  Order
  */
var Order = React.createClass ({
  render() {
    return (
      <p>Yes</p>
    );
  }
});

/*
  Inventory
  */
var Inventory = React.createClass ({
  render() {
    return (
      <p>Yes</p>
    );
  }
});


/*
  StorePicker
  This will let us make <StorePicker/>
*/
var StorePicker = React.createClass({
  render() {
    return (
      <form className="store-selector">
        <h2>Please enter a store</h2>
        <input type="text" ref="storeId" required />
        <input type="Submit" />
      </form>
      );
  }
});

/*
  Routes
*/


ReactDOM.render(<App/>, document.querySelector('#main'));