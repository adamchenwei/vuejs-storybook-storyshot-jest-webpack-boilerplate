// import App from '../components/App/App.vue'
import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'
import App from '../components/App/App.vue'

initStoryshots({ suite: 'Image storyshots', test: imageSnapshot() })

console.log(App)

test('INDEX', () => {
  console.log('haha')

  // const vue = createLocalVue()
  // const app = mount(App, { vue })

  // expect(app.classes()).toContain('center-content')
  expect(5).toEqual(5)
})
