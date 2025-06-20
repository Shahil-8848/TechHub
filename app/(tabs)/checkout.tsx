import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
// import { MoreVertical } from "lucide-react-native";
import Colors from "@/constants/Colors";
// import AddressCard from "@/components/AddressCard";
import OrderSummary from "@/components/OrderSummary";
import PaymentMethodCard from "@/components/PaymentMethodCard";
import TotalSection from "@/components/TotalSelection";
import Button from "@/components/Button";
import { useCartStore } from "@/store/cart-store";
import { paymentMethods } from "../../mock/products";

export default function CheckoutScreen() {
  const {
    items,
    getTotal,
    getTotalItems,
    getTotalWeight,
    setSelectedAddress,
    setSelectedPaymentMethod,
    selectedPaymentMethod,
  } = useCartStore();

  const [loading, setLoading] = useState(false);
  const total = getTotal();
  const totalItems = getTotalItems();
  const totalWeight = getTotalWeight();

  const handlePaymentMethodSelect = (methodId: string) => {
    const method = paymentMethods.find((m) => m.id === methodId);
    if (method) {
      setSelectedPaymentMethod(method);
    }
  };

  const handleConfirmPayment = () => {
    if (!selectedPaymentMethod) return;

    setLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      router.push("/confirmation");
    }, 1500);
  };

  //   // Set default address if not already set
  //   React.useEffect(() => {
  //     if (addresses.length > 0) {
  //       setSelectedAddress(addresses[0]);
  //     }
  //   }, []);

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Address Section */}

        {/* Order Summary */}
        <OrderSummary
          items={items}
          totalItems={totalItems}
          totalWeight={totalWeight.toString()}
        />

        {/* Payment Methods */}
        <View style={styles.paymentSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Payment Method</Text>
            <Button
              title="Add"
              onPress={() => {}}
              style={styles.addButton}
              textStyle={styles.addButtonText}
            />
          </View>

          {paymentMethods.map((method) => (
            <PaymentMethodCard
              key={method.id}
              method={method}
              selected={selectedPaymentMethod?.id === method.id}
              onSelect={() => handlePaymentMethodSelect(method.id)}
            />
          ))}
        </View>

        {/* Total Section */}
        <TotalSection subtotal={total} total={total} />
      </ScrollView>

      <View style={styles.footer}>
        <Button
          title="Confirm payment"
          onPress={handleConfirmPayment}
          loading={loading}
          disabled={!selectedPaymentMethod}
          style={styles.confirmButton}
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
  paymentSection: {
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.dark.text,
  },
  addButton: {
    backgroundColor: "transparent",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  addButtonText: {
    color: Colors.dark.accent,
    fontSize: 14,
  },
  footer: {
    backgroundColor: Colors.dark.card,
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  confirmButton: {
    width: "100%",
  },
});
