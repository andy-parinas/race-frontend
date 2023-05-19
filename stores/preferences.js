import { defineStore } from "pinia";

export const usePreferenceStore = defineStore("preferences", {
    state: () => ({
        preferences: [
            { name: "track", title: "Track" },
            { name: "distance", title: "Distance" },
            { name: "track_distance", title: "Trk/Dist" },
            { name: "current_jockey", title: "Horse/Jockey" },
            { name: "good", title: "Good" },
            { name: "heavy", title: "Heavy" },
            { name: "soft", title: "Soft" },
            { name: "synthetic", title: "Synthetic" },
            { name: "first_up", title: "First Up" },
            { name: "second_up", title: "Second Up" },
        ],
        availablePreferences: [
            { name: "track_distance", title: "Trk/Dist" },
            { name: "good", title: "Good" },
            { name: "heavy", title: "Heavy" },
            { name: "soft", title: "Soft" },
            { name: "synthetic", title: "Synthetic" },
            { name: "second_up", title: "Second Up" },
        ],
        selectedPreference: ["track", "distance", "current_jockey", "first_up"],
    }),
    getters: {
        getSelectedPreferences() {
            const matchingPreferences = this.preferences.filter((preference) =>
                this.selectedPreference.includes(preference.name)
            );
            return matchingPreferences;
        },
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
                prefNames.includes(preference.name)
            );

            this.selectedPreference = [
                ...this.selectedPreference,
                ...prefNames,
            ];
            this.availablePreferences = this.availablePreferences.filter(
                (pref) => !prefNames.includes(pref.name)
            );
        },
        removePreference(prefName) {
            const index = this.selectedPreference.indexOf(prefName);
            if (index > -1) {
                this.selectedPreference.splice(index, 1);
                const preference = this.preferences.find(
                    (pref) => pref.name === prefName
                );
                if (preference) {
                    this.availablePreferences.push(preference);
                }
            }
        },
        clearSelectedPreferences() {
            const preference = this.getSelectedPreferences;
            this.availablePreferences = [
                ...this.availablePreferences,
                ...preference,
            ];
            this.selectedPreference = [];
        },
    },
});
