import React from 'react'
import BaseApp from '../Core/BaseApp'
import { Appstate } from '../ContexAPI/AppProvider'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import * as yup from 'yup'


const userSchemaValidation = yup.object({
    id: yup.string().required("Please specify Book ID"),
    image: yup.string().url().nullable().required("Please fill image url ..."),
    book: yup.string().required("Please fill book Name"),
    author: yup.string().required("Please fill author Name"),
    releaseyear: yup.date().required("Please specify releaseYear..")
        .min(8, "It is not a valid year"),
    description: yup.string().required("Please fill books description"),
})

function AddBooks() {
    const { APJBooks, setAPJBooks } = Appstate();
    const navigate = useNavigate();

    // formik validation..................
    const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
        initialValues: {

            id: "",
            image: "",
            book: "",
            author: "",
            releaseyear: "",
            description: "",

        },
        validationSchema: userSchemaValidation,
        onSubmit: (newBook) => {
            // console.log(newBook);
            AddNewAPJBooks(newBook)
        }

    });

    const AddNewAPJBooks = (newBook) => {

        setAPJBooks([...APJBooks, newBook]);
        navigate('/abdulkalam');
        alert("New APJBooks added successfully")
    }
    return (
        <BaseApp
            title='Add New APJ.Abdulkalam Books'>
            <form onSubmit={handleSubmit} className='text-areas'>

                <TextField
                    variant="outlined"
                    label="ID"
                    id="fullWidth"
                    name='id'
                    value={values.id}
                    onBlur={handleBlur}
                    onChange={handleChange} />

                {touched.id && errors.id ? <span style={{ color: "crimson" }}>{errors.id}</span> : ""}

                <TextField
                    variant="outlined"
                    label="Image-URL"
                    id="fullWidth"
                    name='image'
                    value={values.image}
                    onBlur={handleBlur}
                    onChange={handleChange} />

                {touched.image && errors.image ? <span style={{ color: "crimson" }}>{errors.image}</span> : ""}

                <TextField
                    variant="outlined"
                    label="Name of the Book"
                    id="fullWidth"
                    name='book'
                    value={values.book}
                    onBlur={handleBlur}
                    onChange={handleChange} />

                {touched.book && errors.book ? <span style={{ color: "crimson" }}>{errors.book}</span> : ""}

                <TextField
                    variant="outlined"
                    label="Author"
                    id="fullWidth"
                    name='author'
                    value={values.author}
                    onBlur={handleBlur}
                    onChange={handleChange} />

                {touched.author && errors.author ? <span style={{ color: "crimson" }}>{errors.author}</span> : ""}

                <TextField
                    variant="outlined"
                    label="ReleaseYear"
                    id="fullWidth"
                    name='releaseyear'
                    value={values.releaseyear}
                    onBlur={handleBlur}
                    onChange={handleChange} />

                {touched.releaseyear && errors.releaseyear ? <span style={{ color: "crimson" }}>{errors.releaseyear}</span> : ""}

                <TextField
                    variant="outlined"
                    label="Description"
                    id="fullWidth"
                    name='description'
                    value={values.description}
                    onBlur={handleBlur}
                    onChange={handleChange} />

                {touched.description && errors.description ? <span style={{ color: "crimson" }}>{errors.description}</span> : ""}

                <Button variant="contained" className='add-submit'
                    type='submit'
                // onClick={addNewMotivationBooks}
                >
                 Add Submit
                </Button>
            </form>
        </BaseApp>
    )
}

export default AddBooks