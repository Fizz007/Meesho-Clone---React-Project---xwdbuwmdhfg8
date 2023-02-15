import { nanoid } from "nanoid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { mobile, tab } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "55%" })}
  ${tab({ width: "55%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  let [value, setValue] = useState({
    name: "",
    email: "",
    pass: "",
    welcome: "",
    logInn: true,
    id: nanoid(),

  });

  // let [err, seterr] = useState(false);
  // let [errtxt, seterrtxt] = useState("");
  const navigate = useNavigate();

  let handleInputChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  let handleSubmit = (e) => {
    // const validEmail = new RegExp(
    //     '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    // const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
    e.preventDefault();
    if (!value.email || !value.pass || !value.name) {
      toast.error("Some error occured");
      // seterr(true);
      // seterrtxt('Some fields are missing')
    } else {
      // seterr(false);

      setValue((prev)=> ({
        ...prev,
        logInn: true }));
      localStorage.setItem("user", JSON.stringify(value));
      // props.changeUserData(value)
      navigate("/");

      
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            className="input"
            type="text"
            name="name"
            placeholder="Enter your username"
            value={value.name}
            onChange={handleInputChange}
          />
          <Input
            className="input"
            name="email"
            required
            type="email"
            placeholder="Enter your mailID"
            value={value.email}
            onChange={handleInputChange}
          />
          <Input
            className="input"
            name="pass"
            type="password"
            required
            placeholder="*******"
            value={value.pass}
            onChange={handleInputChange}
          />

          {/* {err ? <div style={{color: 'red' , font_size: '15px'}}>{errtxt}</div> : null} */}
          <Button onClick={handleSubmit}>LOGIN</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
