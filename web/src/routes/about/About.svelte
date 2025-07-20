<script lang="ts">
    // Enable dark mode based on system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
    }

    import DIVDWorks from "../../assets/divd-works-logo.svg";
    import Akiko from "../../assets/team/akiko.jpeg";
    import Baran from "../../assets/team/baran.jpeg";
    import Dirk from "../../assets/team/Dirk.jpeg";
    import Liam from "../../assets/team/Liam.jpeg";
    import Loek from "../../assets/team/Loek.jpeg";
    import Luc from "../../assets/team/Luc.jpeg";
    import CISO from "../../assets/team/stock.jpg";
    import Victor from "../../assets/team/Victor.jpg";
</script>

<svelte:head>
    <title>About - DIVD.works</title>
</svelte:head>

<section
    class="bg-black text-[#FFD736] dark:bg-black dark:text-[#FFD736] m-0 p-0"
>
    <!-- Main Content -->
    <article class="container mx-auto py-10 px-4 flex flex-col items-center">
        <a href="/"
            ><img
                class="logo glow-filter w-120"
                src={DIVDWorks}
                alt="DIVD Works Logo"
            /></a
        >
        <!-- Introduction Section -->
        <section class="text-center max-w-2xl">
            <div class="header-text mb-6" aria-hidden="true">
                <br />
                <span class="glow-filter" data-text="Powered by Purpose"
                    >Powered by Purpose</span
                >
            </div>
            <p
                class="text-2xl text-[#ffd736] dark:text-[#ffd736] font-bold mb-6"
            >
                The goal of the DIVD.works project is to create a platform that
                brings together young digital talent and employers. We help you
                not only further develop your skills but also find an internship
                or (part-time) job that suits you.
            </p>
            <p
                class="text-2xl text-[#ffd736] dark:text-[#ffd736] font-bold mb-6"
            >
                Finding an internship – or later a graduation internship – turns
                out to be quite a challenge, causing more and more young people
                to give up. A shame, isn’t it?
            </p>
        </section>

        <div
            class="w-full flex flex-col md:flex-row gap-4 mt-12 justify-center items-center"
        >
            <div
                class="text-[#ffd736] dark:text-[#ffd736] font-bold uppercase text-xl cursor-pointer inline-block font-inherit text-white transition-all duration-100 ease-in bg-gray-800 border-2 border-[#ffd736] hover:bg-[#ffd736] hover:text-black rounded-2xl"
                style="width: 250px; height: 60px; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 10px 2px #ffd736;"
            >
                <button><a href="/join">Join our cause!</a></button>
            </div>
            <div
                class="text-[#ffd736] dark:text-[#ffd736] font-bold uppercase text-xl cursor-pointer inline-block font-inherit text-white transition-all duration-100 ease-in bg-gray-800 border-2 border-[#ffd736] hover:bg-[#ffd736] hover:text-black rounded-2xl"
                style="width: 250px; height: 60px; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 10px 2px #ffd736;"
            >
                <button
                    ><a href="/apply/internship/">Looking for an Internship?</a
                    ></button
                >
            </div>
        </div>
    </article>
</section>

