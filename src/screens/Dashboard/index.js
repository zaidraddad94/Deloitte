import React, { useState, useEffect } from "react";
import { Image, View, Text, FlatList, RefreshControl } from "react-native";
import { Queries } from "../../ApiServes/Queries";
import InputWithIcons from "../../components/InputWithIcons";
import ListHeaderComponent from "../../components/ListHeaderComponent";
import ListItem from "../../components/ListItem";
import Loading from "../../components/Loading";
import { strings } from "../../localization";
import styles from "./style";

export default function Dashboard() {
  const [hasNext, setHasNext] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [word, setWord] = useState("");
  const [thereIsCallInProgress, setThereIsCallInProgress] =
    React.useState(false);

  const getData = async (more = false) => {
    if (more) {
      if (hasNext) {
        if (!thereIsCallInProgress) {
          setThereIsCallInProgress(true);
          let response = await Queries.GetAllCharacters({
            page: pageNumber,
            name: word,
          });
          setData([...data, ...response?.data?.results]);
          setPageNumber(pageNumber + 1);
          setHasNext(!!response?.data?.info?.next ?? false);
          setThereIsCallInProgress(false);
        }
      }
    } else {
      setThereIsCallInProgress(true);
      let response = await Queries.GetAllCharacters({ page: 1, name: word });
      setPageNumber(2);
      setTotalCount(response?.data?.info?.count ?? 0);
      setHasNext(!!response?.data?.info?.next ?? false);
      setData(response?.data?.results ?? []);
      setThereIsCallInProgress(false);
    }
  };

  useEffect(() => {
    getData(false);
  }, []);

  useEffect(() => {
    getData(false);
  }, [word]);

  return (
    <View style={styles.container}>
      <View style={styles.searchInput}>
        <InputWithIcons
          style={{
            borderRadius: 30,
            width: "90%",
            height: 50,
            marginBottom: 0,
            alignItems: "center",
            paddingHorizontal: 15,
          }}
          icon1={"search"}
          icon2={word.length ? "delete" : null}
          icon2OnPress={() => setWord("")}
          value={word}
          onChangeText={(word) => setWord(word.trim())}
          placeholder={strings.Dashboard.Search}
          secureTextEntry={false}
          error={false}
        />
      </View>
      {data.length ? (
        <FlatList
          data={data}
          keyExtractor={(item, i) => item.id}
          onEndReached={() => getData(true)}
          stickyHeaderIndices={[0]}
          onEndReachedThreshold={0.4}
          ListHeaderComponent={() => (
            <ListHeaderComponent all={totalCount} sup={data.length} />
          )}
          ListFooterComponent={thereIsCallInProgress ? <Loading /> : null}
          renderItem={({ item }) => (
            <ListItem
              image={item.image}
              name={item.name}
              created={item.created}
              species={item.species}
            />
          )}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={() => {
                getData(false);
              }}
            />
          }
        />
      ) : thereIsCallInProgress ? (
        <View style={styles.center}>
          <Loading />
        </View>
      ) : (
        <View style={styles.center}>
          <Text>{strings.Dashboard.DataFound}</Text>
        </View>
      )}
    </View>
  );
}
