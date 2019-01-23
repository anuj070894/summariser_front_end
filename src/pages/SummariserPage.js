import React, {Component} from "react";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CreateIcon from "@material-ui/icons/Create";
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import LinearDeterminate from "../components/linear-determinate";
import AttachFileIcon from "@material-ui/icons/AttachFile";

const styles = theme => ({
	button: {
		margin: theme.spacing.unit,
	},
	leftIcon: {
		marginRight: theme.spacing.unit,
	},
	rightIcon: {
		marginLeft: theme.spacing.unit,
	},
	iconSmall: {
		fontSize: 20,
	},
	centerAligned: {
		top: "50%",
		position: "absolute",
		left: "50%",
		transform: "translate(-50%, -50%)"
	},
	ORTextStyles: {
		marginTop: "8%",
		marginBottom: "8%",
		fontSize: "1.5em"
	},
	linksUI: {
		textDecoration: "none",
		color: "white"
	}
});

class SummariserPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedFile: null,
			loaded: 0
		}
	}

	handleSelectedFile = (e) => {
		debugger;
		this.setState({
			selectedFile: e.target.files[0],
			loaded: 0
		});
	}

	render() {
		const {classes} = this.props;
		return <div>
			<div className={classes.centerAligned}>
				<Link to="/write" className={classes.linksUI}>
					<Button size="large" variant="contained" color="default" className={classes.button}>
						Write here...
						<CreateIcon className={classes.rightIcon} />
					</Button>
				</Link>
				<div className={classes.ORTextStyles}>
					OR
				</div>
				<input
					accept="text/plain"
					className={classes.input}
					style={{ display: 'none' }}
					id="raised-button-file"
					multiple
					type="file"
					onChange={(e) => this.handleSelectedFile(e)}
				/>
				<label htmlFor="raised-button-file">
					<Button size="large" variant="contained" component="span" className={classes.button}>
						Choose File
						<AttachFileIcon className={classes.rightIcon} />
					</Button>
				</label>
				<Button size="large" variant="contained" component="span" className={classes.button}>
					Upload File
					<CloudUploadIcon className={classes.rightIcon} />
				</Button>
				<LinearDeterminate />
			</div>
		</div>;
	}
}

export default withStyles(styles)(SummariserPage);
