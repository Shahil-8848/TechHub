import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { MapPin, ChevronRight } from "lucide-react-native";
import Colors from "@/constants/Colors";
import { Address } from "@/types/cart";

interface AddressCardProps {
  address: Address;
  onPress?: () => void;
}

export default function AddressCard({ address, onPress }: AddressCardProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <MapPin size={20} color={Colors.dark.accent} />
      </View>

      <View style={styles.details}>
        <Text style={styles.name}>{address.name}</Text>
        <Text style={styles.phone}>{address.phone}</Text>
        <Text style={styles.address}>
          {address.street}, {address.city}, {address.state} {address.zip},{" "}
          {address.country}
        </Text>
      </View>

      {onPress && <ChevronRight size={20} color={Colors.dark.secondaryText} />}
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
    alignItems: "center",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(230, 226, 52, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  details: {
    flex: 1,
  },
  name: {
    color: Colors.dark.text,
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 2,
  },
  phone: {
    color: Colors.dark.secondaryText,
    fontSize: 14,
    marginBottom: 2,
  },
  address: {
    color: Colors.dark.secondaryText,
    fontSize: 14,
  },
});
