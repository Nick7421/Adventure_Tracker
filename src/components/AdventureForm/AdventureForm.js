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
import { FormGroup } from '@material-ui/core';
import './AdventureForm.css';

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
        name: "Grand Canyon South Rim",
        iconImg: "https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        startDate: "Start Date",
        endDate:"End Date",
        positions: [{latitude:"36.0647",
                    longitude:"-112.12228",
                    imgUrl:"https://i.imgur.com/9bUJxsA.jpg",
                    videoUrl:"https://www.youtube.com/watch?v=98csS7FU6bw"}],
        description: "Grand Canyon Hike",
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
        event.preventDefault();
        const action = ({type: 'ADD_ADVENTURE', payload: this.state});
        this.props.dispatch(action);
        alert('You have added a new Adventure');
        this.setState({
            name: "Adventure Name",
            iconImg: "Image URL for icon (optional)",
            startDate: "Start Date",
            endDate:"End Date",
                positions: [{latitude:"",
                            longitude:"",
                            imgUrl:"",
                            videoUrl:""}],
        description: "Description",
        type:""

        })
        this.props.history.push('/home');
    }

    handleAddMoreAdventure = event => {
        this.setState({
            positions: [...this.state.positions, 
                {
                    latitude:"",
                    longitude:"",
                    imgUrl:"",
                    videoUrl:""
                }
            ],
        });
    }
    handlePositionChange = (index, key) => event => {
        let positions = [...this.state.positions];
        let position = {
            ...positions[index],
            [key]: event.target.value // e.g. latitude: 50 or longitude: 123
        };
        positions[index] = position;
        this.setState({
            positions: positions
        });
    }

  render() {
        const { classes } = this.props;
        console.log(this.state);
        return (
          <div>
          <h1>New Adventure Form</h1>
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
                  <MenuItem key={type.id} value={type.id}>
                  {type.adventure_type}
                  </MenuItem>
                ))}
              </TextField>
    
    {/* The below fields will dynamically render when the add button is clicked*/}
    {this.state.positions.map((position, i) => {
        return (
        <div>
        <TextField
                required
                id="outlined-latitude"
                label="Required Latitude"
                className={classes.textField}
                value={position.latitude}
                onChange={this.handlePositionChange(i, 'latitude')}
                margin="normal"
                style = {{width: 300}}
                variant="outlined"
              />
              <TextField
                required
                id="outlined-longitude"
                label="Required Longitude"
                className={classes.textField}
                value={position.longitude}
                onChange={this.handlePositionChange(i, 'longitude')}
                margin="normal"
                style = {{width: 300}}
                variant="outlined"
              />
              <TextField
                id="outlined-imgUrl"
                label="location Img Url"
                className={classes.textField}
                value={position.imgUrl}
                onChange={this.handlePositionChange(i, 'imgUrl')}
                margin="normal"
                style = {{width: 300}}
                variant="outlined"
              />
            <TextField
                id="outlined-videoUrl"
                label="location videoUrl"
                className={classes.textField}
                value={position.videoUrl}
                onChange={this.handlePositionChange(i, 'videoUrl')}
                margin="normal"
                style = {{width: 300}}
                variant="outlined"
              />
              </div>);

    })}
             
              <Button
                className={classes.button}
                id="add-btn"
                onClick={this.handleAddMoreAdventure}
                variant="contained"
              >
                Add More
              </Button>
        
    
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