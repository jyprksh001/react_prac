var React=require('react');
var styles=require('../styles');
var PropTypes=React.PropTypes;

function Prompt(props){
	return(
			<div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles.transparentBg}>
				<h1> Some header text</h1>
				<h1> {props.header}</h1>
				<div className="col-sm-12">
					<form onSubmit={props.onSubmitUser}>
						<div className="form-group">
							<input onChange={props.onUpdateUser} value={props.username} className="form-control" placeholder="github username" type="text" />
						</div>
						<div className="form-group col-sm-4 col-sm-offset-4">
							<button className="btn btn-block btn-success" type="submit"> Continue </button>
						</div>
					</form>
				</div>
			</div>
 		)

}

// var Promt=React.createClass({
// 	propTypes:{
// 		header:PropTypes.string.isRequired,
// 		onUpdateUser:PropTypes.func.isRequired,
// 		onSubmitUser:PropTypes.func.isRequired,
// 		username:PropTypes.string.isRequired
// 	},
// 	render:function(){
// 		return(
// 			<div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles.transparentBg}>
// 				<h1> Some header text</h1>
// 				<h1> {this.props.header}</h1>
// 				<div className="col-sm-12">
// 					<form onSubmit={this.props.onSubmitUser}>
// 						<div className="form-group">
// 							<input onChange={this.props.onUpdateUser} value={this.props.username} className="form-control" placeholder="github username" type="text" />
// 						</div>
// 						<div className="form-group col-sm-4 col-sm-offset-4">
// 							<button className="btn btn-block btn-success" type="submit"> Continue </button>
// 						</div>
// 					</form>
// 				</div>
// 			</div>
// 		)
// 	}
// })

Prompt.propTypes={
		header:PropTypes.string.isRequired,
 		onUpdateUser:PropTypes.func.isRequired,
 		onSubmitUser:PropTypes.func.isRequired,
 		username:PropTypes.string.isRequired
}

module.exports=Prompt