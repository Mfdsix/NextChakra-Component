# NextChakra Components

I made this repository for help developers who used next / react as frontend framework and chakra ui as ui framework. This repository contain easy-to-use components example to boost your work as frontend developer.

## Contents

- [Input Validate](#input-validate)

## Documentation

### Input Validate

<a name="input-validate" />

This component is used to create input element with input hook validator and basic properties of HTML input element.

<img src="./screenshots/inputValidate.png">

#### Usage

```html
<InputValidate label="Username" name="username" reg={register} validator={{
required: "Username Harus Diisi", }} errors={errors} />
```

### Properties

`*` => required property

- `label*` (_string_) : Text inside label on above input element<br>
- `name*` (_string_) : Input name<br>
- `reg*` (_UseFormRegister_) : Text inside label on above input element<br>
- `validator*` (_object_) : Items to validate based on react-hook-form<br>
- `errors*` (_DeepMap_) : react-hook-form errors object
- `type` (_string_) : input type, can be :`text`, `password`, `checkbox`, etc. Default `text`
- `info` (_string_) : input hint / additional information

<hr>
