import { useForm } from 'react-hook-form'

function App() {
 const { register, handleSubmit } = useForm()
 const submitForm = (data) => console.log(data)
 return (
   <>
     <form onSubmit={handleSubmit(submitForm)}>
       <input type="text" id="name"
         {...register('name', { required: 'Recipe name is required' })}
       />
       <input type="file" id="picture"
        {...register('picture', { required: 'Image is required'})}
        />
       <input type="submit" />
     </form>
   </>
 )}

 
export default App


