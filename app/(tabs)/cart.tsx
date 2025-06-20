import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { ArrowRight } from "lucide-react-native";
import Colors from "@/constants/Colors";
import CartItem from "@/components/CardItem";
import Button from "@/components/Button";
import { useCartStore } from "@/store/cart-store";

export default function CartScreen() {
  const { items, getSubtotal, getTotal } = useCartStore();
  const subtotal = getSubtotal();
  const total = getTotal();

  const handleCheckout = () => {
    router.push("/checkout");
  };

  if (items.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your cart is empty</Text>
          <Button
            title="Continue Shopping"
            onPress={() => router.push("/")}
            style={styles.continueButton}
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {items.map((item: any) => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Total</Text>
          <View>
            <Text style={styles.originalPrice}>${subtotal.toFixed(2)}</Text>
            <Text style={styles.totalPrice}>${total.toFixed(2)}</Text>
          </View>
        </View>

        <Button
          title="Checkout"
          onPress={handleCheckout}
          style={styles.checkoutButton}
          textStyle={styles.checkoutButtonText}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    color: Colors.dark.text,
    marginBottom: 20,
  },
  continueButton: {
    width: "80%",
  },
  footer: {
    backgroundColor: Colors.dark.card,
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  priceLabel: {
    fontSize: 16,
    color: Colors.dark.text,
  },
  originalPrice: {
    fontSize: 14,
    color: Colors.dark.secondaryText,
    textDecorationLine: "line-through",
    textAlign: "right",
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.dark.text,
  },
  checkoutButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  checkoutButtonText: {
    marginRight: 8,
  },
});
