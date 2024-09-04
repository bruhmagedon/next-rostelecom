import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ModalsState {
  isOpen: boolean;
}

const initialState: ModalsState = {
  isOpen: true
};

export const modalsSlice = createSlice({
  name: 'Modals',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    }
  }
});

// Action creators are generated for each case reducer function
export const { openModal, closeModal } = modalsSlice.actions;

export default modalsSlice.reducer;
