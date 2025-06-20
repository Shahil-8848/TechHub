import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { CreditCard } from "lucide-react-native";
import Colors from "@/constants/Colors";
import { PaymentMethod } from "@/types/cart";

interface PaymentMethodCardProps {
  method: PaymentMethod;
  selected: boolean;
  onSelect: () => void;
}

export default function PaymentMethodCard({
  method,
  selected,
  onSelect,
}: PaymentMethodCardProps) {
  return (
    <Pressable
      style={[styles.container, selected && styles.selected]}
      onPress={onSelect}
    >
      <View style={styles.iconContainer}>
        <CreditCard
          size={24}
          color={method.type === "paypal" ? "#0070BA" : "#EB001B"}
        />
      </View>

      <View style={styles.details}>
        <Text style={styles.label}>{method.label}</Text>
        <Text style={styles.lastFour}>····{method.lastFour}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: Colors.dark.card,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "transparent",
  },
  selected: {
    borderColor: Colors.dark.accent,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#1A1A1A",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  details: {
    flex: 1,
    justifyContent: "center",
  },
  label: {
    color: Colors.dark.text,
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  lastFour: {
    color: Colors.dark.secondaryText,
    fontSize: 14,
  },
});
