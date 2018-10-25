import { configure } from '@storybook/vue';

import Vue from 'vue';
// import Vuex from 'vuex'; // Vue plugins

// Import your custom components.
// import HelloComponent from '../src/components/HelloComponent/HelloComponent.vue';

// // Install Vue plugins.
// // Vue.use(Vuex);

// // Register custom components.
// Vue.component('HelloComponent', HelloComponent);


function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context("../src/", true, /.stories.js$/));
}

configure(loadStories, module);