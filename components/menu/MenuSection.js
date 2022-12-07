import { FlatList } from "native-base";
import {
  Box,
  Image,
  Heading,
  HStack,
  Text,
  AspectRatio,
  Stack,
} from "native-base";
import { TouchableOpacity } from "react-native";

export const MenuSection = ({ navigation, data }) => {
  renderNewsItem = ({ item, index }) => {
    return (
      <Box alignItems="center">
        <TouchableOpacity
          onPress={() => navigation.navigate("MenuDetailScreen", { data: item })}
        >
          <Box
            bg="#fff"
            mx={4}
            mt={index == 0 ? 6 : 2}
            mb={4}
            px={4}
            py={4}
            shadow={2}
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
                <Image
                  source={{
                    uri: item.image,
                  }}
                  alt="image"
                  borderRadius={16}
                />
              </AspectRatio>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="sm">
                  {item.title}
                </Heading>
              </Stack>
              <HStack
                alignItems="center"
                space={4}
                justifyContent="space-between"
              >
                <HStack alignItems="center">
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.200",
                    }}
                    fontWeight="400"
                  >
                    { item.caption }
                  </Text>
                </HStack>
              </HStack>
            </Stack>
          </Box>
        </TouchableOpacity>
      </Box>
    );
  };

  return (
    <FlatList
        data={data}
        renderItem={renderNewsItem}
        keyExtractor={({ id }) => id.toString()}
        showsVerticalScrollIndicator={false}
      />
  );
};
