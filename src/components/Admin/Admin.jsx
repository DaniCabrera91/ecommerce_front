import React, { useContext, useEffect, useState } from 'react'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
import CreateProduct from '../Products/CreateProduct'
import EditProductModal from '../Products/EditProductModal'
import './Admin.scss';
const Admin = () => {
    const { getProducts, products, deleteProduct, getProductById, editProduct } = useContext(ProductsContext)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [selectedProductId, setSelectedProductId] = useState(null)

    useEffect(() => {
        getProducts()
    }, [getProducts])

    const showModal = async (id) => {
        setSelectedProductId(id)
        await getProductById(id)
        setIsModalVisible(true)
    };

    const handleEditProduct = (values) => {
        if (selectedProductId) {
            editProduct(values, selectedProductId)
                .then(() => {
                    setIsModalVisible(false)
                    getProducts()
                })
                .catch((error) => {
                    console.error('Error updating product:', error)
                })
        }
    }

    return (
        <>
            <CreateProduct />
            {products && products.length > 0 ? (
                products.map((product) => (
                    <div key={product.id}>
                        <span>{product.productName} </span>
                        <span>{product.price !== undefined ? product.price.toFixed(2) : 'N/A'}</span>
                        <button onClick={() => deleteProduct(product.id)}>
                            <DeleteOutlined />
                        </button>
                        <button onClick={() => showModal(product.id)}>
                            <EditOutlined />
                        </button>
                    </div>
                ))
            ) : (
                <span>Loading...</span>
            )}
            <EditProductModal
                visible={isModalVisible}
                setVisible={setIsModalVisible}
                productId={selectedProductId}
                onEdit={handleEditProduct}
            />
        </>
    )
}

export default Admin