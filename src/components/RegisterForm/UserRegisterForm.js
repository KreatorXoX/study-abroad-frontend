import React, { useEffect } from "react";

import UserPersonalDetails from "./UserPersonalDetails";
import UserReqFiles from "./UserReqFiles";
import ConfirmForm from "./ConfirmForm";
import Succes from "./Succes";

import { useForm } from "../../hooks/form-hook";
import { registerFormInitials } from "../../shared/utils/form initial data/RegisterInitials";

const UserRegisterForm = ({ getInfos }) => {
  const { formState, inputHandler, page, setPage, title } =
    useForm(registerFormInitials);

  const nextStep = () => {
    setPage((prev) => prev + 1);
  };
  const prevStep = () => {
    setPage((prev) => prev - 1);
  };
  useEffect(() => {
    getInfos(title, page);
  }, [title, page, getInfos]);
  switch (page) {
    case 0:
      return (
        <UserPersonalDetails
          values={formState.inputs}
          next={nextStep}
          handleChange={inputHandler}
        />
      );
    case 1:
      return (
        <UserReqFiles
          values={formState.inputs}
          next={nextStep}
          prev={prevStep}
          handleChange={inputHandler}
        />
      );
    case 2:
      return (
        <ConfirmForm
          values={formState.inputs}
          next={nextStep}
          prev={prevStep}
          handleChange={() => {}}
        />
      );
    case 3:
      return <Succes />;

    default:
      break;
  }
};

export default UserRegisterForm;
