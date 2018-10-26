// import App from '../components/App/App.vue'
import initStoryshots from '@storybook/addon-storyshots'
import App from '../components/App/App.vue'
initStoryshots()
console.log(App)

test('INDEX', () => {
  console.log('haha')

  // const vue = createLocalVue()
  // const app = mount(App, { vue })

  // expect(app.classes()).toContain('center-content')
  expect(5).toEqual(5)
})
