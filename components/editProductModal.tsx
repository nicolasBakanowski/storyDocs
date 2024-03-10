import React, { useEffect } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { ProductEdit } from "@/interfaces/Products";

interface EditProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: ProductEdit
    onSubmit: (data: ProductEdit) => void;
}

const EditProductModal: React.FC<EditProductModalProps> = ({
    isOpen,
    onClose,
    product,
    onSubmit,
}) => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: product.name,
            price: product.price,
            description: product.description,
        },
    });

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Editar Producto"
            className="fixed inset-0 flex items-center justify-center modal"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 overlay"
        >
            <div className="modal-content bg-white p-6 rounded-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Editar Producto</h2>
                    <button
                        type="button"
                        onClick={onClose}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 mx-2 py-1 px-2 rounded focus:outline-none focus:shadow-outline-gray"
                    >
                        X
                    </button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Nombre:</label>
                        <input
                            {...register("name")}
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Precio:</label>
                        <input
                            {...register("price")}
                            type="number"
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Descripción:</label>
                        <textarea
                            {...register("description")}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
                    >
                        Guardar cambios
                    </button>
                </form>

            </div>
        </Modal>
    );
};

export default EditProductModal;
