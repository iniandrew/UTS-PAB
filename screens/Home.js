import React from "react";
import {
  Box,
  AspectRatio,
  Image,
  Center,
  Stack,
  Heading,
  Text,
  HStack,
  Button,
} from "native-base";

import deonImg from "../assets/deon.jpg";
import logoIS from "../assets/logoIS.png";
import { MainContainer } from "../components/containers/MainContainer";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;

    return (
      <MainContainer>
        <Box alignItems="center" padding={8}>
          <Box
            width="100%"
            overflow="hidden"
            alignItems="center"
            marginBottom={8}
          >
            <AspectRatio w={100} h={50} ratio={16 / 6}>
              <Image source={logoIS} alt="Deon" size={["100%", "100%"]} />
            </AspectRatio>
          </Box>
          <Box
            maxW="80"
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700",
            }}
            _web={{
              shadow: 2,
              borderWidth: 0,
            }}
            _light={{
              backgroundColor: "gray.50",
            }}
          >
            <Box>
              <AspectRatio w="100%" ratio={16 / 9}>
                <Image source={deonImg} alt="Deon" size={["100%", "100%"]} />
              </AspectRatio>
              <Center
                bg="emerald.500"
                _dark={{
                  bg: "emerald.400",
                }}
                _text={{
                  color: "emerald.50",
                  fontWeight: "700",
                  fontSize: "xs",
                }}
                position="absolute"
                bottom="0"
                px="3"
                py="1.5"
              >
                IS0306
              </Center>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  Chrisdion Andrew
                </Heading>
                <Text
                  fontSize="xs"
                  _light={{
                    color: "emerald.500",
                  }}
                  _dark={{
                    color: "emerald.400",
                  }}
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1"
                >
                  1204200046
                </Text>
              </Stack>
              <Text fontWeight="400">
                Hi, I'm Chrisdion Andrew. 21 years old. I'm a student at
                Institut Teknologi Telkom Surabaya. I'm majoring in Information
                System.
              </Text>
              <HStack
                alignItems="center"
                space={4}
                justifyContent="space-between"
              >
                <HStack alignItems="center">
                  <Text
                    color="emerald.600"
                    _dark={{
                      color: "emerald.200",
                    }}
                    fontWeight="400"
                  >
                    "Better to ask and be a fool once than never to ask and be a
                    fool 4ever."
                  </Text>
                </HStack>
              </HStack>
            </Stack>
          </Box>

          <Box marginTop={8}>
            <Button
              size="md"
              borderRadius="full"
              variant="solid"
              backgroundColor="emerald.500"
              onPress={() => navigation.navigate("Menu")}
            >
              <Text color={"white"} paddingX={8} fontWeight={700}>
                Lanjut Ke SIKAT
              </Text>
            </Button>
          </Box>
        </Box>
      </MainContainer>
    );
  }
}
