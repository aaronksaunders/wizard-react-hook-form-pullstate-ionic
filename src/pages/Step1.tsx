import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonProgressBar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Step1.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { WizardStore, FormStep1 } from "../store";

const Step1: React.FC = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ defaultValues: WizardStore.useState((s) => s) });

  const history = useHistory();

  const onSubmit: SubmitHandler<FormStep1> = (data) => {
    WizardStore.update((s) => {
      s.progress = 33;
      s.fullName = data.fullName as string;
      s.age = data.age as string;
    });
    history.push("/step-2");
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Step One</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonProgressBar value={getValues("progress") / 100}></IonProgressBar>
        <form onSubmit={handleSubmit(onSubmit)}>
          <IonItem>
            <IonLabel position="stacked">Full Name</IonLabel>
            <IonInput
              type="text"
              {...register("fullName", { required: true })}
            ></IonInput>
          </IonItem>
          <div style={{ margin: 8, marginLeft: 20, color: "red" }}>
            {errors.fullName && <span>This field is required</span>}
          </div>
          <IonItem>
            <IonLabel position="stacked">Age</IonLabel>
            <IonInput
              type="number"
              {...register("age", { required: true })}
            ></IonInput>
          </IonItem>
          <div style={{ margin: 8, marginLeft: 20, color: "red" }}>
            {errors.age && <span>This field is required</span>}
          </div>
          <IonButton type="submit">NEXT</IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Step1;
