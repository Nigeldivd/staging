/// <reference types="@rsbuild/core/types" />
/// <reference types="svelte" />

interface AgentInitializerType {
  init(config: {
    agentRenderURL: string;
    rootId: string;
    formID: string;
    queryParams: string[];
    domain: string;
    isDraggable: boolean;
    background: string;
    buttonBackgroundColor: string;
    buttonIconColor: string;
    variant: boolean;
    customizations: {
      greeting: string;
      greetingMessage: string;
      pulse: string;
      position: string;
    };
    isVoice: undefined | boolean;
    [key: string]: any; // For any other properties that might be accepted
  }): void;
}

interface Window {
  AgentInitializer: AgentInitializerType;
}
