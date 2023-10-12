import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Button, ImageBackground, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import { fetchItems, deleteAnItem } from "../services/Service(Redux)/FirestoreGetItems";
import { useDispatch, useSelector } from "react-redux";
// import { updateAnItem } from "../services/Service(Redux)/FirestoreGetItems";
import { fetchItems, deleteAnItem, updateAnItem } from "../services/Service(Redux)/FirestoreItems";
// import {  useSelector } from "react-redux";

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
import addItm from "../assets/Icons/queue.png";
import bgImg from "../assets/Images/bg.jpg";
// import AddNewItem from "./AddNewItem";

const ViewItemsScreen = () => {

    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.items)
    console.log(items);

    const [updateItem, setUpdateItem] = useState({
        id: "",
        itemName: "",
        itemQuantity: "",
        itemCategory: ""
    });

    useEffect(() => {
        dispatch(fetchItems())
    }, [dispatch])
    
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
                                            <View style={styles.sideNavBtn} key={index}>
                                                <LinearGradient
                                                    // Button Linear Gradient
                                                    colors={[cat.color1, cat.color2]}
                                                    style={styles.sideNavBtnBg}>
                                                    <Image source={cat.img} style={styles.sideNavBtnImg} />
                                                </LinearGradient>

                                            </View>
                                        ))}
                                    </View>
                                </View>
                            </View>
                        </>
                    </ScrollView>
                </View>

                <View style={{ width: "100%", height: 1500 }}>
                    <ScrollView scrollEnabled={true} >
                        <>
                            <View>
                                <ImageBackground source={bgImg} style={{ width: "100%", height: 150, marginTop: 35 }}>
                                    <View style={{ width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.5)" }} />
                                    <Text style={{ position: "absolute", zIndex: 10, bottom: 20, left: 20, fontSize: 30, fontWeight: "bold", color: "whitesmoke" }}>My Shopping List</Text>
                                </ImageBackground>

                                <View style={{ margin: 10 }}>
                                    <Text style={[styles.sideNavHeadTxt, { color: "black", fontSize: 33 }]}>Items</Text>
                                    <Text>List of all items.</Text>
                                </View>

                                <View style={{ width: "80%", marginTop: 50 }}>
                                    <View style={{ width: "95%", height: 180, marginLeft: "1%" }}>
                                        <LinearGradient
                                            // Button Linear Gradient
                                            colors={handleColor("Beverages")}
                                            style={[styles.sideNavBtnBg, { borderRadius: 15 }]}>
                                            <Image source={bev} style={{ width: 55, height: 55, position: "absolute", top: -30, left: 20 }} />

                                            <View style={{ width: "85%", height: "85%", marginTop: 50 }}>
                                                <View style={{ flexDirection: "row" }}>
                                                    <Text>Item: </Text>
                                                    <Text>Toothbrush</Text>
                                                </View>

                                                <View style={{ flexDirection: "row" }}>
                                                    <Text>Category: </Text>
                                                    <Text>Personal Care</Text>
                                                </View>

                                                <View style={{ flexDirection: "row" }}>
                                                    <Text>Quantity: </Text>
                                                    <Text>4</Text>
                                                </View>
                                            </View>

                                            <View style={{ flexDirection: "row", position: "absolute", top:20, right:10 }}>
                                            <Image source={editItem} style={{ width: 35, height: 35 }} />
                                            <Image source={deleteItm} style={{ width: 35, height: 35, marginLeft:10 }} />
                                            </View>

                                        </LinearGradient>

                                    </View>
                                </View>
                            </View>
                        </>
                    </ScrollView>
                </View>
            </View>

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
        height: 70,
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
        width: 40,
        height: 40,
        marginLeft: -5
    },
    sideNavBtnBg: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
});