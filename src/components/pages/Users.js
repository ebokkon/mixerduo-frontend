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
    const {user, userSetUser} = useContext(UserContext);

    useEffect(() => {
        let token = user.token;
        let header = {'Authorization': `Bearer ${token}`};
        axios.post("http://localhost:8080/users", null, {headers: header})
            .then(response => console.log(response.data));
    });

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
        username: {
            textAlign: "center"
        }
    });
    const classes = useStyles();

    return (
        allUsers.length <= 1 ?
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


                                {/*{user.cart.cartMap.map(singleCartMap => {*/}
                                {/*        return (*/}

                                            <TableCell>
                                                <Table aria-label="simple table">
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell className={classes.tableHeader}>Course
                                                                Type</TableCell>
                                                            <TableCell className={classes.tableHeader}>Quantity</TableCell>
                                                            <TableCell className={classes.tableHeader}>Total
                                                                Price</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        <TableRow>
                                                            <TableCell> </TableCell>
                                                            <TableCell> </TableCell>
                                                            <TableCell> </TableCell>
                                                        </TableRow>
                                                    </TableBody>
                                                </Table>

                                            </TableCell>

                                {/*        )*/}
                                {/*    }*/}
                                {/*)};*/}

                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>)

    );

}