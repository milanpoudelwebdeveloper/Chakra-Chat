import {
  Button,
  ButtonGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schemas/loginSchema";
import { axiosInstance } from "../axiosConfig";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const login = async (data) => {
    try {
      const res = await axiosInstance.post("login", data);
      console.log("reponse is", res?.data);
    } catch (e) {
      console.log("Something went wrong", e);
    }
  };
  return (
    <VStack
      as="form"
      w={["90%", 500]}
      m="auto"
      justify="center"
      h="100vh"
      spacing={4}
      onSubmit={handleSubmit(login)}
    >
      <Heading>Log In</Heading>
      <FormControl isInvalid={errors?.username}>
        <FormLabel fontSize="lg">Username</FormLabel>
        <Input
          type="text"
          placeholder="Enter username"
          autoComplete="off"
          {...register("username", {
            required: "Username is required",
          })}
        />
        <FormErrorMessage>{errors?.username?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors?.password}>
        <FormLabel fontSize="lg">Password</FormLabel>
        <Input
          type="password"
          {...register("password", {
            required: "Password is required",
          })}
          placeholder="Enter password"
        />
        <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
      </FormControl>
      <ButtonGroup pt="1rem">
        <Button colorScheme="teal" type="sumbit">
          Log In
        </Button>
        <Button>Create Account</Button>
      </ButtonGroup>
    </VStack>
  );
};

export default Login;
