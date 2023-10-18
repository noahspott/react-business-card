import React from 'react'

export default function ContactForm() {

    function handleSubmit() {
        console.log('handleSubmit')
    }

    return (
        <>
            <form action={handleSubmit}>
                <label>
                    Name:
                    <input 
                        type="text" 
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input 
                        type="text" 
                    />
                </label>
                <br />
                <label>
                    Message:
                    <textarea 
                        name="" 
                        id="" 
                        cols="30" 
                        rows="10" 
                    />
                </label>
            </form>
        </>
    )
}