import { motion, useTransform, type MotionValue } from "framer-motion";

interface NetworkIllustrationProps {
  mouseX?: MotionValue<number>;
  mouseY?: MotionValue<number>;
  className?: string;
}

type NodeColor = "signal" | "circuit" | "core";

interface GraphNode {
  id: string;
  x: number;
  y: number;
  r: number;
  color: NodeColor;
}

interface GraphEdge {
  from: string;
  to: string;
  bridge?: boolean;
}

const NODES: GraphNode[] = [
  // Left cluster — cybersecurity (signal blue)
  { id: "l1", x: 96, y: 150, r: 5, color: "signal" },
  { id: "l2", x: 70, y: 260, r: 7, color: "signal" },
  { id: "l3", x: 130, y: 330, r: 4.5, color: "signal" },
  { id: "l4", x: 60, y: 400, r: 5.5, color: "signal" },
  { id: "l5", x: 150, y: 210, r: 4, color: "signal" },

  // Center — shared hub (the connection between both practices)
  { id: "c1", x: 280, y: 270, r: 9, color: "core" },

  // Right cluster — web development (circuit green)
  { id: "r1", x: 464, y: 150, r: 5, color: "circuit" },
  { id: "r2", x: 492, y: 260, r: 7, color: "circuit" },
  { id: "r3", x: 428, y: 330, r: 4.5, color: "circuit" },
  { id: "r4", x: 500, y: 400, r: 5.5, color: "circuit" },
  { id: "r5", x: 410, y: 210, r: 4, color: "circuit" },
];

const EDGES: GraphEdge[] = [
  { from: "l1", to: "l5" },
  { from: "l5", to: "l2" },
  { from: "l2", to: "l3" },
  { from: "l3", to: "l4" },
  { from: "l2", to: "l4" },
  { from: "l5", to: "c1", bridge: true },
  { from: "l3", to: "c1", bridge: true },

  { from: "r1", to: "r5" },
  { from: "r5", to: "r2" },
  { from: "r2", to: "r3" },
  { from: "r3", to: "r4" },
  { from: "r2", to: "r4" },
  { from: "r5", to: "c1", bridge: true },
  { from: "r3", to: "c1", bridge: true },
];

const colorMap: Record<NodeColor, string> = {
  signal: "#00BFFF",
  circuit: "#22C55E",
  core: "#E7ECF3",
};

function findNode(id: string) {
  const node = NODES.find((n) => n.id === id);
  if (!node) throw new Error(`Unknown node id: ${id}`);
  return node;
}

export function NetworkIllustration({ mouseX, mouseY, className }: NetworkIllustrationProps) {
  const zero = { get: () => 0 } as MotionValue<number>;
  const rotateY = useTransform(mouseX ?? zero, [-0.5, 0.5], [-8, 8]);
  const rotateX = useTransform(mouseY ?? zero, [-0.5, 0.5], [6, -6]);

  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
    >
      <svg
        viewBox="0 0 560 560"
        className="h-full w-full"
        role="img"
        aria-label="Abstract illustration of two connected networks, representing cybersecurity and web development converging at Iconic Hub"
      >
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00BFFF" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#00BFFF" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="bridgeGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00BFFF" />
            <stop offset="100%" stopColor="#22C55E" />
          </linearGradient>
        </defs>

        {/* faint outer frame — a quiet geometric container, not a literal shield */}
        <motion.polygon
          points="280,40 500,160 500,400 280,520 60,400 60,160"
          fill="none"
          stroke="white"
          strokeOpacity="0.06"
          strokeWidth="1"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <circle cx="280" cy="270" r="70" fill="url(#coreGlow)" />

        {/* edges */}
        {EDGES.map((edge, i) => {
          const a = findNode(edge.from);
          const b = findNode(edge.to);
          return (
            <motion.line
              key={`${edge.from}-${edge.to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={edge.bridge ? "url(#bridgeGradient)" : colorMap[a.color]}
              strokeOpacity={edge.bridge ? 0.7 : 0.35}
              strokeWidth={edge.bridge ? 1.6 : 1.1}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.15 * i, ease: "easeInOut" }}
            />
          );
        })}

        {/* nodes */}
        {NODES.map((node, i) => (
          <g key={node.id}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill={node.color === "core" ? "#050816" : colorMap[node.color]}
              stroke={node.color === "core" ? colorMap.signal : "none"}
              strokeWidth={node.color === "core" ? 2 : 0}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.08 * i + 0.4, ease: "backOut" }}
            />
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill="none"
              stroke={node.color === "core" ? colorMap.signal : colorMap[node.color]}
              strokeWidth={1}
              initial={{ opacity: 0.5, scale: 1 }}
              animate={{ opacity: [0.5, 0, 0.5], scale: [1, 2.4, 1] }}
              transition={{
                duration: 3.4,
                delay: 0.2 * i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </g>
        ))}
      </svg>
    </motion.div>
  );
}
