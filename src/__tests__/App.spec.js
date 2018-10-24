import { mount, createLocalVue } from '@vue/test-utils'
import App from '../components/App/App.vue'

test('App runs', () => {
  const vue = createLocalVue()
  const app = mount(App, { vue })

  expect(app.classes()).toContain('center-content')
})
