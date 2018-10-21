import * as React from "react";
import { Timeline } from 'react-twitter-widgets';


export const TwitterHook = () => (
    <React.Fragment>
        <Timeline
            dataSource={{
                sourceType: 'profile',
                screenName: 'mozilla'
            }}
            options={{
                height: '400'
            }}
        />
    </React.Fragment>
);
export default TwitterHook;
