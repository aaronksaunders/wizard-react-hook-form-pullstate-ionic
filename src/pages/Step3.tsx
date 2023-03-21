import {
  IonButton,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonProgressBar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { FormStep3, FormValues, WizardStore } from "../store";
import "./Step1.css";

const Step3: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      ...WizardStore.useState(),
    },
  });

  const history = useHistory();

  const onSubmit:SubmitHandler<FormStep3> = (
    data: FormStep3
  ) => {
    WizardStore.update((s) => {
      s.progress = 100;
      s.privacyAccepted = data.privacyAccepted as string;
      s.termsAccepted = data.termsAccepted as string;
    });
    history.push("/confirmation");
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Step Three</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
      <IonProgressBar value={getValues("progress") / 100}></IonProgressBar>

        <form onSubmit={handleSubmit(onSubmit)}>
          <IonItem>
            <IonLabel>Accept Terms and Conditions</IonLabel>
            <IonCheckbox
              onIonChange={(event) => {
                setValue("termsAccepted", event.detail.checked ? "true" : "");
              }}
              {...register("termsAccepted", { required: true })}
            ></IonCheckbox>
          </IonItem>
          <div style={{ margin: 8, marginLeft: 20, color: "red" }}>
            {errors.termsAccepted && <span>This field is required</span>}
          </div>
          <IonItem>
            <IonLabel>Reviewed Privacy Policy</IonLabel>
            <IonCheckbox
              onIonChange={(event) => {
                setValue("privacyAccepted", event.detail.checked ? "true" : "");
              }}
              {...register("privacyAccepted", { required: true })}
            ></IonCheckbox>
          </IonItem>
          <div style={{ margin: 8, marginLeft: 20, color: "red" }}>
            {errors.privacyAccepted && <span>This field is required</span>}
          </div>
          <IonButton onClick={() => history.goBack()}>BACK</IonButton>
          <IonButton type="submit">NEXT</IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Step3;
