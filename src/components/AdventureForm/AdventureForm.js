import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    },
    descriptionField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 500
    },
    dense: {
      marginTop: 16
    },
    menu: {
      width: 200
    }
  });

class AdventureForm extends Component {
    state = {
        name: "Adventure Name",
        iconImg: "Image URL for icon (optional)",
        startDate: "Start Date",
        position: [{latitude:"",
                    logitude:"",
                    imgUrl:"",
                    videoUrl:""}],
        website: "Website (Optional)",
        description: "Description",
        type:""
      };
  render() {
    return (
        const { classes } = this.props;
        return (
          <div>
            <form
              id="input-form"
              className={classes.container}
              noValidate
              autoComplete="off"
            >
              <TextField
                required
                id="outlined-name"
                label="Title Required"
                className={classes.textField}
                value={this.state.title}
                onChange={this.handleTitleChange}
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-date"
                label="Required"
                className={classes.textField}
                value={this.state.date}
                onChange={this.handleDateChange}
                margin="normal"
                variant="outlined"
              />
              <TextField
                // required
                id="outlined-tag"
                select
                label="Select a project tag"
                className={classes.textField}
                value={this.state.tag}
                onChange={this.handleTagChange}
                variant="outlined"
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                helperText="Please select your project type"
                margin="normal"
              >
                {this.props.reduxStore.tags.map(tag => (
                  <MenuItem key={tag.id} value={tag.name}>
                  {tag.name}
                  </MenuItem>
                ))}
              </TextField>
    
              <TextField
                required
                id="outlined-github"
                label="Required"
                className={classes.textField}
                value={this.state.github}
                onChange={this.handleGitChange}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-website"
                label="Website URL (Optional)"
                className={classes.textField}
                value={this.state.website}
                onChange={this.handleWebsiteChange}
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-description"
                label="Required"
                className={classes.descriptionField}
                value={this.state.description}
                onChange={this.handleDescriptionChange}
                margin="normal"
                variant="outlined"
              />
              <Button
                className={classes.button}
                id="submit-btn"
                onClick={this.handleAddProject}
                variant="contained"
              >
                Submit
              </Button>
            </form>
          </div>
    )
  }
}
export default AdventureForm