<template>
    <Layout>
        <h1>Message Me</h1>
        <p>What's on your mind?</p>


        <b-form name=contact method="POST" data-netlify="true">

            <b-form-group
                id="email-name"
                label="Name"
                label-for="name-input"
            >
                <b-form-input
                    id="name-input"
                    v-model="form.name"
                    type="text"
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
                    placeholder="Enter email"
                    required
                    ></b-form-input>
            </b-form-group>


            <b-form-group
                id="email-message"
                label="Message"
                label-for="message-input"
                description="Message"
            >

                <b-form-textarea
                    id="message-input"
                    v-model="form.message"
                    placeholder="What's on your mind?"
                    rows="3"
                    max-rows="6"
                ></b-form-textarea>

            </b-form-group>

            <button type="submit" class="btn btn-primary">Submit</button>
        </b-form>


    </Layout>
</template>

<script>
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
                message: ''
            }
        }
    }
}
</script>
