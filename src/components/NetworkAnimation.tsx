const NetworkAnimation = () => {
  return (
    <div className="relative w-full h-full">
      <div className="network-container">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left side logos */}
          <g className="network-nodes">
            <image
              href="/oracle_logos/claude.png"
              x="50"
              y="0"
              width="100"
              height="100"
              className="network-node"
            />
            <image
              href="/oracle_logos/grok.png"
              x="50"
              y="200"
              width="100"
              height="100"
              className="network-node"
            />
            <image
              href="/oracle_logos/gemini.png"
              x="50"
              y="400"
              width="100"
              height="100"
              className="network-node"
            />
            <image
              href="/oracle_logos/chatgpt.png"
              x="50"
              y="600"
              width="100"
              height="100"
              className="network-node"
            />
            <image
              href="/oracle_logos/deepseek.png"
              x="50"
              y="800"
              width="100"
              height="100"
              className="network-node"
            />
          </g>

          {/* Animated paths */}
          <g className="network-paths">
            {/* Using Q command for quadratic Bézier curves to create dome effect */}
            <path 
              d="M150 50 C400 50, 600 200, 750 400 Q 800 450, 750 500" 
              className="network-path path-1" 
            />
            <path 
              d="M150 250 C400 250, 600 300, 750 400 Q 800 450, 750 500" 
              className="network-path path-2" 
            />
            <path 
              d="M150 450 C400 450, 600 400, 750 400 Q 800 450, 750 500" 
              className="network-path path-3" 
            />
            <path 
              d="M150 650 C400 650, 600 500, 750 400 Q 800 450, 750 500" 
              className="network-path path-4" 
            />
            <path 
              d="M150 850 C400 800, 600 600, 750 400 Q 800 450, 700 390" 
              className="network-path path-5" 
            />
          </g>

          {/* Main Seeker logo */}
          <image
            href="/oracle_logos/seeker.png"
            x="780"
            y="360"
            width="200"
            height="200"
            className="network-node main-node"
          />
        </svg>
      </div>
    </div>
  );
};

export default NetworkAnimation;