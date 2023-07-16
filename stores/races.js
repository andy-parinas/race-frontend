import { defineStore } from "pinia";

export const useRaceStore = defineStore("races", {
    state: () => ({
        selectedRaceIds: [],
    }),
    getters: {},
    actions: {
        addRaceId(id) {
            if (!this.selectedRaceIds.includes(id)) {
                this.selectedRaceIds.push(id);
            }
        },
        removeRaceId(id) {
            if (this.selectedRaceIds.includes(id)) {
                this.selectedRaceIds = this.selectedRaceIds.filter(
                    (raceId) => raceId !== id
                );
            }
        },
        clearAll() {
            this.selectedRaceIds = [];
        },
    },
});
