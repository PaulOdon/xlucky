import React from "react";
import { Lock, Visibility } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import palette from "../../themes/palette";
import styles from "../../styles/Register.module.css";

const ResetPwdForm = (props: any) => {
  const closeRPFormDialog = () => {
    props.handleCloseRPForm(false);
  };

  return (
    <div style={registerStyles.wraper}>
      <div style={registerStyles.formContainer}>
        <Typography variant="h5">RESET PASSWORD</Typography>
        <div style={registerStyles.inputContainer}>
          <TextField
            className={styles.inputForm}
            variant="outlined"
            label="Password"
            size="medium"
            color="info"
            type={"password"}
            InputProps={{
              startAdornment: (
                <Lock style={{ color: "#fff", marginRight: 10 }} />
              ),
              endAdornment: (
                <Visibility style={{ color: "#fff", marginRight: 10 }} />
              ),
            }}
            sx={{ marginBlock: 2 }}
          />
          <TextField
            className={styles.inputForm}
            variant="outlined"
            label="Confirm password"
            size="medium"
            color="info"
            type={"password"}
            InputProps={{
              startAdornment: (
                <Lock style={{ color: "#fff", marginRight: 10 }} />
              ),
              endAdornment: (
                <Visibility style={{ color: "#fff", marginRight: 10 }} />
              ),
            }}
            sx={{ marginBlock: 2 }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            style={{ width: "100%" }}
            size="large"
            variant="contained"
            color="secondary"
            sx={{ marginBlock: 1 }}
          >
            RESET PASSWORD
          </Button>
        </div>
      </div>
      <img
        style={registerStyles.closeButton}
        src="/images/close.png"
        alt="close"
        onClick={closeRPFormDialog}
      />
    </div>
  );
};

const registerStyles = {
  wraper: {
    display: "flex",
  },
  formContainer: {
    background: palette.primary.main,
    width: "400px",
    textAlign: "center" as "center",
    padding: "30px",
    color: palette.primary.contrastText,
    borderRadius: "12px",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column" as "column",
  },
  closeButton: { marginLeft: 5, width: 40, height: 40, cursor: "pointer" },
};

export default ResetPwdForm;
