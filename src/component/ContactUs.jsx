import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import { apiUrl } from '../config/apiUrls';
import { postRequest } from '../config/httpRequest';
import Hero from './Hero';

const ContactUs = () => {

    const webDetails = useSelector(state => state.webData.webData)
    const schema = yup.object({
        fullName: yup.string().required('Full name is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        contactNumber: yup.string().required('Contact number is required'),
        description: yup.string().required('Description is required'),

    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => {
        const url = apiUrl.contactUs
        postRequest(url, data).then((data) => {
            toast.success('Successfully Submitted!')

        }).catch((err) => {
            console.log(err)
        })
    };
    return (
        <>
            <Hero title='Contact Us' headline='Get in Touch : Contact Us Today for Expert Assistance' />

            <div className='container mt-5'>
                <div className='row my-3'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.860102294652!2d72.6726133!3d23.028908299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87d4c3bc23ed%3A0xe20f7afb1e8146d9!2sUnity%20Engineers%20Limited!5e0!3m2!1sen!2sin!4v1714658195527!5m2!1sen!2sin" width="100%" height="200" style={{ border: '0px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="untree_co-section">
                <div className="container">
                    <div className="block">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-10 pb-4">
                                <div className="row mb-5">
                                    <div className="col-lg-4">
                                        <div
                                            className="service no-shadow align-items-center link horizontal d-flex active"
                                            data-aos="fade-left"
                                            data-aos-delay={0}
                                        >
                                            <div className="service-icon color-1 mb-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-geo-alt-fill"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                                </svg>
                                            </div>

                                            <div className="service-contents">
                                                <p>{webDetails.address}</p>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-lg-4">
                                        <div
                                            className="service no-shadow align-items-center link horizontal d-flex active"
                                            data-aos="fade-left"
                                            data-aos-delay={0}
                                        >
                                            <div className="service-icon color-1 mb-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-envelope-fill"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                                                </svg>
                                            </div>

                                            <div className="service-contents">
                                                <p>{webDetails.email_id}</p>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-lg-4">
                                        <div
                                            className="service no-shadow align-items-center link horizontal d-flex active"
                                            data-aos="fade-left"
                                            data-aos-delay={0}
                                        >
                                            <div className="service-icon color-1 mb-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-telephone-fill"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                                                    />
                                                </svg>
                                            </div>

                                            <div className="service-contents">
                                                <p>{webDetails.contact_number}</p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label className="text-black" htmlFor="fullName">
                                                    Full Name
                                                </label>
                                                <input type="text" className="form-control" id='fullName' name='fullName' {...register('fullName')} />
                                                <p className='text-danger'>{errors.fullName?.message}</p>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label className="text-black" htmlFor="contactNumber">
                                                    Contact Number
                                                </label>
                                                <input type="text" className="form-control" id="contactNumber" name='contactNumber' {...register('contactNumber')} />
                                                <p className='text-danger'>{errors.contactNumber?.message}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="text-black" htmlFor="email">
                                            Email address
                                        </label>
                                        <input type="text" className="form-control" id="email" name='email' {...register('email')} />
                                        <p className='text-danger'>{errors.email?.message}</p>
                                    </div>
                                    <div className="form-group mb-5">
                                        <label className="text-black" htmlFor="description">
                                            Message
                                        </label>
                                        <textarea
                                            name="description"
                                            className="form-control"
                                            id="description"
                                            cols={30}
                                            rows={5}
                                            {...register('description')}
                                        />
                                        <p className='text-danger'>{errors.description?.message}</p>
                                    </div>
                                    <button type="submit" className="btn btn-primary-hover-outline">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactUs