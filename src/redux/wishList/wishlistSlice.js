import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Function to load the Wishlist from LocalStorage
const loadWishlistFromLocalStorage = () => {
  const savedWishlist = localStorage.getItem("Wishlist");
  return savedWishlist ? JSON.parse(savedWishlist) : [];
};

// Function to save the Wishlist to LocalStorage
const saveWishlistToLocalStorage = (wishlistItems) => {
  localStorage.setItem("Wishlist", JSON.stringify(wishlistItems));
};

const WishlistSlice = createSlice({
  name: "Wishlist",
  initialState: {
    items: loadWishlistFromLocalStorage(),
  },
  reducers: {
    addToWishlist: (state, action) => {
      const {
        id,
        type,
        name,
        description,
        image,
        rate,
        date,
        duration,
        categories,
        isSelected,
      } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (!existingItem) {
        // Add new item to Wishlist
        state.items.push({
          id,
          type,
          name,
          description,
          image,
          rate,
          date,
          duration,
          categories,
          isSelected,
        });
        saveWishlistToLocalStorage(state.items);
        // toast.success('Film added to Favoritess');
      }
    },
    removeFromWishlist: (state, action) => {
      const { id, subjectID } = action.payload;
      state.items = state.items.filter(
        (item) => !(item.id === id && item.subjectID === subjectID)
      );
      saveWishlistToLocalStorage(state.items);
      // toast.error("Film removed from Favoritess");
    },
    clearWishlist: (state) => {
      state.items = [];
      saveWishlistToLocalStorage(state.items);
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  WishlistSlice.actions;
export default WishlistSlice.reducer;

// Selector to calculate total items in the Wishlist
export const selectTotalItems = (state) => state.Wishlist.items.length;
