import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isMobileMenuOpen: false,
    quickShopModal: {
      isOpen: false,
      product: null,
    }
  },
  reducers: {
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
    },
    openQuickShop: (state, action) => {
      state.quickShopModal.isOpen = true;
      state.quickShopModal.product = action.payload;
    },
    closeQuickShop: (state) => {
      state.quickShopModal.isOpen = false;
      state.quickShopModal.product = null;
    }
  }
});

export const { toggleMobileMenu, closeMobileMenu, openQuickShop, closeQuickShop } = uiSlice.actions;
export default uiSlice.reducer;