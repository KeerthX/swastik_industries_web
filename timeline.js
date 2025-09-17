Vue.component('timeline-section', {
    template: `
        <section id="timeline" class="timeline py-5" aria-label="Company Timeline">
            <div class="container">
                <h2 class="section-title text-center mb-5">Our Journey of Excellence</h2>
                
                <!-- Desktop Timeline -->
                <div class="timeline-wrapper desktop-timeline">
                    <div class="timeline-line"></div>
                    <div class="timeline-items">
                        <div
                            v-for="event in timelineEvents"
                            :key="event.id"
                            class="timeline-item"
                            :class="{ right: event.id % 2 === 0 }"
                        >
                            <div class="timeline-dot">
                                <i :class="event.icon"></i>
                            </div>
                            <div class="timeline-content">
                                <div class="timeline-year">{{ event.year }}</div>
                                <div class="timeline-info">
                                    <h3>{{ event.title }}</h3>
                                    <p>{{ event.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mobile Timeline -->
                <div class="timeline-wrapper mobile-timeline">
                    <div class="timeline-cards">
                        <div
                            v-for="event in timelineEvents"
                            :key="event.id"
                            class="timeline-card"
                        >
                            <div class="timeline-card-header">
                                <div class="timeline-icon">
                                    <i :class="event.icon"></i>
                                </div>
                                <div class="timeline-year">{{ event.year }}</div>
                            </div>
                            <div class="timeline-card-body">
                                <h3>{{ event.title }}</h3>
                                <p>{{ event.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    data() {
        return {
            timelineEvents: [
                {
                    id: 1,
                    year: 1998,
                    title: "Business Inception",
                    description:
                        "Started trading business of belt buckles in Mumbai with 120sq.ft shop",
                    icon: "fas fa-store",
                },
                {
                    id: 2,
                    year: 2001,
                    title: "Pan India Expansion",
                    description:
                        "Started importing belt buckles and metal accessories from China and supplied to Pan India",
                    icon: "fas fa-globe-asia",
                },
                {
                    id: 3,
                    year: 2015,
                    title: "Make in India Initiative",
                    description:
                        "Purchased land for make in India initiative in Gujarat, Valsad",
                    icon: "fas fa-flag",
                },
                {
                    id: 4,
                    year: 2016,
                    title: "Manufacturing Unit",
                    description:
                        "Established our manufacturing unit in the name of Swastik Industries",
                    icon: "fas fa-industry",
                },
                {
                    id: 5,
                    year: 2017,
                    title: "Production Launch",
                    description:
                        "Completion of factory shed construction and started production of buckles",
                    icon: "fas fa-cogs",
                },
                {
                    id: 6,
                    year: 2018,
                    title: "Product Line Expansion",
                    description: "Started production of zipper sliders and metal labels",
                    icon: "fas fa-box-open",
                },
                {
                    id: 7,
                    year: 2020,
                    title: "Facility Expansion",
                    description:
                        "Expanded in another unit and adding to working space of 70,000 sq.ft",
                    icon: "fas fa-warehouse",
                },
                {
                    id: 8,
                    year: 2022,
                    title: "Quality Certification",
                    description: "Received ISO certificate and ZED certificate",
                    icon: "fas fa-certificate",
                },
                {
                    id: 9,
                    year: 2024,
                    title: "Modernization",
                    description:
                        "Taking our factory towards automation and eco-friendly processes",
                    icon: "fas fa-robot",
                },
            ],
        };
    },
    mounted() {
        this.initObserver();
    },
    methods: {
        initObserver() {
            const options = {
                threshold: 0.2,
                rootMargin: "0px 0px -50px 0px",
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            }, options);

            this.$nextTick(() => {
                document.querySelectorAll(".timeline-item, .timeline-card").forEach((item) => {
                    observer.observe(item);
                });
            });
        },
    },
});