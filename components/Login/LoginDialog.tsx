import { Dialog } from "@mui/material";
import Login from ".";

const LoginDialog = (props: any) => {
  const handleClickResetPwd = () => {
    props.handleClickResetPwd();
    console.log("handle click RP login modal");
  };

  return (
    <Dialog
      open={props.showLoginDialog}
      onClose={props.handleCloseLogin}
      PaperProps={{
        style: { boxShadow: "none", background: "transparent" },
      }}
      BackdropProps={{
        style: {
          backdropFilter: "blur(3px)",
          backgroundColor: "rgba(0,0,30,0.2)",
        },
      }}
    >
      <Login
        handleCloseLogin={props.handleCloseLogin}
        handleClickResetPwd={handleClickResetPwd}
      />
    </Dialog>
  );
};

export default LoginDialog;
