import React from 'react'
import {
  Dialog,
  DialogContent,
  makeStyles,
  Typography,
} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    width: 500,
    padding: theme.spacing(2),
    position: 'absolute',
    top: theme.spacing(8),
  },
}))

export default function Popup({ item, modalIsOpened, setModalIsOpened }) {
  const classes = useStyles()
  const handleClose = () => setModalIsOpened(false)
  return (
    <Dialog
      open={modalIsOpened}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <MuiDialogTitle disableTypography>
        <Typography variant="h3" style={{ flexGrow: 1 }}>
          Flight Details
        </Typography>
        <IconButton
          style={{ position: 'absolute', top: 0, right: 0 }}
          aria-label="close"
          className={classes.closeButton}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      </MuiDialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <Typography>Flight Code :</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>{item.flightCode}</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={10}>
            <Typography>Destination Port Code :</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>{item.destinationPortCode}</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={10}>
            <Typography>Destination Port Name :</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>{item.destinationPortName}</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={10}>
            <Typography>Flight Provider :</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>{item.flightProvider}</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={10}>
            <Typography>Scheduled Arrival : </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>{item.scheduledArrival}</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={10}>
            <Typography>Scheduled Departure : </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>{item.scheduledDeparture}</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={10}>
            <Typography>Source Port Code : </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>{item.sourcePortCode}</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={10}>
            <Typography>Source Port Name : </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>{item.sourcePortName}</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={10}>
            <Typography>Status : </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>{item.status}</Typography>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}
