import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonProgressBar,
  IonRouterOutlet,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import Confirmation from "./pages/Confirmation";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonProgressBar value={0}></IonProgressBar>
      <IonRouterOutlet>
        <Route path="/" exact={true}>
          <Redirect to="/step-1" />
        </Route>
        <Route path="/step-1" exact={true}>
          <Step1 />
        </Route>
        <Route path="/step-2" exact={true}>
          <Step2 />
        </Route>
        <Route path="/step-3" exact={true}>
          <Step3 />
        </Route>
        <Route path="/confirmation" exact={true}>
          <Confirmation />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
