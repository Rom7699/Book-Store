import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useBookStore } from "../store/book";
import BookCard from "../components/BookCard";

const HomePage = () => {
  const { fetchBooks, books } = useBookStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadBooks = async () => {
      setIsLoading(true);
      try {
        await fetchBooks();
      } catch (error) {
        console.error("Failed to load books:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadBooks();
  }, [fetchBooks]);

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
          textAlign={"center"}
        >
          Current Books 🚀
        </Text>
        // Then in your JSX, you can use the loading state:
        {isLoading ? (
          <Text>Loading books...</Text>
        ) : (
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 3,
            }}
            spacing={10}
            w={"full"}
          >
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </SimpleGrid>
        )}

        {books.length === 0 && (
          <Text
            fontSize="xl"
            textAlign={"center"}
            fontWeight="bold"
            color="gray.500"
          >
            No products found 😢{" "}
            <Link to={"/create"}>
              <Text
                as="span"
                color="blue.500"
                _hover={{ textDecoration: "underline" }}
              >
                Create a product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
