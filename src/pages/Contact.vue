<template>
    <Layout>
        <div class="container">
            <h1>Message Me</h1>
            <p></p>


            <b-form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="title" @submit.prevent="submitContactForm">

                <input type="hidden" name="form-name" value="contact" />

                <p class="d-none">
                    <input type="text" name="title">
                </p>

                <b-form-group
                    id="email-name"
                    label="Name"
                    label-for="name-input"
                >
                    <b-form-input
                        id="name-input"
                        v-model="form.name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="email-address"
                    label="Email address"
                    label-for="email-input"
                >
                    <b-form-input
                        id="email-input"
                        v-model="form.email"
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        required
                        ></b-form-input>
                </b-form-group>


                <b-form-group
                    id="email-message"
                    label="Message"
                    label-for="message-input"
                    description=""
                >

                    <b-form-textarea
                        id="message-input"
                        v-model="form.message"
                        placeholder="What's on your mind?"
                        rows="6"
                        name="message"
                    ></b-form-textarea>

                </b-form-group>



                <b-button size="lg" type="submit" variant="primary">Submit</b-button>
            </b-form>

        </div>
    </Layout>
</template>

<script>
import { urlEncode } from '@/utils'
import axios from 'axios'

export default {

    metaInfo: {
        title: 'Contact Me'
    },
    components: {

    },
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: '',
                'form-name': 'contact'
            }
        }
    },
    methods: {
        submitContactForm() {

            axios.post(
                '/',
                urlEncode(this.form),
                { header: { "Content-Type": "application/x-www-form-urlencoded" } }
            )
            .then(() => console.log('Form successfully submitted'))
            .catch((error) => alert(error))
        }
    }
}
</script>
