import { useState } from "react";
import Label from "../Label";
import TextField from "../TextField";
import PrimaryButton from "../Button/PrimaryButton";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Label htmlFor='email'>이메일</Label>
      <TextField
        id='email'
        errorMessage='정확한 이메일을 입력해주세요.'
        iconPath='CLOSE'
        onIconClick={() => setEmail("")}
        placeholder='이메일을 입력해주세요'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        isError={false}
      />
      <Label htmlFor='password'>비밀번호</Label>
      <TextField
        id='password'
        errorMessage='정확한 비밀번호를 입력해주세요.'
        iconPath='CLOSE'
        onIconClick={() => setPassword("")}
        placeholder='비밀번호를 입력해주세요'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        isError={false}
      />
      <PrimaryButton
        buttonStyle={"mt-10 h-[30px]"}
        isDisabled={!email || !password}
        theme='primary'
        buttonName='로그인'
      >
        로그인
      </PrimaryButton>
    </div>
  );
};

export default LoginForm;
