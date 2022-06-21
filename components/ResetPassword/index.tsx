import React from "react";
import { ArrowBackIos, Check, EmailOutlined } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import palette from "../../themes/palette";
import styles from "../../styles/Register.module.css";

const ResetPassword = (props: any) => {
  const closeRPDialog = () => {
    props.handleCloseRP(false);
  };

  const backToLogin = () => {
    closeRPDialog();
    props.clickLoginButtonByRef();
  };

  return (
    <div style={registerStyles.wraper}>
      <div style={registerStyles.formContainer}>
        <Typography variant="h5">RESET PASSWORD</Typography>
        <div style={registerStyles.inputContainer}>
          <TextField
            className={styles.inputForm}
            variant="outlined"
            label="Email"
            size="medium"
            color="success"
            value={"info@lucky.io"}
            InputProps={{
              startAdornment: (
                <EmailOutlined
                  style={{ color: palette.success.main, marginRight: 10 }}
                />
              ),
              endAdornment: <Check style={{ color: palette.success.main }} />,
            }}
            sx={{ marginBlock: 2 }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={registerStyles.backButton} onClick={backToLogin}>
            <ArrowBackIos
              style={{ marginLeft: 10, color: palette.grey[600] }}
            />
          </span>
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
        onClick={closeRPDialog}
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
  backButton: {
    border: `1px solid ${palette.grey[700]}`,
    width: 50,
    height: 46,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    cursor: "pointer",
    borderRadius: 10,
    marginRight: 10,
  },
};

export default ResetPassword;
