import React , { useState ,Fragment,useEffect} from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    ClickAwayListener,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    Typography,
} from "@material-ui/core";
import { getMatchDetail } from "../api/api";

const MyCard = ({ match }) => {
    const [detail, setDetail] = useState({});
    const [open, setOpen] = useState(false);

    const handleClick = (id) => {
        // alert(id);
        console.log(id);
        getMatchDetail(id)
            .then((data) => {
                console.log("MATCH DATA", data);
                setDetail(data);
                handleOpen();
            })
            .catch((error) => console.log(error));
    };


    const getMatchCart = () => {
        return (
            <Card style={{ marginTop: 20 }}>
                <CardContent>
                    <Grid container justify="center" alignItems="center" spacing={4}>
                        <Grid item>
                            <Typography variant="h5">{match.away.name}</Typography>
                        </Grid>
                        <Grid item>
                            <img style={{ width: 85 }} src={require("../img/vs.png")} alt="" />
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">{match.home.name}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justify="center" >
                        <Button onClick={() => {
                            handleClick(match.id)
                        }}
                            item variant="outlined" color="primary">
                            Show Detail
                        </Button>
                        <Button style={{ marginLeft: 5 }} item variant="outlined" color="primary">
                            Starting time {new Date(match.date).toLocaleString()}
                        </Button>
                    </Grid>
                </CardActions>
            </Card>
        );
    };

    const handleClose = () => {
        setOpen(false);
      };


      const handleOpen = () => {
        setOpen(true);
      };


    const getDialog = () => (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">
                    {"Match Detail..."}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                        <Typography> {detail.results.results.fixture.home.match_title} </Typography>
                        <Typography>
                            Match
                            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
{detail.results.fixture.serie.start_date ? "Started" : "still not started"} {" "}
                            </span>
                        </Typography>

                        <Typography>
                            Status
                            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                    {detail.results.results.fixture.series.status}
                            </span>
                        </Typography>
                </DialogContentText>
            </DialogContent>

            <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
        </Dialog>
    );
    return (
        <Fragment>
       {getMatchCart()}
        {/* {getDialog()} */}
        </Fragment>
    )
        
    
};
export default MyCard;