import React, {Component} from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';
import MenuItems from "./menu-items";
import HomeIcon from "@material-ui/icons/Home";
import UserIcon from "@material-ui/icons/AccountCircle";
import ContactIcon from "@material-ui/icons/ContactSupport";

const styles = {
  root: {
	flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  linksUI: {
	textDecoration: "none",
	color: "white"
  }
};

class Header extends Component {
  constructor(props) {
	  super(props);
  }

  render() {
	const { classes, pageName } = this.props;
	return (
		<div className={classes.root}>
		<AppBar position="fixed">
			<Toolbar>
				<MenuItems />
				<Typography variant="h6" color="inherit" className={classes.grow}>
					{pageName || "Summariser"}
				</Typography>
				<Link to="/" className={classes.linksUI}>
					<Button color="inherit"><HomeIcon /></Button>
				</Link>
				<Link to="/user" className={classes.linksUI}>
					<Button color="inherit"><UserIcon /></Button>
				</Link>
				<Link to="/contact" className={classes.linksUI}>
					<Button color="inherit"><ContactIcon /></Button>
				</Link>
				<Link to="/about" className={classes.linksUI}>
					<Button color="inherit">About</Button>
				</Link>
				<Link to="/tutorial" className={classes.linksUI}>
					<Button color="inherit">Tutorial</Button>
				</Link>
				<Link to="/history" className={classes.linksUI}>
					<Button color="inherit">History</Button>
				</Link>
			</Toolbar>
		</AppBar>
		</div>
	);
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
