import { Fragment } from "react";
import { connect } from "react-redux";
import { hideToast } from '../../redux/actions';
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

function ToastMessage(props) {
  const { clostToast } = props;
  return (
    <div id="toast-message">
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={props.showToast}
        autoHideDuration={3000}
        onClose={clostToast}
        message={props.toastMsg}
        action={
          <Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={clostToast}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Fragment>
        }
      />
    </div>
  );
}

const mapStateToProps = (state) => {
    let { showToast, toastMsg} = state.uiData;
    return {
        showToast,
        toastMsg
    }
  };
  

const mapDispatchToProps = (dispatch) => ({
    clostToast: ()=> dispatch(hideToast())
});

export default connect(mapStateToProps, mapDispatchToProps)(ToastMessage);
