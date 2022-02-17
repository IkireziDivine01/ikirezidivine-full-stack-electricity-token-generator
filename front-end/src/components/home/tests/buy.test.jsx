import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import TestRenderer from 'react-test-renderer';
import Buy from '../buy'

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

it('should render "Buy Electricity"', () => {
    act(() => {
        ReactDOM.render(<Buy />, container);
    });
    const p = container.querySelector('p');
    expect(p.textContent).toBe('Buy Electricity');
});