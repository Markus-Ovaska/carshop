import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function EditCar(props) {
  const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState({
      brand: "",
      model: "",
      color: "",
      fuel: "",
      modelYear: "",
      price: ""
    })
  
    const handleClickOpen = () => {
      setCar({brand: props.car.brand, model: props.car.model, color: props.car.color, 
        fuel: props.car.fuel, modelYear: props.car.modelYear, price: props.car.price})
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
      const handleInputChange = (event) => {
  setCar({...car, [event.target.name]: event.target.value })
    }
  
  const updateCar = () => {
    props.updateCar(car, props.car._links.car.href);
    handleClose();
  }
  
    return (
      <>
        <Button color="primary" onClick={handleClickOpen}>
          Edit
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Edit Car</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              name="brand"
              value={car.brand}
              onChange={event => handleInputChange(event)}
              label="Brand"
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              name="model"
              value={car.model}
              onChange={event => handleInputChange(event)}
              label="Model"
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              name="color"
              value={car.color}
              onChange={event => handleInputChange(event)}
              label="Color"
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              name="fuel"
              value={car.fuel}
              onChange={event => handleInputChange(event)}
              label="Fuel"
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              name="modelYear"
              value={car.modelYear}
              onChange={event => handleInputChange(event)}
              label="ModelYear"
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              name="price"
              value={car.price}
              onChange={event => handleInputChange(event)}
              label="Price (€)"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
               </Button>
            <Button onClick={updateCar} color="primary">
              Save
              </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }

