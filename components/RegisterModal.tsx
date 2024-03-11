import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerAction } from "@/redux/actions/userAction";

interface RegisterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const handleRegister = (userData: any) => {
        dispatch(registerAction(userData) as any);
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Registro de Usuario"
            className="fixed inset-0 flex items-center justify-center modal"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 overlay"
        >
            <div className="modal-content bg-white p-6 rounded-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Registro de Usuario</h2>
                    <button
                        type="button"
                        onClick={onClose}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 mx-2 py-1 px-2 rounded focus:outline-none focus:shadow-outline-gray"
                    >
                        X
                    </button>
                </div>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-600 mb-2">
                            Username
                        </label>
                        <input
                            {...register("username")}
                            type="text"
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600 mb-2">
                            password
                        </label>
                        <input
                            {...register("password")}
                            type="password"
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
                    >
                        Registrarse
                    </button>
                </form>
            </div>
        </Modal>
    );
};

export default RegisterModal;
