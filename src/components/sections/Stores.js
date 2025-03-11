import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import storeServiceProvider from "../../service/storeService";
import {
  addStoreData,
  deteteStoreData,
  storeData,
} from "../../store/centeralDataSlice";
import {
  Box,
  CircularProgress,
  Button,
  BottomNavigation,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Stores() {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const storeState = useSelector((state) => state.optimus.storeData);
  const dispatch = useDispatch();

  const getStoreData = async () => {
    try {
      const data = await storeServiceProvider();
      dispatch(storeData(data));
    } catch (error) {
      console.error(error);
    }
  };

  const deleteHandler = (e) => {
    console.log(e);
    dispatch(deteteStoreData(e));
  };

  const addHandler = () => {
    console.log("Hi");
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(!open);
  };

  const submitHandler = (event) => {
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());

    const entry = {
      id: formJson.id,
      label: formJson.label,
      city: formJson.city,
      state: formJson.stateCode,
    };
    dispatch(addStoreData(entry));
  };

  React.useEffect(() => {
    getStoreData();
  }, []);

  return (
    <React.Fragment>
      <Box>
        {console.log(storeState)}
        {storeState.length > 0 ? (
          <>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell> </TableCell>
                    <TableCell>SL No.</TableCell>
                    <TableCell align="left">Store</TableCell>
                    <TableCell align="left">City</TableCell>
                    <TableCell align="left">State</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {storeState.map((row, index) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <Button
                          variant="text"
                          color="error"
                          onClick={() => deleteHandler(row.id)}
                        >
                          {" "}
                          <DeleteIcon />
                        </Button>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {index + 1}
                      </TableCell>
                      <TableCell align="left">{row.label}</TableCell>
                      <TableCell align="left">{row.city}</TableCell>
                      <TableCell align="left">{row.state}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Paper
              sx={{ position: "fixed", bottom: -10, left: 0, right: 0, color:"gray" }}
              elevation={3}
            >
              <BottomNavigation>
                <Button onClick={() => addHandler()}>Add Store</Button>
              </BottomNavigation>
            </Paper>
          </>
        ) : (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: "form",
            onSubmit: (event) => {
              event.preventDefault();
              submitHandler(event);

              handleClose();
            },
          },
        }}
      >
        <DialogTitle>Add Store</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            ref={ref}
            required
            margin="dense"
            id="name"
            name="id"
            label="Store ID"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            
            ref={ref}
            required
            margin="dense"
            id="label"
            name="label"
            label="Store Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            
            ref={ref}
            required
            margin="dense"
            id="city"
            name="city"
            label="City"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            
            ref={ref}
            required
            margin="dense"
            id="stateCode"
            name="stateCode"
            label="State Code"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onSubmit={() => submitHandler()}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
