import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div className='w-75 mx-auto'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is CORS?</Accordion.Header>
                    <Accordion.Body>
                        CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. When the device regains connection, the Realtime Database synchronizes the local data changes with the remote updates that occurred while the client was offline, merging any conflicts automatically.
                        It provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google,
                        Firebase Authentication is a tool in the User Management and Authentication category of a tech stack.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                    <Accordion.Body>
                    Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.
                    Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. When the device regains connection, the Realtime Database synchronizes the local data changes with the remote updates that occurred while the client was offline, merging any conflicts automatically.
                        It provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google,
                        Firebase Authentication is a tool in the User Management and Authentication category of a tech stack.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;