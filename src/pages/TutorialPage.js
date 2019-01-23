import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";

const styles = {
	tutorialPageContainer: {
		marginTop: 70
	}
}
class TutorialPage extends Component {
	render() {
		const {classes} = this.props;
		return <div className={classes.tutorialPageContainer}>Tutorial Page</div>;
	}
}

export default withStyles(styles)(TutorialPage);
