import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { COLORS, FONT } from "../styles/theme";

export const BridgeCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headProgress = spring({
    frame,
    fps,
    config: { damping: 200 },
  });
  const headY = interpolate(headProgress, [0, 1], [24, 0]);
  const headOpacity = interpolate(headProgress, [0, 0.6], [0, 1], {
    extrapolateRight: "clamp",
  });

  const installProgress = spring({
    frame: frame - 40,
    fps,
    config: { damping: 200 },
  });
  const installY = interpolate(installProgress, [0, 1], [18, 0]);
  const installOpacity = interpolate(installProgress, [0, 0.6], [0, 1], {
    extrapolateRight: "clamp",
  });

  const winProgress = spring({
    frame: frame - 58,
    fps,
    config: { damping: 200 },
  });
  const winY = interpolate(winProgress, [0, 1], [14, 0]);
  const winOpacity = interpolate(winProgress, [0, 0.6], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            fontFamily: FONT.sans,
            color: COLORS.brightWhite,
            letterSpacing: -1,
            opacity: headOpacity,
            transform: `translateY(${headY}px)`,
          }}
        >
          Meet APM.
        </div>

        {/* macOS / Linux */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            opacity: installOpacity,
            transform: `translateY(${installY}px)`,
          }}
        >
          <div
            style={{
              fontSize: 18,
              fontFamily: FONT.sans,
              color: COLORS.dimWhite,
              letterSpacing: 1,
              textTransform: "uppercase" as const,
            }}
          >
            macOS / Linux
          </div>
          <div
            style={{
              fontSize: 24,
              fontFamily: FONT.mono,
              color: COLORS.green,
              backgroundColor: "rgba(106, 153, 85, 0.06)",
              border: "1px solid rgba(106, 153, 85, 0.18)",
              borderRadius: 8,
              padding: "10px 24px",
            }}
          >
            curl -sSL https://aka.ms/apm | sh
          </div>
        </div>

        {/* Windows */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            opacity: winOpacity,
            transform: `translateY(${winY}px)`,
          }}
        >
          <div
            style={{
              fontSize: 18,
              fontFamily: FONT.sans,
              color: COLORS.dimWhite,
              letterSpacing: 1,
              textTransform: "uppercase" as const,
            }}
          >
            Windows
          </div>
          <div
            style={{
              fontSize: 24,
              fontFamily: FONT.mono,
              color: COLORS.blue,
              backgroundColor: "rgba(86, 156, 214, 0.06)",
              border: "1px solid rgba(86, 156, 214, 0.18)",
              borderRadius: 8,
              padding: "10px 24px",
            }}
          >
            irm https://aka.ms/apm-win | iex
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
