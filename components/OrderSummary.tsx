import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Image } from "expo-image";
import Colors from "@/constants/Colors";
import { CartItem } from "@/types/cart";

interface OrderSummaryProps {
  items: CartItem[];
  totalItems: number;
  totalWeight: string;
}

export default function OrderSummary({
  items,
  totalItems,
  totalWeight,
}: OrderSummaryProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Order Summary</Text>
        <Text style={styles.subtitle}>
          {totalItems} ITEMS • {totalWeight} KG
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.itemsScroll}
      >
        {items.map((item) => (
          <View key={item.product.id} style={styles.itemContainer}>
            <Image
              source={{ uri: item.product.image }}
              style={styles.image}
              contentFit="cover"
            />
            <Text style={styles.price}>${item.product.price.toFixed(2)}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    color: Colors.dark.text,
    fontSize: 18,
    fontWeight: "600",
  },
  subtitle: {
    color: Colors.dark.secondaryText,
    fontSize: 12,
  },
  itemsScroll: {
    flexDirection: "row",
  },
  itemContainer: {
    width: 80,
    marginRight: 12,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: Colors.dark.card,
    marginBottom: 4,
  },
  price: {
    color: Colors.dark.text,
    fontSize: 14,
    textAlign: "center",
  },
});
