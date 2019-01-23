import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";

const styles = {
	aboutPageContainer: {
		marginTop: 70
	}
}

class AboutPage extends Component {
	render() {
		const {classes} = this.props;
		return <div className={classes.aboutPageContainer}>About Page</div>;
	}
}

export default withStyles(styles)(AboutPage);
