import React from "react";
import {
  Create,
  Datagrid,
  DisabledInput,
  Edit,
  EditButton,
  EmailField,
  List,
  SimpleForm,
  TextField,
  TextInput
} from "react-admin";

export const UserList = (props: any) => (
  <List title="All users" {...props}>
    <Datagrid>
      <TextField source="id" />
      <EmailField source="email" />
      <EditButton />
    </Datagrid>
  </List>
);
const UserTitle = ({ record }: any) => {
  return <span>Post {record ? `"${record.email}"` : ""}</span>;
};
export const UserEdit = (props: any) => (
  <Edit title={<UserTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput type="email" source="email" />
      <TextInput type="password" source="password" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput type="email" source="email" />
      <TextInput type="password" source="password" />
    </SimpleForm>
  </Create>
);
