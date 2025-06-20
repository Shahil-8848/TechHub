import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { ChevronDown, ChevronUp, Ticket } from "lucide-react-native";
import Colors from "@/constants/Colors";

interface TotalSectionProps {
  subtotal: number;
  total: number;
}

export default function TotalSection({ subtotal, total }: TotalSectionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable style={styles.header} onPress={() => setExpanded(!expanded)}>
        <Text style={styles.title}>Total</Text>
        {expanded ? (
          <ChevronUp size={20} color={Colors.dark.text} />
        ) : (
          <ChevronDown size={20} color={Colors.dark.text} />
        )}
      </Pressable>

      {expanded && (
        <View style={styles.details}>
          <View style={styles.row}>
            <Text style={styles.label}>Subtotal</Text>
            <Text style={styles.value}>${subtotal.toFixed(2)}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Shipping</Text>
            <Text style={styles.value}>$0.00</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Tax</Text>
            <Text style={styles.value}>$0.00</Text>
          </View>

          <View style={styles.divider} />
        </View>
      )}

      <View
        style={[
          styles.totalRow,
          expanded ? { marginTop: 8 } : { marginTop: 16 },
        ]}
      >
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
      </View>

      <Pressable style={styles.discountRow}>
        <Ticket size={16} color={Colors.dark.accent} />
        <Text style={styles.discountText}>I have a discount code</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark.card,
    borderRadius: 12,
    padding: 16,
    marginVertical: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: Colors.dark.text,
    fontSize: 18,
    fontWeight: "600",
  },
  details: {
    marginTop: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  label: {
    color: Colors.dark.secondaryText,
    fontSize: 14,
  },
  value: {
    color: Colors.dark.text,
    fontSize: 14,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.dark.border,
    marginVertical: 8,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalLabel: {
    color: Colors.dark.text,
    fontSize: 16,
    fontWeight: "600",
  },
  totalValue: {
    color: Colors.dark.text,
    fontSize: 20,
    fontWeight: "bold",
  },
  discountRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  discountText: {
    color: Colors.dark.accent,
    fontSize: 14,
    marginLeft: 8,
  },
});
