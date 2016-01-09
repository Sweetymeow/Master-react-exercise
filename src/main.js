var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
    render: function() {
        return (
          <div className="app">
            <MainHeader />
            <Page>
                <Orders />
            </Page>
          </div>
        );
    }
});

var MainHeader = React.createClass({
    render: function(){
        return (
          <div className='main-header'>
            <div className='logo'>Storekeeper</div>
            <MainNav />
          </div>
        );
    }
});

var MainNav = React.createClass({
    render: function(){
        return (
          <nav className='main-nav'>
            <a>Dashboard</a>
            <a className='current'>Orders</a>
            <a>Catalog</a>
          </nav>
        );
    }
});

var Orders = React.createClass({
    render: function(){
        return (
          <div className='orders'>
            <PageHeader>
                <h1>Orders</h1>
            </PageHeader>
          </div>
        );
    }
});

var Page = React.createClass({
    render: function(){
        return (
          <div className='page'>
            {this.props.children}
          </div>
        );
    }
});

var PageHeader = React.createClass({
    render: function(){
        return (
          <header className='page-header'>
            {this.props.children}
          </header>
        );
    }
});

ReactDOM.render(<App />, document.getElementById('anchor'));