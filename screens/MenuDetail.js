import React from "react";
import {
  Box,
  Text,
  Heading,
  Image,
  Divider,
  ScrollView,
} from "native-base";
import { MainContainer } from "../components/containers/MainContainer";

export default class MenuDetailScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { route } = this.props;
    const data = route.params.data;

    return (
      <MainContainer>
          <ScrollView>
          <Box>
            <Image
              source={{ uri: data.image }}
              size="xl"
              w="100%"
              h={200}
              roundedBottomRight={40}
              alt="Image"
              shadow={2}
            />
          </Box>
          <Box m={4}>
            <Heading color={"tertiary.600"} mb={2}>
              {data.title}
            </Heading>
            <Text>{data.caption}</Text>
            <Divider mt={2} mb={5} />
            <Text
              fontSize={16}
              style={{ textAlign: "justify" }}
            >
              {data.description}
            </Text>
          </Box>
          </ScrollView>
        </MainContainer>
    );
  }
}