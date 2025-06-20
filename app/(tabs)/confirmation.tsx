import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Check, FileText } from "lucide-react-native";

import Colors from "@/constants/Colors";
import Button from "@/components/Button";
import CartItem from "@/components/CardItem";
import { useCartStore } from "@/store/cart-store";

export default function ConfirmationScreen() {
  const { items, getTotal, selectedPaymentMethod, selectedAddress, clearCart } =
    useCartStore();

  const total = getTotal();
  const orderDate = new Date().toLocaleString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  //   const Colors = {
  //     dark: {
  //       background: "#000000",
  //       card: "#121212",
  //       text: "#FFFFFF",
  //       secondaryText: "#AAAAAA",
  //       accent: "#E6E234",
  //       border: "#333333",
  //     },
  //   };
  const orderNumber = Math.floor(Math.random() * 9000000000) + 1000000000;

  const handleContinueShopping = () => {
    clearCart();
    router.push("/");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.successContainer}>
          <View style={styles.checkCircle}>
            <Check size={40} color="#000" />
          </View>
          <Text style={styles.thankYouText}>Thank You!</Text>
          <Text style={styles.orderProcessedText}>
            Your order is being processed.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PAYMENT DETAILS</Text>

          <View style={styles.productImages}>
            {items.slice(0, 3).map((item: any) => (
              <View key={item.product.id} style={styles.productImageContainer}>
                <CartItem item={item} showControls={false} />
              </View>
            ))}

            {items.length > 3 && (
              <View style={styles.moreContainer}>
                <Text style={styles.moreText}>+{items.length - 3}</Text>
              </View>
            )}
          </View>

          <View style={styles.detailsContainer}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Ref Number</Text>
              <Text style={styles.detailValue}>{orderNumber}</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Date</Text>
              <Text style={styles.detailValue}>{orderDate}</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Method</Text>
              <Text style={styles.detailValue}>
                {selectedPaymentMethod?.label} ····
                {selectedPaymentMethod?.lastFour}
              </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.detailRow}>
              <Text style={styles.totalLabel}>Total Paid</Text>
              <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
            </View>
          </View>
        </View>

        <View style={styles.actionsContainer}>
          <Button
            title="PDF Receipt"
            onPress={() => {}}
            style={styles.pdfButton}
            textStyle={styles.pdfButtonText}
          />

          <Button
            title="Continue shopping"
            onPress={handleContinueShopping}
            style={styles.continueButton}
          />
        </View>
      </ScrollView>
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
  successContainer: {
    alignItems: "center",
    marginVertical: 40,
  },
  checkCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.dark.accent,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  thankYouText: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.dark.text,
    marginBottom: 8,
  },
  orderProcessedText: {
    fontSize: 16,
    color: Colors.dark.secondaryText,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.dark.secondaryText,
    marginBottom: 16,
  },
  productImages: {
    flexDirection: "row",
    marginBottom: 20,
  },
  productImageContainer: {
    flex: 1,
    marginRight: 8,
  },
  moreContainer: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: Colors.dark.card,
    alignItems: "center",
    justifyContent: "center",
  },
  moreText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.dark.text,
  },
  detailsContainer: {
    backgroundColor: Colors.dark.card,
    borderRadius: 12,
    padding: 16,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  detailLabel: {
    fontSize: 14,
    color: Colors.dark.secondaryText,
  },
  detailValue: {
    fontSize: 14,
    color: Colors.dark.text,
    fontWeight: "500",
  },
  divider: {
    height: 1,
    backgroundColor: Colors.dark.border,
    marginVertical: 12,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.dark.text,
  },
  totalValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.dark.text,
  },
  actionsContainer: {
    marginTop: 20,
    marginBottom: 40,
  },
  pdfButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: Colors.dark.border,
    marginBottom: 16,
  },
  pdfButtonText: {
    color: Colors.dark.text,
  },
  continueButton: {
    marginBottom: 20,
  },
});
