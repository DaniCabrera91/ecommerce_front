import { Button, Modal, Form, InputNumber, Input, Select } from 'antd'
import { useContext, useEffect, useCallback } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'

const EditProductModal = ({ visible, setVisible, onEdit }) => {
    const { product, categories, editProduct } = useContext(ProductsContext)
    const [form] = Form.useForm();

    const updateFormFields = useCallback(() => {
        if (product) {
            form.setFieldsValue({
                productName: product.productName || '',
                price: product.price || 0,
                CategoryId: product.CategoryId || undefined,
            });
        }
    }, [product, form])

    useEffect(() => {
        if (visible && product) {
            updateFormFields()
        }
    }, [visible, product, updateFormFields])

    const onFinish = (values) => {
        if (product.id) {
            editProduct(values, product.id)
                .then(() => {
                    setVisible(false)
                    onEdit(values)
                })
                .catch((error) => {
                    console.error('Error updating product:', error)
                })
        }
    }

    return (
        <Modal
            title="Edit Product"
            open={visible}
            onCancel={() => setVisible(false)}
            footer={[
                <Button key="cancel" onClick={() => setVisible(false)}>
                    Cancel
                </Button>,
                <Button key="submit" type="primary" form="editProductForm" htmlType="submit">
                    Submit
                </Button>,
            ]}
        >
            <Form
                form={form}
                id="editProductForm"
                onFinish={onFinish}
                layout="vertical"
            >
                <Form.Item
                    label="Product Name"
                    name="productName"
                    rules={[{ required: true, message: 'Please input the product name!' }]}
                >
                    <Input placeholder="Product name" />
                </Form.Item>
                <Form.Item label="Price">
                    <Form.Item name="price" noStyle>
                        <InputNumber min={0} />
                    </Form.Item>
                    <span className="ant-form-text"> €</span>
                </Form.Item>
                <Form.Item
                    label="Category"
                    name="CategoryId"
                    rules={[{ required: true, message: 'Please select a category!' }]}
                >
                    <Select placeholder="Select a category">
                        {categories && categories.length > 0 ? (
                            categories.map(category => (
                                category.id && category.categoryName ? (
                                    <Select.Option key={category.id} value={category.id}>
                                        {category.categoryName}
                                    </Select.Option>
                                ) : null
                            ))
                        ) : (
                            <Select.Option disabled>Loading categories...</Select.Option>
                        )}
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default EditProductModal
