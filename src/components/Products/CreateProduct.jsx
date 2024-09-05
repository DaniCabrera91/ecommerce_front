import { Button, Form, InputNumber, Input, Select } from 'antd'
import { useContext, useEffect, useRef } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'

const CreateProduct = () => {
    const { createProduct, categories, getCategories } = useContext(ProductsContext)
    const hasFetchedCategories = useRef(false)

    useEffect(() => {
        if (!hasFetchedCategories.current) {
            getCategories();
            hasFetchedCategories.current = true
        }
    }, [getCategories]);

    const onFinish = (values) => {
        createProduct(values)
    }

    return (
        <Form onFinish={onFinish}>
            <Form.Item label="Product Name" name="productName" rules={[{ required: true, message: 'Please input the product name!' }]}>
                <Input placeholder="Product name" />
            </Form.Item>
            <Form.Item label="Price">
                <Form.Item name="price" noStyle>
                    <InputNumber />
                </Form.Item>
                <span className="ant-form-text"> €</span>
            </Form.Item>
            <Form.Item label="Category" name="CategoryId" rules={[{ required: true, message: 'Please select a category!' }]}>
                <Select placeholder="Select a category">
                    {categories.map(category => (
                        <Select.Option key={category.id} value={category.id}>
                            {category.categoryName}
                        </Select.Option>
                    ))}
                </Select>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default CreateProduct
