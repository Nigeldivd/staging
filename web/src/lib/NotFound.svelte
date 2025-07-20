<script lang="ts">
    document.getElementsByTagName("body")[0].style =
        "height: 100vh; overflow: hidden;";

    import { ExclamationCircle, Icon } from "svelte-hero-icons";
    import { Link } from "svelte-navigator";
</script>

<svelte:head>
    <title>NotFound - DIVD.works</title>
</svelte:head>

<article class="flex justify-center">
    <section
        class="px-3 lg:px-0 py-6 lg:py-12 flex flex-col lg:flex-row items-center bg-white dark:bg-black gap-10
    lg:gap-6 text-center lg:text-left justify-center w-full lg:w-2/3 h-[66.4vh] md:h-[76.9vh] lg:h-[73.9vh]"
    >
        <article>
            <h1 class="text-yellow-400 text-5xl mb-8 font-semibold">
                Page not found
            </h1>
            <p class="text-gray-700 dark:text-gray-300 text-lg">
                The page you are looking for doesn't exist and couldn't be
                found. Please check the URL or return back to the
                <Link to="/" class="text-yellow-400">homepage</Link>.
            </p>
        </article>
        <article>
            <Icon
                src={ExclamationCircle}
                class="text-black dark:text-yellow-400 w-32 error"
            />
        </article>
    </section>
</article>

<style>
    :global(.error) {
        animation: move_error 4s ease-in-out running infinite;
    }

    @keyframes move_error {
        0% {
            transform: translateY(0) rotate(-10deg);
            opacity: 0.7;
        }
        50% {
            transform: translateY(-50px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(0) rotate(-10deg);
            opacity: 0.7;
        }
    }

    @media all and (prefers-reduced-motion: reduce) {
        :global(.error) {
            animation: none;
        }
    }
</style>
