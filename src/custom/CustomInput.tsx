interface Props {
    type: string;           
    placeholder: string;    
    name: string; 
    style?:string;          
        
  }
  
  
  const CustomInput: React.FC<Props> = ({ type, placeholder, name,style }) => {
    return (
      <div>
        <input 
          type={type}                
          placeholder={placeholder}  
          name={name}                
          className={`outline-none ${style} `}    
        />
      </div>
    );
  };
  

  export default CustomInput;
  