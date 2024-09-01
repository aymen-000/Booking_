
import { Button, Modal as FlowbiteModal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Link } from 'react-router-dom';

function BookingModal({ openModal, setOpenModal }) {
    return (
        <div className="">
            <FlowbiteModal show={openModal} size="md" className="" onClose={() => setOpenModal(false)} popup>
                <FlowbiteModal.Header />
                <FlowbiteModal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            If you want to book this hotel please login !!
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Link to={'/signin'}>
                                <Button  className="z-50 text-red-600" onClick={() => setOpenModal(false)}>
                                    Login
                                </Button>
                            </Link>
                            <Button color="gray" onClick={() => setOpenModal(false)}>
                                No, cancel
                            </Button>
                        </div>
                    </div>
                </FlowbiteModal.Body>
            </FlowbiteModal>
        </div>
    );
}

export default BookingModal;