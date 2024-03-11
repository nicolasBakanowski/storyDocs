import { addProduct } from '@/redux/actions/productAction';
import { RootState } from '@/redux/store';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '@/interfaces/Products';

const initialProductState: createProduct = {
    name: '',
    description: '',
    price: 0,
    image_url: 'https://source.unsplash.com/random/800x600',
    id_brand: 1,

};

const Admin: React.FC = () => {
    const [product, setProduct] = useState<createProduct>(initialProductState);
    const dispatch = useDispatch();
    const { token } = useSelector((state: RootState) => state.user);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        token &&
            dispatch(addProduct(product, token) as any)
    };

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
                <label className="block mb-4">
                    Nombre:
                    <input type="text" name="name" value={product.name} onChange={handleChange} className="form-input mt-1 block w-full" />
                </label>
                <label className="block mb-4">
                    Descripción:
                    <textarea name="description" value={product.description} onChange={handleChange} className="form-textarea mt-1 block w-full" />
                </label>
                <label className="block mb-4">
                    Precio:
                    <input type="number" name="price" value={product.price} onChange={handleChange} className="form-input mt-1 block w-full" />
                </label>
                <label className="block mb-4">
                    Imagen URL:
                    <input type="text" name="image_url" value={product.image_url} onChange={handleChange} className="form-input mt-1 block w-full" />
                </label>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                    Enviar Producto
                </button>
            </form>
        </div>
    );
};

export default Admin;
