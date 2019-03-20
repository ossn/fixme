import React from 'react';
import { Datagrid, List, NumberField, ReferenceField, TextField } from 'react-admin';

import { TagsField } from './Projects';

export const IssueList = (props: any) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="experience_needed" />
      <TextField source="expected_time" />
      <TextField source="language" />
      <TextField source="tech_stack" />
      <TextField source="url" />
      <TextField source="body" />
      <TextField source="type" />
      <NumberField source="number" />
      <TagsField source="labels" label="Labels" />
      <ReferenceField
        label="Project"
        source="project_id"
        reference="admin/projects"
      >
        <TextField source="display_name" />
      </ReferenceField>
      <ReferenceField
        label="Repository"
        source="repository_id"
        reference="admin/repositories"
      >
        <TextField source="repository_url" />
      </ReferenceField>
      <TextField source="github_id" />
    </Datagrid>
  </List>
);
