import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";

const styles = {
	userProfilePageContainer: {
		marginTop: 70
	}
}

class UserProfilePage extends Component {
	render() {
		const {classes} = this.props;
		return <div className={classes.userProfilePageContainer}>User Profile</div>;
	}
}

export default withStyles(styles)(UserProfilePage);
