import { Text, View, StyleSheet, FlatList } from "react-native";
import defaultStyles from "../styles/defaultStyles";
import { useState } from "react";
import ListItemSeparator from "@/components/ListItemSeparator";
import ListItem from "@/components/ListItem";
import { dataType } from "@/data/appData";
import { DATA } from "@/data/appData";
export default function Index() {
  const [selectedId, setSelectedId] = useState<string>("");

  //create a simple function to call when an item is selected
  //pass a parameter of the item that was clicked on
  const handleRowPress = (item: dataType) => {
    alert("Selected " + item.title);
    setSelectedId(item.id);
  };
  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>Insert Title Here</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <FlatList
            data={DATA}
            extraData={selectedId}
            ItemSeparatorComponent={() => <ListItemSeparator />}
            keyExtractor={(item: dataType) => item.id}
            renderItem={({ item }) => (
              <ListItem
                item={item}
                isSelected={item.id == selectedId}
                onPress={handleRowPress}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  },
  //styles for each row of the FlatList
});
