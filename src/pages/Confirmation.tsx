import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useHistory } from "react-router";
import { WizardStore } from "../store";
import "./Step1.css";

const Confirmation: React.FC = () => {
  const history = useHistory();
  const state = WizardStore.useState((s) => s);

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Confirmation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel>
            Full Name<p>{state.fullName}</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            Age<p>{state.age}</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            Mother's Madien Name<p>{state.maidenName}</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            Birth Place<p>{state.birthPlace}</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            Accept Terms and Conditions<p>{state.termsAccepted}</p>
          </IonLabel>
        </IonItem>
        <IonItem style={{ marginBottom: 8 }}>
          <IonLabel>
            Accepted Privacy Policy
            <p>{state.privacyAccepted}</p>
          </IonLabel>
        </IonItem>

        <div className="ion-padding">
          <IonButton
            style={{ marginRight: 8 }}
            onClick={() => history.goBack()}
          >
            BACK
          </IonButton>
          <IonButton routerLink="/confirmation">SAVE INFORMATION</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Confirmation;
