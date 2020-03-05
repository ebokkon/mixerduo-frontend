import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {DialogContext} from "../../../context/DialogContext";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { makeStyles } from "@material-ui/core/styles";
import {Link as RouterLink} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
    },
    paper: {
        backgroundColor: 'rgba(255,255,255)'
    },
    MuiBackdrop: {
            opacity: '0.7'
    },
    button: {
        margin: '5px 15px 0 15px'
    }
}));

export default function DialogWindow() {

    const { open, setOpen } = useContext(DialogContext);

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            modal={true}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth={true}
            maxWidth = {'xs'}
            // hideBackdrop={true}
            className={classes.MuiBackdrop}
        >
            <DialogActions>
                <HighlightOffIcon onClick={handleClose} component={HighlightOffIcon}  color="primary"/>
            </DialogActions>
            <DialogTitle style={{textAlign: 'center'}} id="alert-dialog-title">{  "Please, sign in for shopping!" } </DialogTitle>
            <DialogContent>
                <Button style={{  margin: '5px 0 15px 150px'}}  variant={"outlined"} color="primary" component={RouterLink} to="/sign-in" onClick={handleClose}>Sign in</Button>
                <DialogContentText style={{textAlign: 'center'}} id="alert-dialog-description">
                    <div>Not a member yet, register here!</div>
                </DialogContentText>
                <Button  style={{  margin: '5px 0 15px 150px'}} variant={"outlined"} color="primary" component={RouterLink} to="/sign-up" onClick={handleClose}>Sign up</Button>
            </DialogContent>
        </Dialog>
    )
}