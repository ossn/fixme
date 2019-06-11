import React from 'react';
import Spinner from '../components/Spinner/Spinner';
import {render,cleanup,fireEvent, getByText} from 'react-testing-library';
import TestRenderer from 'react-test-renderer';

test('check if spinner renders correclty',()=>{
let component=render(<Spinner/>);
expect(component).toMatchSnapshot();
});