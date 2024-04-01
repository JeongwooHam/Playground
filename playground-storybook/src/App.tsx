import { useState } from "react";
import "./App.css";
import Label from "./components/Label";
import TextField from "./components/TextField";

function App() {
  const [isError, setIsError] = useState(false);
  return (
    <div>
      <div>
        <Label htmlFor='email'>email</Label>
        <TextField
          id='email'
          placeholder='이메일을 입력하세요'
          value=''
          errorMessage='이메일을 확인해주세요'
          isError={isError}
          iconPath='/icons/delete_button.svg'
          iconAlt='delete'
          onChange={() => {}}
          onIconClick={() => {}}
        />
      </div>
      <div className='my-10'></div>
      <div>
        <Label htmlFor='password'>password</Label>
        <TextField
          id='password'
          placeholder='비밀번호를 입력하세요'
          value=''
          errorMessage='비밀번호를 확인해주세요'
          isError={isError}
          iconPath='/icons/delete_button.svg'
          iconAlt='delete'
          onChange={() => {}}
          onIconClick={() => {}}
        />
      </div>
      <button
        className='mt-10 bg-social hover:bg-error px-5 py-2 rounded-tag-button'
        onClick={() => setIsError((prev) => !prev)}
      >
        🚨🚨🚨
      </button>
    </div>
  );
}

export default App;
