import { useDispatch, useSelector } from "react-redux";
import {
  HStack,
  Text,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Stack,
  Image,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { addToCart, reduceNumber } from "../redux/cartSlice";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);
 

  return (
    <>
      <HStack
        h={"20"}
        pl={"10"}
        pr={"10"}
        justifyContent={"space-between"}
        borderBottom={"2px solid black"}
      >
        <Text fontSize={"2xl"}>Shopping</Text>
        <HStack>
          <Text as={"button"} onClick={onOpen}>
            Cart : {items ? items.length : 0}
          </Text>
        </HStack>
      </HStack>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Orders !</DrawerHeader>
          <DrawerBody>
            {items.map((e) => {
              return (
                <Stack
                  gap={2}
                  border={"1px solid black"}
                  borderRadius={"3xl"}
                  mt={"3"}
                  p={"3"}
                  pb={"3"}
                  key={e.id}
                >
                  <Text noOfLines={1} textAlign={"center"}>
                    {e.title}
                  </Text>
                  <HStack justifyContent={"space-between"}>
                    <Image src={e.image} alt={e.title} w={"20"} h={"20"} />
                    <Stack gap={1} alignItems={"end"}>
                      <Button size={"md"} bgColor={"red.200"} fontSize={"md"}>
                        Price : ${e.price}
                      </Button>
                      <HStack gap={2}>
                        <NumberInput
                          step={1.0}
                          defaultValue={e.qty}
                          min={1}
                          max={10}
                          size={"sm"}
                          w={"16"}
                        >
                          <NumberInputField />
                        
                  
                          <NumberInputStepper>
                            <NumberIncrementStepper onClick={() => dispatch(addToCart(e))}  />
                            <NumberDecrementStepper onClick={()=>dispatch(reduceNumber(e))}  />
                          </NumberInputStepper>
                        </NumberInput>
                        <Text as={"button"}>
                          <DeleteIcon
                            boxSize={"6"}
                            color={"red.500"}
                            onClick={() => dispatch(removeFromCart(e))}
                          />
                        </Text>
                      </HStack>
                    </Stack>
                  </HStack>
                </Stack>
              );
            })}
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Sub Total : ${total}
            </Button>
            <Button colorScheme="blue">Proceed</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
