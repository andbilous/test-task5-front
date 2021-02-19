import React, { useEffect, useState } from 'react'
import axios from 'axios'
import List from '@material-ui/core/List'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import Item from '../components/Item'
import Modal from '../components/Modal'

const HomePage = () => {
  const [flights, setFlights] = useState([])
  const [modalIsOpened, setModalIsOpened] = useState(false)
  const [currentFlight, setCurrentFlight] = useState({})
  const [lastUpdated, setLastUpdated] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:5000/api/flights').then((resp) => {
      setFlights(resp.data)
    })
  }, [lastUpdated])

  const handleChangeStatus = async (id, value) => {
    const res = await axios.put(`http://localhost:5000/api/flights/${id}`, {
      status: value,
    })
    if (res.data === 'updated') {
      setLastUpdated(!lastUpdated)
    }
  }
  return (
    <Grid container spacing={3}>
      <Grid item xs />
      <Grid item xs={6}>
        <Typography variant="h1" align="center">
          Flights
        </Typography>
        <List>
          {flights.map((flight) => {
            return (
              <Item
                handleChangeStatus={handleChangeStatus}
                setModalIsOpened={setModalIsOpened}
                setCurrentFlight={setCurrentFlight}
                key={flight._id}
                item={flight}
              />
            )
          })}
        </List>
        <Modal
          item={currentFlight}
          modalIsOpened={modalIsOpened}
          setModalIsOpened={setModalIsOpened}
        />
      </Grid>
      <Grid item xs />
    </Grid>
  )
}

export default HomePage
