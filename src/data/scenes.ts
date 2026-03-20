// APM Showcase — Scene content data (v2)
// All terminal output is based on real APM CLI output

export type LineType = "command" | "output" | "blank" | "banner";

export interface TerminalLine {
  type: LineType;
  text: string;
  color?: string;
}

export interface SceneHeader {
  hook: string;
  subtitle: string;
}

export interface Scene {
  id: string;
  header?: SceneHeader;
  lines: TerminalLine[];
  /** Total duration including header lead-in */
  durationFrames: number;
}

// --- Phase 3: DECLARE ---
export const sceneManifest: Scene = {
  id: "manifest",
  header: {
    hook: "Declare Once, Install From Anywhere",
    subtitle:
      "From any git host — GitHub, GitLab, Bitbucket, Azure DevOps.",
  },
  durationFrames: 260,
  lines: [
    { type: "command", text: "cat apm.yml" },
    { type: "output", text: "name: your-project", color: "white" },
    { type: "output", text: "version: 1.0.0", color: "white" },
    { type: "output", text: "dependencies:", color: "white" },
    { type: "output", text: "  apm:", color: "white" },
    {
      type: "output",
      text: "    # Skills from any repository",
      color: "dimWhite",
    },
    {
      type: "output",
      text: "    - anthropics/skills/skills/frontend-design",
      color: "cyan",
    },
    {
      type: "output",
      text: "    # Plugins",
      color: "dimWhite",
    },
    {
      type: "output",
      text: "    - github/awesome-copilot/plugins/context-engineering",
      color: "cyan",
    },
    {
      type: "output",
      text: "    # Specific agent primitives from any repository",
      color: "dimWhite",
    },
    {
      type: "output",
      text: "    - github/awesome-copilot/agents/api-architect.agent.md",
      color: "cyan",
    },
    {
      type: "output",
      text: "    # A full APM package with instructions, skills, prompts...",
      color: "dimWhite",
    },
    {
      type: "output",
      text: "    - microsoft/apm-sample-package#v1.0.0",
      color: "cyan",
    },
  ],
};

// --- Phase 4: DEPLOY ---
export const sceneInstall: Scene = {
  id: "install",
  header: {
    hook: "Deploy Everywhere",
    subtitle: "One command. Copilot, Claude, Cursor, OpenCode.",
  },
  durationFrames: 330,
  lines: [
    { type: "command", text: "apm install" },
    {
      type: "output",
      text: "Installing dependencies from apm.yml...",
      color: "dimWhite",
    },
    {
      type: "output",
      text: "Installing APM dependencies (4)...",
      color: "white",
    },
    { type: "blank", text: "" },
    {
      type: "output",
      text: "\u2713 anthropics/skills/skills/frontend-design",
      color: "green",
    },
    {
      type: "output",
      text: "  \u2514\u2500 Skill integrated \u2192 .github/skills/",
      color: "dimWhite",
    },
    {
      type: "output",
      text: "\u2713 github/awesome-copilot/plugins/context-engineering",
      color: "green",
    },
    {
      type: "output",
      text: "  \u2514\u2500 Plugin integrated \u2192 .github/, .claude/, .cursor/, .opencode/",
      color: "dimWhite",
    },
    {
      type: "output",
      text: "\u2713 github/awesome-copilot/agents/api-architect.agent.md",
      color: "green",
    },
    {
      type: "output",
      text: "  \u2514\u2500 Agent integrated \u2192 .github/agents/",
      color: "dimWhite",
    },
    {
      type: "output",
      text: "\u2713 microsoft/apm-sample-package#v1.0.0",
      color: "green",
    },
    {
      type: "output",
      text: "  \u2514\u2500 Instructions \u2192 .github/instructions/",
      color: "dimWhite",
    },
    {
      type: "output",
      text: "  \u2514\u2500 Prompts \u2192 .github/prompts/",
      color: "dimWhite",
    },
    {
      type: "output",
      text: "  \u2514\u2500 Skills \u2192 .github/skills/",
      color: "dimWhite",
    },
    { type: "blank", text: "" },
    {
      type: "output",
      text: "\u2728 Generated apm.lock.yaml with 4 dependencies",
      color: "green",
    },
    {
      type: "output",
      text: "\u2728 Installed 4 APM packages",
      color: "green",
    },
  ],
};

