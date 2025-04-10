import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from "@chakra-ui/react";
import { useState } from 'react';
import { useBookStore } from "../store/book";



const CreatePage = () => {
  const [newBook, setNewBook] = useState({
    name: "",
    author: "",
    genre: "",
    year: "",
    price: "",
    image: "",
  });

  const toast = useToast();

  const { createBook } = useBookStore();

  const handleAddBook = async () => {
    const { success, message } = await createBook(newBook);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true
      });
    }
    else{
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true
      });
    }
  };

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Book
        </Heading>

        <Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
          <VStack spacing={4}>
            <Input
              placeholder='Book Title'
              name='name'
              value={newBook.name}
              onChange={(e) => setNewBook({ ...newBook, name: e.target.value })}
            />
            <Input
              placeholder='Author'
              name='author'
              value={newBook.author}
              onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
            />
            <Input
              placeholder='Genre'
              name='genre'
              value={newBook.genre}
              onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
            />
            <Input
              placeholder='Year'
              name='year'
              value={newBook.year}
              onChange={(e) => setNewBook({ ...newBook, year: e.target.value })}
            />
            <Input
              placeholder='Price'
              name='price'
              type='number'
              value={newBook.price}
              onChange={(e) => setNewBook({ ...newBook, price: e.target.value })}
            />
            <Input
              placeholder='Image URL'
              name='image'
              value={newBook.image}
              onChange={(e) => setNewBook({ ...newBook, image: e.target.value })}
            />

            <Button colorScheme='blue' onClick={handleAddBook} w='full'>
              Add Book
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage