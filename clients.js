Vue.component('clients-section', {
    template: `
        <section class="clients py-5">
            <div class="container">
                <h2 class="section-title text-center mb-4">Our Clients</h2>
                <div class="row clients-grid">
                    <div 
                        class="client-card" 
                        v-for="client in clients" 
                        :key="client.id" 
                        :style="{ animationDelay: client.delay }">
                        <img :src="client.logo" :alt="client.name" class="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    `,
    data() {
        function getRandomDelay() {
            const delays = ["0s", "0.1s", "0.3s", "0.5s", "0.7s"];
            return delays[Math.floor(Math.random() * delays.length)];
        }

        return {
            clients: [
                { id: 1, logo: "images/clients/aristocrat.jpg", delay: getRandomDelay() },
                { id: 2, logo: "images/clients/baggit.webp", delay: getRandomDelay() },
                { id: 3, logo: "images/clients/carlton.png", delay: getRandomDelay() },
                { id: 4, logo: "images/clients/cortigiani.png", delay: getRandomDelay() },
                { id: 5, logo: "images/clients/fastrack.png", delay: getRandomDelay() },
                { id: 6, logo: "images/clients/flyit.png", delay: getRandomDelay() },
                { id: 7, logo: "images/clients/fostelo.jpeg", delay: getRandomDelay() },
                { id: 8, logo: "images/clients/kamiliant.jpg", delay: getRandomDelay() },
                { id: 9, logo: "images/clients/lavie.jpg", delay: getRandomDelay() },
                { id: 10, logo: "images/clients/lenovo.png", delay: getRandomDelay() },
                { id: 11, logo: "images/clients/nautica.jpg", delay: getRandomDelay() },
                { id: 12, logo: "images/clients/patanjali.png", delay: getRandomDelay() },
                { id: 13, logo: "images/clients/puma.jpg", delay: getRandomDelay() },
                { id: 14, logo: "images/clients/safari.png", delay: getRandomDelay() },
                { id: 15, logo: "images/clients/samsonite.webp", delay: getRandomDelay() },
                { id: 16, logo: "images/clients/skybags.jpg", delay: getRandomDelay() },
                { id: 17, logo: "images/clients/swiss.jpg", delay: getRandomDelay() },
                { id: 18, logo: "images/clients/triumph.png", delay: getRandomDelay() },
                { id: 19, logo: "images/clients/uspa.png", delay: getRandomDelay() },
                { id: 20, logo: "images/clients/vip.png", delay: getRandomDelay() },
                { id: 21, logo: "images/clients/viras.png", delay: getRandomDelay() },
                { id: 22, logo: "images/clients/vthree.jpeg", delay: getRandomDelay() },
                { id: 23, logo: "images/clients/winsor.png", delay: getRandomDelay() }
            ]
        };
    }
});
