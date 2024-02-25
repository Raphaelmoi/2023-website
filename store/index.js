import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// export const store = new Vuex.Store({
export const state = () => ({
	isMobile: false /**plus grand que 768px = mobile */,
	dynamicWindowWidth: 2000,
	message_to_user: [] /**messages globaux, email envoyé, connexion réussie,... */,
	darkmode: true
});

export const mutations = {
	toggleBoolean(state, val) {
		console.log(state[val]);
		state[val] = !state[val];
	},
	setStoredWS(state, { key, value, valueToCompare }) {
		console.log(state[key]);

		for (let index = 0; index < value.length; index++) {
			let position = -1;
			const element = value[index];
			position = state[key].findIndex((el) => el[valueToCompare] === element[valueToCompare]);
			if (position === -1) {
				state[key].push(element);
			}
		}
	},
	toggleIsMobile(state, val) {
		state.isMobile = val;
	},
	setWindowWidth(state, val) {
		state.dynamicWindowWidth = val;
	},
	addMessage_to_user(state, { val, duration = 50000, type = '' }) {
		let position = -1;
		if (state.message_to_user.length) {
			position = state.message_to_user.findIndex((el) => el.val === val);
		}
		if (position !== -1) {
			state.message_to_user.splice(position, 1);
		} else {
			state.message_to_user.push({ val, duration, type });
		}
	},

	cleanGlobalMessage(state) {
		state.message_to_user = [];
	},

};
