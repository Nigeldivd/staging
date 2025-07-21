<script lang="ts">
    import DIVDWorks from "../../assets/divd-works-logo.svg";
    import Slogan from "../../lib/Slogan.svelte";
    import type { Conduct } from "../../types";

    const conduct: Conduct[] = [
        {
            caption: "Professionalism",
            title: "Professionalism",
            description:
                "Employees should avoid situations that create a conflict of interest between their personal interests and the interests of the organization. If a conflict arises, employees must disclose it promptly to their supervisor or the appropriate department.",
            timeline: "one",
        },
        {
            caption: "Confidentiality",
            title: "Confidentiality",
            description:
                "Employees must respect the confidentiality of sensitive information they have access to during their employment. This includes, but is not limited to, customer data, financial information, trade secrets, and intellectual property. Any unauthorized disclosure or use of confidential information is strictly prohibited.",
            timeline: "two",
        },
        {
            caption: "conflict",
            title: "Conflict of Interest",
            description:
                "Employees should avoid situations that create a conflict of interest between their personal interests and the interests of the organization. If a conflict arises, employees must disclose it promptly to their supervisor or the appropriate department.",
            timeline: "three",
        },
        {
            caption: "harassment",
            title: "Anti-Discrimination and Harassment",
            description:
                "We are committed to providing a workplace free from discrimination, harassment, and retaliation. Employees must treat others with fairness, respect their diversity, and refrain from engaging in any form of discriminatory or harassing behavior based on race, color, religion, gender, sexual orientation, age, disability, or any other protected characteristic.",
            timeline: "four",
        },
        {
            caption: "use",
            title: "Use of Company Resources",
            description:
                "All company resources, including equipment, technology, and facilities, should be used responsibly and for legitimate business purposes only. Personal use of company resources should be minimal and in compliance with applicable policies.",
            timeline: "five",
        },
        {
            caption: "compliance",
            title: "Compliance with Laws and Regulations",
            description:
                "Employees must comply with all applicable laws, regulations, and legal obligations related to their job responsibilities. Any illegal activity or violation of these laws can have serious consequences, both for the individual employee and the organization." +
                "Reporting Violations" +
                "If an employee becomes aware of any violations of this code of conduct or witnesses any unethical behavior, they should report it immediately to their supervisor, manager, or the appropriate authority designated by the organization. Retaliation against individuals reporting violations in good faith is strictly prohibited.",
            timeline: "six",
        },
        {
            caption: "consequences",
            title: "Consequences of Non-Compliance",
            description:
                "Violation of this code of conduct may result in disciplinary action, up to and including termination of employment. The consequences will depend on the severity and frequency of the violation, and the circumstances surrounding it.",
            timeline: "seven",
        },
    ];

    export const divd_works: string = DIVDWorks;
</script>

<svelte:head>
    <title>Code of Conduct - DIVD.works</title>
    <meta
        name="description"
        content="Powered by Purpose - The goal of the DIVD.works project is to create a platform
        that brings together young digital talent and employers."
    />
    <meta name="author" content="divd.works" />
    <meta
        name="keywords"
        content="Digital Talent, Online Platform, Internship, DIVD, students"
    />
</svelte:head>

<article class="flex justify-center">
    <section
        class="px-3 lg:px-0 py-6 lg:py-12 flex flex-col items-center bg-white dark:bg-black gap-10
        lg:gap-6 text-center md:text-left justify-center w-full lg:w-2/3"
    >
        <Slogan {divd_works} />

        <article>
            <h2
                class="fluid text-4xl sm:text-5xl text-yellow-400 font-semibold"
            >
                Code of Conduct
            </h2>
            <p class="mt-4 text-xl text-gray-700 dark:text-gray-300">
                A Code of Conduct sets clear expectations for employee behavior,
                fostering a respectful, ethical, and professional workplace. It
                ensures accountability, protects confidential information,
                prevents conflicts of interest, and promotes compliance with
                laws and regulations. By adhering to these guidelines, employees
                contribute to a positive and productive work environment that
                upholds the values and integrity of the organization.
            </p>
            <br />
            <p class="mb-4 text-xl text-gray-700 dark:text-gray-300">
                The <a href="https://github.com/DIVD-works" target="_blank"
                    >DIVD.works project</a
                >
                is about creating an online platform to empower purpose. Connecting
                talent to new opportunities. Contribution guidelines:
                <a
                    href="https://news.victorgevers.com/working-in-the-open-c7517a513c07"
                    target="_blank">Working in the open</a
                >, following our
                <a
                    href="https://docs.google.com/document/d/1egKSxMCJv-G7pxNGPC2hmB24m_iIM-hc1sQe97ZvGbM/edit?usp=sharing"
                    target="_blank">Code of Ethics</a
                > and our project handbook, is how the community can get involved.
            </p>
        </article>
        {#each conduct as { caption, title, description, timeline }, _}
            <article id={caption} style="view-timeline: --{timeline}">
                <div class="heading">
                    <h3
                        class="text-3xl sm:text-4xl text-yellow-400 font-medium"
                    >
                        {title}
                    </h3>
                    <a href={"#" + caption}>
                        <span class="sr-only">{title}</span>
                    </a>
                </div>
                <p class="my-4 text-lg text-black dark:text-white font-light">
                    {description}
                </p>
            </article>
        {/each}

        <hr class="w-full mt-4 text-black dark:text-white" />
    </section>
</article>
