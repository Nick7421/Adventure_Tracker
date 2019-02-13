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
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
export default AdventureForm