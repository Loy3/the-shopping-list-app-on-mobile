import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, TextInput, ImageBackground, ScrollView } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { Picker } from '@react-native-picker/picker';
import { addNewItem } from "../services/Service(Redux)/FirestoreStoreItem";
import closeBtn from "../assets/Icons/close.png";


const AddItemCom = ({ setaddItemStatus }) => {
  const dispatch = useDispatch();
  const [itemName, setItemName] = useState();
  const [itemQuantity, setItemQuantity] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [warningMsg, setWarningMsg] = useState("");
  const [warningMsgStatus, setWarningMsgStatus] = useState(false);


  function handleChange(type) {
    // setItemCategory(event.target.value)
    let color = "black";


    switch (type) {
      case "Beverages":
        color = "#38bb86";

        break;

      case "Bread/Bakery":
        color = "#b56d3e";
        break;

      case "Canned/Jarred Goods":
        color = "#40ccf7";
        break;

      case "Dairy":
        color = "#ffe405";
        break;

      case "Dry/Baking Goods":
        color = "#d46a50";
        break;

      case "Frozen Foods":
        color = "#8cc3fa";
        break;

      case "Meat":
        color = "#74041b";
        break;

      case "Produced":
        color = "#f26a07";
        break;

      case "Cleaning":
        color = "#058d3f";
        break;

      case "Paper Goods":
        color = "#beb8ea";
        break;

      case "Personal Care":
        color = "#7d920c";
        break;

      case "Other":
        color = "#ea9f26";
        break;
      default:
        color = "#000";
    }

    return color;

  }

  async function onSaveItem() {
    if (itemName !== undefined && itemQuantity !== undefined && selectedCategory !== undefined) {
      console.log("all is well");
      setWarningMsg("");
      setWarningMsgStatus(false);

      const item = {
        itemName: itemName,
        itemQuantity: itemQuantity,
        itemCategory: selectedCategory
    }

    dispatch(addNewItem(item))
    setaddItemStatus(false);
    } else {
      setWarningMsg("Fields shouldn't be left empty.");
      setWarningMsgStatus(true);
    }
    


  }

  return (
    <View style={{ width: "75%", height: "75%", }}>
      <Text style={{ color: handleChange(selectedCategory), fontSize: 30, fontWeight: "bold", marginBottom: 2 }}>Add Item</Text>
      <Text style={{ color: "black", fontSize: 18, marginBottom: 20 }}>Add a new item</Text>

      {warningMsgStatus ?
        <Text style={{ fontSize: 18, color: "red", marginBottom: -10 }}>{warningMsg}</Text>
        : null}
      <TextInput style={[styles.formInput, { borderColor: handleChange(selectedCategory) }]}
        onChangeText={text => setItemName(text)}
        value={itemName} placeholder="Item Name:" />

      <TextInput style={[styles.formInput, { borderColor: handleChange(selectedCategory) }]}
        onChangeText={text => setItemQuantity(text)}
        value={itemQuantity} placeholder={`Item Quantity:`} />
      <View style={[styles.formSelector, { borderColor: handleChange(selectedCategory) }]}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedCategory(itemValue)} style={{ width: "100%" }}>
          <Picker.Item label="Beverages" value="Beverages" />
          <Picker.Item label="Bread/Bakery" value="Bread/Bakery" />
          <Picker.Item label="Canned/Jarred Goods" value="Canned/Jarred Goods" />
          <Picker.Item label="Dairy" value="Dairy" />
          <Picker.Item label="Dry/Baking Goods" value="Dry/Baking Goods" />
          <Picker.Item label="Frozen Foods" value="Frozen Foods" />
          <Picker.Item label="Meat" value="Meat" />
          <Picker.Item label="Produced" value="Produced" />
          <Picker.Item label="Cleaning" value="Cleaning" />
          <Picker.Item label="Paper Goods" value="Paper Goods" />
          <Picker.Item label="Personal Care" value="Personal Care" />
          <Picker.Item label="Other" value="Other" />
        </Picker>

      </View>

      <TouchableOpacity style={{ width: "100%", height: 50, alignItems: "center", justifyContent: "center", backgroundColor: handleChange(selectedCategory), marginTop: 30 }} onPress={onSaveItem}>
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "whitesmoke" }}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddItemCom

const styles = StyleSheet.create({
  formInput: {
    width: "100%",
    height: 60,
    borderWidth: 3,

    padding: 10,
    marginTop: 20
  },
  formSelector: {
    width: "70%",
    height: 60,
    borderWidth: 3,

    padding: 5,
    marginTop: 20,
    justifyContent: "center"
  },
})