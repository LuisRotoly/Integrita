import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

function Agenda() {
  const history = useHistory();
  function aaa() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        history.push("/");
      }
    });
  }
  return (
    <div>
      <p>Agenda</p>
      <button
        type="button"
        className="btn btn-outline-danger"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Danger
      </button>
      <button type="button" className="btn btn-danger" onClick={aaa}>
        Danger2
      </button>

      {/*  Modal  */}
      <div className="modal fade" id="exampleModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Modal title</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Agenda;
