<script lang="ts">
    import { Link } from "svelte-navigator";
    import { Temporal } from "temporal-polyfill";

    const copyright_year: number =
        typeof Temporal !== "undefined"
            ? Temporal.Now.plainDateISO().year
            : new Date().getFullYear();

    import Discord from "../assets/icons/discord.svg";
    import Privacy from "../assets/icons/privacy.svg";
    import Youtube from "../assets/icons/youtube.svg";
    import type { SvgIcon } from "../types";

    const svg_icon: SvgIcon[] = [
        {
            url: "https://www.youtube.com/@DIVD-works",
            target: "_blank",
            name: "Youtube",
            source: Youtube,
            alt: "Youtube icon",
        },
        {
            url: "https://discord.gg/uRTHZm9GgT",
            target: "_blank",
            name: "Discord",
            source: Discord,
            alt: "Discord icon",
        },
        {
            url: "/privacystatement",
            target: "_self",
            name: "Privacy",
            source: Privacy,
            alt: "Privacy icon",
        },
    ];
</script>

<!-- Footer -->
<footer class="bg-white dark:bg-black space-y-8">
    <article
        class="mx-auto max-w-7xl px-6 pb-10 lg:px-8 lg:pb-16 border-t border-white/10 pt-8 md:flex
        md:items-center md:justify-between"
    >
        <div class="flex gap-x-4 md:order-2">
            {#each svg_icon as { url, target, name, source, alt }, _}
                <a
                    href={url}
                    class="invert-0 hover:opacity-70 dark:invert dark:hover:opacity-80"
                    {target}
                >
                    <span class="sr-only">{name}</span>
                    <figure class="w-8 h-8">
                        <img src={source} {alt} />
                    </figure>
                </a>
            {/each}
        </div>
        <p class="mt-8 text-base text-black dark:text-white md:order-1 md:mt-0">
            &copy; {copyright_year}
            <Link to="/" class="font-semibold">DIVD.works</Link>, Inc. All
            rights reserved.
        </p>
    </article>
</footer>
