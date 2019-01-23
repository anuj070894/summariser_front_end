import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";

const styles = {
	menuIconColor: {
	  color: "white"
	}
};

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
	const { anchorEl } = this.state;
	const {classes} = this.props;

    return (
      <div>
		<IconButton
          aria-label="More"
          aria-owns={anchorEl ? "long-menu" : undefined}
          aria-haspopup="true"
		  onClick={this.handleClick}
        >
          <MenuIcon className={classes.menuIconColor} />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleClose}>My account</MenuItem>
          <MenuItem onClick={this.handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(SimpleMenu);
