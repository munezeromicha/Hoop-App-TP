import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Pressable,
  Image
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";

type UpgradeProps = {
  navigation: StackNavigationProp<any, 'UpgradeScreen'>
}

type Props = {
  value: boolean;
  onChange: (value: boolean) => void;
};

const Upgrade: React.FC<Props> = ({ value, onChange, navigation }) => {
  const [isSwiped, setIsSwiped] = useState(false);
  const translateX = new Animated.Value(0);

  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  const toggleCheck = () => {
    setChecked(!checked);
  };
  const toggleCheck1 = () => {
    setChecked(!checked);
  };
  const toggleCheck2 = () => {
    setChecked(!checked);
  };

  return (
    <View style={styles.container}>

<View style={styles.back}>
             <Pressable onPress={()=> navigation.navigate('Profile')}>
                 <Image source={require('../assets/Group4.png')} />
             </Pressable >
                     <Text style={styles.upgrade}>Upgrade</Text>
             </View>

             <View style={styles.text}>
                 <Text style={styles.text1}>
                     Get all the facilities {'\n'}
                     by upgrading your {'\n'}
                     account
                 </Text>
             </View>

             <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.middle}>
          <Text style={styles.pro}>Pro</Text>

          <View>
            <TouchableOpacity onPress={toggleCheck} style={styles.item}>
              <MaterialIcons
                name={checked ? "check-box" : "check-box-outline-blank"}
                size={24}
                color={checked ? "red" : "black"}
              />
              <Text style={[styles.label]}>All include</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCheck} style={styles.item}>
              <MaterialIcons
                name={checked ? "check-box" : "check-box-outline-blank"}
                size={24}
                color={checked ? "red" : "black"}
              />
              <Text style={[styles.label]}>Unlimited features</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCheck} style={styles.item}>
              <MaterialIcons
                name={checked ? "check-box" : "check-box-outline-blank"}
                size={24}
                color={checked ? "red" : "black"}
              />
              <Text style={[styles.label]}>Discounts every reservation</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCheck} style={styles.item}>
              <MaterialIcons
                name={checked ? "check-box" : "check-box-outline-blank"}
                size={24}
                color={checked ? "red" : "black"}
              />
              <Text style={[styles.label]}>All include</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCheck} style={styles.item}>
              <MaterialIcons
                name={checked ? "check-box" : "check-box-outline-blank"}
                size={24}
                color={checked ? "red" : "black"}
              />
              <Text style={[styles.label]}>All include</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCheck} style={styles.item}>
              <MaterialIcons
                name={checked ? "check-box" : "check-box-outline-blank"}
                size={24}
                color={checked ? "red" : "black"}
              />
              <Text style={[styles.label]}>All include</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.middle}>
          <Text style={styles.pro}>Pro</Text>

          <View>
            <TouchableOpacity onPress={toggleCheck} style={styles.item}>
              <MaterialIcons
                name={checked1 ? "check-box" : "check-box-outline-blank"}
                size={24}
                color={checked1 ? "red" : "black"}
              />
              <Text style={[styles.label]}>All include</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCheck} style={styles.item}>
              <MaterialIcons
                name={checked ? "check-box" : "check-box-outline-blank"}
                size={24}
                color={checked ? "red" : "black"}
              />
              <Text style={[styles.label]}>Unlimited features</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCheck} style={styles.item}>
              <MaterialIcons
                name={checked ? "check-box" : "check-box-outline-blank"}
                size={24}
                color={checked ? "red" : "black"}
              />
              <Text style={[styles.label]}>Discounts every reservation</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCheck} style={styles.item}>
              <MaterialIcons
                name={checked ? "check-box" : "check-box-outline-blank"}
                size={24}
                color={checked ? "red" : "black"}
              />
              <Text style={[styles.label]}>All include</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCheck} style={styles.item}>
              <MaterialIcons
                name={checked ? "check-box" : "check-box-outline-blank"}
                size={24}
                color={checked ? "red" : "black"}
              />
              <Text style={[styles.label]}>All include</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCheck} style={styles.item}>
              <MaterialIcons
                name={checked ? "check-box" : "check-box-outline-blank"}
                size={24}
                color={checked ? "red" : "black"}
              />
              <Text style={[styles.label]}>All include</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.middle}>
          <Text style={styles.pro}>Pro</Text>

          <View>
            <TouchableOpacity onPress={toggleCheck} style={styles.item}>
              <MaterialIcons
                name={checked ? "check-box" : "check-box-outline-blank"}
                size={24}
                color={checked ? "red" : "black"}
              />
              <Text style={[styles.label]}>All include</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCheck} style={styles.item}>
              <MaterialIcons
                name={checked ? "check-box" : "check-box-outline-blank"}
                size={24}
                color={checked ? "red" : "black"}
              />
              <Text style={[styles.label]}>Unlimited features</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCheck} style={styles.item}>
              <MaterialIcons
                name={checked ? "check-box" : "check-box-outline-blank"}
                size={24}
                color={checked ? "red" : "black"}
              />
              <Text style={[styles.label]}>Discounts every reservation</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCheck} style={styles.item}>
              <MaterialIcons
                name={checked ? "check-box" : "check-box-outline-blank"}
                size={24}
                color={checked ? "red" : "black"}
              />
              <Text style={[styles.label]}>All include</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCheck} style={styles.item}>
              <MaterialIcons
                name={checked ? "check-box" : "check-box-outline-blank"}
                size={24}
                color={checked ? "red" : "black"}
              />
              <Text style={[styles.label]}>All include</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCheck} style={styles.item}>
              <MaterialIcons
                name={checked ? "check-box" : "check-box-outline-blank"}
                size={24}
                color={checked ? "red" : "black"}
              />
              <Text style={[styles.label]}>All include</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.middle}>
          <Text style={styles.pro}>Pro</Text>

          <View>
            <TouchableOpacity onPress={toggleCheck} style={styles.item}>
              <MaterialIcons
                name={checked ? "check-box" : "check-box-outline-blank"}
                size={24}
                color={checked ? "red" : "black"}
              />
              <Text style={[styles.label]}>All include</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCheck} style={styles.item}>
              <MaterialIcons
                name={checked ? "check-box" : "check-box-outline-blank"}
                size={24}
                color={checked ? "red" : "black"}
              />
              <Text style={[styles.label]}>Unlimited features</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCheck} style={styles.item}>
              <MaterialIcons
                name={checked ? "check-box" : "check-box-outline-blank"}
                size={24}
                color={checked ? "red" : "black"}
              />
              <Text style={[styles.label]}>Discounts every reservation</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCheck} style={styles.item}>
              <MaterialIcons
                name={checked ? "check-box" : "check-box-outline-blank"}
                size={24}
                color={checked ? "red" : "black"}
              />
              <Text style={[styles.label]}>All include</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCheck} style={styles.item}>
              <MaterialIcons
                name={checked ? "check-box" : "check-box-outline-blank"}
                size={24}
                color={checked ? "red" : "black"}
              />
              <Text style={[styles.label]}>All include</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCheck} style={styles.item}>
              <MaterialIcons
                name={checked ? "check-box" : "check-box-outline-blank"}
                size={24}
                color={checked ? "red" : "black"}
              />
              <Text style={[styles.label]}>All include</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.middle}>
          <Text style={styles.pro}>Pro</Text>

          <View>
            <TouchableOpacity onPress={toggleCheck} style={styles.item}>
              <MaterialIcons
                name={checked ? "check-box" : "check-box-outline-blank"}
                size={24}
                color={checked ? "red" : "black"}
              />
              <Text style={[styles.label]}>All include</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCheck} style={styles.item}>
              <MaterialIcons
                name={checked ? "check-box" : "check-box-outline-blank"}
                size={24}
                color={checked ? "red" : "black"}
              />
              <Text style={[styles.label]}>Unlimited features</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCheck} style={styles.item}>
              <MaterialIcons
                name={checked ? "check-box" : "check-box-outline-blank"}
                size={24}
                color={checked ? "red" : "black"}
              />
              <Text style={[styles.label]}>Discounts every reservation</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCheck} style={styles.item}>
              <MaterialIcons
                name={checked ? "check-box" : "check-box-outline-blank"}
                size={24}
                color={checked ? "red" : "black"}
              />
              <Text style={[styles.label]}>All include</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCheck} style={styles.item}>
              <MaterialIcons
                name={checked ? "check-box" : "check-box-outline-blank"}
                size={24}
                color={checked ? "red" : "black"}
              />
              <Text style={[styles.label]}>All include</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCheck} style={styles.item}>
              <MaterialIcons
                name={checked ? "check-box" : "check-box-outline-blank"}
                size={24}
                color={checked ? "red" : "black"}
              />
              <Text style={[styles.label]}>All include</Text>
            </TouchableOpacity>
          </View>
        </View>


      </ScrollView>
             {/* </View> */}

      <Pressable style={styles.pay12} onPress={() => navigation.navigate('ChoosePlan')}>
        <Text style={styles.pay11}>Choose a Plan</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    width: "100%",
    height: 100,
    
  },
  scrollViewContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    padding: 0,
    margin: 0,
  },
  Main: {
    backgroundColor: "rgba(244, 244, 250, 1)",
    height: "100%",
    width: "100%",
  },
  back: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "20%",
    alignItems: "center",
    padding: 30,
  },
  upgrade: {
    fontSize: 20,
    fontWeight: "500",
    paddingLeft: 60,
    color: "#2D2D2D",
  },
  text: {
    height: "13%",
  },
  text1: {
    textAlign: "center",
    fontSize: 24,
  },
  middle: {
    alignItems: "center",
    backgroundColor: "#fff",
    height: "80%",
    width: "20%",
    alignSelf: "center",
    margin: 15,
    padding: 15,
    borderRadius: 20,
    gap: 23
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  pro: {
    fontSize: 20,
    padding: 20,
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
    color: "rgba(0, 0, 0, 1)",
  },
  checkedLabel: {
    textDecorationLine: "line-through",
  },
  pay12: {
    backgroundColor: "#130F26",
    width: "90%",
    height: "7%",
    alignSelf: "center",
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 30,
    justifyContent: "center",
  },
  pay11: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
});

export default Upgrade;