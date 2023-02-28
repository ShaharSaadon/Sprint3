const { createApp } = Vue

const options = {
    template: `
        <section class="container">
          <h2>good luck ofek and shahar</h2>
        </section>
    `,
    data() {
        return {
            
        }
    },
}

const app = createApp(options)
app.mount('#app')