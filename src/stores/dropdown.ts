import { defineStore } from "pinia";

export const useDropdownStore = defineStore('dropdown', {
	state: () => ({
		dropdown: false
	}),
	actions: {
		toggleDropdown() {
			this.dropdown = !this.dropdown;
		}
	}
});