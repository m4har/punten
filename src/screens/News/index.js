import React from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import Axios from "axios";
import Loader from "../../components/Loader";
import { FS } from "../../utility/Font";
import { moderateScale, verticalScale } from "../../utility/Scale";
import Fade from "../../components/Fade";

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
  Loading() {
    if (this.state.isLoading === true) {
      return (
        <View
          style={{
            position: "absolute",
            height: "100%",
            flex: 1,
            justifyContent: "center"
            // alignItems: "center"
          }}
        >
          <Loader
            numberOfDots={4}
            animationDelay={400}
            style={{
              color: "#909090",
              fontSize: FS(25)
            }}
          />
        </View>
      );
    }
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {this.Loading()}
        <FlatList
          data={this.state.news}
          keyExtractor={(item, index) => index.toLocaleString()}
          renderItem={item => {
            return (
              <Fade>
                <TouchableOpacity
                  style={{
                    marginBottom: verticalScale(15),
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                    shadowColor: "#000",
                    shadowOffset: { height: 0, width: 0 },
                    backgroundColor: "#fff"
                  }}
                  onPress={() => this.props.navigation.navigate("DetailNews")}
                >
                  <View>
                    <Image
                      source={{ uri: item.item.urlToImage }}
                      style={{ height: moderateScale(150), width: "100%" }}
                      resizeMode="cover"
                    />
                  </View>
                  <View>
                    <Text style={{ fontSize: FS(3.5) }}>{item.item.title}</Text>
                  </View>
                </TouchableOpacity>
              </Fade>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}

export default News;
