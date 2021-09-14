import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Filme from './pages/Filme';
import favoritos from './pages/favoritos';
import Erro from './pages/erro';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}   />
                <Route exact path="/filme/:id" component={Filme} />
                <Route exact path="/favoritos" component={favoritos} />
                <Route exact path="*" component={Erro} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;