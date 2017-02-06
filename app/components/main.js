var React=require('react');

var Home=React.createClass({
	render:function(){
		return (
			<div>
				Hello from main!
				{this.props.children}				
			</div>
		)
	}
})

module.exports= Home;
