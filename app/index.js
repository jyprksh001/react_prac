// babel compiles all the code in this script and complie it to the index_bundle.js

// var app=document.getElementById('app')
// app.innerHTML="hello"

var React=require('react');
var reactDom=require('react-dom');
var routes=require('./config/routes');
// var HelloWorld=React.createClass({
	
// 	render:function(){
// 		console.log(this.props);
// 		return (
// 			<div>
// 				<div>Hello world</div>
// 				<div>{this.props.name}</div>
// 			</div>
// 		)
// 	}
// })

// userdata={
// 	name:'jay',
// 	username:'jyprksh001',
// 	image:'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'
// }

// var ProfilePic=React.createClass({

// 	render:function(){
// 		return (<img src={this.props.imageUrl} />)
// 	}
// })

// var ProfileLink=React.createClass({

// 	render:function(){
		
// 		return (
// 			<a href={"https://www.github.com/"+this.props.username}>
// 				{this.props.username}
// 			</a>
// 		)
// 	}
// })

// var Link=React.createClass({
// 	changeUrl:function(){
// 		window.location.replace(this.props.href)		
// 	},

// 	render:function(){
// 		return (
// 			<div onClick={this.changeUrl} style={{color:'red'}}>
// 				"here is how to display a children"
// 				<br/>
// 				{this.props.children}
// 			</div>
// 		)
// 	}
// })

// var ProfileLink1=React.createClass({
// 	render:function(){
// 		return (
// 			<Link href={"https://www.github.com/"+this.props.username}>
// 				{this.props.username} 
// 				{ /* this becomes children for the link element ---<<< commenting in react */}
// 			</Link>
// 		)
// 	}
// })

// var Avatar=React.createClass({
	
// 	render:function(){
// 		return(
// 			<div>
// 				<HelloWorld name="jay"/>
// 				<ProfilePic imageUrl={this.props.user.image} />
// 				<ProfileLink username={this.props.user.username} />
// 				<ProfileLink1 username={this.props.user.username} />
// 			</div>
// 		)
// 	}
// })

// reactDom.render(<Avatar  user={userdata} />,document.getElementById('app'));

reactDom.render(routes,document.getElementById('app'));
