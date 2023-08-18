import { Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const Product = ({ title, price, image , id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Stack w={"60"} h={"72"} p={"3"} gap={3} border={"2px solid red"}>
        <Text noOfLines={1} textAlign={"center"}>
          {title}
        </Text>
        <Image src={image} w={"44"} h={"36"} />
        <HStack justifyContent={"space-between"}>
          <Button size={"lg"} bgColor={"linkedin.100"}>
            Price: ${price}
          </Button>
          <Button
            size={"lg"}
            bgColor={"linkedin.100"}
            onClick={() => dispatch(addToCart({
              title,
              image,
              price,
              id,
              qty:1
            }))}
          >
            Add
          </Button>
        </HStack>
      </Stack>
    </>
  );
};

export default Product;
