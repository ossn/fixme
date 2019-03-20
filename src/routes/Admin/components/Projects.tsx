import React from 'react';
import {
  Create,
  Datagrid,
  DisabledInput,
  Edit,
  EditButton,
  List,
  LongTextInput,
  NumberField,
  NumberInput,
  SimpleForm,
  TextField,
  TextInput,
} from 'react-admin';

export const TagsField = ({ record }: any) => (
  <ul>
    {((record || {}).tags || []).map((item: any) => (
      <li key={item}>{`${item}, `}</li>
    ))}
  </ul>
);

export const ProjectList = (props: any) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="display_name" label="Project Name" />
      <TextField source="first_color" />
      <TextField source="second_color" />
      <TextField source="display_name" />
      <NumberField source="issues_count" />
      <TextField source="setup_duration" />
      <TextField source="logo" label="Logo url (*.png, *.jpg etc)" />
      <TextField source="description" label=" Short project description" />
      <TagsField label="Tags" source="tags" />
      <TextField source="link" label="Link to GitHub repo" />
      <EditButton />
    </Datagrid>
  </List>
);

const ProjectTitle = ({ record }: any) => {
  return <span>Post {record ? `"${record.display_name}"` : ""}</span>;
};

export const ProjectEdit = (props: any) => (
  <Edit title={<ProjectTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="display_name" label="Project Name" />
      <TextInput source="first_color" />
      <TextInput source="second_color" />
      <NumberInput source="issues_count" />
      <TextInput source="setup_duration" />
      <TextInput source="link" label="Link to GitHub repo" />
      <TextInput source="logo" label="Logo url (*.png, *.jpg etc)" />
      <LongTextInput source="description" label=" Short project description" />
    </SimpleForm>
  </Edit>
);

export const ProjectCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="display_name" label="Project Name" />
      <TextInput source="first_color" />
      <TextInput source="second_color" />
      <NumberInput source="issues_count" />
      <TextInput source="setup_duration" />
      <TextInput source="link" label="Link to GitHub repo" />
      <TextInput source="logo" label="Logo url (*.png, *.jpg etc)" />
      <LongTextInput source="description" label=" Short project description" />
    </SimpleForm>
  </Create>
);
