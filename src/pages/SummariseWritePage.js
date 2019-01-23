import React, {Component} from "react";
import TextField from "@material-ui/core/TextField";
import {withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
	summariseWritePageContainer: {
		marginTop: 70
	},
	container: {
	  display: 'flex',
	  flexWrap: 'wrap',
	},
	textField: {
	  marginLeft: theme.spacing.unit,
	  marginRight: theme.spacing.unit,
	  width: "80%"
	},
	dense: {
	  marginTop: 16,
	},
	menu: {
	  width: 200,
	},
	titleTextField: {
		width: "80%"
	},
	titleTextFieldContainer: {
		marginTop: "5%"
	},
	textFieldContainer: {
		marginTop: "2%"
	},
	button: {
		margin: 10
	}
});

class SummariseWritePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contentTextField: "",
			titleTextField: ""
		};
	}

	setContentField = (e) => {
		this.setState({
			contentTextField: e.target.value
		});
	}

	setTitleField = (e) => {
		this.setState({
			titleTextField: e.target.value
		});
	}

	clearTextFields = () => {
		this.setState({
			contentTextField: "",
			titleTextField: ""
		});
	}

	render() {
		const {classes} = this.props;
		return <div className={classes.summariseWritePageContainer}>
			<div className={classes.titleTextFieldContainer}>
				<TextField
					id="filled-full-width"
					label="Title"
					style={{ margin: 8 }}
					placeholder="Enter title of the content here..."
					margin="normal"
					variant="filled"
					InputLabelProps={{
						shrink: true,
					}}
					className={classes.titleTextField}
					value={this.state.titleTextField}
					onChange={(e) => this.setTitleField(e)}
				/>
			</div>
			<div className={classes.textFieldContainer}>
				<TextField
					id="filled-textarea"
					label="Content"
					placeholder="Enter your text here..."
					multiline
					className={classes.textField}
					margin="normal"
					variant="filled"
					rows="20"
					value={this.state.contentTextField}
					onChange={(e) => this.setContentField(e)}
				/>
			</div>
			<div>
				<Button size="large" variant="contained" color="default" className={classes.button} onClick={() => this.clearTextFields()}>
					Clear
				</Button>
				<Button size="large" variant="contained" color="default" className={classes.button}>
					Submit
				</Button>
			</div>
		</div>;
	}
}

export default withStyles(styles)(SummariseWritePage);
