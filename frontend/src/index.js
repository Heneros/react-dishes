import React from 'react';
import ReactDOM from 'react-dom';
import Page from './components/Page';

export default function Hello() {
    return <div>
        <Page>
            Hello World
        </Page>

    </div>
}

ReactDOM.render(
    <Hello />,
    document.querySelector("#root")
);   