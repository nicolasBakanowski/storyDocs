import React from "react";
import { Product } from "../interfaces/Products";
import Link from "next/link";

const ProductCard: React.FC<Product> = ({
    id,
    name,
    price,
    image_url,
    brand,
}) => {
    return (
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <Link href={`/product/${id}`}>
                <img
                    src={image_url}
                    alt={name}
                    className="h-80 w-72 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-72">
                    {brand ? (
                        <div className="flex items-center mb-2">
                            <img
                                src={brand.logo_url}
                                alt={brand.name}
                                className="h-8 w-8 object-cover rounded-full mr-2"
                            />
                            <span className="text-gray-400 uppercase text-xs">
                                {brand.name}
                            </span>
                        </div>
                    ) : (
                        <p className="text-gray-400 uppercase text-xs">Brand not available</p>
                    )}
                    <p className="text-lg font-bold text-black truncate block capitalize">
                        {name}
                    </p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">
                            ${price}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
