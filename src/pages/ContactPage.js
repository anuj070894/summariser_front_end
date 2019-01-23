import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";

const styles = {
	contactPageContainer: {
		marginTop: 70
	}
};

class ContactPage extends Component {
	render() {
		const {classes} = this.props;
		return <div className={classes.contactPageContainer}>Contact Page</div>;
	}
}

export default withStyles(styles)(ContactPage);
