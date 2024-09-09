import { Button, Modal, Form, InputNumber, Input, Select } from 'antd';
import { useContext, useEffect, useCallback, useState } from 'react';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const EditProductModal = ({ visible, setVisible, onEdit }) => {
    const { product, categories, editProduct } = useContext(ProductsContext);
    const [form] = Form.useForm();
    const [image, setImage] = useState(null); // Estado para la imagen cargada
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    // Actualiza los campos del formulario cuando cambie el producto
    const updateFormFields = useCallback(() => {
        if (product) {
            form.setFieldsValue({
                productName: product.productName || '',
                price: product.price || 0,
                CategoryId: product.CategoryId || undefined,
            });
            // Establece valores para react-hook-form
            setValue('name', product.productName || '');
        }
    }, [product, form, setValue]);

    useEffect(() => {
        if (visible && product) {
            updateFormFields();
        }
    }, [visible, product, updateFormFields]);

    const onFinishAntd = (values) => {
        const combinedValues = {
            ...values,
            image: image, 
        };

        if (product.id) {
            editProduct(combinedValues, product.id)
                .then(() => {
                    setVisible(false);
                    onEdit(combinedValues);
                })
                .catch((error) => {
                    console.error('Error updating product:', error);
                });
        }
    };

    // Envía los datos de imagen usando react-hook-form
    const onSubmitReactHookForm = (data) => {
        const formData = new FormData();
        formData.append('picture', data.picture[0]); // Carga la imagen
        formData.append('name', data.name);

        axios.post('http://localhost:3000/upload', formData)
            .then((res) => {
                if (res.status === 200) {
                    setImage(res.data.url.path); // Guarda la ruta de la imagen
                    form.submit(); // Envía el formulario de Ant Design
                } else {
                    console.log('Error uploading image');
                }
            })
            .catch((error) => console.log(error));
    };

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
            <Form form={form} id="editProductForm" onFinish={onFinishAntd} layout="vertical">
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
                            categories.map((category) => (
                                <Select.Option key={category.id} value={category.id}>
                                    {category.categoryName}
                                </Select.Option>
                            ))
                        ) : (
                            <Select.Option disabled>Loading categories...</Select.Option>
                        )}
                    </Select>
                </Form.Item>

                {/* Campos de React Hook Form, pero sin form envolvente */}
                <Form.Item label="Recipe Details">
                    <input
                        type="text"
                        placeholder="Recipe name"
                        {...register('name', { required: 'Recipe name is required' })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}

                    <input
                        type="file"
                        {...register('picture', { required: 'Image is required' })}
                    />
                    {errors.picture && <p>{errors.picture.message}</p>}

                    {/* Botón para subir imagen usando react-hook-form */}
                    <Button type="primary" onClick={handleSubmit(onSubmitReactHookForm)}>
                        Upload Image
                    </Button>
                </Form.Item>
            </Form>
            {(image && 
<img width={400} src={image} alt="" />
) || (
<p>La imagen no está subida todavía</p>
)}

        </Modal>
    );
};

export default EditProductModal;
