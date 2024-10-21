import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productList from '../apis/apis';

const ProductDetail = () => {
    const { id } = useParams();
    const product = productList.find(p => p.id === parseInt(id));
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');

    if (!product) {
        return <div className="text-center mt-4">Sản phẩm không còn tồn tại</div>
    }

    const handleCommentSubmit = () => {
        if (commentText.trim()) {
            setComments([...comments, commentText]);
            setCommentText('');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row">
                <img 
                    src={product.img} 
                    alt={product.model} 
                    className="w-full md:w-[400px] object-cover rounded-md mb-4 md:mb-0"
                />
                <div className="ml-0 md:ml-8 flex-1">
                    <h1 className="text-2xl font-bold">{product.model}</h1>
                    <p className="text-gray-600">{product.brand}</p>
                    <p className="text-red-500 font-semibold">{`₫${product.price}`}</p>
                    <p className="text-gray-500">{`Color: ${product.color}`}</p>
                    <p className="text-gray-500">{`Size: ${product.size}`}</p>
                    <p className="text-gray-500">{`Material: ${product.material}`}</p>
                    <p className="mt-2 text-gray-700">{product.description}</p>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Thêm vào giỏ hàng
                    </button>
                </div>
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-bold">Mô Tả Chi Tiết</h2>
                <p className="mt-2 text-gray-700">
                    {product.detailedDescription}
                </p>
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-bold">Bình Luận</h2>
                <textarea
                    className="w-full border border-gray-300 rounded p-2 mt-2"
                    rows="4"
                    placeholder="Viết bình luận của bạn..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                />
                <button
                    className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    onClick={handleCommentSubmit}
                >
                    Gửi Bình Luận
                </button>
                <div className="mt-4">
                    <h3 className="font-semibold">Bình luận đã gửi:</h3>
                    {comments.length > 0 ? comments.map((comment, index) => (
                        <p key={index} className="text-gray-600">- {comment}</p>
                    )) : (
                        <p className="text-gray-500">Chưa có bình luận nào.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
