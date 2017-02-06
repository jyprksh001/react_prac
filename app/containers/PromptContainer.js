var React=require('react');
var Prompt=require('../components/prompt');
//console.log(styles);
var PromptContainer=React.createClass({
	
	contextTypes:{		
		//In some cases, you want to pass data through the component tree without having to pass the props down manually at every level. 
		//You can do this directly in React with the powerful "context" API. 
		router:React.PropTypes.object.isRequired
	},

	getInitialState:function(){
		return {
			username:''
		}
	},
	handleUpdateUser:function(e){
		// console.log('>>');
		// console.log(e); important check these
		this.setState({
			username:e.target.value
		})
	},
	handleSubmitUser:function(e){
		e.preventDefault()
		var username=this.state.username;
		this.setState({
			username:''
		});
		if(this.props.routeParams.playerOne){
			// go to palyerOne
			console.log(this.context);
			this.context.router.push({
				pathname:'/battle',
				query:{
					playerOne:this.props.routeParams.playerOne,
					playerTwo:this.state.username
				}
			})
		}else{
			// go to playerTwo
			// now context is accesible in this class
			console.log(this.context);
			this.context.router.push('/playerTwo/'+this.state.username)
		}
	},
	render:function(){
		{/* this keyword refers the parameters of the route */}
		//console.log(this);
		return(
			<Prompt 
			onSubmitUser={this.handleSubmitUser}
			onUpdateUser={this.handleUpdateUser}
			header={this.props.route.header}
			username={this.state.username} />	
		)
	}
});

module.exports =PromptContainer