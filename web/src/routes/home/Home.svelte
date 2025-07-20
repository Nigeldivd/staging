<script lang="ts">
    import DIVDWorks from "../../assets/divd-works-logo.svg";
    import Community from "../../assets/stock/community.png";
    import Company from "../../assets/stock/company.png";
    import Education from "../../assets/stock/education.webp";
    import PoweredByPurpose from "../../assets/stock/Powered-by-purpose.png";
    import Student from "../../assets/stock/student.png";

    //Chatbot
    window.addEventListener("DOMContentLoaded", (): void => {
        window.AgentInitializer.init({
            agentRenderURL:
                "https://eu.jotform.com/agent/0195bdc78c297d99ab8ba2ff10217ed4e4cd",
            rootId: "JotformAgent-0195bdc78c297d99ab8ba2ff10217ed4e4cd",
            formID: "0195bdc78c297d99ab8ba2ff10217ed4e4cd",
            queryParams: ["skipWelcome=1", "maximizable=1"],
            domain: "https://eu.jotform.com",
            isDraggable: false,
            background: "linear-gradient(180deg, #000000 0%, #000 100%)",
            buttonBackgroundColor: "#ffd736",
            buttonIconColor: "#ffd736",
            variant: false,
            customizations: {
                greeting: "Yes",
                greetingMessage: "Hi! How can I assist you?",
                pulse: "Yes",
                position: "right",
            },
            isVoice: undefined,
        });
    });
</script>

<svelte:head>
    <title>Home - DIVD.works</title>
    <script
        src="https://cdn.jotfor.ms/s/umd/latest/for-embedded-agent.js"
    ></script>
</svelte:head>

<article class="bg-black">
    <section class="bg-black-900 flex flex-col min-h-screen">
        <!-- Main Content -->
        <article
            class="flex-grow flex flex-col items-center justify-center px-4 sm:px-8"
        >
            <div class="flex flex-wrap justify-center gap-8 lg:gap-16">
                <div
                    class="flex-shrink-0 w-full sm:w-auto flex justify-center sm:justify-start"
                >
                    <img
                        src={PoweredByPurpose}
                        alt="Powered by Purpose"
                        class="w-full max-w-[300px] sm:max-w-[450px]"
                    />
                </div>
                <div
                    class="max-w-full sm:max-w-2xl text-[#ffd736] text-center sm:text-left space-y-4"
                >
                    <h1 class="text-3xl sm:text-5xl font-bold animate-glow">
                        Powered by Purpose
                    </h1>
                    <p class="text-base sm:text-xl">
                        The goal of the DIVD.works project is to create a
                        platform that brings together young digital talent and
                        employers. We help you not only further develop your
                        skills but also find an internship or (part-time) job
                        that suits you.
                    </p>
                    <p class="text-base sm:text-xl">
                        Finding an internship – or later a graduation internship
                        – turns out to be quite a challenge, causing more and
                        more young people to give up. A shame, isn’t it?
                    </p>
                    <div
                        class="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-x-6"
                    >
                        <a
                            href="/projects"
                            class="rounded-md bg-[#ffd736] px-3.5 py-2.5 text-sm font-semibold text-gray-800 shadow-xs hover:bg-[#fad84f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
                            >Get started</a
                        >
                        <a
                            href="/about"
                            class="text-sm/6 font-semibold text-white"
                            >Learn more <span aria-hidden="true">→</span></a
                        >
                    </div>
                    <div
                        class="relative w-full max-w-full sm:max-w-xl mx-auto sm:mx-0"
                    >
                        <iframe
                            class="w-full h-[200px] sm:h-[315px]"
                            src="https://www.youtube.com/embed/pZl8XzzPL-E?si=mMstBq26NRLApA66"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </article>
    </section>

    <div class="mt-12 p-12">
        <h2 class="text-3xl font-bold mb-6 text-center text-yellow-500">
            Why Choose Us?
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-yellow-500 text-black p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-bold mb-2">Students</h3>
                <p>Gain Real-World Experience</p>
                <img src={Student} alt="student" class="w-16 h-auto mt-4" />
            </div>
            <div class="bg-yellow-500 text-black p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-bold mb-2">Companies</h3>
                <p>Discover Motivated Talent</p>
                <img src={Company} alt="student" class="w-16 h-auto mt-4" />
            </div>
            <div class="bg-yellow-500 text-black p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-bold mb-2">Education</h3>
                <p>Prepare Students for the Future</p>
                <img src={Education} alt="student" class="w-16 h-auto mt-4" />
            </div>
            <div class="bg-yellow-500 text-black p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-bold mb-2">Community</h3>
                <p>Collaborate and Innovate</p>
                <img src={Community} alt="student" class="w-16 h-auto mt-4" />
            </div>
        </div>
    </div>
    <hr class="w-3/4 flex mx-auto border-t-2 border-yellow-500 my-8" />

    <div
        class="flex flex-col lg:flex-row justify-center text-white gap-8 lg:gap-16 p-8 lg:p-24"
    >
        <div class="w-full lg:w-[400px] text-center">
            <h2 class="text-3xl lg:text-4xl font-bold mb-4 text-[#ffd736]">
                Newsletter
            </h2>
            <p class="text-base lg:text-xl">
                Welkom bij de nieuwsbrief van DIVD.works! Wil je op de hoogte
                blijven van de laatste updates, nieuwe projecten, inspirerende
                verhalen van studenten en bedrijven? Meld je dan aan voor onze
                nieuwsbrief!
            </p>

            <a target="_blank" href="https://newsroom.divd.works"
                ><button
                    class="mt-8 lg:mt-20 w-full lg:w-32 h-12 bg-[#ffd736] text-black rounded-lg hover:bg-[#e6c02f] border-gray-700"
                >
                    to newsletter
                </button></a
            >

            <div class="mt-8 lg:mt-12" id="custom-substack-embed"></div>
        </div>

        <div
            class="border-4 flex bg-[#ffd736] border-gray-700 w-full justify-center lg:w-[400px] h-auto lg:h-[520px] flex flex-col gap-8 lg:gap-16 rounded-lg p-6"
        >
            <p class="text-center text-xl lg:text-2xl font-bold text-black">
                DIVD.works
            </p>
            <hr class="border-2 w-3/4 mx-auto border-gray-700" />
            <hr class="border-2 w-3/4 mx-auto border-gray-700" />
            <hr class="border-2 w-3/4 mx-auto border-gray-700" />
            <hr class="border-2 w-3/4 mx-auto border-gray-700" />
            <hr class="border-2 w-3/4 mx-auto border-gray-700" />
            <hr class="border-2 w-3/4 mx-auto border-gray-700" />
        </div>
    </div>

    <div class=" text-yellow-500 text-center p-12">
        <h2 class="text-4xl font-bold mb-4">Ready to Bridge the Gap?</h2>
        <a href="/about"
            ><button
                class="bg-yellow-500 text-black px-8 py-4 rounded-md font-bold hover:bg-yellow-600"
                >Join Now</button
            ></a
        >
    </div>
</article>
