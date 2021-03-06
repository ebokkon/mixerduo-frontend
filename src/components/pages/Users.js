import React, {useContext, useEffect, useState} from "react";
import {UserContext} from "../../context/UserContext";
import axios from "axios";
import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import EmptyContainerMessage from "./shoppingcartunits/EmptyContainerMessage";

export default function Users() {

    const [allUsers, setAllUsers] = useState([]);
    const {user} = useContext(UserContext);

    useEffect(() => {
        let token = localStorage.getItem("token");
        let header = {'Authorization': `Bearer ${token}`};
        axios.post("http://localhost:8762/users", null, {headers: header})
            .then(response => setAllUsers(response.data))
            .catch(error => console.log("error"));
    }, []);

    const useStyles = makeStyles({
        tableHeader: {
            fontSize: 15,
            textAlign: "center"
        },
        tableTitle: {
            textAlign: "center",
            color: "white",
            margin: "50px 0"
        },
        tableCell: {
            textAlign: "center"
        },
        username: {
            textAlign: "center"
        }
    });
    const classes = useStyles();

    const quantityCalculation = courseTitle => {
        switch (courseTitle) {
            case "Advanced":
                return 50;
            case "Beginners":
                return 30;
            case "Pro":
                return 80;
            default:
                return 1;
        }
    };

    const showPage = () => {
        if (user.length === 0 || user.roles.length === 1) {
            return (  <EmptyContainerMessage message={"You are not authorized to see this page!"}/>)
        }
        return allUsers.length <= 1 ?
            <EmptyContainerMessage message={"There are no registered users!"}/>
            :
            (<TableContainer
                component={Paper}
                className={`tableContainer`}>
                <Table>
                    <TableBody>
                        {allUsers.map(user =>
                            <TableRow>
                                <TableCell className={classes.username}>{user.username}</TableCell>
                                <TableCell>
                                    {Object.entries(user.cartMap).length === 0
                                        ? (<div></div>) : (<Table aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell className={classes.tableHeader}>Course Type</TableCell>
                                                    <TableCell className={classes.tableHeader}>Quantity</TableCell>
                                                    <TableCell className={classes.tableHeader}>Price</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {Object.keys(user.cartMap).map(function (key, index) {
                                                        return (

                                                            <TableRow key={index}>
                                                                <TableCell className={classes.tableCell}>{key}</TableCell>
                                                                <TableCell
                                                                    className={classes.tableCell}>{user.cartMap[key]}</TableCell>
                                                                <TableCell
                                                                    className={classes.tableCell}>{user.cartMap[key] *
                                                                quantityCalculation(key)} $ </TableCell>
                                                            </TableRow>
                                                        )
                                                    }
                                                )}
                                            </TableBody>
                                        </Table>)
                                    }
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>)
    };
    return (
        <React.Fragment>
            {showPage()}
        </React.Fragment>)
}