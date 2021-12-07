import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import SearchIcon from "react-native-vector-icons/AntDesign";
import CircleIcon from "react-native-vector-icons/Entypo";
import CheckcircleIcon from "react-native-vector-icons/AntDesign";

export default function App() {
  const users = [
    {
      id: 1,
      name: "Alexandre Berdo",
      img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      selected: false,
    },
    {
      id: 2,
      name: "Frederic Mitse",
      img: "https://images.unsplash.com/photo-1541576980233-97577392db9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80",
      selected: false,
    },
    {
      id: 3,
      name: "Kevin Landon",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      selected: false,
    },
    {
      id: 4,
      name: "Natasha Miles",
      img: "https://images.unsplash.com/photo-1542157585-ef20bfcce579?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
      selected: false,
    },
    {
      id: 5,
      name: "Abdel Kader",
      img: "https://images.unsplash.com/photo-1541911087797-f89237bd95d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
      selected: false,
    },
    {
      id: 6,
      name: "Zoe Lane",
      img: "https://images.unsplash.com/photo-1534119768988-c496213eff76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      selected: false,
    },
    {
      id: 7,
      name: "Franck Dossey",
      img: "https://images.unsplash.com/photo-1505816750888-04668612f2ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      selected: false,
    },
    {
      id: 8,
      name: "Hugo Balesh",
      img: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      selected: false,
    },
    {
      id: 9,
      name: "Lydie Gleck",
      img: "https://images.unsplash.com/photo-1555703473-5601538f3fd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      selected: false,
    },
    {
      id: 10,
      name: "Lou Dambielle",
      img: "https://images.unsplash.com/photo-1502877828070-33b167ad6860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      selected: false,
    },
    {
      id: 11,
      name: "Faty Ontoso",
      img: "https://images.unsplash.com/photo-1526382925646-27b5eb86796e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      selected: false,
    },
    {
      id: 12,
      name: "Gregory Ivba",
      img: "https://images.unsplash.com/photo-1535931737580-a99567967ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      selected: false,
    },
    {
      id: 13,
      name: "Claire Tronety",
      img: "https://images.unsplash.com/photo-1563956261547-865a33406922?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2ZpbGV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      selected: false,
    },
    {
      id: 14,
      name: "Céline Fourbes",
      img: "https://images.unsplash.com/flagged/photo-1556151994-b611e5ab3675?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHByb2ZpbGV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      selected: false,
    },
    {
      id: 15,
      name: "Mickael Pleti",
      img: "https://images.unsplash.com/photo-1559582930-bb01987cf4dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb2ZpbGV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      selected: false,
    },
    {
      id: 16,
      name: "Viviane Bront",
      img: "https://images.unsplash.com/photo-1485290334039-a3c69043e517?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHByb2ZpbGV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      selected: false,
    },
  ];

  const [usersSelectedInArray, setUsersSelectedInArray] = useState([]);

  const randomColor = () => {
    let red = random(255, 1);
    let green = random(255, 1);
    let blue = random(255, 1);
    return `borderColor: rgb(${red},${green},${blue}),`;
  };

  const random = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const clear = () => {
    setUsersSelectedInArray([])
  }

  const addUserToArray = (user) => {
    if (usersSelectedInArray.length === 0) {
      const temp = [];
      temp.push(user);
      temp.selected=true
      console.log("temp",temp)
      setUsersSelectedInArray((usersSelectedInArray) =>
        usersSelectedInArray.concat(temp)
      );
    } else {
      const check = usersSelectedInArray.findIndex(
        (element) => element.id === user.id
      );
      if (check === -1) {
        const temp = [];
        temp.push(user);
        temp.selected=true
        setUsersSelectedInArray((usersSelectedInArray) =>
          usersSelectedInArray.concat(temp)
        );
      } else {
        const temp = [...usersSelectedInArray];
        temp.splice(check, 1);
        setUsersSelectedInArray(temp);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <LinearGradient
          colors={["rgb(229,189,246)", "rgb(230,230,230)"]}
          style={styles.header}
        />
        <View style={styles.researchBar}>
          <SearchIcon size={30} name={"search1"} style={styles.icon} />
          <Text style={styles.text}>Envoyer à ...</Text>
        </View>
      </View>

      <View style={styles.main}>
        <View style={styles.title}>
          <Text style={styles.text}>Sélectionner tout mes Amis</Text>
          <CircleIcon size={30} name={"circle"} style={styles.icon} />
          <Button style={styles.reset}
            onPress={clear}
            title="Reset"
            color="#999"
          />
        </View>
        <View style={styles.pictureRow}>
          {users.map((user) => {
            return (
              <View style={styles.pictureBox} key={user.id}>
                <TouchableOpacity
                  onPress={() => {
                    addUserToArray(user);
                  }}
                >
                  <Image
                    style={[styles.img, { borderColor: randomColor() }]}
                    source={{
                      uri: user.img,
                    }}
                  />
                  {usersSelectedInArray.filter(userInArray => userInArray.name === user.name).map(filteredUser => (
                    <CheckcircleIcon key={user.id}
                      size={20}
                      name={"checkcircle"}
                      style={styles.icon2}
                    />
                  ))}
                  <Text style={styles.imgTxt}>{user.name}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
        <View style={styles.btnBox}>
          {usersSelectedInArray.length > 0 ? (
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                console.log("SUIVANT");
              }}
            >
              <Text style={styles.buttonText}>Suivant</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.btn2}
              onPress={() => {
                console.log("SUIVANT");
              }}
            >
              <Text style={styles.buttonText}>Suivant</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.selectBox}>
          {usersSelectedInArray.map((userSelected) => {
            return (
              <Text style={styles.selectedText} key={userSelected.id}>
                {userSelected.name}
              </Text>
            );
          })}
          
        </View>
        
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
  },
  header: {
    width: wp("100%"),
    height: 80,
  },
  researchBar: {
    width: wp("90%"),
    height: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgb(209,209,209)",
    borderRadius: 10,
    position: "absolute",
    top: 40,
  },
  icon: {
    color: "rgb(255, 145, 180)",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  icon2: {
    color: "rgb(255, 145, 180)",
    textAlign: "center",
    paddingLeft: 10,
    position: "absolute",
    top: 35,
    left: 30,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  main: {
    marginTop: 20,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 15,
    marginBottom: 15,
  },
  pictureRow: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  pictureBox: {
    width: wp("22%"),
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 2.5,
  },
  imgTxt: {
    fontSize: 10,
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 5,
  },
  btnBox: {
    marginTop: 10,
    display: "flex",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "pink",
    borderRadius: 50,
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  btn2: {
    backgroundColor: "#999",
    borderRadius: 50,
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    textTransform: "uppercase",
    color: "white",
    fontWeight: "bold",
  },
  selectBox: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: wp("100%"),
    height: 150,
    backgroundColor: "rgb(217,173,225)",
    justifyContent: "center",
  },
  selectedText: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  reset: {
    borderRadius: 20,
  }
});
