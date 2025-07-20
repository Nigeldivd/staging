<script lang="ts">
    import { Route, Router } from "svelte-navigator";
    import DIVDWorks from "./assets/divd-works-logo.svg";
    import Footer from "./lib/Footer.svelte";
    import Header from "./lib/Header.svelte";
    import NotFound from "./lib/NotFound.svelte";
    import About from "./routes/about/About.svelte";
    import Home from "./routes/home/Home.svelte";
    import How from "./routes/how/How.svelte";
    import Join from "./routes/join/Join.svelte";
    import Login from "./routes/login/Login.svelte";
    import Projects from "./routes/projects/Projects.svelte";
</script>

<svelte:head>
    <link rel="icon" href={DIVDWorks} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charset="UTF-8" />
</svelte:head>

<Router>
    <Header />
    <main class="w-full bg-white dark:bg-black">
        <Route path="/" component={Home} />
        <Route path="/how" component={How} />
        <Route path="/join" component={Join} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="*" component={NotFound} />
    </main>
    <Footer />
</Router>
