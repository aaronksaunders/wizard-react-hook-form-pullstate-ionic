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
import { SubmitHandler, useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { FormStep2, FormValues, WizardStore } from "../store";
import "./Step1.css";

const Step2: React.FC = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      ...WizardStore.useState((s) => s),
    },
  });

  const history = useHistory();

  const onSubmit:SubmitHandler<FormStep2> = (
    data: FormStep2
  ) => {
    WizardStore.update((s) => {
      s.progress = 66;
      s.birthPlace = data.birthPlace as string;
      s.maidenName = data.maidenName  as string;
    });
    history.push("/step-3");
  };
  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Step Two</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
      <IonProgressBar value={getValues("progress") / 100} ></IonProgressBar>
        <form onSubmit={handleSubmit(onSubmit)}>
          <IonItem>
            <IonLabel position="stacked">Place Of Birth</IonLabel>
            <IonInput
              type="text"
              {...register("birthPlace", { required: true })}
            ></IonInput>
          </IonItem>
          <div style={{ margin: 8, marginLeft: 20, color: "red" }}>
            {errors.birthPlace && <span>This field is required</span>}
          </div>
          <IonItem>
            <IonLabel position="stacked">Mothers Maiden Name</IonLabel>
            <IonInput
              type="text"
              {...register("maidenName", { required: true })}
            ></IonInput>
          </IonItem>
          <div style={{ margin: 8, marginLeft: 20, color: "red" }}>
            {errors.maidenName && <span>This field is required</span>}
          </div>
          <IonButton onClick={() => history.goBack()}>BACK</IonButton>
          <IonButton type="submit">NEXT</IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Step2;
