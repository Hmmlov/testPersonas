import React from 'react'

const Modal = ({id, content, addOrUpdate, destroyClose, size = ''}) => {
  return (
    <div className="modal fade" id={id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className={"modal-dialog " + size} >
          <div className="modal-content">
            {/* <div className="modal-header">
              <h4 className="modal-title" id="standard-modalLabel">Nuevo Personas</h4>
            </div> */}
            <div className="modal-body">
              {content}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-light" data-bs-dismiss="modal" onClick={destroyClose}>Close</button>
              <button type="button" className="btn btn-primary" onClick={addOrUpdate}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Modal;