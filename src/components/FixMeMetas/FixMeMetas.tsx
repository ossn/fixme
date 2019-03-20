import React from "react";
import { Helmet } from 'react-helmet';
export interface IFixMeMetaProps {
    readonly title: string;
    readonly description: string;
}
export default class FixMeMetas extends React.Component<IFixMeMetaProps> {
    public render() {
        const { title, description } = this.props;
        return (
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
        );
    }
}