import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <div className='w-75 mx-auto'>
            <h1 className='text-center'>Frequently Asked Questions</h1>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How i can play for my appoinment ?</Accordion.Header>
                    <Accordion.Body>
                        LMy name is _______ and I would like to schedule a convenient time to meet. Be sure to request a semi-specific time; “next week”, “the week of december 1”, etc. This will make it easier for the person to check their schedule and typically will get you a response faster.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Is the cost of the appoinment covered by private health insurance?</Accordion.Header>
                    <Accordion.Body>
                    Doctor's fees can only be covered by private health insurance for treatment in Company. Different insurers might pay a different amount for the same service. 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What are your opening house?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti adipisci facilis rerum, porro eos similique animi excepturi autem maiores, quos recusandae consequatur tempore sapiente! Quam laudantium officia recusandae eaque explicabo!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What can i expect at my first consultation?</Accordion.Header>
                    <Accordion.Body>
                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat odit voluptate harum temporibus eligendi recusandae neque praesentium perspiciatis facere. Nihil consequatur nobis, debitis nam inventore tempore voluptates illum veniam perferendis!
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;