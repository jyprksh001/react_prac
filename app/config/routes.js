var React=require('react');
var ReactRouter=require('react-router');
var Router=ReactRouter.Router;
var Route=ReactRouter.Route;
var hashHistory=ReactRouter.hashHistory;
var IndexRoute=ReactRouter.IndexRoute;
var Main=require('../components/main');
var Home=require('../components/home');
var Guest=require('../components/guest');
var PromptContainer=require('../containers/PromptContainer');
var routes=(
	<Router history={hashHistory}>
		{/* 
			Main coponent will always be active and we will have only those componets which are static in nature
			under route it will render its child component for that route

			Also if path is /home then this.props.children would be home and if we go to guest then this.props.children would be 
			/guest
			index /?_k=td73tfroute is for the case when no routes matches...it will render
		*/}

		<Route path='/' component={Main} >
			<IndexRoute component={Home} /> 
			<Route path='playerOne' header='Player One' component={PromptContainer} />
			<Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer} />	
			<Route path='/home'  component={Home} />
			<Route path='/guest' component={Guest} />
		</Route>
	</Router>
)

module.exports=routes;