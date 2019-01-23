import React, {Component} from "react";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CreateIcon from "@material-ui/icons/Create";
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";

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
				<Button size="large" variant="contained" color="default" className={classes.button}>
					Upload
					<CloudUploadIcon className={classes.rightIcon} />
				</Button>
			</div>
		</div>;
	}
}

export default withStyles(styles)(SummariserPage);
