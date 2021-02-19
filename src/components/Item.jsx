import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

const Item = ({
  item,
  handleChangeStatus,
  setModalIsOpened,
  setCurrentFlight,
}) => {
  const getStatusColor = () => {
    if (item.status === 'LANDED') {
      return 'green'
    }
    if (item.status === 'ON SCHEDULE') {
      return 'orange'
    }
    if (item.status === 'DELAYED') {
      return 'red'
    }
  }
  if (!item) return <CircularProgress />
  const handleOpenModal = () => {
    setModalIsOpened(true)
    setCurrentFlight(item)
  }

  const onChangeStatus = (e) => {
    handleChangeStatus(item._id, e.target.value)
  }
  return (
    <ListItem button divider>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <ListItemText>{item.scheduledArrival}</ListItemText>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={2}>
          <ListItemText>{item.sourcePortName}</ListItemText>
          <ListItemText>{item.sourcePortCode}</ListItemText>
        </Grid>
        <Grid item xs={3}>
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={item.status}
            onChange={onChangeStatus}
            style={{
              backgroundColor: getStatusColor(),
              padding: 10,
              borderRadius: 10,
            }}
          >
            <MenuItem value={'LANDED'}>LANDED</MenuItem>
            <MenuItem value={'ON SCHEDULE'}>ON SCHEDULE</MenuItem>
            <MenuItem value={'DELAYED'}>DELAYED</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={2}>
          {' '}
          <ListItemText>{item.destinationPortName}</ListItemText>
        </Grid>
        <Grid item xs={2}>
          {' '}
          <Button variant="contained" color="primary" onClick={handleOpenModal}>
            More Details
          </Button>
        </Grid>
      </Grid>
    </ListItem>
  )
}

export default Item
