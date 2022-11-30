import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { connect } from "react-redux";
import { addAccount } from "./store";

function Form(props) {
  const [account, setAccount] = React.useState("");
  const [name, setName] = React.useState("");
  const handleChange = (event) => {
    setAccount(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let addedData = {
      id: props.accounts.length++,
      customerName: name,
      accountNumber: Math.random(),
      accountType: account,
    };
    // data.append("id", props.accounts.length++);
    // data.append("name", name);
    // data.append("account", account);
    // data.append("accountNumber", Math.random());

    console.log(data);
    props.dispatch(addAccount(addedData));
  }
  console.log(props);
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "2rem" }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& > :not(style)": {
            m: 1,
            width: "25ch",
          },
        }}
        noValidate
        autoComplete="off">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "space-around",
            justifyContent: "space-around",
            backgroundColor: "whitesmoke",
            borderRadius: "7px",
            padding: "3rem",
          }}>
          <h3 style={{ textAlign: "center" }}>Add Account</h3>
          <TextField
            style={{ margin: "1rem" }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={handleNameChange}
          />

          <FormControl style={{ margin: "1rem", width: "11.5rem" }}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={account}
              label="Account"
              onChange={handleChange}>
              <MenuItem value={"saving account"}>Saving Account</MenuItem>
              <MenuItem value={"student account"}>student Account</MenuItem>
              <MenuItem value={"normal account"}>Normal Account</MenuItem>
            </Select>
          </FormControl>
          <button style={{ padding: "1rem" }} type="submit">
            Add Account
          </button>
        </div>
      </Box>
    </div>
  );
}
const readStateFromStoreAndPassItToProps = (state) => {
  return { accounts: state.accounts };
};
export default connect(readStateFromStoreAndPassItToProps)(Form);
