<script lang="ts">
    import { Link } from "svelte-navigator";
    import { Temporal } from "temporal-polyfill";

    const copyright_year: number =
        typeof Temporal !== "undefined"
            ? Temporal.Now.plainDateISO().year
            : new Date().getFullYear();

    import Discord from "../assets/icons/discord.svg";
    import Youtube from "../assets/icons/youtube.svg";
</script>

<!-- Footer -->
<footer class="bg-white dark:bg-black space-y-8">
    <div class="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        <div
            class="mt-12 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between"
        >
            <div class="flex gap-x-4 md:order-2">
                <a
                    href="https://www.youtube.com/@DIVD-works"
                    class="invert-0 hover:opacity-70 dark:invert dark:hover:opacity-80"
                    target="_blank"
                >
                    <span class="sr-only">Youtube</span>
                    <figure class="w-8 h-8">
                        <img src={Youtube} alt="Youtube icon" />
                    </figure>
                </a>
                <a
                    href="https://discord.gg/uRTHZm9GgT"
                    class="invert-0 hover:opacity-70 dark:invert dark:hover:opacity-80"
                    target="_blank"
                >
                    <span class="sr-only">Discord</span>
                    <figure class="w-8 h-8">
                        <img src={Discord} alt="Discord icon" />
                    </figure>
                </a>
            </div>
            <p
                class="mt-8 text-base text-black dark:text-white md:order-1 md:mt-0"
            >
                &copy; {copyright_year}
                <Link to="/" class="font-semibold">DIVD.works</Link>, Inc. All
                rights reserved.
            </p>
        </div>
    </div>
</footer>
