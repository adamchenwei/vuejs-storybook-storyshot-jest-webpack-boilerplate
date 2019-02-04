import { mount, createLocalVue } from '@vue/test-utils'
import App from '../App/App.vue'

test('HelloComponent', () => {
  const vue = createLocalVue()
  const app = mount(App, { vue })
  expect(app.classes()).toContain('center-content')
  // debugger
  expect(1).toEqual(1)
})
