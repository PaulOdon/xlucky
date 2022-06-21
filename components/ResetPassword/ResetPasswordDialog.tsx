import { Dialog } from "@mui/material";
import ResetPassword from ".";

const ResetPasswordDialog = (props: any) => {
  const clickLoginButtonByRef = () => {
    props.handleClickLoginButtonByRef();
  };
  return (
    <Dialog
      open={props.showRPDialog}
      onClose={props.handleCloseRP}
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
      <ResetPassword
        handleCloseRP={props.handleCloseRP}
        clickLoginButtonByRef={clickLoginButtonByRef}
      />
    </Dialog>
  );
};

export default ResetPasswordDialog;
