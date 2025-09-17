Vue.component('navbar', {
    template: `
        <nav class="navbar navbar-expand-lg navbar-light" :class="navbarBackgroundClass">
            <div class="container-fluid">
                <!-- Logo -->
                <a class="navbar-brand" href="index.html">
                    <img src="logo.png" alt="Swastik Industries Logo" class="logo-img">
                </a>

                <!-- Mobile Menu Toggle -->
                <button 
                    class="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Navbar Links -->
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item" v-for="item in menuItems" :key="item.id">
                            <a 
                                class="nav-link" 
                                :href="item.url" 
                                :class="{ 'active': isActive(item) }"
                            >
                                {{ item.text }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `,
    data() {
        return {
            menuItems: [
                { id: 1, text: 'Home', url: 'index.html' },
                { id: 2, text: 'About Us', url: 'aboutus.html' },
                { id: 3, text: 'Products', url: 'products.html' },
                // { id: 4, text: 'Clients', url: 'clients.html' },
                { id: 5, text: 'Contact Us', url: 'contactus.html' }
            ],
            navbarBackgroundClass: 'bg-transparent'
        };
    },
    methods: {
        isActive(item) {
            // Check if the current URL matches the menu item's URL
            return window.location.pathname.includes(item.url);
        }
    }
});
