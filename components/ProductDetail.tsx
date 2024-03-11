import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import EditProductModal from "./editProductModal";
import { editProduct } from "@/redux/actions/productAction";
import { ProductEdit } from "@/interfaces/Products";

const ProductDetail: React.FC = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { productId } = router.query;
    const products = useSelector((state: RootState) => state.product.products);
    const product = products.find((p) => p.id === Number(productId));

    const [isEditModalOpen, setEditModalOpen] = useState(false);

    const openEditModal = () => {
        setEditModalOpen(true);
    };

    const closeEditModal = () => {
        setEditModalOpen(false);
    };

    const handleEdit = () => {
        openEditModal();
    };

    const handleEditSubmit = (data: ProductEdit) => {
        if (product?.id !== undefined) {
            dispatch(editProduct(product.id, data) as any);
            closeEditModal();
        } else {
            console.error('ID de producto indefinido');
        }
    };
    useEffect(() => {
    }, [router.query.productId]);

    if (!product) {
        return <p>Producto no encontrado</p>;
    }

    const handleDelete = () => {
        const shouldDelete = window.confirm("¿Estás seguro de que quieres eliminar este producto?");
        if (shouldDelete) {
            router.push("/");

        }
    };

    return (
        <div className="container mx-auto mt-8">
            <div className="max-w-md mx-auto bg-white p-8 border rounded shadow-lg">
                <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                <div className="mb-4">
                    <img
                        src={product.image_url}
                        alt={product.name}
                        className="w-full h-auto rounded-lg"
                    />
                </div>
                <p className="text-gray-700 mb-2">Descripción: {product.description}</p>
                <p className="text-gray-700 mb-4">Precio: ${parseInt(product.price.toString(), 10)}</p>
                <div className="flex space-x-4">
                    <button
                        onClick={handleEdit}
                        className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
                    >
                        Editar
                    </button>
                    <button
                        onClick={handleDelete}
                        className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-red"
                    >
                        Eliminar
                    </button>
                </div>
            </div>

            <EditProductModal
                isOpen={isEditModalOpen}
                onClose={closeEditModal}
                product={product}
                onSubmit={handleEditSubmit}
            />
        </div>
    );
};

export default ProductDetail;
