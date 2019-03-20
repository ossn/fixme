import React from "react";
import {
  Create,
  Datagrid,
  DisabledInput,
  Edit,
  EditButton,
  List,
  NumberField,
  NumberInput,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput
} from "react-admin";
import { TagsField } from "./Projects";

export const RepositoryList = (props: any) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="repository_url" />
      <NumberField source="issue_count" />
      <TagsField label="Tags" source="tags" />
      <ReferenceField
        label="Project"
        source="project_id"
        reference="admin/projects"
      >
        <TextField source="display_name" />
      </ReferenceField>
      <EditButton />
    </Datagrid>
  </List>
);

const RepositoryTitle = ({ record }: any) => {
  return <span>Post {record ? `"${record.repository_url}"` : ""}</span>;
};

export const RepositoryEdit = (props: any) => (
  <Edit title={<RepositoryTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="repository_url" />
      <NumberInput source="issue_count" />
      <ReferenceInput
        label="Project"
        source="project_id"
        reference="admin/projects"
      >
        <SelectInput optionText="display_name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const RepositoryCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="repository_url" />
      <ReferenceInput
        label="Project"
        source="project_id"
        reference="admin/projects"
      >
        <SelectInput optionText="display_name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
