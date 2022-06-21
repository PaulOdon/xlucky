import { Dialog } from "@mui/material";
import ResetPwForm from ".";

const ResetPwdFormDialog = (props: any) => {
  return (
    <Dialog
      open={props.showResetPwdFormDialog}
      onClose={props.handleCloseRPForm}
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
      <ResetPwForm handleCloseRPForm={props.handleCloseRPForm} />
    </Dialog>
  );
};

export default ResetPwdFormDialog;
