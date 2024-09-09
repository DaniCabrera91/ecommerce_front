import React, { useContext, useEffect, useState } from 'react'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
import CreateProduct from '../Products/CreateProduct'
import EditProductModal from '../Products/EditProductModal'
import { AdminContainer, ProductList, ProductItem, ProductDetails, ActionButtons } from './Admin.styled'

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
    }

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
        <AdminContainer>
            <CreateProduct />
            {products && products.length > 0 ? (
                <ProductList>
                    {products.map((product) => (
                        <ProductItem key={product.id}>
                            <ProductDetails>
                                <span>{product.productName}</span>git 
                                <span>{product.price !== undefined ? product.price.toFixed(2) : 'N/A'}</span>
                            </ProductDetails>
                            <ActionButtons>
                                <button onClick={() => deleteProduct(product.id)}>
                                    <DeleteOutlined />
                                </button>
                                <button onClick={() => showModal(product.id)}>
                                    <EditOutlined />
                                </button>
                            </ActionButtons>
                        </ProductItem>
                    ))}
                </ProductList>
            ) : (
                <span>Cargando...</span>
            )}
            <EditProductModal
                visible={isModalVisible}
                setVisible={setIsModalVisible}
                productId={selectedProductId}
                onEdit={handleEditProduct}
            />
        </AdminContainer>
    )
}

export default Admin
