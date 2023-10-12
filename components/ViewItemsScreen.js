import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, TextInput, ImageBackground, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import { fetchItems, deleteAnItem } from "../services/Service(Redux)/FirestoreGetItems";
import { useDispatch, useSelector } from "react-redux";
// import { updateAnItem } from "../services/Service(Redux)/FirestoreGetItems";
import { fetchItems, deleteAnItem, updateAnItem } from "../services/Service(Redux)/FirestoreItems";
// import {  useSelector } from "react-redux";
import { Picker } from '@react-native-picker/picker';

//import images
import allI from "../assets/Icons/all.png";
import bev from "../assets/Icons/Beverages.png";
import breadB from "../assets/Icons/Bakery.png";
import cannedP from "../assets/Icons/Canned.png";
import dairyP from "../assets/Icons/Dairy.png";
import dry_baking from "../assets/Icons/dry.png";
import frozenF from "../assets/Icons/Frozen.png";
import meat from "../assets/Icons/Meat2.png";
import produecedP from "../assets/Icons/fruits.png";
import cleaningP from "../assets/Icons/Cleaners.png";
import paperG from "../assets/Icons/paper.png";
import personal_care from "../assets/Icons/personal.png";
import otherG from "../assets/Icons/Other.png";

import editItem from "../assets/Icons/edit.png";
import deleteItm from "../assets/Icons/delete.png";
import addItm from "../assets/Icons/add.png";
import bgImg from "../assets/Images/bg.jpg";
import closeBtn from "../assets/Icons/close.png";
import AddItemCom from './AddItemCom';
// import AddNewItem from "./AddNewItem";

