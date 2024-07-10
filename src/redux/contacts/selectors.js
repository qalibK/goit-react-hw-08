import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

const normalize = (str) => str.replace(/-/g, "").toLowerCase();

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = normalize(filter);
    return contacts.filter((contact) => {
      const normalizedNumber = normalize(contact.number);
      return (
        contact.name.toLowerCase().includes(normalizedFilter) ||
        normalizedNumber.includes(normalizedFilter)
      );
    });
  }
);
