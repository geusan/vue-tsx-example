import { Component, Vue } from 'vue-property-decorator';
import './assets/stylus/pages/App.styl';
import { HelloWorld } from './components/HelloWorld';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  public render() {
    console.log(HelloWorld);
    return (
      <div id={'app'}>
        <img alt={'Vue logo'} src='/logo.png'/>
        <HelloWorld msg={'Welcome to Your Vue.js + TypeScript App'} />
      </div>
    );
  }
}
