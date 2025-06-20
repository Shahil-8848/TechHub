import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { Minus, Plus, Trash2 } from "lucide-react-native";
import Colors from "@/constants/Colors";
import { CartItem as CartItemType } from "@/types/cart";
import { useCartStore } from "@/store/cart-store";

interface CartItemProps {
  item: CartItemType;
  showControls?: boolean;
}

export default function CartItem({ item, showControls = true }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore();
  const { product, quantity } = item;

  const handleIncrement = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeItem(product.id);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {product.discount && (
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>{product.discount}%</Text>
          </View>
        )}
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          contentFit="cover"
        />
      </View>

      <View style={styles.details}>
        <Text style={styles.brand}>{product.brand}</Text>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </View>

      {showControls ? (
        <View style={styles.controls}>
          <Pressable style={styles.controlButton} onPress={handleDecrement}>
            <Minus size={16} color={Colors.dark.text} />
          </Pressable>

          <Text style={styles.quantity}>{quantity}</Text>

          <Pressable style={styles.controlButton} onPress={handleIncrement}>
            <Plus size={16} color={Colors.dark.text} />
          </Pressable>
        </View>
      ) : (
        <Text style={styles.quantityText}>
          ${(product.price * quantity).toFixed(2)}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: Colors.dark.card,
    borderRadius: 12,
    marginBottom: 12,
  },
  imageContainer: {
    position: "relative",
    width: 80,
    height: 80,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#1A1A1A",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  discountBadge: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: Colors.dark.accent,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderBottomRightRadius: 6,
    zIndex: 1,
  },
  discountText: {
    color: "#000",
    fontSize: 10,
    fontWeight: "bold",
  },
  details: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },
  brand: {
    color: Colors.dark.secondaryText,
    fontSize: 12,
    marginBottom: 2,
  },
  name: {
    color: Colors.dark.text,
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  price: {
    color: Colors.dark.text,
    fontSize: 16,
    fontWeight: "bold",
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  controlButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  quantity: {
    color: Colors.dark.text,
    fontSize: 16,
    marginHorizontal: 12,
    minWidth: 20,
    textAlign: "center",
  },
  quantityText: {
    color: Colors.dark.text,
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
