import cat from './cat.gif';
import './App.css';
import Button from '@material-ui/core/Button';
import {useSpring, animated} from 'react-spring';
import {Spring} from 'react-spring/renderprops';

function App() {
    // const props = useSpring({opacity: 1, from: {opacity: 0}});
    return (
        <div className="App">
          <header className="App-header">
            <Spring
              from={{ opacity: 0, color: 'red' }}
              to={{ opacity: 1 , color: 'blue' }}>
              {props => <div style={props}>hello</div>}
            </Spring>
            <img src={cat}/>
            <div class="mdc-card mdc-card--outlined">
              <p>
                I'll put a website up here eventually
              </p>
              <p>
                Meep!
              </p>
              <div class="mdc-card__actions">
                <button class="mdc-button mdc-card__action mdc-card__action--button">
                  <div class="mdc-button__ripple"></div>
                  <span class="mdc-button__label">Action 1</span>
                </button>
                <button class="mdc-button mdc-card__action mdc-card__action--button">
                  <div class="mdc-button__ripple"></div>
                  <span class="mdc-button__label">Action 2</span>
                </button>
              </div>
            </div>
            <Button class="mdc-button mdc-button--raised">
              <div class="mdc-button__ripple"></div>
              <i class="material-icons mdc-button__icon" aria-hidden="true"
              >bookmark</i
              >
              <span class="mdc-button__label">Contained Button plus Icon</span>
            </Button>
          </header>
        </div>
    );
}

export default App;
