import Button from "../Elements/Button"
import InputForm from "../Elements/Label"

const FormLogin = () => {
    return(
        <form action="">
          <InputForm
            label="Email"
            type="text"
            placeholder="example@email.com"
            name="email" 
          />
          <InputForm
            label="Password"
            type="password"
            placeholder="*****"
            name="password" 
          />
          <Button classname="bg-blue-600 w-full">Login</Button>
        </form>
    )
}

export default FormLogin