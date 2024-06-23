import CustomInput from "../custom/CustomInput"

const Demo = () => {
  return (
    <div>
      <CustomInput type={"text"} placeholder={"name"} name={"name"}/>
      <CustomInput type={"number"} placeholder={"Number"} name={"Number"}/>
    </div>
  )
}

export default Demo
