<template>
  <Layout>
    <div>
      
      <b-jumbotron style="margin-top: -1rem"  fluid>

          
          <template #header>
              <brian-avatar class="float-right" www="150"></brian-avatar>
              About Me
          </template>

          <template #lead>
              <h2>Brian Bickett</h2>
          </template>
          
      </b-jumbotron>

    
      <div class="container">

        <div class="row">

            <div class="col-md-4">
                <h2>Family</h2>

                <p>
                  I'm a husband to an amazing wife and a father to three perfect boys.
                </p>
            </div>

            <div class="col-md-4">
                <h3>Professional</h3>
                <h4><small class="text-muted">Senior Full Stack Engineer</small></h4>

            </div>

            <div class="col-md-4">
                <h2>Hobbies</h2>

                <p>
                  
                </p>
            </div>
            

        </div>
      </div>

    </div>


  </Layout>
</template>

<script>

import BrianAvatar from '@/components/BrianAvatar'


export default {
  metaInfo: {
    title: 'About Me'
  },
  components: {
      BrianAvatar
  },
  data() {
    return {

    }
  }
}
</script>
