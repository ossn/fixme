import '../../../styles/projects.css';

import React from 'react';
import { Admin, Resource } from 'react-admin';

import authProvider from '../helpers/authProvider';
import dataProvider from '../helpers/dataProvider';
import { IssueList } from './Issues';
import { ProjectCreate, ProjectEdit, ProjectList } from './Projects';
import { RepositoryCreate, RepositoryEdit, RepositoryList } from './Repositories';
import { UserCreate, UserEdit, UserList } from './Users';

export default class AdminComponent extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <div style={{ width: "100vw", position: "absolute", left: "0px" }}>
        <Admin dataProvider={dataProvider} authProvider={authProvider}>
          <Resource
            name="admin/projects"
            list={ProjectList}
            edit={ProjectEdit}
            create={ProjectCreate}
          />
          <Resource
            name="admin/repositories"
            list={RepositoryList}
            edit={RepositoryEdit}
            create={RepositoryCreate}
          />
          <Resource name="admin/issues" list={IssueList} />
          <Resource
            name="admin/users"
            list={UserList}
            edit={UserEdit}
            create={UserCreate}
          />
        </Admin>
      </div>
    );
  }
}
