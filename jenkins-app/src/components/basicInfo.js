export default function BasicInfo({nextStep}) {
    const firstNameState = useTextInputState()
    const lastNameState = useTextInputState()
  
  return (
      <div>
          <h3>Basic Info</h3>
  
          <FormField>
          <FormFieldLabel>
            <FormFieldLabelText> <spam className='FormField-Heading' >First Name</spam></FormFieldLabelText>
            <TextInputField
              placeholder='Enter your first name'
              value={firstNameState.value}
              onChange={firstNameState.onChange}
              errorMessageLabel='First name required'
            />
          </FormFieldLabel>
        </FormField>
  
        <FormField>
          <FormFieldLabel>
            <FormFieldLabelText> <spam className='FormField-Heading' >Last Name </spam></FormFieldLabelText>
            <TextInputField
              placeholder='Enter your last name'
              value={lastNameState.value}
              onChange={lastNameState.onChange}
              errorMessageLabel='Last name required'
            />
          </FormFieldLabel>
        </FormField>
        </div>
  )
}