// --- Phase 5: VERIFY ---
export const sceneTree: Scene = {
  id: "tree",
  header: {
    hook: "Portable Across AI Tools",
    subtitle:
      "One install deploys to GitHub Copilot, Claude Code, Cursor and OpenCode.",
  },
  durationFrames: 280,
  lines: [
    { type: "command", text: "tree -L 2 .github .claude .cursor .opencode" },
    { type: "output", text: ".github/", color: "cyan" },
    { type: "output", text: "\u251c\u2500\u2500 agents/", color: "white" },
    {
      type: "output",
      text: "\u2502   \u2514\u2500\u2500 api-architect.agent.md",
      color: "dimWhite",
    },
    { type: "output", text: "\u251c\u2500\u2500 instructions/", color: "white" },
    {
      type: "output",
      text: "\u2502   \u2514\u2500\u2500 apm-sample.instructions.md",
      color: "dimWhite",
    },
    { type: "output", text: "\u251c\u2500\u2500 prompts/", color: "white" },
    {
      type: "output",
      text: "\u2502   \u2514\u2500\u2500 review.prompt.md",
      color: "dimWhite",
    },
    { type: "output", text: "\u2514\u2500\u2500 skills/", color: "white" },
    {
      type: "output",
      text: "    \u2514\u2500\u2500 frontend-design/",
      color: "dimWhite",
    },
    { type: "output", text: ".claude/", color: "cyan" },
    { type: "output", text: "\u2514\u2500\u2500 commands/", color: "white" },
    {
      type: "output",
      text: "    \u2514\u2500\u2500 context-engineering.md",
      color: "dimWhite",
    },
    { type: "output", text: ".cursor/", color: "cyan" },
    { type: "output", text: "\u251c\u2500\u2500 rules/", color: "white" },
    {
      type: "output",
      text: "\u2502   \u2514\u2500\u2500 context-engineering.mdc",
      color: "dimWhite",
    },
    { type: "output", text: "\u2514\u2500\u2500 agents/", color: "white" },
    {
      type: "output",
      text: "    \u2514\u2500\u2500 context-engineering.json",
      color: "dimWhite",
    },
    { type: "output", text: ".opencode/", color: "cyan" },
    { type: "output", text: "\u2514\u2500\u2500 agents/", color: "white" },
    {
      type: "output",
      text: "    \u2514\u2500\u2500 context-engineering.md",
      color: "dimWhite",
    },
  ],
};

// --- Phase 6: REPRODUCE ---
export const sceneLockfile: Scene = {
  id: "lockfile",
  header: {
    hook: "Reproducible by Default",
    subtitle:
      "Every dependency pinned to exact commit SHA. Diff it in PRs.",
  },
  durationFrames: 250,
  lines: [
    { type: "command", text: "cat apm.lock.yaml" },
    { type: "output", text: "lockfile_version: '1'", color: "white" },
    { type: "output", text: "apm_version: 0.8.2", color: "white" },
    { type: "output", text: "dependencies:", color: "white" },
    { type: "blank", text: "" },
    {
      type: "output",
      text: "- repo_url: anthropics/skills",
      color: "cyan",
    },
    {
      type: "output",
      text: "  host: github.com",
      color: "dimWhite",
    },
    {
      type: "output",
      text: "  resolved_commit: a3f8c91d4e27b0c5f1a89de3c6b4f2e8d7a10b3c",
      color: "orange",
    },
    {
      type: "output",
      text: "  virtual_path: skills/frontend-design",
      color: "dimWhite",
    },
    {
      type: "output",
      text: "  is_virtual: true",
      color: "dimWhite",
    },
    { type: "blank", text: "" },
    {
      type: "output",
      text: "- repo_url: github/awesome-copilot",
      color: "cyan",
    },
    {
      type: "output",
      text: "  resolved_commit: d5e1b07f82c3a9e4d6b1f0a5c8e2d7b3f4a6c9e1",
      color: "orange",
    },
    {
      type: "output",
      text: "  virtual_path: plugins/context-engineering",
      color: "dimWhite",
    },
    { type: "blank", text: "" },
    {
      type: "output",
      text: "- repo_url: microsoft/apm-sample-package",
      color: "cyan",
    },
    {
      type: "output",
      text: "  resolved_commit: 789abcde01234f56789a0b1c2d3e4f5a6b7c8d9e",
      color: "orange",
    },
    {
      type: "output",
      text: "  resolved_ref: v1.0.0",
      color: "dimWhite",
    },
    {
      type: "output",
      text: "  deployed_files:",
      color: "dimWhite",
    },
    {
      type: "output",
      text: "  - .github/instructions/apm-sample.instructions.md",
      color: "dimWhite",
    },
    {
      type: "output",
      text: "  - .github/skills/frontend-design",
      color: "dimWhite",
    },
  ],
};

// --- Phase 7: COMPOSE ---
export const sceneCompose: Scene = {
  id: "compose",
  header: {
    hook: "Composable by Design",
    subtitle:
      "Packages depend on packages. Transitive resolution, just like npm.",
  },
  durationFrames: 300,
  lines: [
    {
      type: "command",
      text: "apm install acme-corp/platform-engineering-kit",
    },
    { type: "blank", text: "" },
    {
      type: "output",
      text: "Resolving dependency tree...",
      color: "dimWhite",
    },
    { type: "blank", text: "" },
    {
      type: "output",
      text: "  acme-corp/platform-engineering-kit",
      color: "white",
    },
    {
      type: "output",
      text: "  \u251c\u2500\u2500 github/awesome-copilot/plugins/code-review",
      color: "dimWhite",
    },
    {
      type: "output",
      text: "  \u251c\u2500\u2500 anthropics/skills/skills/testing-strategy",
      color: "dimWhite",
    },
    {
      type: "output",
      text: "  \u2514\u2500\u2500 acme-corp/shared-conventions",
      color: "dimWhite",
    },
    { type: "blank", text: "" },
    {
      type: "output",
      text: "\u2713 acme-corp/platform-engineering-kit",
      color: "green",
    },
    {
      type: "output",
      text: "  \u251c\u2500 \u2713 github/awesome-copilot/plugins/code-review",
      color: "green",
    },
    {
      type: "output",
      text: "  \u251c\u2500 \u2713 anthropics/skills/skills/testing-strategy",
      color: "green",
    },
    {
      type: "output",
      text: "  \u2514\u2500 \u2713 acme-corp/shared-conventions",
      color: "green",
    },
    { type: "blank", text: "" },
    {
      type: "output",
      text: "\u2728 Resolved 4 packages (1 direct, 3 transitive)",
      color: "green",
    },
    {
      type: "output",
      text: "\u2728 Updated apm.lock.yaml",
      color: "green",
    },
  ],
};

