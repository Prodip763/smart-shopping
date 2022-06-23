import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <section className='question'>
            <div>
                <h2>How react works?</h2>
                <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
            </div>
            <div>
                <h2>Difference between props and state in react?</h2>
                <p>State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
            </div>
            <div>
                <h2>How useState works?</h2>
                <p>useState is a Hook (function) that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.</p>
            </div>
            
        </section>
        
    );
};

export default Question;