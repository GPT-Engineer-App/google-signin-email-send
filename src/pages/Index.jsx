import { Container, VStack, Input, Button, Text, useToast } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSignIn = () => {
    // Placeholder for Google sign-in functionality
    toast({
      title: "Sign-in",
      description: "Google sign-in simulated.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleSendEmail = () => {
    // Placeholder for email sending functionality
    toast({
      title: "Email Sent",
      description: `Message sent to ${email}`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Button leftIcon={<FaGoogle />} colorScheme="red" onClick={handleSignIn}>
          Sign in with Google
        </Button>
        <Input placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} />
        <Button colorScheme="blue" onClick={handleSendEmail}>
          Send Email
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;