import { Header, Content, Footer } from './components'

class Page {
  constructor() {
    new Header();
    new Content();
    new Footer();
  }
}
new Page()