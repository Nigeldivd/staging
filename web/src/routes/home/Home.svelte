<script lang="ts">
    import { Link } from "svelte-navigator";
    import DIVDWorks from "../../assets/divd-works-logo.svg";
    import Community from "../../assets/stock/community.png";
    import Company from "../../assets/stock/company.png";
    import Education from "../../assets/stock/education.webp";
    import PoweredByPurpose from "../../assets/stock/Powered-by-purpose.png";
    import Student from "../../assets/stock/student.png";
</script>

<svelte:head>
    <title>Home - DIVD.works</title>
</svelte:head>

<article class="flex justify-center">
    <section
        class="px-3 lg:px-0 py-6 lg:py-12 flex flex-col lg:flex-row items-center bg-white dark:bg-black gap-10
    lg:gap-6 text-center lg:text-left justify-center w-full lg:w-11/12"
    >
        <article
            class="flex-col md:flex-row w-full sm:w-auto flex justify-center md:justify-start items-center"
        >
            <img
                src={PoweredByPurpose}
                alt="Powered by Purpose"
                class="w-full max-w-[300px] sm:max-w-[450px]"
            />
            <article
                class="max-w-full sm:max-w-2xl text-center sm:text-left space-y-4"
            >
                <h1 class="text-3xl sm:text-5xl font-bold text-yellow-400">
                    Powered by Purpose
                </h1>
                <p class="text-base sm:text-xl text-black dark:text-white">
                    The goal of the DIVD.works project is to create a platform
                    that brings together young digital talent and employers. We
                    help you not only further develop your skills but also find
                    an internship or (part-time) job that suits you.
                </p>
                <p class="text-base sm:text-xl text-black dark:text-white">
                    Finding an internship – or later a graduation internship –
                    turns out to be quite a challenge, causing more and more
                    young people to give up. A shame, isn’t it?
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
                        class="text-sm/6 font-semibold text-white py-1.5"
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
            </article>
        </article>
    </section>
</article>

<hr class="w-11/12 lg:w-2/3 flex mx-auto border-t-2 border-yellow-500 my-8" />

<article class="flex justify-center">
    <section>
        <h2 class="text-4xl font-bold mb-6 text-center text-yellow-400">
            Why Choose Us?
        </h2>
        <article class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
                class="bg-gray-800 text-black p-6 rounded-lg shadow-md dark:bg-gray-200"
            >
                <h3 class="text-xl font-bold mb-2">Students</h3>
                <p>Gain Real-World Experience</p>
                <figure>
                    <img src={Student} alt="student" class="w-16 h-auto mt-4" />
                </figure>
            </div>
            <div
                class="bg-gray-800 text-black p-6 rounded-lg shadow-md dark:bg-gray-200"
            >
                <h3 class="text-xl font-bold mb-2">Companies</h3>
                <p>Discover Motivated Talent</p>
                <figure>
                    <img src={Company} alt="student" class="w-16 h-auto mt-4" />
                </figure>
            </div>
            <div
                class="bg-gray-800 text-black p-6 rounded-lg shadow-md dark:bg-gray-200"
            >
                <h3 class="text-xl font-bold mb-2">Education</h3>
                <p>Prepare Students for the Future</p>
                <figure>
                    <img
                        src={Education}
                        alt="student"
                        class="w-16 h-auto mt-4"
                    />
                </figure>
            </div>
            <div
                class="bg-gray-800 text-black p-6 rounded-lg shadow-md dark:bg-gray-200"
            >
                <h3 class="text-xl font-bold mb-2">Community</h3>
                <p>Collaborate and Innovate</p>
                <figure>
                    <img
                        src={Community}
                        alt="student"
                        class="w-16 h-auto mt-4"
                    />
                </figure>
            </div>
        </article>
    </section>
</article>

<hr class="w-11/12 lg:w-2/3 flex mx-auto border-t-2 border-yellow-500 my-8" />

<article class="flex justify-center">
    <section
        class="px-3 lg:px-0 py-6 lg:py-12 flex flex-col md:flex-row items-start bg-white dark:bg-black gap-10
        lg:gap-6 text-center lg:text-left justify-center w-full lg:w-2/3"
    >
        <article class="w-full lg:w-[400px] text-center">
            <h2 class="text-yellow-400 text-5xl font-semibold">Newsletter</h2>
            <p class="text-base lg:text-xl text-black dark:text-white my-16">
                Welkom bij de nieuwsbrief van DIVD.works! Wil je op de hoogte
                blijven van de laatste updates, nieuwe projecten, inspirerende
                verhalen van studenten en bedrijven? Meld je dan aan voor onze
                nieuwsbrief!
            </p>

            <a target="_blank" href="https://newsroom.divd.works">
                <button
                    class="w-full lg:w-40 h-12 bg-[#ffd736] text-black rounded-lg
                    hover:bg-[#e6c02f] border-gray-700 cursor-pointer text-xl font-medium"
                >
                    to newsletter
                </button>
            </a>

            <div class="mt-8 lg:mt-12" id="custom-substack-embed"></div>
        </article>

        <article
            class="border-4 bg-[#ffd736] border-gray-700 w-full justify-center lg:w-[400px] h-auto lg:h-[520px] flex flex-col gap-8 lg:gap-16 rounded-lg p-6"
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
            <hr class="border-2 w-3/4 mx-auto border-gray-700 lg:hidden" />
        </article>
    </section>
</article>

<hr class="w-11/12 lg:w-2/3 flex mx-auto border-t-2 border-yellow-500 my-8" />

<article class="flex justify-center">
    <section
        class="px-3 lg:px-0 py-6 lg:py-12 flex flex-col items-center bg-white dark:bg-black gap-10
        lg:gap-6 text-center lg:text-left justify-center w-full lg:w-2/3"
    >
        <h2 class="text-yellow-400 text-5xl mb-6 font-semibold">
            Ready to Bridge the Gap?
        </h2>
        <Link to="/join">
            <button
                class="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-md font-bold
                hover:bg-gray-800 text-xl cursor-pointer hover:dark:bg-gray-200"
            >
                Join Now
            </button>
        </Link>
    </section>
</article>

<hr class="w-11/12 lg:w-2/3 flex mx-auto border-t-2 border-yellow-500 my-8" />

<section
    class="px-3 lg:px-0 flex flex-col items-center bg-white dark:bg-black gap-10
    lg:gap-6 text-center lg:text-left justify-center w-full lg:w-2/3"
></section>
