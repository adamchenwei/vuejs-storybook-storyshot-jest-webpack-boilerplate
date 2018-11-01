import { storiesOf } from '@storybook/vue'
import HelloComponent from './HelloComponent.vue'

storiesOf('HelloComponent', module)
  // NOTE: it has problem render!
  // .add('story as a template', () => '<HelloComponent name="Adam" />')
  .add('story as a component', () => ({
    components: { HelloComponent },
    template: '<HelloComponent name="Eve"/>'
  }))
