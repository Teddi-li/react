import { useState } from "react";
import { useNavigate } from "react-router-dom";



export function loginHook(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const adminEmail = [
      {"email": "admin.com", "password": "123" },
      {"email": "admin2.com", "password": "1234" }
    ]
    const navigate = useNavigate();


    function login(email: string, password: string) {
        // const data = adminEmail.find(user => user.email === email && user.password === password);
        let data = {
          email: "",
          password: ""
        };
        for( let i=0;i<adminEmail.length,i++;){
          if(adminEmail[i].email === email && adminEmail[i].password === password){
            data = adminEmail[i];
          }
        }
        return data;
    }

     function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const user = login(email, password);
        if (user === undefined) {
          alert("Invalid email or password");
          return;
        } else { 
          navigate("/home");
        }
       
    } 
    

  

 return {
    setEmail,
    setPassword,
    handleSubmit,
  };
}