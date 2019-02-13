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
        positions: {latitude:"",
                    longitude:"",
                    imgUrl:"",
                    videoUrl:""},
        description: "Description",
        type:""
      };
      
      componentDidMount = () => {
          this.getType();
      }

      getType = () => {
          const action = {type: 'GET_TYPE'};
          this.props.dispatch(action);
      }
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
      handleTypeChange = event => {
        this.setState({
            type:event.target.value
        })
    }
    handleAddAdventure = event => {
        console.log(this.state);
    }

    handleLatitudeChange = event => {
        this.setState({
        positions:{...this.state.positions,...{latitude:event.target.value}}
        })
    
    }
    handleLongitudeChange = event => {
        this.setState({
            positions:{...this.state.positions,...{longitude:event.target.value}}
            })
    }
    handleUrlChange = event => {
        this.setState({
            positions:{...this.state.positions,...{imgUrl:event.target.value}}
            })
    }

    handleVideoUrlChange = event => {
        this.setState({
            positions:{...this.state.positions,...{videoUrl:event.target.value}}
            })
    }

  render() {
        const { classes } = this.props;
        console.log(this.state);
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
                id="standard-name"
                label="Name Required"
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleNameChange}
                margin="normal"
                variant="standard"
              />
              <TextField
                required
                id="standard-icon"
                label="Required"
                className={classes.textField}
                value={this.state.iconImg}
                onChange={this.handleIconChange}
                margin="normal"
                variant="standard"
                style = {{width: 220}}
              />
              <TextField
                required
                id="standard-startdate"
                label="Required"
                type="date"
                className={classes.textField}
                value={this.state.startDate}
                onChange={this.handleStartDateChange}
                margin="normal"
                variant="standard"
              />
              <TextField
                required
                id="standard-enddate"
                label="Required"
                type="date"
                className={classes.textField}
                value={this.state.endDate}
                onChange={this.handleEndDateChange}
                margin="normal"
                variant="standard"
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
              <TextField
                // required
                id="outlined-type"
                select
                label="Select a type of Adventure"
                className={classes.textField}
                value={this.state.type}
                onChange={this.handleTypeChange}
                variant="outlined"
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                style = {{width: 250}}
                margin="normal"
              >
                {this.props.reduxStore.typeReducer.map(type => (
                  <MenuItem key={type.id} value={type.adventure_type}>
                  {type.adventure_type}
                  </MenuItem>
                ))}
              </TextField>
    
        
             <TextField
                required
                id="outlined-latitude"
                label="Required Latitude"
                className={classes.textField}
                value={this.state.positions.latitude}
                onChange={this.handleLatitudeChange}
                margin="normal"
                style = {{width: 300}}
                variant="outlined"
              />
              <TextField
                required
                id="outlined-longitude"
                label="Required Longitude"
                className={classes.textField}
                value={this.state.positions.longitude}
                onChange={this.handleLongitudeChange}
                margin="normal"
                style = {{width: 300}}
                variant="outlined"
              />
              <TextField
                id="outlined-imgUrl"
                label="location Img Url"
                className={classes.textField}
                value={this.state.positions.imgUrl}
                onChange={this.handleUrlChange}
                margin="normal"
                style = {{width: 300}}
                variant="outlined"
              />
            <TextField
                id="outlined-videoUrl"
                label="location videoUrl"
                className={classes.textField}
                value={this.state.positions.videoUrl}
                onChange={this.handleVideoUrlChange}
                margin="normal"
                style = {{width: 300}}
                variant="outlined"
              />
        
    
              <Button
                className={classes.button}
                id="submit-btn"
                onClick={this.handleAddAdventure}
                variant="contained"
              >
                Submit
              </Button>
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