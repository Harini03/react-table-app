import logo from './logo.svg';
import Events from './containers/Events';
import Members from './containers/Members';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div>
        <Members />
        <Events />
      </div>
    </ErrorBoundary>
  );
}

export default App;
