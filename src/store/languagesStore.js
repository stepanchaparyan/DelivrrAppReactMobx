import { observable, action } from 'mobx';

class Languages {
  @observable language = 'en';

  @action changeLanguageToEN() {
    this.language = 'en';
  }

  @action changeLanguageToHY() {
    this.language = 'hy';
  }

}
const language = new Languages();
export default language;
