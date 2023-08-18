import React, { useEffect } from "react";
import Product from "../components/Product";
import { Box, Center, Container, Spinner, Wrap } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.shop);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (loading) {
    return (
      <>
        <Center h={"95vh"}>
          <Spinner
            thickness="5px"
            w={"20"}
            h={"20"}
            speed="0.6s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      </>
    );
  }

  return (
    <>
      <Center w={"full"} mb={"10"}>
        <Container maxW={"90vw"}>
          <Wrap mt={"10"} spacing={"5"}>
            {data.map((e) => {
              return (
                <Box key={e.id}>
                  <Product title={e.title} price={e.price} image={e.image} id={e.id} />
                </Box>
              );
            })}
          </Wrap>
        </Container>
      </Center>
    </>
  );
};

export default Home;
