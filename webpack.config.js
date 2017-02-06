var htmlwebpackplugin=require('html-webpack-plugin');
var config=new htmlwebpackplugin({
	template:__dirname+'/app/index.html',
	filename:'index.html',
	inject:'body'
});

//explanation

//first it will copy the file app/index.html to the filename described and then it will inject index_bundle.js into the body tag and output it to dist folder

module.exports={
	entry:['./app/index.js'],
	output:{
		path:__dirname+'/dist',
		filename:'index_bundle.js'
	},
	module:{
		loaders:[
			{test: /\.js$/, include: __dirname + '/app', loader: "babel-loader"},
      		{ test: /\.css$/, loader: "style-loader!css-loader" }
		]
	},
	plugins:[config]
}