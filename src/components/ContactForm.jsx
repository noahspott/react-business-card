import React from 'react'

export default function ContactForm() {

    const [formData, setFormData] = React.useState(
        {name: "", email: "", message: "", projectType: ""}
    )

    function handleChange(e) {
        const {name, value, type, checked} = e.target

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type == "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input 
                        type="text" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <br /> 

                <label htmlFor="radio-web">
                    <input 
                        type="radio" 
                        id="website" 
                        name="projectType"
                        value="website"
                        checked={formData.projectType == "website"}
                        onChange={handleChange}
                    />
                    Website
                </label> 
                <label htmlFor="radio-app">
                    <input 
                        type="radio" 
                        id="application" 
                        name="projectType"
                        value="application"
                        checked={formData.projectType == "application"}
                        onChange={handleChange}
                    />
                    App Development
                </label>
                <label htmlFor='radio-employment'>
                    <input 
                        
                        type="radio" 
                        id="employment"
                        name="projectType"
                        value="employment"
                        checked={formData.projectType == "employment"} 
                        onChange={handleChange}
                    />
                    Employment
                </label>
                
                <br />
                <label>
                    Tell me about your project!
                    <textarea 
                        name="message" 
                        value={formData.message}
                        onChange={handleChange}
                        id="" 
                        cols="30" 
                        rows="10" 
                    />
                </label>
                <br />

                <button>Submit</button>
                
            </form>
        </>
    )
}