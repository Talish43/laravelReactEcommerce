import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminRouting from './AdminRouting.jsx';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
const client = new ApolloClient({
    uri: 'http://larareact.ecommerce.com/graphiql',
    cache: new InMemoryCache(),
    defaultOptions: {
        query: {
            fetchPolicy: 'no-cache',
        },
    },
    request: (operation) => {
        operation.setContext({
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });
    },
});

export default function Index() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin/*" element={<AdminRouting />} />
            </Routes>
        </BrowserRouter>
    )
}

const root = createRoot(document.getElementById('root'));

root.render(
    <ApolloProvider client={client}>
        <Index />
    </ApolloProvider>,
);
