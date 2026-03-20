import { AbsoluteFill, interpolate, staticFile, Sequence } from "remotion";
import { Audio } from "@remotion/media";
import {
  TransitionSeries,
  linearTiming,
  springTiming,
} from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";
import { MacBackground } from "./components/MacBackground";
import { TitleCard } from "./components/TitleCard";
import { ProblemCard } from "./components/ProblemCard";
import { BridgeCard } from "./components/BridgeCard";
import { ResolutionCard } from "./components/ResolutionCard";
import { PitchCard } from "./components/PitchCard";
import {
  ContinuousTerminalScene,
  computeContinuousDuration,
} from "./components/ContinuousTerminalScene";
import {
  sceneManifest,
  sceneInstall,
  sceneLockfile,
  sceneCompose,
  sceneAudit,
  scenePack,
} from "./data/scenes";
import { TIMING } from "./styles/theme";

const T = TIMING.TRANSITION_FRAMES;

const TITLE_DUR = 135;
const PROBLEM_DUR = 215;
const BRIDGE_DUR = 125;
const RESOLUTION_DUR = 170;
const PITCH_DUR = 145;

// Continuous terminal groups — persistent terminal, commands run sequentially
const GROUP_1_SCENES = [sceneManifest, sceneInstall, sceneLockfile];
const GROUP_2_SCENES = [sceneCompose, sceneAudit, scenePack];
const GROUP_1_DUR = computeContinuousDuration(GROUP_1_SCENES);
const GROUP_2_DUR = computeContinuousDuration(GROUP_2_SCENES);

const SCENE_DURATIONS = [
  TITLE_DUR,
  PROBLEM_DUR,
  BRIDGE_DUR,
  GROUP_1_DUR,
  GROUP_2_DUR,
  RESOLUTION_DUR,
  PITCH_DUR,
];

const NUM_TRANSITIONS = SCENE_DURATIONS.length - 1;

export const TOTAL_DURATION =
  SCENE_DURATIONS.reduce((a, b) => a + b, 0) - NUM_TRANSITIONS * T;

// Effective start frames for audio cue placement
const BRIDGE_START = TITLE_DUR + PROBLEM_DUR - 2 * T;
const GROUP2_START =
  TITLE_DUR + PROBLEM_DUR + BRIDGE_DUR + GROUP_1_DUR - 4 * T;

export const MyComposition = () => {
  const fadeSpring = (
    <TransitionSeries.Transition
      presentation={fade()}
      timing={springTiming({ config: { damping: 200 }, durationInFrames: T })}
    />
  );

  const slideFromRight = (
    <TransitionSeries.Transition
      presentation={slide({ direction: "from-right" })}
      timing={springTiming({ config: { damping: 200 }, durationInFrames: T })}
    />
  );

  const wipeFromRight = (
    <TransitionSeries.Transition
      presentation={wipe({ direction: "from-right" })}
      timing={linearTiming({ durationInFrames: T })}
    />
  );

  return (
    <AbsoluteFill>
      <MacBackground />

      {/* Background music — low volume, fade in/out */}
      <Audio
        src={staticFile("music/background.mp3")}
        volume={(f) => {
          const fadeIn = interpolate(f, [0, 45], [0, 0.15], {
            extrapolateRight: "clamp",
          });
          const fadeOut = interpolate(
            f,
            [TOTAL_DURATION - 60, TOTAL_DURATION],
            [0.15, 0],
            { extrapolateLeft: "clamp" },
          );
          return Math.min(fadeIn, fadeOut);
        }}
      />

      {/* Subtle whoosh at terminal entry transitions */}
      <Sequence from={BRIDGE_START + BRIDGE_DUR - T}>
        <Audio src={staticFile("sfx/whoosh.mp3")} volume={0.1} />
      </Sequence>
      <Sequence from={GROUP2_START + GROUP_2_DUR - T}>
        <Audio src={staticFile("sfx/whoosh.mp3")} volume={0.1} />
      </Sequence>

      <TransitionSeries>
        {/* Phase 1: Opening — what is APM */}
        <TransitionSeries.Sequence durationInFrames={TITLE_DUR}>
          <TitleCard />
        </TransitionSeries.Sequence>

        {fadeSpring}

        {/* Phase 2: The Problem */}
        <TransitionSeries.Sequence durationInFrames={PROBLEM_DUR}>
          <ProblemCard />
        </TransitionSeries.Sequence>

        {fadeSpring}

        {/* Phase 3: The Pivot — "Now there is." */}
        <TransitionSeries.Sequence durationInFrames={BRIDGE_DUR}>
          <BridgeCard />
        </TransitionSeries.Sequence>

        {slideFromRight}

        {/* Phase 4: Declare → Deploy → Reproduce (persistent terminal) */}
        <TransitionSeries.Sequence durationInFrames={GROUP_1_DUR}>
          <ContinuousTerminalScene
            scenes={GROUP_1_SCENES}
            totalDuration={GROUP_1_DUR}
          />
        </TransitionSeries.Sequence>

        {wipeFromRight}

        {/* Phase 5: Compose → Secure → Ship (persistent terminal) */}
        <TransitionSeries.Sequence durationInFrames={GROUP_2_DUR}>
          <ContinuousTerminalScene
            scenes={GROUP_2_SCENES}
            totalDuration={GROUP_2_DUR}
          />
        </TransitionSeries.Sequence>

        {slideFromRight}

        {/* Phase 6: Resolution — mirrors the problem, now solved */}
        <TransitionSeries.Sequence durationInFrames={RESOLUTION_DUR}>
          <ResolutionCard />
        </TransitionSeries.Sequence>

        {fadeSpring}

        {/* Phase 7: Closing */}
        <TransitionSeries.Sequence durationInFrames={PITCH_DUR}>
          <PitchCard />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
