import attachHandlers from '../module/attach-handlers';
import generateMarkup from '../module/generate-markup';
import addCssClasses from '../../cssClasses';

export default (radio, opts) => {
  if (!radio) {
    console.error('Error: Missing required parameter 1 \'radio\'');
    return;
  }

  const options = addCssClasses(opts);

  generateMarkup(radio, options);
  attachHandlers(radio, options);

  radio.dispatchEvent(new Event('init'));
};
