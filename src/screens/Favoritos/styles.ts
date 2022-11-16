import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    paddingTop: 60,
    paddingHorizontal: 30,
  },

  title: {
    color: "lightgrey",
    fontSize: 30,
    marginTop: 40,
    fontStyle: "normal",
  },

  button: {
    backgroundColor: "#000",
    padding: 15,
    alignItems: "center",
    marginTop: 40,
  },

  buttonText: {
    color: "#ffff",
    fontSize: 18,
  },

  image: {
    width: 30,
    height: 30,
    padding: 20,
  },
  Image2: {
    width: 100,
    height: 50,
  },

  topBar: {
    display: "flex",
    flexDirection: "row",
    marginRight: 0,
  },
  topBar1: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "flex-end",
    textAlign: "right",
    marginLeft: 60,
  },

  topBar2: {
    marginLeft: 60,
    textAlign: "right",
  },

  imagePost: {
    width: "100%",
    height: 200,
  },

  imagePost2: {
    width: "100%",
    height: 200,
    marginTop: 30,
  },
  input: {
    width: "90%",
    borderWidth: 0.5,
    padding: 10,
  },

  searchbar: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
  },

  text: {
    fontSize: 30,
    marginTop: 40,
  },
});
