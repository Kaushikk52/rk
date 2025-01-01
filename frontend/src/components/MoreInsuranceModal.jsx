import React from 'react'
import { Modal } from 'react-bootstrap';

const MoreInsuranceModal = ({handleClose, ModalOpen}) => {
  return (
    <>
      {/* Modal */}
      <Modal Modal
        show={ModalOpen}
        onHide={handleClose}
        className="fixed inset-0 h-screen bg-black bg-opacity-40 z-50 flex items-center justify-center"
      >
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-lg max-w-5xl w-full mx-auto">
          <Modal.Body className="p-4 text-center">
            <h5>More Insurance</h5>
            <button onClick={handleClose} className="btn btn-primary mt-4">Close</button>
          </Modal.Body>
        </div>
      </Modal>
    </>
  )
}

export default MoreInsuranceModal