// --- Phase 7: SECURE ---
export const sceneAudit: Scene = {
  id: "audit",
  header: {
    hook: "Trust, But Verify",
    subtitle: "Agent instructions are code. Scan them like code.",
  },
  durationFrames: 240,
  lines: [
    { type: "command", text: "apm audit" },
    {
      type: "output",
      text: "\ud83d\udd0d Scanning installed packages for hidden characters...",
      color: "dimWhite",
    },
    { type: "blank", text: "" },
    {
      type: "output",
      text: "\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510",
      color: "gray",
    },
    {
      type: "output",
      text: "\u2502 Severity \u2502 File                \u2502 Ln:Col\u2502 Code   \u2502 Description  \u2502",
      color: "gray",
    },
    {
      type: "output",
      text: "\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524",
      color: "gray",
    },
    {
      type: "output",
      text: "\u2502 WARNING  \u2502 .../rules/maps.md   \u2502 85:15 \u2502 U+2060 \u2502 Word joiner  \u2502",
      color: "yellow",
    },
    {
      type: "output",
      text: "\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518",
      color: "gray",
    },
    { type: "blank", text: "" },
    {
      type: "output",
      text: "\u26a0\ufe0f  1 warning(s) found \u2014 hidden Unicode characters detected",
      color: "yellow",
    },
  ],
};

// --- Phase 8: PACK AS PLUGIN ---
export const scenePack: Scene = {
  id: "pack",
  header: {
    hook: "Ship as a Plugin",
    subtitle: "Author plugins with real, resolved dependencies.",
  },
  durationFrames: 200,
  lines: [
    { type: "command", text: "apm pack --format plugin" },
    { type: "blank", text: "" },
    {
      type: "output",
      text: "Packed 12 file(s) \u2192 ./build/platform-engineering-kit-1.0.0",
      color: "green",
    },
    { type: "blank", text: "" },
    {
      type: "output",
      text: "Plugin bundle ready \u2014 plugin.json and plugin-native",
      color: "blue",
    },
    {
      type: "output",
      text: "directories (agents/, skills/, commands/, \u2026).",
      color: "blue",
    },
    {
      type: "output",
      text: "No APM-specific files included.",
      color: "blue",
    },
  ],
};

// --- Phase 8: THE PAYOFF ---
export const scenePayoff: Scene = {
  id: "payoff",
  header: {
    hook: "From Configuration to Code",
    subtitle:
      "Installed packages become active context for your AI tools.",
  },
  durationFrames: 420,
  lines: [
    { type: "command", text: "copilot" },
    { type: "blank", text: "" },
    { type: "banner", text: "copilot-banner.png" },
    { type: "blank", text: "" },
    {
      type: "output",
      text: "  ~/projects/my-app                    claude-opus-4.6",
      color: "dimWhite",
    },
    { type: "blank", text: "" },
    {
      type: "output",
      text: "› scaffold a REST endpoint following our API standards",
      color: "brightWhite",
    },
    { type: "blank", text: "" },
    {
      type: "output",
      text: "● Reading context from installed packages...",
      color: "cyan",
    },
    {
      type: "output",
      text: "  ✓ .github/agents/api-architect.agent.md",
      color: "green",
    },
    {
      type: "output",
      text: "  ✓ .github/instructions/apm-sample.instructions.md",
      color: "green",
    },
    { type: "blank", text: "" },
    {
      type: "output",
      text: '  app.get("/api/v1/health", authenticate(), async (req, res) => {',
      color: "green",
    },
    {
      type: "output",
      text: "    const status = await checkDependencies();",
      color: "green",
    },
    {
      type: "output",
      text: '    res.json({ status, version: "1.0.0" });',
      color: "green",
    },
    {
      type: "output",
      text: "  });",
      color: "green",
    },
    { type: "blank", text: "" },
    {
      type: "output",
      text: "✓ Created src/api/health.ts using project conventions",
      color: "green",
    },
  ],
};

export const ALL_SCENES: Scene[] = [
  sceneManifest,
  sceneInstall,
  sceneTree,
  sceneLockfile,
  sceneCompose,
  sceneAudit,
  scenePack,
  scenePayoff,
];
