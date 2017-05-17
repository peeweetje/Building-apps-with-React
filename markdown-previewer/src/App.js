import React from 'react';
import './App.css';
import  marked  from 'marked';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			markdown:' How to use Markdown:\n\n# h1 header\n\n## h2 header\n\n### h3 header\n\n*This text will be italic*\n\n**This text will be bold** '
		};
	}
 handleInput = (event) => {
	 this.setState({
		 markdown: event.target.value
	 });
 }
	render() {
  	return (
			  <div className="main">
			   <div className="left">
        <h2 className="markdown">Markdown:</h2>
        <textarea className="marktext"
        	value={this.state.markdown}
        	onChange={this.handleInput} />
        </div>
        <div className="right">
        <h2 className="preview">Preview: </h2>
				<div className="border"  dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}>
				< /div>
        </div>
				 </div>
    );
  }
};

export default App;
