<script lang="ts">
    const script = <HTMLScriptElement>document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-embedded-agent.js";

    script.onload = (): void => {
        const script2 = <HTMLScriptElement>document.createElement("script");
        script2.textContent = `window.AgentInitializer.init({
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
        });`;
        document.body.appendChild(script2);
    };

    document.body.appendChild(script);
</script>
