import React, { useContext } from "react";
import { GlobalContext } from "../../global/GlobalContext";
import { Snackbar, SnackbarContainer, AlertLabel } from "./styles";
import AlterImg from "../../images/warning.svg";
export default function Alerts() {
  const { alerts } = useContext(GlobalContext);

  const showAlertBox = (alert) => {
    return (
      <Snackbar isVisible={!!alert?.id} id="snackbar">
        <SnackbarContainer>
          <img
            src={AlterImg}
            alt="alert-img"
            style={{ width: "20px", height: "20px", marginLeft: "12px" }}
          />
          <AlertLabel>{alert.msg}</AlertLabel>
        </SnackbarContainer>
      </Snackbar>
    );
  };

  return alerts.length > 0 ? showAlertBox(alerts[alerts.length - 1]) : null;
}
