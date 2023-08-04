import { defineStore } from "pinia";

export const usePreferenceStore = defineStore("preferences", {
    state: () => ({
        preferences: [
            "track",
            "distance",
            "distance_track",
            "current_jockey",
            "good",
            "heavy",
            "soft",
            "synthetic",
            "first_up",
            "second_up",
        ],
        availablePreferences: [
            "distance_track",
            "good",
            "heavy",
            "soft",
            "synthetic",
            "second_up",
            "first_up",
        ],
        selectedPreference: ["track", "distance", "current_jockey"],
        preferenceTrigger: Math.floor(Date.now() / 1000),
    }),
    getters: {
        // getSelectedPreferences() {
        //     const matchingPreferences = this.preferences.filter((preference) =>
        //         this.selectedPreference.includes(preference)
        //     );
        //     return matchingPreferences;
        // },
        getSelectedCount() {
            return this.selectedPreference.length;
        },
    },
    actions: {
        selectPreference(prefName) {
            const preference = this.preferences.find(
                (pref) => pref.name === prefName
            );
            if (preference) {
                this.selectedPreference.push(prefName);
                const availablePreferences = this.availablePreferences.filter(
                    (pref) => pref.name !== prefName
                );
                this.availablePreferences = availablePreferences;
            }
        },
        addPreference(prefNames) {
            const matchingPreferences = this.preferences.filter((preference) =>
                prefNames.includes(preference)
            );

            this.selectedPreference = [
                ...this.selectedPreference,
                ...matchingPreferences,
            ];
            this.availablePreferences = this.availablePreferences.filter(
                (pref) => !prefNames.includes(pref)
            );

            this.preferenceTrigger = Math.floor(Date.now() / 1000);
        },
        removePreference(prefName) {
            const index = this.selectedPreference.indexOf(prefName);
            if (index > -1) {
                this.selectedPreference.splice(index, 1);
                const preference = this.preferences.find(
                    (pref) => pref === prefName
                );
                if (preference) {
                    this.availablePreferences.push(preference);
                }
            }

            this.preferenceTrigger = Math.floor(Date.now() / 1000);
        },
        clearSelectedPreferences() {
            const preference = this.getSelectedPreferences;
            this.availablePreferences = [
                ...this.availablePreferences,
                ...preference,
            ];
            this.selectedPreference = [];
        },

        triggerPreferenceChange() {
            this.preferenceTrigger = Math.floor(Date.now() / 1000);
        },
    },
});
