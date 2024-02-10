import JustTitle from './title';
import { SButton } from './button';

const App = () => {
  return (
    <div>
      <h1>Styled components</h1>
      <JustTitle>Dynamic</JustTitle>
      <JustTitle>Special</JustTitle>
      <JustTitle special>Styles</JustTitle>
      <SButton type='submit'>Download Button</SButton>
    </div>
  );
};

export default App;
