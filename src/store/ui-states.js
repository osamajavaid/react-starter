import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const uiStates = create(
    persist(
        (set) => ({
            // website locales state
            locale: "en",
            setLocale: (newValue) => set({ locale: newValue }),

        }),
        {
            name: "ui-states", // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        },
    ),
);

export default uiStates;
