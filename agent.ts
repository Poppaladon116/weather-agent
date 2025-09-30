import { Agent, Memory, LocalVectorStore } from "@mastra/core";

// Option 1: Ephemeral (in-memory) store for short sessions
const memory = new Memory();

// Option 2: Local disk-based or vector store for persistent memory
const memory = new Memory({
  provider: new LocalVectorStore({ path: "./memory" })
});

const agent = new Agent({
  model: "openai/gpt-4",
  memory, // Attach memory here
  // ...other settings or tools
});