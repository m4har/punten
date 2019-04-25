import React from "react";
import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import Axios from "axios";

class News extends React.Component {
  constructor() {
    super();
    this.state = {
      news: "",
      isLoading: true
    };
    this.getNews();
  }
  async getNews() {
    try {
      result = await Axios.get(
        "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=c563187244ad414480794afdff133ae3"
      );
      console.log(result);
      this.setState({ news: result.data.articles, isLoading: false });
    } catch (error) {
      console.log("error", error);
      this.setState({ isLoading: false });
    }
  }
  render() {
    return (
      <View style={{ flex: 1, margin: 10 }}>
        <Text>News</Text>
        <FlatList
          data={this.state.news}
          keyExtractor={(item, index) => index.toLocaleString()}
          renderItem={item => {
            return (
              <TouchableOpacity
                style={{
                  marginBottom: 20,
                  borderBottomWidth: 1,
                  paddingBottom: 10
                }}
                onPress={() => this.props.navigation.navigate("DetailNews")}
              >
                <View>
                  <Image
                    source={{ uri: item.item.urlToImage }}
                    style={{ height: 100, width: "100%" }}
                    resizeMode="cover"
                  />
                </View>
                <View>
                  <Text>{item.item.title}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

export default News;