<article class="flex justify-center">
    <!-- Team Section -->
    <section
        class="px-3 lg:px-0 py-6 lg:py-12 flex flex-col items-center bg-white dark:bg-black gap-10
    lg:gap-6 text-center lg:text-left justify-center w-full lg:w-4/5"
    >
        <h3 class="text-2xl font-bold text-center mb-8 text-yellow-400">
            DIVD.works Team
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            <!-- Team Member -->
            <div
                class="bg-white p-6 rounded-lg shadow-md text-center dark:bg-gray-800 flex flex-col items-center"
            >
                <img
                    src={Victor}
                    draggable="false"
                    alt="Victor Gevers"
                    class="w-48 h-48 mx-auto rounded-full mb-4 border-2 border-[#ffd736]"
                />
                <h4 class="text-xl font-bold">Victor Gevers</h4>
                <p class="text-[#ffd736] dark:text-[#ffd736]">CEO</p>
                <li class="bg-[#ffd736] h-[1px] w-[233px] mt-4"></li>
            </div>

            <div
                class="bg-white p-6 rounded-lg shadow-md text-center dark:bg-gray-800 flex flex-col items-center"
            >
                <img
                    src={Akiko}
                    draggable="false"
                    alt="Akiko Takashima"
                    class="w-48 h-48 mx-auto rounded-full mb-4 border-2 border-yellow-400"
                />
                <h4 class="text-xl font-bold">Akiko Takashima</h4>
                <p class="text-[#ffd736] dark:text-[#ffd736]">
                    Chief Financial Officer
                </p>
                <li class="bg-[#ffd736] h-[1px] w-[233px] mt-4"></li>
            </div>

            <div
                class="bg-white p-6 rounded-lg shadow-md text-center dark:bg-gray-800 flex flex-col items-center"
            >
                <img
                    src={CISO}
                    draggable="false"
                    alt="Jared Hofman"
                    class="w-48 h-48 mx-auto rounded-full mb-4 border-2 border-yellow-400"
                />
                <h4 class="text-xl font-bold">Jared Hofman</h4>
                <p class="text-[#ffd736] dark:text-[#ffd736]">
                    Senior Vice President, Business Operations
                </p>
                <li class="bg-[#ffd736] h-[1px] w-[233px] mt-4"></li>
            </div>

            <div
                class="bg-white p-6 rounded-lg shadow-md text-center dark:bg-gray-800 flex flex-col items-center"
            >
                <img
                    src={Liam}
                    draggable="false"
                    alt="Liam Plokkaar"
                    class="w-48 h-48 mx-auto rounded-full mb-4 border-2 border-yellow-400"
                />
                <h4 class="text-xl font-bold">Liam Plokkaar</h4>
                <p class="text-[#ffd736] dark:text-[#ffd736]">
                    Senior Vice President, Sales
                </p>
                <li class="bg-[#ffd736] h-[1px] w-[233px] mt-4"></li>
            </div>

            <div
                class="bg-white p-6 rounded-lg shadow-md text-center dark:bg-gray-800 flex flex-col items-center"
            >
                <img
                    src={Baran}
                    draggable="false"
                    alt="Baran Canakci"
                    class="w-48 h-48 mx-auto rounded-full mb-4 border-2 border-yellow-400"
                />
                <h4 class="text-xl font-bold">Baran Canakci</h4>
                <p class="text-[#ffd736] dark:text-[#ffd736]">
                    Chief Marketing Officer
                </p>
                <li class="bg-[#ffd736] h-[1px] w-[233px] mt-4"></li>
            </div>

            <div
                class="bg-white p-6 rounded-lg shadow-md text-center dark:bg-gray-800 flex flex-col items-center"
            >
                <img
                    src={Loek}
                    draggable="false"
                    alt="Loek Ota"
                    class="w-48 h-48 mx-auto rounded-full mb-4 border-2 border-yellow-400"
                />
                <h4 class="text-xl font-bold">Loek Ota</h4>
                <p class="text-[#ffd736] dark:text-[#ffd736]">
                    Senior Vice President, Chief People Office
                </p>
                <li class="bg-[#ffd736] h-[1px] w-[233px] mt-4"></li>
            </div>

            <div
                class="bg-white p-6 rounded-lg shadow-md text-center dark:bg-gray-800 flex flex-col items-center"
            >
                <img
                    src={Luc}
                    draggable="false"
                    alt="Luc van Kessel"
                    class="w-48 h-48 mx-auto rounded-full mb-4 border-2 border-yellow-400"
                />
                <h4 class="text-xl font-bold">Luc van Kessel</h4>
                <p class="text-[#ffd736] dark:text-[#ffd736]">
                    Senior Vice President, Support
                </p>
                <li class="bg-[#ffd736] h-[1px] w-[233px] mt-4"></li>
            </div>

            <div
                class="bg-white p-6 rounded-lg shadow-md text-center dark:bg-gray-800 flex flex-col items-center"
            >
                <img
                    src={Dirk}
                    draggable="false"
                    alt="Dirk Rijntalder"
                    class="w-48 h-48 mx-auto rounded-full mb-4 border-2 border-yellow-400"
                />
                <h4 class="text-xl font-bold">Dirk Rijntalder</h4>
                <p class="text-[#ffd736] dark:text-[#ffd736]">
                    Senior Vice President, Chief Legal Officer
                </p>
                <li class="bg-[#ffd736] h-[1px] w-[233px] mt-4"></li>
            </div>

            <div
                class="bg-white p-6 rounded-lg shadow-md text-center dark:bg-gray-800 flex flex-col items-center"
            >
                <img
                    src={CISO}
                    draggable="false"
                    alt="Vacancy"
                    class="w-48 h-48 mx-auto rounded-full mb-4 border-2 border-yellow-400"
                />
                <h4 class="text-xl font-bold">Vacancy</h4>
                <p class="text-[#ffd736] dark:text-[#ffd736]">
                    Senior Vice President, Safety & Core Services
                </p>
                <li class="bg-[#ffd736] h-[1px] w-[233px] mt-4"></li>
            </div>

            <div
                class="bg-white p-6 rounded-lg shadow-md text-center dark:bg-gray-800 flex flex-col items-center"
            >
                <img
                    src={CISO}
                    draggable="false"
                    alt="CISO"
                    class="w-48 h-48 mx-auto rounded-full mb-4 border-2 border-yellow-400"
                />
                <h4 class="text-xl font-bold">CISO</h4>
                <p class="text-[#ffd736] dark:text-[#ffd736]">CISO</p>
                <li class="bg-[#ffd736] h-[1px] w-[233px] mt-4"></li>
            </div>
        </div>
    </section>
</article>
