import Button from "../Elements/Button"
import InputForm from "../Elements/Label"

const FormRegister = () => {
    return(
        <form action="">
          <InputForm
            label="Fullname"
            type="text"
            placeholder="Insert your name..."
            name="fullname" 
          />
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
          <InputForm
            label="Confirm Password"
            type="password"
            placeholder="*****"
            name="confirmPassword" 
          />
          <Button classname="bg-blue-600 w-full">Login</Button>
        </form>
    )
}

export default FormRegister