import { Dialog } from "@mui/material";
import Register from ".";

const RegisterDialog = (props: any) => {
  const clickLoginButtonByRef = () => {
    props.handleClickLoginButtonByRef();
  };

  return (
    <Dialog
      open={props.showRegisterDialog}
      onClose={props.handleCloseRegister}
      PaperProps={{ style: { boxShadow: "none", background: "transparent" } }}
      BackdropProps={{
        style: {
          backdropFilter: "blur(3px)",
          backgroundColor: "rgba(0,0,30,0.2)",
        },
      }}
    >
      <Register
        handleCloseRegister={props.handleCloseRegister}
        clickLoginButtonByRef={clickLoginButtonByRef}
      />
    </Dialog>
  );
};

export default RegisterDialog;
