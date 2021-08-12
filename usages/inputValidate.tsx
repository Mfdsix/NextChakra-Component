import { useForm } from "react-hook-form";
import InputValidate from "../components/inputValidate";
import { Button } from "@chakra-ui/react";

export default function Usage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <InputValidate
        label="Username"
        name="username"
        reg={register}
        validator={{
          required: "Username Harus Diisi",
        }}
        errors={errors}
      />

      <InputValidate
        label="Password"
        type="password"
        name="password"
        reg={register}
        validator={{
          required: "Password Harus Diisi",
        }}
        errors={errors}
      />

      <InputValidate
        label="Saya menyetujui Syarat &amp; Ketentuan, dan Kebijakan Privasi yang berlaku"
        name="agree"
        reg={register}
        type="checkbox"
        validator={{
          required: true,
        }}
        errors={errors}
      />

      <hr />
      <Button
        my="30px"
        colorScheme="blue"
        width="200px"
        onClick={handleSubmit(onSubmit)}
      >
        Register
      </Button>
    </div>
  );
}
