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
      marginRight: theme.spacing.unit,
    },
    description: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 1000
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 400,
    }
  });

class AdventureForm extends Component {
    state = {
        name: "Adventure Name",
        iconImg: "Image URL for icon (optional)",
        startDate: "Start Date",
        endDate:"End Date",
        position: [{latitude:"",
                    logitude:"",
                    imgUrl:"",
                    videoUrl:""}],
        description: "Description",
        type:""
      };

      handleNameChange = event => {
          this.setState({
                name:event.target.value,
          });
      };

      handleIconChange = event => {
          this.setState({
              iconImg:event.target.value,
          });
      };

      handleStartDateChange = event => {
          this.setState({
              startDate:event.target.value,
          });
      };

      handleEndDateChange = event => {
          this.setState({
            endDate:event.target.value
          })
      }

      handleDescriptionChange = event => {
          this.setState({
              description:event.target.value
          })
      }

  render() {
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
                label="Name Required"
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleNameChange}
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-icon"
                label="Required"
                className={classes.textField}
                value={this.state.iconImg}
                onChange={this.handleIconChange}
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-startdate"
                label="Required"
                type="date"
                className={classes.textField}
                value={this.state.startDate}
                onChange={this.handleStartDateChange}
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-enddate"
                label="Required"
                type="date"
                className={classes.textField}
                value={this.state.endDate}
                onChange={this.handleEndDateChange}
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-description"
                label="Required"
                className={classes.textField}
                value={this.state.description}
                onChange={this.handleDescriptionChange}
                margin="normal"
                style = {{width: 300}}
                variant="outlined"
              />
              {/* <TextField
                // required
                id="outlined-type"
                select
                label="Select a type of Adventure"
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
              <Button
                className={classes.button}
                id="submit-btn"
                onClick={this.handleAddProject}
                variant="contained"
              >
                Submit
              </Button> */}
            </form>
          </div>
    )
  }
}

AdventureForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStoreToProps = reduxStore => ({
    reduxStore
  });

export default connect(mapStoreToProps)(withStyles(styles)(AdventureForm));