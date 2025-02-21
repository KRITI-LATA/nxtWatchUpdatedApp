import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  background-size: cover;
  height: 100vh;
  margin: 20px;
`

export const LoginCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  padding: 20px;
  box-shadow: 3px 3px 3px 3px #f8fafc;
  width: 30%;
  height: 60%;
`

export const ThemeImage = styled.img`
  width: 200px;
  margin-bottom: 20px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const Level = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  margin-bottom: 5px;
`

export const NamePasswordInput = styled.input`
  width: 340px;
  padding: 10px;
  font-family: 'Roboto';
`

export const CheckBoxInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`

export const CheckboxInput = styled.input`
  font-family: 'Roboto';
  font-size: 15px;
  margin-bottom: 5px;
`

export const CheckboxLevel = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  cursor: pointer;
  outline: none;
  border: none;
  padding: 10px;
  font-weight: 500;
  margin: 0px;
  border-radius: 8px;
`

export const FailureText = styled.p`
  font-family: 'Roboto';
  color: #ff0b37;
  font-size: 13px;
  margin: 0px;
`
