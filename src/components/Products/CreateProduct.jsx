import { Button, Form, InputNumber, Input, Select } from 'antd'
import { useContext, useEffect } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'

const CreateProduct = () => {
    const { createProduct, categories, getCategories } = useContext(ProductsContext)

    useEffect(() => {
        if (categories.length === 0) {
            getCategories()
        }
    }, [categories, getCategories])

    const onFinish = (values) => {
        createProduct(values)
    }

    return (
        <Form onFinish={onFinish}>
            <Form.Item label="Product Name" name="productName" rules={[{ required: true, message: 'Por favor introduce un nombre para el producto!' }]}>
                <Input placeholder="Nombre de producto" />
            </Form.Item>
            <Form.Item label="Price">
                <Form.Item name="Precio" noStyle>
                    <InputNumber />
                </Form.Item>
                <span className="ant-form-text"> €</span>
            </Form.Item>
            <Form.Item label="Category" name="CategoryId" rules={[{ required: true, message: 'Por favor selecciona una categoría!' }]}>
                <Select placeholder="Selecciona una categoría">
                    {categories.map(category => (
                        <Select.Option key={category.id} value={category.id}>
                            {category.categoryName}
                        </Select.Option>
                    ))}
                </Select>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Crear Producto
                </Button>
            </Form.Item>
        </Form>
    )
}

export default CreateProduct