const ViewItemsScreen = () => {

    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.items)
    // console.log(items);
    const [itemName, setItemName] = useState();
    const [itemQuantity, setItemQuantity] = useState();
    const [itemCategory, setItemCategory] = useState();
    const [selectedCategory, setSelectedCategory] = useState();
    const [displayCatgory, setDisplayCatgory] = useState([]);
    const [displayCatgoryStatus, setDisplayCatgoryStatus] = useState(false);
    const [addItemStatus, setaddItemStatus] = useState(false);
    const [updateItem, setUpdateItem] = useState({
        id: "",
        itemName: "",
        itemQuantity: "",
        itemCategory: ""
    });

    const [updateItemStatus, setUpdateItemStatus] = useState(false)
    const [title, setTitle] = useState("");

    // useEffect(() => {
    //     dispatch(fetchItems())
    // }, [dispatch])

    const categories = [
        {
            name: "All",
            img: allI,
            description: "Coffee/tea, juice, soda.",
            color1: "white",
            color2: "white"
        },
        {
            name: "Beverages",
            img: bev,
            description: "Coffee/tea, juice, soda.",
            color1: "rgba(255,255,255,1)",
            color2: "rgba(170,235,185,1)"
        },
        {
            name: "Bread/Bakery",
            img: breadB,
            description: "Sandwich loaves, dinner rolls, tortillas, bagels",
            color1: "rgba(255,255,255,1)",
            color2: "rgba(248,160,103,1)"
        },
        {
            name: "Canned/Jarred Goods",
            img: cannedP,
            description: "Vegetables, spaghetti sauce, ketchup",
            color1: "rgba(255,255,255,1)",
            color2: "rgba(134,223,250,1)"
        },
        {
            name: "Dairy",
            img: dairyP,
            description: "Cheeses, eggs, milk, yogurt, butter",
            color1: "rgba(255,255,255,1)",
            color2: "rgba(255,245,161,1)"
        },
        {
            name: "Dry/Baking Goods",
            img: dry_baking,
            description: "Cereals, flour, sugar, pasta, mixes",
            color1: "rgba(255,255,255,1)",
            color2: "rgba(233,169,153,1)"
        },
        {
            name: "Frozen Foods",
            img: frozenF,
            description: "Waffles, frozen vegetables, individual meals, ice cream",
            color1: "rgba(255,255,255,1)",
            color2: "rgba(164,198,231,1)"
        },
        {
            name: "Meat",
            img: meat,
            description: "Chicken meat, poultry, beef, pork, lamp",
            color1: "rgba(255,255,255,1)",
            color2: "rgba(255,101,121,1)"
        },
        {
            name: "Produced",
            img: produecedP,
            description: "Fruits, vegetables",
            color1: "rgba(255,255,255,1)",
            color2: "rgba(255,164,98,1)"
        },
        {
            name: "Cleaning",
            img: cleaningP,
            description: "All - purpose, laundry detergent, dishwashing liquid/detergent",
            color1: "rgba(255,255,255,1)",
            color2: "rgba(108,255,216,1)"
        },
        {
            name: "Paper Goods",
            img: paperG,
            description: "Paper towels, toilet paper, aluminum foil, sandwich bags",
            color1: "rgba(255,255,255,1)",
            color2: "rgba(222,219,238,1)"
        },
        {
            name: "Personal Care",
            img: personal_care,
            description: "shampoo, soap, hand soap, shaving cream",
            color1: "rgba(255,255,255,1)",
            color2: "rgba(207,223,122,1)"
        },
        {
            name: "Other",
            img: otherG,
            description: "baby items, pet items, batteries, greeting cards",
            color1: "rgba(255,255,255,1)",
            color2: "rgba(255,191,88,1)"
        },

    ]

    function handleColor(type) {
        let color = null;
        switch (type) {
            case "Beverages":
                color = ["rgba(255,255,255,1)", "rgba(170,235,185,1)"];
                break;

            case "Bread/Bakery":
                color = ["rgba(255,255,255,1)", "rgba(248,160,103,1) 100%)"];
                break;

            case "Canned/Jarred Goods":
                color = ["rgba(255,255,255,1)", "rgba(134,223,250,1) 100%)"];
                break;

            case "Dairy":
                color = ["rgba(255,255,255,1)", "rgba(255,245,161,1) 100%)"];
                break;

            case "Dry/Baking Goods":
                color = ["rgba(255,255,255,1)", "rgba(233,169,153,1) 100%)"];
                break;

            case "Frozen Foods":
                color = ["rgba(255,255,255,1)", "rgba(164,198,231,1) 100%)"];
                break;

            case "Meat":
                color = ["rgba(255,255,255,1)", "rgba(255,101,121,1) 100%)"];
                break;

            case "Produced":
                color = ["rgba(255,255,255,1)", "rgba(255,164,98,1) 100%)"];
                break;

            case "Cleaning":
                color = ["rgba(255,255,255,1)", "rgba(108,255,216,1) 100%)"];
                break;

            case "Paper Goods":
                color = ["rgba(255,255,255,1)", "rgba(222,219,238,1) 100%)"];
                break;

            case "Personal Care":
                color = ["rgba(255,255,255,1)", "rgba(207,223,122,1) 100%)"];
                break;

            case "Other":
                color = ["rgba(255,255,255,1)", "rgba(255,191,88,1) 100%)"];
                break;
            default:
                color = ["white", "whitesmoke"];
        }

        return color;

    }

    function handleImg(image) {
        let rtnImg = ""
        switch (image) {
            case "Beverages":
                rtnImg = bev;
                break;

            case "Bread/Bakery":
                rtnImg = breadB;
                break;

            case "Canned/Jarred Goods":
                rtnImg = cannedP;
                break;

            case "Dairy":
                rtnImg = dairyP;
                break;

            case "Dry/Baking Goods":
                rtnImg = dry_baking;
                break;

            case "Frozen Foods":
                rtnImg = frozenF;
                break;

            case "Meat":
                rtnImg = meat;
                break;

            case "Produced":
                rtnImg = produecedP;
                break;

            case "Cleaning":
                rtnImg = cleaningP;
                break;

            case "Paper Goods":
                rtnImg = paperG;
                break;

            case "Personal Care":
                rtnImg = personal_care;
                break;

            case "Other":
                rtnImg = otherG;
                break;
            default:
                rtnImg = allI;
        }

        return rtnImg;

    }

    function handleHeadingColor(type) {
        let color = "";
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

    function handleCategories(type) {
        setDisplayCatgoryStatus(true);
        let myItems = [];

        myItems = items.reduce((acc, obj) => {
            const splitCategory = obj.itemCategory.split(/\s|\//)
            const cate = splitCategory[0];
            if (!acc[cate]) {
                acc[cate] = [obj];
            } else {
                acc[cate].push(obj);
            }
            return acc;
        }, {});

        switch (type) {
            case "Beverages":

                setTitle("Beverages");
                setDisplayCatgory(myItems.Beverages);
                break;

            case "Bread/Bakery":
                setTitle("Bread/Bakery");
                setDisplayCatgory(myItems.Bread);
                break;

            case "Canned/Jarred Goods":
                setTitle("Canned/Jarred Goods");
                setDisplayCatgory(myItems.Canned);
                break;

            case "Dairy":
                setTitle("Dairy");
                setDisplayCatgory(myItems.Dairy);
                break;

            case "Dry/Baking Goods":
                setTitle("Dry/Baking Goods");
                setDisplayCatgory(myItems.Dry);
                break;

            case "Frozen Foods":
                setTitle("Frozen Foods");
                setDisplayCatgory(myItems.Frozen);
                break;

            case "Meat":
                setTitle("Meat");
                setDisplayCatgory(myItems.Meat);
                break;

            case "Produced":
                setTitle("Produced");
                setDisplayCatgory(myItems.Produced);
                break;

            case "Cleaning":
                setTitle("Cleaning");
                setDisplayCatgory(myItems.Cleaning);
                break;

            case "Paper Goods":
                setTitle("Paper Goods");
                setDisplayCatgory(myItems.Paper);
                break;

            case "Personal Care":
                setTitle("Personal Care");
                setDisplayCatgory(myItems.Personal);
                break;

            case "Other":
                setTitle("Other");
                setDisplayCatgory(myItems.Other);
                break;
            default:
                setDisplayCatgoryStatus(false);
        }
    }

    function update(item) {
        setUpdateItemStatus(true);
        setUpdateItem({
            id: item.id,
            itemName: item.itemName,
            itemQuantity: item.itemQuantity,
            itemCategory: item.itemCategory
        })
    }
    function openAddForm() {
        setaddItemStatus(true);
    }
    function closeAddForm() {
        setaddItemStatus(false);
    }

    function closeForm() {
        setUpdateItemStatus(false);
    }

    async function deleteItem(item) {
        await dispatch(deleteAnItem(item.id)).then(() => {
            dispatch(fetchItems());
        })
        // console.log(item)
    }


    async function updateTheItem() {
        var itemNewName = "";
        var itemNewQuantity = "";
        var itemNewCategory = "";

        if (itemName === undefined) {
            itemNewName = updateItem.itemName;
        } else {
            itemNewName = itemName;
        }

        if (itemQuantity === undefined) {
            itemNewQuantity = updateItem.itemQuantity;
        } else {
            itemNewQuantity = itemQuantity;
        }

        if (selectedCategory === undefined) {
            itemNewCategory = updateItem.itemCategory;
        } else {
            itemNewCategory = selectedCategory;
        }

        console.log(itemNewName, itemNewQuantity, itemNewCategory);
        const itemToUpdate = {
            id: updateItem.id,
            itemName: itemNewName,
            itemQuantity: itemNewQuantity,
            itemCategory: itemNewCategory
        }
        await dispatch(updateAnItem(itemToUpdate)).then(() => {
            setUpdateItemStatus(false);
            dispatch(fetchItems());
        })

    }

    if (!items) {
        return (
            <>
                <View style={styles.loadingScreen}>
                    <Text style={{ fontSize: 18, color: "#7C9070", fontWeight: "bold" }}>Loading...</Text>
                </View>
            </>
        )
    }

    return (
        <View style={styles.container}>


            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={styles.sideNavCont}>
                    <ScrollView scrollEnabled={true} >
                        <>
                            <View >
                                <View style={styles.sideNavWrapper}>
                                    {/* <Text>Hello</Text> */}
                                    <ImageBackground source={bgImg} style={styles.sideNavHead}>
                                        <Text style={styles.sideNavHeadTxt}>Ca</Text>
                                    </ImageBackground>

                                    <View style={styles.sideNavBtnCont}>
                                        {categories.map((cat, index) => (
                                            <TouchableOpacity style={styles.sideNavBtn} key={index} onPress={() => handleCategories(cat.name)}>
                                                <LinearGradient
                                                    // Button Linear Gradient
                                                    colors={[cat.color1, cat.color2]}
                                                    style={styles.sideNavBtnBg}>
                                                    <Image source={cat.img} style={styles.sideNavBtnImg} />
                                                </LinearGradient>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>
                            </View>
                        </>
                    </ScrollView>
                </View>

                <View style={{ width: "100%" }}>
                    <View style={{ width: "100%", height: 150, marginTop: 35 }}>

                        <ImageBackground source={bgImg} style={{ width: "91%", height: "100%" }}>
                            <View style={{ width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.5)" }} />
                            <TouchableOpacity style={{ position: "absolute", zIndex: 10, top: 20, right: 50, height: 50, width: 50, zIndex: 99 }}>
                                <Image source={addItm} style={{ width: "100%", height: "100%" }} />
                            </TouchableOpacity>
                            <Text style={{ position: "absolute", zIndex: 10, bottom: 20, left: 20, fontSize: 30, fontWeight: "bold", color: "whitesmoke" }}>My Shopping List</Text>

                        </ImageBackground>

                    </View>
                    <ScrollView scrollEnabled={true} >
                        <>
                            {/* {!displayCatgoryStatus ?
                                <View>

                                    <View style={{ margin: 10 }}>
                                        <Text style={[styles.sideNavHeadTxt, { color: "black", fontSize: 33 }]}>Items</Text>
                                        <Text>List of all items.</Text>
                                    </View>

                                    <View style={{ width: "80%", marginBottom: 50 }}>
                                        {items.map((item, index) => (
                                            <View style={{ width: "96%", height: 180, marginHorizontal: "3%", marginTop: 35 }} key={index}>
                                                <LinearGradient
                                                    // Button Linear Gradient
                                                    colors={handleColor(item.itemCategory ? item.itemCategory : "Beverages")}
                                                    // style={[styles.sideNavBtnBg, { borderRadius: 15 }]}>
                                                    style={[styles.sideNavBtnBg, { borderRadius: 5 }]}>
                                                    <Image source={handleImg(item.itemCategory ? item.itemCategory : "Beverages")} style={{ width: 55, height: 55, position: "absolute", top: -23, left: 20 }} />

                                                    <View style={{ width: "90%", height: "100%", justifyContent: "center" }}>
                                                        <View style={{ flexDirection: "row" }}>
                                                            <Text style={[{ fontSize: 17, fontWeight: "bold" }, { color: handleHeadingColor(item.itemCategory) }]}>Item: </Text>
                                                            <Text style={{ fontSize: 17 }}>{item.itemName ? item.itemName : "Item Name"}</Text>
                                                        </View>

                                                        <View style={{ flexDirection: "row" }}>
                                                            <Text style={[{ fontSize: 17, fontWeight: "bold" }, { color: handleHeadingColor(item.itemCategory) }]}>Category: </Text>
                                                            <Text style={{ fontSize: 17 }}>{item.itemCategory ? item.itemCategory : "Item Category"}</Text>
                                                        </View>

                                                        <View style={{ flexDirection: "row" }}>
                                                            <Text style={[{ fontSize: 17, fontWeight: "bold" }, { color: handleHeadingColor(item.itemCategory) }]}>Quantity: </Text>
                                                            <Text style={{ fontSize: 17 }}>{item.itemQuantity ? item.itemQuantity : "Item Quantity"}</Text>
                                                        </View>
                                                    </View>

                                                    <View style={{ flexDirection: "row", position: "absolute", top: 20, right: 10 }}>
                                                        <TouchableOpacity onPress={() => update(item)} style={{ width: 40, height: 40, justifyContent: "center", alignItems: "center" }}>
                                                            <Image source={editItem} style={{ width: 35, height: 35 }} />
                                                        </TouchableOpacity>
                                                        <TouchableOpacity onPress={() => deleteItem(item)} style={{ width: 40, height: 40, justifyContent: "center", alignItems: "center" }}>
                                                            <Image source={deleteItm} style={{ width: 35, height: 35, marginLeft: 10 }} />
                                                        </TouchableOpacity>
                                                    </View>

                                                </LinearGradient>

                                            </View>
                                        ))}
                                    </View>
                                </View>
                                :
                                <View>

                                    <View style={{ margin: 10 }}>
                                        <Text style={[styles.sideNavHeadTxt, { color: "black", fontSize: 33 }]}>{title}</Text>
                                        <Text>List of {title} items.</Text>
                                    </View>

                                    <View style={{ width: "80%", marginBottom: 50 }}>
                                        {displayCatgory.map((item, index) => (
                                            <View style={{ width: "96%", height: 180, marginHorizontal: "3%", marginTop: 35 }} key={index}>
                                                <LinearGradient
                                                    // Button Linear Gradient
                                                    colors={handleColor(item.itemCategory ? item.itemCategory : "Beverages")}
                                                    // style={[styles.sideNavBtnBg, { borderRadius: 15 }]}>
                                                    style={[styles.sideNavBtnBg, { borderRadius: 5 }]}>
                                                    <Image source={handleImg(item.itemCategory ? item.itemCategory : "Beverages")} style={{ width: 55, height: 55, position: "absolute", top: -23, left: 20 }} />

                                                    <View style={{ width: "90%", height: "100%", justifyContent: "center" }}>
                                                        <View style={{ flexDirection: "row" }}>
                                                            <Text style={[{ fontSize: 17, fontWeight: "bold" }, { color: handleHeadingColor(item.itemCategory) }]}>Item: </Text>
                                                            <Text style={{ fontSize: 17 }}>{item.itemName ? item.itemName : "Item Name"}</Text>
                                                        </View>

                                                        <View style={{ flexDirection: "row" }}>
                                                            <Text style={[{ fontSize: 17, fontWeight: "bold" }, { color: handleHeadingColor(item.itemCategory) }]}>Category: </Text>
                                                            <Text style={{ fontSize: 17 }}>{item.itemCategory ? item.itemCategory : "Item Category"}</Text>
                                                        </View>

                                                        <View style={{ flexDirection: "row" }}>
                                                            <Text style={[{ fontSize: 17, fontWeight: "bold" }, { color: handleHeadingColor(item.itemCategory) }]}>Quantity: </Text>
                                                            <Text style={{ fontSize: 17 }}>{item.itemQuantity ? item.itemQuantity : "Item Quantity"}</Text>
                                                        </View>
                                                    </View>

                                                    <View style={{ flexDirection: "row", position: "absolute", top: 20, right: 10 }}>
                                                        <TouchableOpacity onPress={() => update(item)} style={{ width: 40, height: 40, justifyContent: "center", alignItems: "center" }}>
                                                            <Image source={editItem} style={{ width: 35, height: 35 }} />
                                                        </TouchableOpacity>
                                                        <TouchableOpacity onPress={() => deleteItem(item)} style={{ width: 40, height: 40, justifyContent: "center", alignItems: "center" }}>
                                                            <Image source={deleteItm} style={{ width: 35, height: 35, marginLeft: 10 }} />
                                                        </TouchableOpacity>
                                                    </View>

                                                </LinearGradient>

                                            </View>
                                        ))}
                                    </View>
                                </View>
                            } */}
                        </>
                    </ScrollView>
                </View>
            </View>

            {updateItemStatus ?
                <View style={styles.popUpCont}>
                    <View style={styles.popUpBox}>
                        <TouchableOpacity style={{ width: 50, height: 50, position: "absolute", top: 20, right: 20, justifyContent: "center", alignItems: "center" }} onPress={closeForm}>
                            <Image source={closeBtn} style={{ width: 35, height: 35 }} />
                        </TouchableOpacity>
                        <View style={{ width: "75%", height: "75%", }}>
                            <Text style={{ color: handleHeadingColor(updateItem.itemCategory), fontSize: 30, fontWeight: "bold", marginBottom: 20 }}>Update Item</Text>
                            <TextInput style={styles.formInput}
                                onChangeText={text => setItemName(text)}
                                value={itemName} placeholder={`Item Name: ${updateItem.itemName}`} />

                            <TextInput style={styles.formInput}
                                onChangeText={text => setItemQuantity(text)}
                                value={itemQuantity} placeholder={`Item Quantity: ${updateItem.itemQuantity}`} />
                            <View style={styles.formSelector}>
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

                            <TouchableOpacity style={{ width: "100%", height: 50, alignItems: "center", justifyContent: "center", backgroundColor: handleHeadingColor(updateItem.itemCategory), marginTop: 30 }} onPress={updateTheItem}>
                                <Text style={{ fontSize: 16, fontWeight: "bold", color: "whitesmoke" }}>Update</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                : null}

            {addItemStatus ?
                <View style={styles.popUpCont}>
                    <View style={styles.popUpBox}>
                        <TouchableOpacity style={{ width: 50, height: 50, position: "absolute", top: 20, right: 20, justifyContent: "center", alignItems: "center" }} >
                            <Image source={closeBtn} style={{ width: 35, height: 35 }} />
                        </TouchableOpacity>
                        <AddItemCom />
                    </View>
                </View>
                : null}
        </View>
    )
}

export default ViewItemsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        // alignItems: 'center',
        // justifyContent: 'center',
        width: "100%",
    },
    loadingScreen: {
        backgroundColor: "whitesmoke",

        // opacity: 0.5,
        position: "absolute",
        height: "100%",
        width: "100%",
        zIndex: 99,
        top: 0,
        left: 0,
        alignItems: "center",
        justifyContent: "center"

    },
    sideNavCont: {
        // position: "absolute",/
        width: 75,
        height: "auto",
        zIndex: 10,
        top: 0,
        left: 0,
        backgroundColor: "whitesmoke",
        shadowColor: "#7C9070", // IOS
        shadowOffset: { height: 3, width: 3 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 30, //IOS
        // backgroundColor: "#FFFEF5",
        elevation: 20, // Android
    },
    sideNavWrapper: {
        width: "90%",
        height: "auto",
        margin: "5%",
        marginTop: 35
    },
    sideNavHead: {
        width: "100%",
        height: 80,
        alignItems: "center",
        justifyContent: "center"
    },
    sideNavHeadTxt: {
        fontSize: 45,
        fontWeight: "bold",
        color: "whitesmoke"
    },
    sideNavBtnCont: {
        width: "100%",
        height: "auto",
        marginTop: 50
    },
    sideNavBtn: {
        width: "90%",
        height: 60,
        // backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "black", // IOS
        shadowOffset: { height: 5, width: 5 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 30, //IOS
        // backgroundColor: "#FFFEF5",
        elevation: 10, // Android
        marginBottom: 10,
        marginHorizontal: "5%"
    },
    sideNavBtnImg: {
        width: 35,
        height: 35,
        marginLeft: -5
    },
    sideNavBtnBg: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },


    popUpCont: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.8)",
        zIndex: 99,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center"
    },
    popUpBox: {
        width: "90%",
        height: "60%",
        backgroundColor: "whitesmoke",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    formInput: {
        width: "100%",
        height: 60,
        borderWidth: 3,
        borderColor: "black",
        padding: 10,
        marginTop: 20
    },
    formSelector: {
        width: "70%",
        height: 60,
        borderWidth: 3,
        borderColor: "black",
        padding: 5,
        marginTop: 20,
        justifyContent: "center"
    },
});