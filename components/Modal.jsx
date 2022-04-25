import React, { useEffect } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

export const Modal = (props) => {
  const [modalEnabled, setModalEnabled] = React.useState(false);
  useEffect(() => {
    setModalEnabled(true);
  }, []);
  return (
    <>
      {props.modal && modalEnabled === true && (
        <MDBModal
          show={true}
          setShow={() => props.setModal((old) => !old)}
          tabIndex="-1"
        >
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalBody> {props.output} </MDBModalBody>
              <MDBModalFooter>
                <button
                  className="btn btn-light"
                  onClick={() => props.setModal(false)}
                >
                  close
                </button>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      )}
    </>
  );
};
