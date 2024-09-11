import { Box, Container, Text, Stack, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import backGroundImage from "../assets/Vector.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

function LoginPage() {
  const [formData, setormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [currentState, setcurrentState] = useState("Login");
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (currentState !== "Login" && !formData.username.trim()) {
      validationErrors.username = "username is required";
      console.log("error");
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) console.log("error1");
    if (!formData.password.trim()) {
      validationErrors.password = "password is required";
    }
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setUser({
        name: formData.username,
        email: formData.email,
        role: formData.email === "admin@email.com" ? "admin" : "user",
      });
      navigate("/home");
    }
  };

  return (
    <Container
      bgImage={`url(${backGroundImage})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      display="flex"
      justifyContent="flex-start"
      minHeight="89vh"
      minW="100%"
    >
      <Box
        m=" auto"
        alignItems="center"
        width="40%"
        height="500px"
        display="flex"
        justifyContent="space-around"
        bg="white"
      >
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb="15px"
            mt="2px"
          >
            <Text fontWeight="bold" fontSize="6xl" color={"black"}>
              {currentState}
            </Text>
          </Box>

          <Stack spacing={5}>
            {currentState === "Login" ? (
              ""
            ) : (
              <div>
                <Input
                  margin="auto"
                  display="flex"
                  name="username"
                  width="350px"
                  borderRadius="none"
                  type="text"
                  border="2px"
                  borderColor="black"
                  placeholder="Username"
                  onChange={handleChange}
                  _placeholder={{ color: "grey" }}
                  size="md"
                />
                {errors.username && <span>{errors.username}</span>}
              </div>
            )}
            <div>
              <Input
                margin="auto"
                display="flex"
                name="email"
                width="350px"
                borderRadius="none"
                type="email"
                border="2px"
                borderColor="black"
                placeholder="Email"
                _placeholder={{ color: "grey" }}
                onChange={handleChange}
                size="md"
              />
              {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
              <Input
                margin="auto"
                display="flex"
                name="password"
                width="350px"
                borderRadius="none"
                type="password"
                border="2px"
                borderColor="black"
                placeholder="Password"
                _placeholder={{ color: "grey" }}
                onChange={handleChange}
                size="md"
              />
              {errors.password && <span>{errors.password}</span>}
            </div>
          </Stack>
          <Box display="flex" justifyContent="space-between">
            <Text
              fontWeight="bold"
              pt="3px"
              pb="3px"
              fontSize="12px"
              cursor="pointer"
              color={"black"}
            >
              Forgot your password?
            </Text>
            {currentState === "Login" ? (
              <Text
                pt="3px"
                pb="3px"
                fontWeight="bold"
                fontSize="12px"
                onClick={() => setcurrentState("Sign Up")}
                cursor="pointer"
                color={"black"}
              >
                Register Here
              </Text>
            ) : (
              <Text
                pt="3px"
                pb="3px"
                fontWeight="bold"
                fontSize="12px"
                onClick={() => setcurrentState("Login")}
                cursor="pointer"
                color="black"
              >
                Login Here
              </Text>
            )}
          </Box>
          <Box>
            <Button
              type="submit"
              borderRadius="none"
              backgroundColor="#007AFF"
              color="white"
              width="100%"
            >
              {currentState === "Login" ? "Sign In" : "Sign Up"}
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default LoginPage;
