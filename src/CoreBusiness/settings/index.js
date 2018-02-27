import AbstractDomain from '../abstractDomain';
import EntitySettings from './entity/';


class Settings extends AbstractDomain {
  constructor(props) {
    super(props, EntitySettings);
    this.state = {};
  }
}

Settings.schema = EntitySettings.schema;


export default Settings;
