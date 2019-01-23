import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";

const styles = {
	historyPageContainer: {
		marginTop: 70
	}
}

class HistoryPage extends Component {
	render() {
		const {classes} = this.props;
		return <div className={classes.historyPageContainer}>History Page</div>;
	}
}

export default withStyles(styles)(HistoryPage);
