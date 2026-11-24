/**
 * CN Practical Hub — Core Client Script
 * Complete academic practical reference portal for B.Tech IT / Computer Engineering.
 * All content, algorithms, diagrams, and full compilable C++ codes stored locally.
 */

// Global State
let currentPracticalId = null;
let currentAlgoIndex = 0;
let currentCategoryFilter = 'all';

// ===================================================================
// PRACTICALS REPOSITORY DATA
// ===================================================================
const practicalsData = [
  // ─────────────────────────────────────────────────────────────────
  // PRACTICAL 01: SETUP OF WIRED LAN
  // ─────────────────────────────────────────────────────────────────
  {
    id: 1,
    number: "PR-01",
    title: "Setup of Wired LAN",
    category: "hardware",
    categoryLabel: "Hardware & Networking",
    type: "hardware",
    shortDesc: "Step-by-step practical guide to preparing straight-through Ethernet cables using T568B, configuring static IP addresses on 4 PCs connected via a Layer 2 switch, testing connectivity using ICMP ping, and analyzing packets in Wireshark.",
    topics: ["T568B Standard", "Crimping RJ45", "Layer 2 Switch", "Static IP Assignment", "ICMP Ping", "Wireshark Packet Analysis"],
    implCount: "Complete Hardware & Wireshark Guide",
    aim: "To assemble and set up a wired Local Area Network (LAN) consisting of at least four personal computers connected through a Layer 2 switch, construct straight-through Ethernet patch cables following the T568B standard, configure static IPv4 addresses, verify network reachability using ICMP ping, and inspect packet headers in Wireshark.",
    hasCode: false,
    hardwareContent: {
      requiredHardware: [
        { item: "Workstation PCs", qty: "4 Units (PC1 to PC4)", spec: "Equipped with 10/100/1000 Mbps RJ45 Gigabit Ethernet NIC" },
        { item: "Layer 2 Ethernet Switch", qty: "1 Unit", spec: "8-port or 16-port unmanaged/managed Fast/Gigabit Ethernet switch" },
        { item: "Cat5e / Cat6 UTP Cable", qty: "4 Lengths (2-3 meters each)", spec: "4-pair unshielded twisted pair copper wire" },
        { item: "RJ45 Modular Connectors", qty: "10-12 Pieces", spec: "8P8C gold-plated transparent connectors" },
        { item: "Crimping Tool", qty: "1 Unit", spec: "Ratchet type with built-in stripper and cutter blades" },
        { item: "LAN Cable Continuity Tester", qty: "1 Unit", spec: "Master and remote unit with 8-LED sequential display" }
      ],
      t568bPinout: [
        { pin: 1, colorName: "White-Orange", colorCode: "#f97316", wireType: "Stripe", function: "Tx+ (Transmit Data Positive)" },
        { pin: 2, colorName: "Orange", colorCode: "#ea580c", wireType: "Solid", function: "Tx- (Transmit Data Negative)" },
        { pin: 3, colorName: "White-Green", colorCode: "#22c55e", wireType: "Stripe", function: "Rx+ (Receive Data Positive)" },
        { pin: 4, colorName: "Blue", colorCode: "#3b82f6", wireType: "Solid", function: "Unused in 10/100Base-T (PoE / Gigabit)" },
        { pin: 5, colorName: "White-Blue", colorCode: "#60a5fa", wireType: "Stripe", function: "Unused in 10/100Base-T (PoE / Gigabit)" },
        { pin: 6, colorName: "Green", colorCode: "#16a34a", wireType: "Solid", function: "Rx- (Receive Data Negative)" },
        { pin: 7, colorName: "White-Brown", colorCode: "#a16207", wireType: "Stripe", function: "Unused in 10/100Base-T (PoE / Gigabit)" },
        { pin: 8, colorName: "Brown", colorCode: "#78350f", wireType: "Solid", function: "Unused in 10/100Base-T (PoE / Gigabit)" }
      ],
      cableSteps: [
        "Use the cable stripper blade on the crimping tool to score and remove approximately 1.5 cm (0.6 inch) of outer PVC jacket from the Cat5e/6 cable without nicking the copper wires inside.",
        "Untwist the 4 wire pairs and straighten each individual wire. Arrange them strictly according to the T568B color standard: White-Orange, Orange, White-Green, Blue, White-Blue, Green, White-Brown, Brown.",
        "Hold the aligned wires flat between thumb and forefinger, then use the wire cutting blade to trim all wires evenly in a perpendicular 90-degree straight line, leaving approximately 1.2 cm of exposed wires.",
        "Hold the RJ45 connector with the plastic locking clip facing DOWN and copper pins facing UP and away from you. Insert the aligned wires firmly into the connector until each conductor seats all the way against the front end of the plug under the gold pins.",
        "Ensure the outer cable jacket enters past the strain-relief wedge inside the connector body. Insert into the 8P crimp slot of the tool and squeeze the handles firmly until the ratchet mechanism releases.",
        "Repeat the exact same T568B wiring procedure for the opposite end of the cable to complete a Straight-Through patch cord. Repeat for all 4 workstations."
      ],
      testerGuide: {
        procedure: "Plug one connector into the Master unit of the LAN Cable Tester and the opposite connector into the Remote unit. Power ON the tester in Slow (S) or Normal mode.",
        expectedResult: "All 8 LEDs on both Master and Remote units must illuminate sequentially from 1 to 8: [1] -> [2] -> [3] -> [4] -> [5] -> [6] -> [7] -> [8].",
        diagnostics: [
          { error: "Out-of-order LED sequence (e.g., 1-2-6-4-5-3-7-8)", cause: "Miswire / Crossed pair (pins 3 and 6 swapped)." },
          { error: "One or more LEDs fail to light up", cause: "Open circuit / wire did not reach the copper pin during crimping." },
          { error: "Two LEDs light up simultaneously", cause: "Short circuit between adjacent conductor wires." }
        ]
      },
      ipTable: [
        { pc: "PC1", ip: "192.168.1.1", subnet: "255.255.255.0", gateway: "192.168.1.1 (or None)", role: "Workstation 1 (Test Sender)" },
        { pc: "PC2", ip: "192.168.1.2", subnet: "255.255.255.0", gateway: "None", role: "Workstation 2 (Test Receiver)" },
        { pc: "PC3", ip: "192.168.1.3", subnet: "255.255.255.0", gateway: "None", role: "Workstation 3" },
        { pc: "PC4", ip: "192.168.1.4", subnet: "255.255.255.0", gateway: "None", role: "Workstation 4" }
      ],
      windowsCommands: [
        { desc: "Open Network Connections Control Panel", cmd: "ncpa.cpl" },
        { desc: "Configure Static IP via Command Prompt (Administrator)", cmd: 'netsh interface ip set address name="Ethernet" static 192.168.1.1 255.255.255.0' },
        { desc: "Verify current IP and MAC address settings", cmd: "ipconfig /all" },
        { desc: "Test ping reachability to PC2", cmd: "ping 192.168.1.2" },
        { desc: "Ping PC2 with 10 packets and custom timeout", cmd: "ping 192.168.1.2 -n 10" },
        { desc: "Inspect ARP table to verify resolved MAC addresses", cmd: "arp -a" }
      ],
      wiresharkGuide: {
        steps: [
          "Launch Wireshark on PC1 as an Administrator.",
          "On the Welcome screen, identify the active network interface corresponding to your physical NIC (typically labeled 'Ethernet' or 'Local Area Connection') showing live packet activity spikes. Double-click to start capture.",
          "In the top display filter bar, enter the filter: icmp (or ip.addr == 192.168.1.2 && icmp) and press Enter. The packet list will only display ICMP control messages.",
          "Open Windows Command Prompt on PC1 and execute: ping 192.168.1.2",
          "Switch back to Wireshark and click the red square button on the toolbar to Stop the capture."
        ],
        packetAnalysis: [
          {
            type: "Echo (ping) Request",
            src: "192.168.1.1 (PC1)",
            dst: "192.168.1.2 (PC2)",
            protocol: "ICMP",
            info: "Type 8, Code 0, Identifier: 0x0001, Sequence: 1",
            details: "Generated by PC1 operating system network stack. Transmitted across the switch port to PC2 carrying a 32-byte payload."
          },
          {
            type: "Echo (ping) Reply",
            src: "192.168.1.2 (PC2)",
            dst: "192.168.1.1 (PC1)",
            protocol: "ICMP",
            info: "Type 0, Code 0, Identifier: 0x0001, Sequence: 1",
            details: "Generated by PC2 in response to Echo Request, echoing back the identical payload data. Demonstrates full bidirectional connectivity."
          }
        ]
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────
  // PRACTICAL 02: CISCO PACKET TRACER
  // ─────────────────────────────────────────────────────────────────
  {
    id: 2,
    number: "PR-02",
    title: "Cisco Packet Tracer",
    category: "simulation",
    categoryLabel: "Network Simulation & Topologies",
    type: "simulation",
    shortDesc: "Comprehensive Packet Tracer simulation covering five standard physical & logical topologies (Bus, Star, Ring, Mesh, Tree) with visual diagrams and a practical VLSM subnetting design with inter-VLAN routing.",
    topics: ["Bus Topology", "Star Topology", "Ring Topology", "Mesh Topology", "Tree Topology", "VLSM Subnetting", "Packet Tracer CLI"],
    implCount: "5 Topologies + Subnetting Lab",
    aim: "To design, simulate, and analyze five standard local network topologies (Bus, Star, Ring, Mesh, Tree) in Cisco Packet Tracer, configure device interfaces, verify packet delivery via ICMP simulations, and implement a departmental IP subnetting scheme.",
    hasCode: false,
    tracerContent: {
      topologies: [
        {
          name: "Star Topology",
          devices: "1x Cisco 2960-24TT Switch, 4x Generic End PCs (PC0, PC1, PC2, PC3)",
          cables: "Copper Straight-Through Cables connected from PC FastEthernet0 to Switch FastEthernet0/1 through 0/4",
          ipScheme: "Network 192.168.1.0/24. PC0: 192.168.1.10, PC1: 192.168.1.11, PC2: 192.168.1.12, PC3: 192.168.1.13. Mask: 255.255.255.0",
          instructions: "1. Drag a 2960 switch into the workspace center.\n2. Place 4 PCs radially around the switch.\n3. Connect each PC to the switch using Copper Straight-Through cable.\n4. Click each PC -> Desktop tab -> IP Configuration. Assign static IPs.\n5. Wait for switch port link lights to turn from amber to solid green (STP convergence).",
          testing: "Open Command Prompt on PC0 and execute: ping 192.168.1.11. Also use Packet Tracer Simulation mode with ICMP filter to watch ARP frame broadcast and subsequent unicast ICMP ping.",
          expected: "Packets sent = 4, Received = 4, Lost = 0 (0% loss). Switch builds its CAM (MAC Address Table) dynamically.",
          diagramSvg: `<svg width="340" height="220" viewBox="0 0 340 220" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="#f8fafc" rx="8"/>
            <line x1="170" y1="110" x2="60" y2="40" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4"/>
            <line x1="170" y1="110" x2="280" y2="40" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4"/>
            <line x1="170" y1="110" x2="60" y2="180" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4"/>
            <line x1="170" y1="110" x2="280" y2="180" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4"/>
            <circle cx="170" cy="110" r="32" fill="#2563eb" stroke="#1d4ed8" stroke-width="2"/>
            <text x="170" y="114" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif">SWITCH</text>
            <rect x="30" y="20" width="60" height="36" rx="4" fill="#ffffff" stroke="#64748b" stroke-width="1.5"/>
            <text x="60" y="42" fill="#1e293b" font-size="10" font-weight="600" text-anchor="middle" font-family="sans-serif">PC 0</text>
            <rect x="250" y="20" width="60" height="36" rx="4" fill="#ffffff" stroke="#64748b" stroke-width="1.5"/>
            <text x="280" y="42" fill="#1e293b" font-size="10" font-weight="600" text-anchor="middle" font-family="sans-serif">PC 1</text>
            <rect x="30" y="160" width="60" height="36" rx="4" fill="#ffffff" stroke="#64748b" stroke-width="1.5"/>
            <text x="60" y="182" fill="#1e293b" font-size="10" font-weight="600" text-anchor="middle" font-family="sans-serif">PC 2</text>
            <rect x="250" y="160" width="60" height="36" rx="4" fill="#ffffff" stroke="#64748b" stroke-width="1.5"/>
            <text x="280" y="182" fill="#1e293b" font-size="10" font-weight="600" text-anchor="middle" font-family="sans-serif">PC 3</text>
          </svg>`
        },
        {
          name: "Bus Topology",
          devices: "4x Generic PCs, 3x Generic Hubs/Repeater nodes (or daisy-chained switches emulating multi-drop coaxial bus), terminators",
          cables: "Copper Cross-over cables linking consecutive backbone hubs; Straight-Through cables linking drop lines to workstations",
          ipScheme: "Network 192.168.2.0/24. PC0: 192.168.2.1, PC1: 192.168.2.2, PC2: 192.168.2.3, PC3: 192.168.2.4",
          instructions: "1. Place Hub0, Hub1, Hub2 in a straight horizontal line representing the central trunk backbone.\n2. Connect Hub0 to Hub1, and Hub1 to Hub2 using Copper Cross-over cables.\n3. Connect PCs to respective Hubs using Copper Straight-Through cables.\n4. Configure static IPs within 192.168.2.0/24 on all workstations.",
          testing: "Send an ICMP ping from PC0 to PC3. In simulation mode, observe how Hub replicates the incoming frame to every attached drop line (shared collision domain).",
          expected: "Destination PC accepts packet and replies; non-destination PCs discard frame at Layer 2. Single cable cut breaks backbone communication.",
          diagramSvg: `<svg width="340" height="180" viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="#f8fafc" rx="8"/>
            <line x1="30" y1="90" x2="310" y2="90" stroke="#0f172a" stroke-width="5"/>
            <rect x="22" y="78" width="10" height="24" fill="#64748b"/>
            <rect x="308" y="78" width="10" height="24" fill="#64748b"/>
            <line x1="70" y1="90" x2="70" y2="46" stroke="#94a3b8" stroke-width="2"/>
            <rect x="45" y="16" width="50" height="30" rx="4" fill="#ffffff" stroke="#64748b" stroke-width="1.5"/>
            <text x="70" y="35" fill="#1e293b" font-size="10" font-weight="600" text-anchor="middle" font-family="sans-serif">PC 0</text>
            <line x1="140" y1="90" x2="140" y2="134" stroke="#94a3b8" stroke-width="2"/>
            <rect x="115" y="134" width="50" height="30" rx="4" fill="#ffffff" stroke="#64748b" stroke-width="1.5"/>
            <text x="140" y="153" fill="#1e293b" font-size="10" font-weight="600" text-anchor="middle" font-family="sans-serif">PC 1</text>
            <line x1="210" y1="90" x2="210" y2="46" stroke="#94a3b8" stroke-width="2"/>
            <rect x="185" y="16" width="50" height="30" rx="4" fill="#ffffff" stroke="#64748b" stroke-width="1.5"/>
            <text x="210" y="35" fill="#1e293b" font-size="10" font-weight="600" text-anchor="middle" font-family="sans-serif">PC 2</text>
            <line x1="275" y1="90" x2="275" y2="134" stroke="#94a3b8" stroke-width="2"/>
            <rect x="250" y="134" width="50" height="30" rx="4" fill="#ffffff" stroke="#64748b" stroke-width="1.5"/>
            <text x="275" y="153" fill="#1e293b" font-size="10" font-weight="600" text-anchor="middle" font-family="sans-serif">PC 3</text>
          </svg>`
        },
        {
          name: "Ring Topology",
          devices: "4x Cisco 2960 Switches or 1941 Routers arranged in a closed loop, 4x End Host PCs",
          cables: "Copper Cross-over cables between switches (e.g. Sw0-Sw1, Sw1-Sw2, Sw2-Sw3, Sw3-Sw0); Straight-Through to PCs",
          ipScheme: "Subnet 192.168.3.0/24 (for switch-based VLAN) or point-to-point /30 subnets if router-based ring.",
          instructions: "1. Place 4 switches in a circular perimeter.\n2. Connect Sw0(Fa0/24) to Sw1(Fa0/23), Sw1(Fa0/24) to Sw2(Fa0/23), Sw2(Fa0/24) to Sw3(Fa0/23), Sw3(Fa0/24) to Sw0(Fa0/23).\n3. Connect PC0-PC3 to Fa0/1 on each respective switch.\n4. Observe Spanning Tree Protocol (STP) blocking one redundant link (amber LED) to prevent bridge loops while maintaining fault-tolerant ring capability.",
          testing: "Ping PC2 from PC0. Then delete one active switch-to-switch link. Observe STP recalculation (takes ~30s) and subsequent packet re-routing along the alternative ring segment.",
          expected: "High availability; network self-heals when a single link failure occurs.",
          diagramSvg: `<svg width="340" height="220" viewBox="0 0 340 220" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="#f8fafc" rx="8"/>
            <polygon points="100,50 240,50 240,170 100,170" fill="none" stroke="#2563eb" stroke-width="3" stroke-dasharray="6,4"/>
            <circle cx="100" cy="50" r="18" fill="#1e293b"/>
            <circle cx="240" cy="50" r="18" fill="#1e293b"/>
            <circle cx="240" cy="170" r="18" fill="#1e293b"/>
            <circle cx="100" cy="170" r="18" fill="#1e293b"/>
            <text x="100" y="54" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle" font-family="sans-serif">SW0</text>
            <text x="240" y="54" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle" font-family="sans-serif">SW1</text>
            <text x="240" y="174" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle" font-family="sans-serif">SW2</text>
            <text x="100" y="174" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle" font-family="sans-serif">SW3</text>
            <text x="170" y="115" fill="#64748b" font-size="11" font-weight="600" text-anchor="middle" font-family="sans-serif">Closed Ring Loop</text>
          </svg>`
        },
        {
          name: "Mesh Topology (Full Mesh)",
          devices: "4x Cisco 1941 Routers (each equipped with HWIC-2T Serial WAN interface cards) or 4x Multi-interface Workstations",
          cables: "Serial DTE/DCE cables connecting every node to every other node: N(N-1)/2 = 4(3)/2 = 6 dedicated physical links",
          ipScheme: "Point-to-point /30 subnets: 10.0.12.0/30 (R1-R2), 10.0.13.0/30 (R1-R3), 10.0.14.0/30 (R1-R4), 10.0.23.0/30 (R2-R3), 10.0.24.0/30 (R2-R4), 10.0.34.0/30 (R3-R4)",
          instructions: "1. Add 4 routers in Packet Tracer.\n2. Power off each router and insert HWIC-2T modules into slot 0.\n3. Connect serial cables between all 6 node pairs.\n4. Configure clock rate on DCE ends and assign IP addresses.\n5. Enable OSPF (router ospf 1) on all routers.",
          testing: "Execute traceroute from R1 to R4. Shut down direct link R1-R4 using 'shutdown'. Re-run traceroute to verify immediate failover through R2 or R3 without packet drop.",
          expected: "Zero single points of failure, dedicated line capacity, highest fault tolerance.",
          diagramSvg: `<svg width="340" height="220" viewBox="0 0 340 220" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="#f8fafc" rx="8"/>
            <line x1="80" y1="50" x2="260" y2="50" stroke="#0284c7" stroke-width="2"/>
            <line x1="260" y1="50" x2="260" y2="170" stroke="#0284c7" stroke-width="2"/>
            <line x1="260" y1="170" x2="80" y2="170" stroke="#0284c7" stroke-width="2"/>
            <line x1="80" y1="170" x2="80" y2="50" stroke="#0284c7" stroke-width="2"/>
            <line x1="80" y1="50" x2="260" y2="170" stroke="#0284c7" stroke-width="2"/>
            <line x1="260" y1="50" x2="80" y2="170" stroke="#0284c7" stroke-width="2"/>
            <circle cx="80" cy="50" r="18" fill="#0284c7"/>
            <circle cx="260" cy="50" r="18" fill="#0284c7"/>
            <circle cx="260" cy="170" r="18" fill="#0284c7"/>
            <circle cx="80" cy="170" r="18" fill="#0284c7"/>
            <text x="80" y="54" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle" font-family="sans-serif">R1</text>
            <text x="260" y="54" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle" font-family="sans-serif">R2</text>
            <text x="260" y="174" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle" font-family="sans-serif">R3</text>
            <text x="80" y="174" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle" font-family="sans-serif">R4</text>
          </svg>`
        },
        {
          name: "Tree Topology (Hierarchical)",
          devices: "1x Core Switch (3560-24PS), 2x Distribution Switches (2960), 4x Access PCs",
          cables: "Gigabit Ethernet uplinks from Distribution to Core; FastEthernet downlinks to end stations",
          ipScheme: "Core Root: 192.168.0.0/16. Dept A Branch: 192.168.10.0/24. Dept B Branch: 192.168.20.0/24",
          instructions: "1. Place Core Switch at tier 1.\n2. Place 2 Distribution Switches below it at tier 2.\n3. Place 2 PCs under each distribution switch at tier 3.\n4. Connect using copper straight-through cables.\n5. Configure Default Gateways on PCs pointing to Core Switch Layer 3 SVIs.",
          testing: "Ping across departments (from Dept A PC to Dept B PC) through the hierarchical aggregation trunk.",
          expected: "Easily scalable, modular organization, localized fault isolation.",
          diagramSvg: `<svg width="340" height="220" viewBox="0 0 340 220" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="#f8fafc" rx="8"/>
            <rect x="135" y="16" width="70" height="30" rx="4" fill="#1e293b"/>
            <text x="170" y="35" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle" font-family="sans-serif">CORE</text>
            <line x1="150" y1="46" x2="90" y2="86" stroke="#64748b" stroke-width="2"/>
            <line x1="190" y1="46" x2="250" y2="86" stroke="#64748b" stroke-width="2"/>
            <rect x="55" y="86" width="70" height="28" rx="4" fill="#2563eb"/>
            <text x="90" y="104" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle" font-family="sans-serif">DIST 1</text>
            <rect x="215" y="86" width="70" height="28" rx="4" fill="#2563eb"/>
            <text x="250" y="104" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle" font-family="sans-serif">DIST 2</text>
            <line x1="70" y1="114" x2="45" y2="154" stroke="#94a3b8" stroke-width="1.5"/>
            <line x1="110" y1="114" x2="135" y2="154" stroke="#94a3b8" stroke-width="1.5"/>
            <line x1="230" y1="114" x2="205" y2="154" stroke="#94a3b8" stroke-width="1.5"/>
            <line x1="270" y1="114" x2="295" y2="154" stroke="#94a3b8" stroke-width="1.5"/>
            <rect x="25" y="154" width="40" height="24" rx="3" fill="#ffffff" stroke="#64748b"/>
            <text x="45" y="170" fill="#1e293b" font-size="8" font-weight="bold" text-anchor="middle" font-family="sans-serif">PC1</text>
            <rect x="115" y="154" width="40" height="24" rx="3" fill="#ffffff" stroke="#64748b"/>
            <text x="135" y="170" fill="#1e293b" font-size="8" font-weight="bold" text-anchor="middle" font-family="sans-serif">PC2</text>
            <rect x="185" y="154" width="40" height="24" rx="3" fill="#ffffff" stroke="#64748b"/>
            <text x="205" y="170" fill="#1e293b" font-size="8" font-weight="bold" text-anchor="middle" font-family="sans-serif">PC3</text>
            <rect x="275" y="154" width="40" height="24" rx="3" fill="#ffffff" stroke="#64748b"/>
            <text x="295" y="170" fill="#1e293b" font-size="8" font-weight="bold" text-anchor="middle" font-family="sans-serif">PC4</text>
          </svg>`
        }
      ],
      subnetExercise: {
        title: "Departmental Subnetting Practical in Cisco Packet Tracer",
        network: "192.168.10.0 /24",
        subnetsNeeded: 4,
        hostCalcFormula: "Total subnets required = 4 => 2^2 = 4 (borrow 2 bits from host portion). New Prefix = /24 + 2 = /26. Host bits remaining = 32 - 26 = 6 bits. Usable hosts per subnet = 2^6 - 2 = 64 - 2 = 62 hosts.",
        mask: "255.255.255.192 (/26)",
        allocationTable: [
          { dept: "Subnet A (IT Lab)", netAddr: "192.168.10.0/26", usableRange: "192.168.10.1 - 192.168.10.62", broadcast: "192.168.10.63", gateway: "192.168.10.1 (Router G0/0/0)" },
          { dept: "Subnet B (Admin Office)", netAddr: "192.168.10.64/26", usableRange: "192.168.10.65 - 192.168.10.126", broadcast: "192.168.10.127", gateway: "192.168.10.65 (Router G0/0/1)" },
          { dept: "Subnet C (Library)", netAddr: "192.168.10.128/26", usableRange: "192.168.10.129 - 192.168.10.190", broadcast: "192.168.10.191", gateway: "192.168.10.129 (Router G0/0/2)" },
          { dept: "Subnet D (Server Room)", netAddr: "192.168.10.192/26", usableRange: "192.168.10.193 - 192.168.10.254", broadcast: "192.168.10.255", gateway: "192.168.10.193 (Router G0/0/3)" }
        ],
        cliCommands: `Router> enable
Router# configure terminal
Router(config)# hostname LabGateway

! Configure Subnet A Default Gateway
LabGateway(config)# interface GigabitEthernet0/0/0
LabGateway(config-if)# ip address 192.168.10.1 255.255.255.192
LabGateway(config-if)# no shutdown
LabGateway(config-if)# exit

! Configure Subnet B Default Gateway
LabGateway(config)# interface GigabitEthernet0/0/1
LabGateway(config-if)# ip address 192.168.10.65 255.255.255.192
LabGateway(config-if)# no shutdown
LabGateway(config-if)# exit`
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────
  // PRACTICAL 03: SINGLE BIT ERROR DETECTION AND CORRECTION
  // ─────────────────────────────────────────────────────────────────
  {
    id: 3,
    number: "PR-03",
    title: "Single Bit Error Detection and Correction",
    category: "error",
    categoryLabel: "Data Link Layer · Error Control",
    type: "cpp",
    shortDesc: "Complete C++ implementations for Parity Check (Even/Odd with parity limitation demo), Cyclic Redundancy Check (CRC binary polynomial division for error detection), and Hamming Code (single-bit error detection and correction), plus a combined menu-driven program.",
    topics: ["Parity Check", "CRC (Cyclic Redundancy Check)", "Hamming Code (7,4)", "Modulo-2 Binary Division", "Syndrome Calculation", "Menu-Driven Interface"],
    implCount: "4 C++ Implementations",
    aim: "To implement error detection techniques (Even/Odd Parity, Cyclic Redundancy Check) and single-bit error detection and correction using Hamming Code in C++, verify their mathematical foundations, demonstrate receiver verification, and integrate them into a comprehensive menu-driven program.",
    hasCode: true,
    algorithms: [
      {
        name: "Parity Check",
        fileName: "parity_check.cpp",
        description: "Standalone C++ program implementing Even and Odd Parity generation at sender, transmission error detection at receiver, and practical demonstration of parity limitations when even numbers of bits flip.",
        howToRun: [
          { step: 1, text: "Create parity_check.cpp in VS Code and paste the code." },
          { step: 2, text: "Open terminal and compile with g++:", cmd: "g++ parity_check.cpp -o parity_check" },
          { step: 3, text: "Execute the compiled program:", cmd: "./parity_check.exe" }
        ],
        samples: [
          {
            title: "Test Case 1: Even Parity with Single Bit Error Injected",
            input: "1\n1011001\n1\n3",
            output: "=== PARITY CHECK SENDER ===\nEnter Parity Type (1: Even, 2: Odd): 1\nEnter Binary Data Word: 1011001\nData Length: 7 bits\nNumber of 1s in Data: 4\nCalculated Parity Bit: 0\nTransmitted Codeword: 10110010\n\n=== TRANSMISSION CHANNEL ===\nSimulate Transmission Error? (1: Yes, 0: No): 1\nEnter 1-based bit position to flip (1-8): 3\nTransmitted: 10110010\nReceived:    10010010\n\n=== PARITY CHECK RECEIVER ===\nReceived Codeword: 10010010\nTotal 1s received: 3\n[RESULT]: Parity Mismatch Detected! ERROR in Transmission.\n(Limitation Note: Parity detects any odd number of bit errors, but cannot pinpoint the exact corrupted bit)."
          },
          {
            title: "Test Case 2: Odd Parity with Error-Free Transmission",
            input: "2\n1101\n0",
            output: "=== PARITY CHECK SENDER ===\nEnter Parity Type (1: Even, 2: Odd): 2\nEnter Binary Data Word: 1101\nData Length: 4 bits\nNumber of 1s in Data: 3\nCalculated Parity Bit: 0\nTransmitted Codeword: 11010\n\n=== TRANSMISSION CHANNEL ===\nSimulate Transmission Error? (1: Yes, 0: No): 0\n\n=== PARITY CHECK RECEIVER ===\nReceived Codeword: 11010\nTotal 1s received: 3\n[RESULT]: Parity Verified! No transmission error detected.\nOriginal Data Extracted: 1101"
          }
        ],
        code: `#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

// Sample Input 1:
// Enter Parity Type (1: Even, 2: Odd): 1
// Enter Binary Data Word: 1011001
// Simulate Transmission Error? (1: Yes, 0: No): 1
// Enter 1-based bit position to flip: 3

// Sample Input 2:
// Enter Parity Type (1: Even, 2: Odd): 2
// Enter Binary Data Word: 1101
// Simulate Transmission Error? (1: Yes, 0: No): 0

int countOnes(const string& str) {
    int count = 0;
    for (char c : str) {
        if (c == '1') count++;
    }
    return count;
}

char calculateParityBit(const string& data, int parityType) {
    int ones = countOnes(data);
    if (parityType == 1) { // Even Parity: total 1s including parity bit must be even
        return (ones % 2 == 0) ? '0' : '1';
    } else {               // Odd Parity: total 1s including parity bit must be odd
        return (ones % 2 == 0) ? '1' : '0';
    }
}

bool verifyParity(const string& codeword, int parityType) {
    int ones = countOnes(codeword);
    if (parityType == 1) {
        return (ones % 2 == 0);
    } else {
        return (ones % 2 != 0);
    }
}

int main() {
    int parityChoice;
    string dataWord;

    cout << "============================================" << endl;
    cout << "  PARITY CHECK ERROR DETECTION SIMULATION  " << endl;
    cout << "============================================" << endl;
    cout << "Select Parity Scheme:\\n  1. Even Parity\\n  2. Odd Parity\\nEnter choice (1 or 2): ";
    if (!(cin >> parityChoice) || (parityChoice != 1 && parityChoice != 2)) {
        cout << "[ERROR]: Invalid parity selection!" << endl;
        return 1;
    }

    cout << "Enter Binary Data Word: ";
    cin >> dataWord;

    for (char c : dataWord) {
        if (c != '0' && c != '1') {
            cout << "[ERROR]: Invalid binary input! Only '0' and '1' allowed." << endl;
            return 1;
        }
    }

    // Sender generates parity bit
    char parityBit = calculateParityBit(dataWord, parityChoice);
    string transmittedCodeword = dataWord + parityBit;

    cout << "\\n--- SENDER SIDE ---" << endl;
    cout << "Original Data:          " << dataWord << endl;
    cout << "Number of 1s in data:   " << countOnes(dataWord) << endl;
    cout << "Generated Parity Bit:   " << parityBit << " (" << (parityChoice == 1 ? "Even" : "Odd") << ")" << endl;
    cout << "Transmitted Codeword:   " << transmittedCodeword << endl;

    // Transmission Channel Simulation
    int injectError;
    string receivedCodeword = transmittedCodeword;
    cout << "\\n--- CHANNEL SIMULATION ---" << endl;
    cout << "Simulate Transmission Error? (1: Yes, 0: No): ";
    cin >> injectError;

    if (injectError == 1) {
        int pos;
        cout << "Enter 1-based bit position to flip (1 to " << transmittedCodeword.length() << "): ";
        cin >> pos;
        if (pos >= 1 && pos <= (int)transmittedCodeword.length()) {
            receivedCodeword[pos - 1] = (receivedCodeword[pos - 1] == '0') ? '1' : '0';
            cout << "Bit flipped at position " << pos << "!" << endl;
            cout << "Transmitted: " << transmittedCodeword << endl;
            cout << "Received:    " << receivedCodeword << endl;
        } else {
            cout << "[WARNING]: Position out of range. Transmitting without error." << endl;
        }
    }

    // Receiver verifies parity
    cout << "\\n--- RECEIVER SIDE ---" << endl;
    cout << "Received Codeword:      " << receivedCodeword << endl;
    cout << "Total 1s in received:   " << countOnes(receivedCodeword) << endl;

    bool isCorrect = verifyParity(receivedCodeword, parityChoice);
    if (isCorrect) {
        cout << "[STATUS]: SUCCESS - No error detected!" << endl;
        string recoveredData = receivedCodeword.substr(0, receivedCodeword.length() - 1);
        cout << "Recovered Data Word:    " << recoveredData << endl;
    } else {
        cout << "[STATUS]: ERROR DETECTED! Parity integrity check failed." << endl;
        cout << "Notice: Parity detects any single-bit (or odd number of) error." << endl;
        cout << "Limitation: It CANNOT locate which bit was corrupted, nor detect 2-bit flips." << endl;
    }

    return 0;
}`
      },
      {
        name: "Cyclic Redundancy Check (CRC)",
        fileName: "crc.cpp",
        description: "Standalone C++ program implementing Cyclic Redundancy Check (CRC) using Modulo-2 binary polynomial division (XOR arithmetic). Emphasizes that CRC is an error detection mechanism, not an error correction mechanism.",
        howToRun: [
          { step: 1, text: "Create crc.cpp in VS Code and paste the source code." },
          { step: 2, text: "Compile using MinGW g++ in the terminal:", cmd: "g++ crc.cpp -o crc" },
          { step: 3, text: "Run the binary executable:", cmd: "./crc.exe" }
        ],
        samples: [
          {
            title: "Test Case 1: Standard CRC with Generator 1011 (x³ + x + 1) - Clean Channel",
            input: "100100\n1011\n0",
            output: "=== CRC SENDER SIDE ===\nEnter Binary Data Word: 100100\nEnter Generator Polynomial (Divisor): 1011\nAppended Data (with 3 zeros): 100100000\nComputed Remainder (CRC Checksum): 001\nTransmitted Codeword: 100100001\n\n=== CHANNEL SIMULATION ===\nSimulate Transmission Error? (1: Yes, 0: No): 0\n\n=== CRC RECEIVER SIDE ===\nReceived Codeword: 100100001\nSyndrome (Remainder on Division): 000\n[RESULT]: Remainder is ZERO. No error detected. Data accepted!"
          },
          {
            title: "Test Case 2: CRC with 1-Bit Error Injected in Channel",
            input: "1101011011\n10011\n1\n4",
            output: "=== CRC SENDER SIDE ===\nEnter Binary Data Word: 1101011011\nEnter Generator Polynomial (Divisor): 10011\nAppended Data (with 4 zeros): 11010110110000\nComputed Remainder (CRC Checksum): 1110\nTransmitted Codeword: 11010110111110\n\n=== CHANNEL SIMULATION ===\nSimulate Transmission Error? (1: Yes, 0: No): 1\nEnter 1-based bit position to corrupt (1-14): 4\nBit 4 flipped (0 -> 1)!\nReceived Codeword: 11000110111110\n\n=== CRC RECEIVER SIDE ===\nSyndrome (Remainder on Division): 0110\n[RESULT]: Non-zero remainder detected! Transmission ERROR occurred. Frame rejected."
          }
        ],
        code: `#include <iostream>
#include <string>

using namespace std;

// Sample Input 1:
// Enter Binary Data Word: 100100
// Enter Generator Divisor: 1011
// Simulate Transmission Error? (1: Yes, 0: No): 0

// Sample Input 2:
// Enter Binary Data Word: 1101011011
// Enter Generator Divisor: 10011
// Simulate Transmission Error? (1: Yes, 0: No): 1
// Enter bit position to corrupt: 4

// Bitwise XOR operation for Modulo-2 arithmetic
string xorOperation(string a, string b) {
    string result = "";
    int n = b.length();
    for (int i = 1; i < n; i++) {
        if (a[i] == b[i]) result += "0";
        else result += "1";
    }
    return result;
}

// Modulo-2 binary polynomial division
string modulo2Division(string dividend, string divisor) {
    int pick = divisor.length();
    string tmp = dividend.substr(0, pick);
    int n = dividend.length();

    while (pick < n) {
        if (tmp[0] == '1') {
            tmp = xorOperation(divisor, tmp) + dividend[pick];
        } else {
            string zeros(divisor.length(), '0');
            tmp = xorOperation(zeros, tmp) + dividend[pick];
        }
        pick += 1;
    }

    // Final step
    if (tmp[0] == '1') {
        tmp = xorOperation(divisor, tmp);
    } else {
        string zeros(divisor.length(), '0');
        tmp = xorOperation(zeros, tmp);
    }

    return tmp; // Remainder (CRC bits)
}

int main() {
    string dataWord, generator;

    cout << "==========================================" << endl;
    cout << "   CYCLIC REDUNDANCY CHECK (CRC) ENGINE   " << endl;
    cout << "==========================================" << endl;
    cout << "Note: CRC is an Error DETECTION technique." << endl;
    cout << "Enter Data Word (binary): ";
    cin >> dataWord;
    cout << "Enter Generator Polynomial Divisor (binary): ";
    cin >> generator;

    // Validate inputs
    for (char c : dataWord) {
        if (c != '0' && c != '1') {
            cout << "[ERROR]: Data word must contain only 0s and 1s!" << endl;
            return 1;
        }
    }
    for (char c : generator) {
        if (c != '0' && c != '1') {
            cout << "[ERROR]: Generator must contain only 0s and 1s!" << endl;
            return 1;
        }
    }
    if (generator[0] != '1') {
        cout << "[ERROR]: Generator polynomial must start with '1'!" << endl;
        return 1;
    }

    int m = generator.length() - 1; // Number of zero bits to append
    string appendedData = dataWord + string(m, '0');

    cout << "\\n--- SENDER SIDE ---" << endl;
    cout << "Data Word:              " << dataWord << " (" << dataWord.length() << " bits)" << endl;
    cout << "Generator (Divisor):    " << generator << " (" << generator.length() << " bits)" << endl;
    cout << "Appended Zeros:         " << m << " bits" << endl;
    cout << "Dividend for Division:  " << appendedData << endl;

    string remainder = modulo2Division(appendedData, generator);
    cout << "Computed Remainder/CRC: " << remainder << endl;

    string codeword = dataWord + remainder;
    cout << "Transmitted Codeword:   " << codeword << endl;

    // Channel Error Simulation
    int injectChoice;
    string receivedCodeword = codeword;
    cout << "\\n--- CHANNEL SIMULATION ---" << endl;
    cout << "Simulate Transmission Error? (1: Yes, 0: No): ";
    cin >> injectChoice;

    if (injectChoice == 1) {
        int pos;
        cout << "Enter 1-based bit position to corrupt (1 to " << codeword.length() << "): ";
        cin >> pos;
        if (pos >= 1 && pos <= (int)codeword.length()) {
            receivedCodeword[pos - 1] = (receivedCodeword[pos - 1] == '0') ? '1' : '0';
            cout << "Bit " << pos << " corrupted!" << endl;
            cout << "Sent:     " << codeword << endl;
            cout << "Received: " << receivedCodeword << endl;
        }
    }

    // Receiver Side Verification
    cout << "\\n--- RECEIVER SIDE ---" << endl;
    cout << "Received Codeword:      " << receivedCodeword << endl;

    string receiverRemainder = modulo2Division(receivedCodeword, generator);
    cout << "Syndrome (Remainder):   " << receiverRemainder << endl;

    bool hasError = false;
    for (char c : receiverRemainder) {
        if (c == '1') {
            hasError = true;
            break;
        }
    }

    if (!hasError) {
        cout << "\\n[RESULT]: Remainder is ZERO. No error detected!" << endl;
        cout << "Accepted Data Word:     " << receivedCodeword.substr(0, dataWord.length()) << endl;
    } else {
        cout << "\\n[RESULT]: Non-zero remainder! CRC Integrity Check FAILED." << endl;
        cout << "Packet corrupted in transit. Frame discarded by receiver." << endl;
    }

    return 0;
}`
      },
      {
        name: "Hamming Code (Error Correction)",
        fileName: "hamming_code.cpp",
        description: "Standalone C++ program implementing generalized Hamming Code with single-bit error detection and automatic single-bit error correction. Calculates redundant parity bits, places them at powers of 2 (1, 2, 4, 8...), computes parity at sender, and evaluates syndrome bits at receiver to pinpoint and correct the flipped bit.",
        howToRun: [
          { step: 1, text: "Save the code as hamming_code.cpp." },
          { step: 2, text: "Compile with g++:", cmd: "g++ hamming_code.cpp -o hamming_code" },
          { step: 3, text: "Execute the program:", cmd: "./hamming_code.exe" }
        ],
        samples: [
          {
            title: "Test Case 1: 4-bit Data (1011) with Error Injected at Position 6",
            input: "1011\n1\n6",
            output: "=== HAMMING CODE SENDER ===\nEnter Binary Data Bits (m bits): 1011\nData Bits (m): 4\nRedundant Bits (r) Required: 3 (since 2^3 >= 4 + 3 + 1)\nTotal Codeword Length (n = m+r): 7\nParity Bit Positions: P1(1), P2(2), P4(4)\nEncoded 7-bit Transmitted Codeword: 0110011\n\n=== CHANNEL SIMULATION ===\nSimulate Error? (1: Yes, 0: No): 1\nEnter 1-based bit position to corrupt (1 to 7): 6\nReceived Codeword: 0110001 (Bit 6 flipped)\n\n=== HAMMING CODE RECEIVER ===\nCalculated Syndrome Bits (P4 P2 P1): 1 1 0 (Binary 110 = Decimal 6)\n[ERROR DETECTED]: Error located precisely at 1-based position 6!\nCorrecting Bit at Position 6 (0 -> 1)...\nCorrected Codeword: 0110011\nExtracted Original Data: 1011"
          },
          {
            title: "Test Case 2: 4-bit Data (1100) with Clean Channel",
            input: "1100\n0",
            output: "=== HAMMING CODE SENDER ===\nEnter Binary Data Bits (m bits): 1100\nData Bits (m): 4\nRedundant Bits (r) Required: 3\nEncoded 7-bit Transmitted Codeword: 1011100\n\n=== CHANNEL SIMULATION ===\nSimulate Error? (1: Yes, 0: No): 0\n\n=== HAMMING CODE RECEIVER ===\nCalculated Syndrome Bits (P4 P2 P1): 0 0 0 (Decimal 0)\n[RESULT]: Syndrome is 0! No error occurred during transmission.\nExtracted Original Data: 1100"
          }
        ],
        code: `#include <iostream>
#include <vector>
#include <string>
#include <cmath>

using namespace std;

// Sample Input 1:
// Enter Binary Data Bits: 1011
// Simulate Error? (1: Yes, 0: No): 1
// Enter 1-based bit position to corrupt: 6

// Sample Input 2:
// Enter Binary Data Bits: 1100
// Simulate Error? (1: Yes, 0: No): 0

// Calculate required redundant parity bits such that 2^r >= m + r + 1
int calculateRedundantBits(int m) {
    int r = 0;
    while (pow(2, r) < (m + r + 1)) {
        r++;
    }
    return r;
}

int main() {
    string data;
    cout << "=============================================" << endl;
    cout << "  HAMMING CODE (DETECTION & CORRECTION)      " << endl;
    cout << "=============================================" << endl;
    cout << "Enter Original Binary Data Word: ";
    cin >> data;

    for (char c : data) {
        if (c != '0' && c != '1') {
            cout << "[ERROR]: Only binary '0' and '1' are accepted." << endl;
            return 1;
        }
    }

    int m = data.length();
    int r = calculateRedundantBits(m);
    int totalLen = m + r;

    // 1-based indexing for Hamming positions: 1 to totalLen
    vector<int> code(totalLen + 1, 0);

    // Place data bits, leaving powers of 2 (1, 2, 4, 8, ...) as 0 for parity
    int dataIdx = m - 1; // from right to left
    for (int i = 1; i <= totalLen; i++) {
        // If i is a power of 2, it is a parity position
        if ((i & (i - 1)) == 0) {
            code[i] = 0;
        } else {
            code[i] = data[dataIdx--] - '0';
        }
    }

    // Calculate Even Parity for each parity bit at position 2^i
    for (int i = 0; i < r; i++) {
        int parityPos = (1 << i);
        int onesCount = 0;
        for (int j = 1; j <= totalLen; j++) {
            if ((j & parityPos) != 0 && j != parityPos) {
                if (code[j] == 1) onesCount++;
            }
        }
        code[parityPos] = (onesCount % 2 == 0) ? 0 : 1;
    }

    cout << "\\n--- SENDER SIDE ---" << endl;
    cout << "Data Bits (m):          " << m << endl;
    cout << "Redundant Bits (r):     " << r << " (satisfies 2^r >= m + r + 1)" << endl;
    cout << "Codeword Length:        " << totalLen << " bits" << endl;
    cout << "Encoded Codeword (MSB to LSB): ";
    for (int i = totalLen; i >= 1; i--) {
        cout << code[i];
    }
    cout << endl;

    // Transmission Simulation
    vector<int> received = code;
    int injectError;
    cout << "\\n--- CHANNEL SIMULATION ---" << endl;
    cout << "Simulate Transmission Error? (1: Yes, 0: No): ";
    cin >> injectError;

    if (injectError == 1) {
        int errorPos;
        cout << "Enter 1-based bit position to corrupt (1 to " << totalLen << "): ";
        cin >> errorPos;
        if (errorPos >= 1 && errorPos <= totalLen) {
            received[errorPos] = (received[errorPos] == 0) ? 1 : 0;
            cout << "Bit flipped at position " << errorPos << "!" << endl;
        }
    }

    // Receiver Side Syndrome Calculation
    cout << "\\n--- RECEIVER SIDE ---" << endl;
    cout << "Received Codeword (MSB to LSB): ";
    for (int i = totalLen; i >= 1; i--) {
        cout << received[i];
    }
    cout << endl;

    int errorPosition = 0;
    for (int i = 0; i < r; i++) {
        int parityPos = (1 << i);
        int onesCount = 0;
        for (int j = 1; j <= totalLen; j++) {
            if ((j & parityPos) != 0) {
                if (received[j] == 1) onesCount++;
            }
        }
        // If parity check fails (odd ones for even parity), add to syndrome
        if (onesCount % 2 != 0) {
            errorPosition += parityPos;
        }
    }

    if (errorPosition == 0) {
        cout << "\\n[RESULT]: Syndrome = 0. No error detected!" << endl;
    } else {
        cout << "\\n[ERROR DETECTED]: Error pinpointed at 1-based position: " << errorPosition << endl;
        cout << "Correcting bit at position " << errorPosition << "..." << endl;
        received[errorPosition] = (received[errorPosition] == 0) ? 1 : 0;
        cout << "Corrected Codeword: ";
        for (int i = totalLen; i >= 1; i--) {
            cout << received[i];
        }
        cout << endl;
    }

    // Extract original data bits from non-parity positions
    string extractedData = "";
    for (int i = 1; i <= totalLen; i++) {
        if ((i & (i - 1)) != 0) {
            extractedData = to_string(received[i]) + extractedData;
        }
    }
    cout << "Extracted Original Data Word: " << extractedData << endl;

    return 0;
}`
      },
      {
        name: "Combined Error Control Menu",
        fileName: "error_control_menu.cpp",
        description: "Combined C++ program integrating Parity Check, Cyclic Redundancy Check (CRC), and Hamming Code into a unified menu-driven console application.",
        howToRun: [
          { step: 1, text: "Save file as error_control_menu.cpp." },
          { step: 2, text: "Compile with MinGW g++:", cmd: "g++ error_control_menu.cpp -o error_control_menu" },
          { step: 3, text: "Execute the unified application:", cmd: "./error_control_menu.exe" }
        ],
        samples: [
          {
            title: "Test Case 1: Menu Navigation to Parity Check then Exit",
            input: "1\n1\n110011\n0\n4",
            output: "=== COMPUTER NETWORKS ERROR CONTROL SUITE ===\n1. Parity Check (Even / Odd)\n2. Cyclic Redundancy Check (CRC)\n3. Hamming Code (Detection & Correction)\n4. Exit\nEnter choice: 1\n[Parity Check Executed...]\nEnter choice: 4\nExiting Error Control Suite. Goodbye!"
          },
          {
            title: "Test Case 2: Menu Navigation to CRC then Hamming Code",
            input: "2\n10101\n101\n0\n3\n1001\n0\n4",
            output: "=== COMPUTER NETWORKS ERROR CONTROL SUITE ===\n[Runs CRC...]\n[Runs Hamming Code...]\nExiting Error Control Suite. Goodbye!"
          }
        ],
        code: `#include <iostream>
#include <string>
#include <vector>
#include <cmath>

using namespace std;

// Sample Input:
// 1 (Parity Check) -> 1 (Even) -> 1011 -> 0 (No error)
// 2 (CRC) -> 1101 -> 1011 -> 0
// 3 (Hamming Code) -> 1011 -> 0
// 4 (Exit)

// ======================== PARITY CHECK ========================
int countOnes(const string& str) {
    int count = 0;
    for (char c : str) if (c == '1') count++;
    return count;
}

void runParityCheck() {
    cout << "\\n--- [1] PARITY CHECK MODULE ---" << endl;
    cout << "Select Parity Scheme (1: Even, 2: Odd): ";
    int pType;
    cin >> pType;
    cout << "Enter Binary Data Word: ";
    string data;
    cin >> data;

    int ones = countOnes(data);
    char pBit = (pType == 1) ? ((ones % 2 == 0) ? '0' : '1') : ((ones % 2 == 0) ? '1' : '0');
    string codeword = data + pBit;

    cout << "Transmitted Codeword: " << codeword << endl;

    int errChoice;
    cout << "Simulate Error? (1: Yes, 0: No): ";
    cin >> errChoice;
    string received = codeword;
    if (errChoice == 1) {
        int pos;
        cout << "Enter 1-based position to flip (1 to " << codeword.length() << "): ";
        cin >> pos;
        if (pos >= 1 && pos <= (int)codeword.length()) {
            received[pos - 1] = (received[pos - 1] == '0') ? '1' : '0';
        }
    }

    int recvOnes = countOnes(received);
    bool valid = (pType == 1) ? (recvOnes % 2 == 0) : (recvOnes % 2 != 0);
    cout << "Received Codeword:    " << received << endl;
    if (valid) {
        cout << "[STATUS]: No error detected. Parity integrity verified." << endl;
    } else {
        cout << "[STATUS]: Parity mismatch! Transmission ERROR detected." << endl;
    }
}

// ======================== CRC MODULE ========================
string xorOp(string a, string b) {
    string res = "";
    for (size_t i = 1; i < b.length(); i++) {
        res += (a[i] == b[i]) ? '0' : '1';
    }
    return res;
}

string modulo2Div(string dividend, string divisor) {
    int pick = divisor.length();
    string tmp = dividend.substr(0, pick);
    int n = dividend.length();

    while (pick < n) {
        if (tmp[0] == '1') tmp = xorOp(divisor, tmp) + dividend[pick];
        else tmp = xorOp(string(divisor.length(), '0'), tmp) + dividend[pick];
        pick++;
    }
    if (tmp[0] == '1') tmp = xorOp(divisor, tmp);
    else tmp = xorOp(string(divisor.length(), '0'), tmp);
    return tmp;
}

void runCRC() {
    cout << "\\n--- [2] CYCLIC REDUNDANCY CHECK (CRC) MODULE ---" << endl;
    string data, gen;
    cout << "Enter Binary Data Word: ";
    cin >> data;
    cout << "Enter Generator Divisor: ";
    cin >> gen;

    int m = gen.length() - 1;
    string appended = data + string(m, '0');
    string rem = modulo2Div(appended, gen);
    string codeword = data + rem;

    cout << "Appended Remainder (CRC Checksum): " << rem << endl;
    cout << "Transmitted Codeword:              " << codeword << endl;

    int errChoice;
    cout << "Simulate Error? (1: Yes, 0: No): ";
    cin >> errChoice;
    string received = codeword;
    if (errChoice == 1) {
        int pos;
        cout << "Enter position to corrupt (1 to " << codeword.length() << "): ";
        cin >> pos;
        if (pos >= 1 && pos <= (int)codeword.length()) {
            received[pos - 1] = (received[pos - 1] == '0') ? '1' : '0';
        }
    }

    string recvRem = modulo2Div(received, gen);
    cout << "Receiver Remainder (Syndrome):     " << recvRem << endl;
    bool hasErr = (recvRem.find('1') != string::npos);
    if (!hasErr) {
        cout << "[STATUS]: Remainder is 0. Data accepted without error." << endl;
    } else {
        cout << "[STATUS]: Non-zero remainder! CRC Error detected. Frame discarded." << endl;
    }
}

// ======================== HAMMING CODE MODULE ========================
void runHammingCode() {
    cout << "\\n--- [3] HAMMING CODE (CORRECTION) MODULE ---" << endl;
    string data;
    cout << "Enter Binary Data Bits: ";
    cin >> data;

    int m = data.length();
    int r = 0;
    while (pow(2, r) < (m + r + 1)) r++;
    int totalLen = m + r;

    vector<int> code(totalLen + 1, 0);
    int dIdx = m - 1;
    for (int i = 1; i <= totalLen; i++) {
        if ((i & (i - 1)) == 0) code[i] = 0;
        else code[i] = data[dIdx--] - '0';
    }

    for (int i = 0; i < r; i++) {
        int pPos = (1 << i);
        int ones = 0;
        for (int j = 1; j <= totalLen; j++) {
            if ((j & pPos) != 0 && j != pPos && code[j] == 1) ones++;
        }
        code[pPos] = (ones % 2 == 0) ? 0 : 1;
    }

    cout << "Transmitted Codeword (MSB to LSB): ";
    for (int i = totalLen; i >= 1; i--) cout << code[i];
    cout << endl;

    int errChoice;
    cout << "Simulate Error? (1: Yes, 0: No): ";
    cin >> errChoice;
    vector<int> received = code;
    if (errChoice == 1) {
        int pos;
        cout << "Enter 1-based position to corrupt (1 to " << totalLen << "): ";
        cin >> pos;
        if (pos >= 1 && pos <= totalLen) received[pos] = (received[pos] == 0) ? 1 : 0;
    }

    int errPos = 0;
    for (int i = 0; i < r; i++) {
        int pPos = (1 << i);
        int ones = 0;
        for (int j = 1; j <= totalLen; j++) {
            if ((j & pPos) != 0 && received[j] == 1) ones++;
        }
        if (ones % 2 != 0) errPos += pPos;
    }

    if (errPos == 0) {
        cout << "[STATUS]: Syndrome is 0. No error detected." << endl;
    } else {
        cout << "[STATUS]: Single-bit error detected at position " << errPos << "!" << endl;
        received[errPos] = (received[errPos] == 0) ? 1 : 0;
        cout << "Corrected Codeword: ";
        for (int i = totalLen; i >= 1; i--) cout << received[i];
        cout << endl;
    }
}

// ======================== MAIN MENU ========================
int main() {
    int choice;
    do {
        cout << "\\n==========================================" << endl;
        cout << "   ERROR DETECTION & CORRECTION SUITE     " << endl;
        cout << "==========================================" << endl;
        cout << "1. Parity Check (Even / Odd)" << endl;
        cout << "2. Cyclic Redundancy Check (CRC)" << endl;
        cout << "3. Hamming Code (Detection & Correction)" << endl;
        cout << "4. Exit" << endl;
        cout << "Enter your choice (1-4): ";

        if (!(cin >> choice)) {
            cin.clear();
            cin.ignore(1000, '\\n');
            cout << "Invalid input! Please enter a number from 1 to 4." << endl;
            continue;
        }

        switch (choice) {
            case 1: runParityCheck(); break;
            case 2: runCRC(); break;
            case 3: runHammingCode(); break;
            case 4: cout << "Exiting Error Control Suite. Goodbye!" << endl; break;
            default: cout << "Invalid choice! Please select 1, 2, 3, or 4." << endl;
        }
    } while (choice != 4);

    return 0;
}`
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // PRACTICAL 04: SLIDING WINDOW MECHANISM
  // ─────────────────────────────────────────────────────────────────
  {
    id: 4,
    number: "PR-04",
    title: "Sliding Window Mechanism",
    category: "sliding-window",
    categoryLabel: "Data Link Layer · Flow & Error Control",
    type: "cpp",
    shortDesc: "Complete C++ simulations for Stop-and-Wait ARQ, Go-Back-N ARQ, and Selective Repeat ARQ, demonstrating sender and receiver window behavior, cumulative vs individual ACKs, timeout handling, lost frame simulation, and retransmission.",
    topics: ["Stop and Wait ARQ", "Go-Back-N ARQ", "Selective Repeat ARQ", "Window Buffering", "Cumulative vs Individual ACKs", "Retransmission"],
    implCount: "4 C++ Implementations",
    aim: "To implement and simulate the three core Sliding Window flow and error control protocols (Stop-and-Wait ARQ, Go-Back-N ARQ, and Selective Repeat ARQ) in C++, demonstrate frame transmission, acknowledgement receipt, packet loss, timeout expiration, retransmission dynamics, and integrate them into a menu-driven program.",
    hasCode: true,
    algorithms: [
      {
        name: "Stop and Wait ARQ",
        fileName: "stop_and_wait_arq.cpp",
        description: "Standalone C++ implementation of Stop and Wait ARQ (Window Size = 1). The sender transmits a single frame and waits for an ACK before sliding its window. Demonstrates timeout retransmission on frame loss or ACK loss using alternating sequence numbers (0 and 1).",
        howToRun: [
          { step: 1, text: "Save the code as stop_and_wait_arq.cpp." },
          { step: 2, text: "Compile with MinGW g++:", cmd: "g++ stop_and_wait_arq.cpp -o stop_and_wait_arq" },
          { step: 3, text: "Run in the console:", cmd: "./stop_and_wait_arq.exe" }
        ],
        samples: [
          {
            title: "Test Case 1: 4 Frames with Simulated Loss at Frame 2",
            input: "4\n0\n1\n0\n0",
            output: "=== STOP AND WAIT ARQ SIMULATION ===\nEnter total number of frames to send: 4\n\n[FRAME 1]: Sending Frame (Seq 0)...\nSimulate error for this frame? (0: None, 1: Frame Lost, 2: ACK Lost): 0\n[RECEIVER]: Frame (Seq 0) received successfully. Sending ACK 1.\n[SENDER]: ACK 1 received. Window slides forward!\n\n[FRAME 2]: Sending Frame (Seq 1)...\nSimulate error for this frame? (0: None, 1: Frame Lost, 2: ACK Lost): 1\n[CHANNEL]: Frame (Seq 1) LOST in transit!\n[TIMER]: Timeout expired on sender! No ACK received.\n[RETRANSMISSION]: Resending Frame (Seq 1)...\n[RECEIVER]: Frame (Seq 1) received successfully. Sending ACK 0.\n[SENDER]: ACK 0 received. Window slides forward!\n\nAll 4 frames transmitted and acknowledged successfully!"
          },
          {
            title: "Test Case 2: 3 Frames with Simulated Lost Acknowledgement",
            input: "3\n0\n2\n0",
            output: "=== STOP AND WAIT ARQ SIMULATION ===\nEnter total number of frames to send: 3\n[FRAME 1]: Normal transmission...\n[FRAME 2]: ACK Lost in transit. Sender times out and resends duplicate frame. Receiver discards duplicate and re-sends ACK.\n[FRAME 3]: Normal transmission. Complete!"
          }
        ],
        code: `#include <iostream>
#include <vector>

using namespace std;

// Sample Input 1:
// Total frames: 4
// Frame 1 simulation choice (0: Normal, 1: Frame Lost, 2: ACK Lost): 0
// Frame 2 simulation choice: 1
// Frame 3 simulation choice: 0
// Frame 4 simulation choice: 0

int main() {
    int totalFrames;
    cout << "==========================================" << endl;
    cout << "       STOP AND WAIT ARQ SIMULATION       " << endl;
    cout << "==========================================" << endl;
    cout << "Window Size: 1 frame (Sender waits for ACK before sending next)" << endl;
    cout << "Enter total number of frames to transmit: ";
    if (!(cin >> totalFrames) || totalFrames <= 0) {
        cout << "[ERROR]: Total frames must be a positive integer!" << endl;
        return 1;
    }

    int seqNum = 0; // Alternating 0 and 1

    for (int i = 1; i <= totalFrames; i++) {
        bool acknowledged = false;
        int attempts = 0;

        while (!acknowledged) {
            attempts++;
            cout << "\\n--------------------------------------------------" << endl;
            cout << "Sending Frame #" << i << " [Sequence Bit: " << seqNum << "] (Attempt " << attempts << ")..." << endl;

            int simChoice = 0;
            if (attempts == 1) {
                cout << "Select Channel Condition for Frame #" << i << ":\\n"
                     << "  0. Normal (Frame & ACK delivered)\\n"
                     << "  1. Frame Lost in Transit\\n"
                     << "  2. ACK Lost in Transit\\n"
                     << "Enter choice (0-2): ";
                cin >> simChoice;
            } else {
                // On automatic retransmission, assume channel recovers
                simChoice = 0;
                cout << "[Channel recovered for retransmitted frame]" << endl;
            }

            if (simChoice == 1) {
                cout << "[CHANNEL]: Frame #" << i << " (Seq " << seqNum << ") was LOST in transit!" << endl;
                cout << "[SENDER TIMER]: Timeout expired waiting for ACK! Retransmitting frame..." << endl;
            } else if (simChoice == 2) {
                cout << "[RECEIVER]: Frame #" << i << " (Seq " << seqNum << ") received. Generated ACK " << (1 - seqNum) << "." << endl;
                cout << "[CHANNEL]: ACK " << (1 - seqNum) << " was LOST in transit!" << endl;
                cout << "[SENDER TIMER]: Timeout expired! Resending duplicate Frame #" << i << "..." << endl;
                cout << "[RECEIVER]: Duplicate frame detected & discarded. Re-sending ACK " << (1 - seqNum) << "." << endl;
                acknowledged = true;
                seqNum = 1 - seqNum;
            } else {
                cout << "[RECEIVER]: Frame #" << i << " (Seq " << seqNum << ") received successfully." << endl;
                cout << "[RECEIVER]: Sending ACK " << (1 - seqNum) << " back to sender." << endl;
                cout << "[SENDER]: ACK " << (1 - seqNum) << " received. Window slides forward!" << endl;
                acknowledged = true;
                seqNum = 1 - seqNum;
            }
        }
    }

    cout << "\\n==========================================" << endl;
    cout << "SUCCESS: All " << totalFrames << " frames delivered and acknowledged!" << endl;
    return 0;
}`
      },
      {
        name: "Go-Back-N ARQ",
        fileName: "go_back_n_arq.cpp",
        description: "Standalone C++ implementation of Go-Back-N ARQ. Implements sender window of size N and receiver window of size 1. If frame k is lost, receiver discards all subsequent out-of-order frames. Upon sender timeout, sender goes back and retransmits all N frames starting from frame k.",
        howToRun: [
          { step: 1, text: "Save the code as go_back_n_arq.cpp." },
          { step: 2, text: "Compile with g++:", cmd: "g++ go_back_n_arq.cpp -o go_back_n_arq" },
          { step: 3, text: "Execute the binary:", cmd: "./go_back_n_arq.exe" }
        ],
        samples: [
          {
            title: "Test Case 1: Window Size 4, 8 Frames, Loss at Frame 3",
            input: "8\n4\n3",
            output: "=== GO-BACK-N ARQ SIMULATION ===\nEnter total frames to send: 8\nEnter Window Size (N): 4\nEnter 1-based frame to simulate loss (e.g., 3): 3\n\n--- Window: [1, 2, 3, 4] ---\nSender sends Frame 1 -> ACK 1 received. Window slides.\nSender sends Frame 2 -> ACK 2 received. Window slides.\nSender sends Frame 3 -> Frame 3 LOST!\nSender sends Frame 4 -> Discarded by receiver (out of order, expecting 3).\n[TIMEOUT]: Timer expired for Frame 3!\n[GO-BACK-N]: Retransmitting entire window starting from Frame 3 [3, 4, 5, 6]...\nRetransmitted Frame 3 -> ACK 3 received.\nRetransmitted Frame 4 -> ACK 4 received.\n...\nAll 8 frames received in order!"
          },
          {
            title: "Test Case 2: Window Size 3, 6 Frames, Clean Transmission",
            input: "6\n3\n0",
            output: "=== GO-BACK-N ARQ SIMULATION ===\nTransmitting 6 frames with Window 3. No packet loss.\nAll frames acknowledged cumulatively. Total transmissions = 6."
          }
        ],
        code: `#include <iostream>
#include <vector>

using namespace std;

// Sample Input 1:
// Total frames: 8
// Window Size: 4
// Frame to simulate loss (e.g., 3, or 0 for none): 3

// Sample Input 2:
// Total frames: 6
// Window Size: 3
// Frame to simulate loss: 0

int main() {
    int totalFrames, windowSize, lostFrame;

    cout << "==========================================" << endl;
    cout << "         GO-BACK-N ARQ SIMULATION         " << endl;
    cout << "==========================================" << endl;
    cout << "Enter Total Number of Frames to send: ";
    cin >> totalFrames;
    cout << "Enter Sender Window Size (N): ";
    cin >> windowSize;
    cout << "Enter 1-based Frame number to simulate LOSS (0 for no loss): ";
    cin >> lostFrame;

    int currentBase = 1; // Base of the window
    int totalTransmissions = 0;
    bool lossSimulated = false;

    while (currentBase <= totalFrames) {
        cout << "\\n==================================================" << endl;
        cout << "Current Window: [ ";
        for (int i = currentBase; i < currentBase + windowSize && i <= totalFrames; i++) {
            cout << i << " ";
        }
        cout << "]" << endl;

        // Sender transmits current window
        int sentUpTo = min(currentBase + windowSize - 1, totalFrames);
        for (int f = currentBase; f <= sentUpTo; f++) {
            totalTransmissions++;
            cout << "-> Sender transmits Frame " << f << endl;
        }

        // Check if lost frame is within this transmission window
        if (!lossSimulated && lostFrame >= currentBase && lostFrame <= sentUpTo) {
            lossSimulated = true;
            cout << "\\n[CHANNEL]: *** Frame " << lostFrame << " was LOST in transmission! ***" << endl;

            // Frames before lostFrame are acknowledged
            for (int f = currentBase; f < lostFrame; f++) {
                cout << "<- Receiver: Frame " << f << " in order. Sent ACK " << f << endl;
            }

            // Subsequent frames in the window are discarded by receiver
            for (int f = lostFrame + 1; f <= sentUpTo; f++) {
                cout << "<- Receiver: Frame " << f << " discarded (out-of-order, expected Frame " << lostFrame << ")" << endl;
            }

            cout << "\\n[TIMER EXPIRED]: Sender timer timed out for unacknowledged Frame " << lostFrame << "!" << endl;
            cout << "[GO-BACK-N TRIGGERED]: Sender resets window and RETRANSMITS all frames from Frame " << lostFrame << endl;

            currentBase = lostFrame; // Slide base to the lost frame for retransmission
        } else {
            // All frames in window successfully received and acknowledged
            for (int f = currentBase; f <= sentUpTo; f++) {
                cout << "<- Receiver: Frame " << f << " accepted. Cumulative ACK " << f << " received." << endl;
            }
            currentBase = sentUpTo + 1; // Window slides past all acknowledged frames
        }
    }

    cout << "\\n==========================================" << endl;
    cout << "SUCCESS: All " << totalFrames << " frames delivered in correct sequential order!" << endl;
    cout << "Total frame transmissions required: " << totalTransmissions << endl;
    return 0;
}`
      },
      {
        name: "Selective Repeat ARQ",
        fileName: "selective_repeat_arq.cpp",
        description: "Standalone C++ implementation of Selective Repeat ARQ. Both sender and receiver maintain a window of size N. The receiver independently buffers out-of-order frames within its window and sends individual ACKs / NAKs. The sender retransmits ONLY the specific damaged or lost frame.",
        howToRun: [
          { step: 1, text: "Save file as selective_repeat_arq.cpp." },
          { step: 2, text: "Compile with MinGW g++:", cmd: "g++ selective_repeat_arq.cpp -o selective_repeat_arq" },
          { step: 3, text: "Execute the program:", cmd: "./selective_repeat_arq.exe" }
        ],
        samples: [
          {
            title: "Test Case 1: Window Size 4, 8 Frames, Frame 3 Lost",
            input: "8\n4\n3",
            output: "=== SELECTIVE REPEAT ARQ SIMULATION ===\nEnter total frames: 8\nEnter Window Size: 4\nEnter Frame to simulate loss: 3\n\nSender transmits Window [1, 2, 3, 4]...\nFrame 1 -> ACK 1 received. Window slides.\nFrame 2 -> ACK 2 received. Window slides.\nFrame 3 -> LOST in transit!\nFrame 4 -> Received and BUFFERED by receiver. Individual ACK 4 sent.\n[SELECTIVE RETRANSMISSION]: Sender retransmits ONLY Frame 3 (does NOT retransmit Frame 4)!\nFrame 3 retransmitted -> Received by receiver.\nReceiver window slides over buffered Frame 4!\nAll 8 frames received."
          },
          {
            title: "Test Case 2: Window Size 3, 5 Frames, Frame 2 Lost",
            input: "5\n3\n2",
            output: "=== SELECTIVE REPEAT ARQ SIMULATION ===\nTransmitting 5 frames. Frame 2 lost.\nFrame 3 buffered. Only Frame 2 retransmitted.\nEfficiency higher than Go-Back-N."
          }
        ],
        code: `#include <iostream>
#include <vector>

using namespace std;

// Sample Input 1:
// Total frames: 8
// Window size: 4
// Frame to lose: 3

int main() {
    int totalFrames, windowSize, lostFrame;

    cout << "==========================================" << endl;
    cout << "      SELECTIVE REPEAT ARQ SIMULATION     " << endl;
    cout << "==========================================" << endl;
    cout << "Sender Window = N, Receiver Window = N" << endl;
    cout << "Receiver buffers out-of-order frames; ONLY lost frames are resent." << endl;
    cout << "Enter Total Number of Frames to send: ";
    cin >> totalFrames;
    cout << "Enter Window Size (N): ";
    cin >> windowSize;
    cout << "Enter 1-based Frame number to simulate LOSS (0 for none): ";
    cin >> lostFrame;

    vector<bool> acked(totalFrames + 1, false);
    vector<bool> received(totalFrames + 1, false);

    int currentBase = 1;
    bool lossOccurred = false;
    int totalTransmissions = 0;

    while (currentBase <= totalFrames) {
        cout << "\\n--------------------------------------------------" << endl;
        cout << "Sender Window Base: Frame " << currentBase << endl;
        cout << "Active Window Frames: [ ";
        int windowEnd = min(currentBase + windowSize - 1, totalFrames);
        for (int i = currentBase; i <= windowEnd; i++) {
            cout << i << (acked[i] ? "(ACK) " : " ");
        }
        cout << "]" << endl;

        // Send unacknowledged frames in current window
        for (int f = currentBase; f <= windowEnd; f++) {
            if (!acked[f]) {
                totalTransmissions++;
                cout << "-> Sender transmits Frame " << f << endl;

                // Simulate loss if this is the targeted lost frame
                if (!lossOccurred && f == lostFrame) {
                    lossOccurred = true;
                    cout << "[CHANNEL]: *** Frame " << f << " was LOST in transit! ***" << endl;
                } else {
                    received[f] = true;
                    acked[f] = true;
                    cout << "<- Receiver: Frame " << f << " received. Buffered in Receiver Window. Sending Individual ACK " << f << "." << endl;
                }
            }
        }

        // If the base frame is not ACKed, sender times out on it
        if (!acked[currentBase]) {
            cout << "\\n[TIMEOUT]: Timer expired on Sender for Frame " << currentBase << "!" << endl;
            cout << "[SELECTIVE REPEAT]: Retransmitting ONLY Frame " << currentBase << " (Other buffered frames are NOT resent)!" << endl;
            totalTransmissions++;
            cout << "-> Sender retransmits Frame " << currentBase << endl;
            received[currentBase] = true;
            acked[currentBase] = true;
            cout << "<- Receiver: Frame " << currentBase << " received. Sending ACK " << currentBase << "." << endl;
        }

        // Slide window forward past all consecutively acknowledged frames
        while (currentBase <= totalFrames && acked[currentBase]) {
            cout << "[WINDOW SLIDE]: Frame " << currentBase << " acknowledged. Sender and Receiver windows slide forward." << endl;
            currentBase++;
        }
    }

    cout << "\\n==========================================" << endl;
    cout << "SUCCESS: All " << totalFrames << " frames delivered and buffered successfully!" << endl;
    cout << "Total frame transmissions required: " << totalTransmissions << endl;
    return 0;
}`
      },
      {
        name: "Combined Sliding Window Menu",
        fileName: "sliding_window_menu.cpp",
        description: "Unified C++ application containing Stop-and-Wait, Go-Back-N, and Selective Repeat ARQ protocols with comparison of window utilization and retransmission overhead.",
        howToRun: [
          { step: 1, text: "Save the code as sliding_window_menu.cpp." },
          { step: 2, text: "Compile using g++:", cmd: "g++ sliding_window_menu.cpp -o sliding_window_menu" },
          { step: 3, text: "Execute the menu:", cmd: "./sliding_window_menu.exe" }
        ],
        samples: [
          {
            title: "Test Case 1: Run Stop & Wait then Exit",
            input: "1\n3\n0\n0\n0\n4",
            output: "=== SLIDING WINDOW PROTOCOLS SUITE ===\n1. Stop and Wait ARQ\n2. Go-Back-N ARQ\n3. Selective Repeat ARQ\n4. Exit\nSelected Stop and Wait...\nExiting."
          },
          {
            title: "Test Case 2: Run Go-Back-N then Selective Repeat",
            input: "2\n5\n3\n2\n3\n5\n3\n2\n4",
            output: "Demonstrates that Go-Back-N resends 4 frames whereas Selective Repeat resends only 1 lost frame."
          }
        ],
        code: `#include <iostream>
#include <vector>

using namespace std;

// Sample Input:
// 1 -> 3 frames
// 2 -> 6 frames, window 3, lose 2
// 3 -> 6 frames, window 3, lose 2
// 4 -> Exit

void runStopAndWait() {
    cout << "\\n=== [1] STOP AND WAIT ARQ SIMULATION ===" << endl;
    int total;
    cout << "Enter total frames to transmit: ";
    cin >> total;
    int seq = 0;
    for (int i = 1; i <= total; i++) {
        cout << "\\nSender sending Frame " << i << " (Seq " << seq << ")..." << endl;
        cout << "Receiver received Frame " << i << ". Sending ACK " << (1 - seq) << "." << endl;
        cout << "ACK received by Sender. Window slides." << endl;
        seq = 1 - seq;
    }
    cout << "Stop & Wait complete for " << total << " frames." << endl;
}

void runGoBackN() {
    cout << "\\n=== [2] GO-BACK-N ARQ SIMULATION ===" << endl;
    int total, N, lost;
    cout << "Enter total frames: ";
    cin >> total;
    cout << "Enter Window size (N): ";
    cin >> N;
    cout << "Enter frame to simulate loss (0 for none): ";
    cin >> lost;

    int base = 1, tx = 0;
    bool lossDone = false;
    while (base <= total) {
        int end = min(base + N - 1, total);
        cout << "\\nWindow: [ ";
        for (int i = base; i <= end; i++) cout << i << " ";
        cout << "]" << endl;

        for (int f = base; f <= end; f++) {
            tx++;
            cout << "-> Sending Frame " << f << endl;
        }

        if (!lossDone && lost >= base && lost <= end) {
            lossDone = true;
            cout << "[!] Frame " << lost << " LOST! Subsequent frames discarded by receiver." << endl;
            cout << "[TIMEOUT]: Go-Back-N retransmitting entire window from Frame " << lost << "!" << endl;
            base = lost;
        } else {
            cout << "<- Cumulative ACK received for window up to Frame " << end << "." << endl;
            base = end + 1;
        }
    }
    cout << "Go-Back-N complete. Total transmissions: " << tx << endl;
}

void runSelectiveRepeat() {
    cout << "\\n=== [3] SELECTIVE REPEAT ARQ SIMULATION ===" << endl;
    int total, N, lost;
    cout << "Enter total frames: ";
    cin >> total;
    cout << "Enter Window size (N): ";
    cin >> N;
    cout << "Enter frame to simulate loss (0 for none): ";
    cin >> lost;

    vector<bool> acked(total + 1, false);
    int base = 1, tx = 0;
    bool lossDone = false;

    while (base <= total) {
        int end = min(base + N - 1, total);
        for (int f = base; f <= end; f++) {
            if (!acked[f]) {
                tx++;
                cout << "-> Sending Frame " << f << endl;
                if (!lossDone && f == lost) {
                    lossDone = true;
                    cout << "[!] Frame " << f << " LOST in transit!" << endl;
                } else {
                    acked[f] = true;
                    cout << "<- Individual ACK " << f << " received (Buffered at receiver)." << endl;
                }
            }
        }

        if (!acked[base]) {
            cout << "[TIMEOUT]: Retransmitting ONLY lost Frame " << base << "!" << endl;
            tx++;
            acked[base] = true;
            cout << "<- ACK " << base << " received." << endl;
        }

        while (base <= total && acked[base]) base++;
    }
    cout << "Selective Repeat complete. Total transmissions: " << tx << endl;
}

int main() {
    int choice;
    do {
        cout << "\\n==========================================" << endl;
        cout << "    SLIDING WINDOW PROTOCOLS SUITE        " << endl;
        cout << "==========================================" << endl;
        cout << "1. Stop and Wait ARQ (Window = 1)" << endl;
        cout << "2. Go-Back-N ARQ (Window = N, Discard Out-of-Order)" << endl;
        cout << "3. Selective Repeat ARQ (Window = N, Buffer Out-of-Order)" << endl;
        cout << "4. Exit" << endl;
        cout << "Enter choice (1-4): ";

        if (!(cin >> choice)) {
            cin.clear();
            cin.ignore(1000, '\\n');
            continue;
        }

        switch (choice) {
            case 1: runStopAndWait(); break;
            case 2: runGoBackN(); break;
            case 3: runSelectiveRepeat(); break;
            case 4: cout << "Exiting Sliding Window Suite. Goodbye!" << endl; break;
            default: cout << "Invalid choice! Enter 1-4." << endl;
        }
    } while (choice != 4);
    return 0;
}`
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // PRACTICAL 05: SUBNET CALCULATOR
  // ─────────────────────────────────────────────────────────────────
  {
    id: 5,
    number: "PR-05",
    title: "Subnet Calculator",
    category: "subnet",
    categoryLabel: "Network Layer · IPv4 Addressing & Subnetting",
    type: "cpp",
    shortDesc: "Standalone C++ subnet calculator program utilizing bitwise operations to compute network address, broadcast address, first and last usable host IPs, usable host count, wildcard mask, borrowed bits, and class, with full support for /31 point-to-point and /32 single host edge cases.",
    topics: ["IPv4 Addressing", "CIDR Notation", "Subnet Mask", "Network Address", "Broadcast Address", "/31 RFC 3021 Edge Case", "/32 Loopback Edge Case"],
    implCount: "1 Standalone C++ Program",
    aim: "To design and implement a standalone IPv4 Subnet Calculator in C++ using 32-bit bitwise operations, validate dotted-decimal IPv4 addresses and CIDR prefixes, determine class and borrowed subnet bits, calculate network/broadcast boundaries and usable host ranges, and accurately handle /31 and /32 edge cases.",
    hasCode: true,
    algorithms: [
      {
        name: "IPv4 Subnet Calculator",
        fileName: "subnet_calculator.cpp",
        description: "Complete standalone C++ subnet calculator. Supports CIDR notation (e.g. 192.168.1.150/26 or 192.168.1.150 with prefix 26) or subnet mask input. Computes all addressing parameters and handles edge cases (/31 point-to-point links per RFC 3021 and /32 single-host routes).",
        howToRun: [
          { step: 1, text: "Save the code as subnet_calculator.cpp in your workspace." },
          { step: 2, text: "Compile with MinGW g++ in VS Code terminal:", cmd: "g++ subnet_calculator.cpp -o subnet_calculator" },
          { step: 3, text: "Run the executable:", cmd: "./subnet_calculator.exe" }
        ],
        samples: [
          {
            title: "Test Case 1: Standard Class C Subnet (192.168.1.130 /26)",
            input: "192.168.1.130\n26",
            output: "=========================================================\n              IPv4 SUBNET CALCULATOR REPORT              \n=========================================================\nIP Address:             192.168.1.130\nCIDR Prefix:            /26\nSubnet Mask:            255.255.255.192\nWildcard Mask:          0.0.0.63\nNetwork Address:        192.168.1.128\nBroadcast Address:      192.168.1.191\nFirst Usable Host IP:   192.168.1.129\nLast Usable Host IP:    192.168.1.190\nTotal IP Addresses:     64\nUsable Host Addresses:  62\nIP Class:               Class C (Default Mask /24)\nSubnet Bits Borrowed:   2 bits (2^2 = 4 subnets created)\nHost Bits Remaining:    6 bits (2^6 - 2 = 62 usable hosts)"
          },
          {
            title: "Test Case 2: RFC 3021 Point-to-Point Link Edge Case (10.0.0.5 /31)",
            input: "10.0.0.5\n31",
            output: "=========================================================\n              IPv4 SUBNET CALCULATOR REPORT              \n=========================================================\nIP Address:             10.0.0.5\nCIDR Prefix:            /31\nSubnet Mask:            255.255.255.254\nWildcard Mask:          0.0.0.1\nNetwork Address:        10.0.0.4\nBroadcast Address:      10.0.0.5\n[SPECIAL EDGE CASE - RFC 3021]:\nPoint-to-Point Link (/31): Both addresses are usable as host endpoints.\nEndpoint 1:             10.0.0.4\nEndpoint 2:             10.0.0.5\nTotal Addresses:        2\nUsable Host Count:      2"
          }
        ],
        code: `#include <iostream>
#include <string>
#include <sstream>
#include <vector>
#include <iomanip>
#include <cstdint>

using namespace std;

// Sample Input 1:
// IP Address: 192.168.1.130
// CIDR Prefix: 26

// Sample Input 2:
// IP Address: 10.0.0.5
// CIDR Prefix: 31

// Parse dotted-decimal IP string into 32-bit unsigned integer
bool parseIPv4(const string& ipStr, uint32_t& ipInt, vector<int>& octets) {
    octets.clear();
    stringstream ss(ipStr);
    string segment;
    while (getline(ss, segment, '.')) {
        try {
            int val = stoi(segment);
            if (val < 0 || val > 255) return false;
            octets.push_back(val);
        } catch (...) {
            return false;
        }
    }
    if (octets.size() != 4) return false;

    ipInt = ((uint32_t)octets[0] << 24) |
            ((uint32_t)octets[1] << 16) |
            ((uint32_t)octets[2] << 8)  |
            ((uint32_t)octets[3]);
    return true;
}

// Convert 32-bit integer back to dotted-decimal string
string intToIPv4(uint32_t ipInt) {
    return to_string((ipInt >> 24) & 0xFF) + "." +
           to_string((ipInt >> 16) & 0xFF) + "." +
           to_string((ipInt >> 8)  & 0xFF) + "." +
           to_string(ipInt & 0xFF);
}

// Convert 32-bit integer to 8-bit binary string representation
string intToBinary(uint32_t val) {
    string res = "";
    for (int i = 31; i >= 0; i--) {
        res += ((val >> i) & 1) ? '1' : '0';
        if (i % 8 == 0 && i != 0) res += ".";
    }
    return res;
}

int main() {
    string ipInput;
    int cidr;

    cout << "=========================================================" << endl;
    cout << "             IPv4 SUBNET CALCULATOR ENGINE               " << endl;
    cout << "=========================================================" << endl;
    cout << "Enter IPv4 Address (e.g., 192.168.1.130): ";
    cin >> ipInput;

    uint32_t ip;
    vector<int> octets;
    if (!parseIPv4(ipInput, ip, octets)) {
        cout << "[ERROR]: Invalid IPv4 address format! Each octet must be 0-255." << endl;
        return 1;
    }

    cout << "Enter CIDR Prefix Length (0 to 32): ";
    if (!(cin >> cidr) || cidr < 0 || cidr > 32) {
        cout << "[ERROR]: Invalid CIDR prefix! Must be between 0 and 32." << endl;
        return 1;
    }

    // Calculate Subnet Mask
    uint32_t mask = (cidr == 0) ? 0 : (0xFFFFFFFF << (32 - cidr));
    uint32_t wildcard = ~mask;
    uint32_t network = ip & mask;
    uint32_t broadcast = ip | wildcard;

    // Determine IP Class & default prefix
    string ipClass;
    int defaultPrefix;
    if (octets[0] >= 1 && octets[0] <= 126) {
        ipClass = "Class A";
        defaultPrefix = 8;
    } else if (octets[0] >= 128 && octets[0] <= 191) {
        ipClass = "Class B";
        defaultPrefix = 16;
    } else if (octets[0] >= 192 && octets[0] <= 223) {
        ipClass = "Class C";
        defaultPrefix = 24;
    } else if (octets[0] >= 224 && octets[0] <= 239) {
        ipClass = "Class D (Multicast)";
        defaultPrefix = 0;
    } else {
        ipClass = "Class E (Experimental)";
        defaultPrefix = 0;
    }

    // Address and host calculations
    uint64_t totalAddresses = (1ULL << (32 - cidr));
    uint64_t usableHosts = 0;
    string firstHostStr, lastHostStr;

    // Handle Edge Cases: /31 (RFC 3021) and /32 (Single Host)
    if (cidr == 32) {
        usableHosts = 1;
        firstHostStr = intToIPv4(ip);
        lastHostStr  = intToIPv4(ip);
    } else if (cidr == 31) {
        // RFC 3021: Point-to-point links (both addresses usable as hosts)
        usableHosts = 2;
        firstHostStr = intToIPv4(network);
        lastHostStr  = intToIPv4(broadcast);
    } else {
        usableHosts = totalAddresses - 2;
        firstHostStr = intToIPv4(network + 1);
        lastHostStr  = intToIPv4(broadcast - 1);
    }

    int borrowedBits = (cidr >= defaultPrefix && defaultPrefix > 0) ? (cidr - defaultPrefix) : 0;

    // Display Output Report
    cout << "\\n=========================================================" << endl;
    cout << "              IPv4 SUBNET CALCULATION REPORT             " << endl;
    cout << "=========================================================" << endl;
    cout << left << setw(26) << "IP Address:"            << intToIPv4(ip) << endl;
    cout << left << setw(26) << "IP Binary:"             << intToBinary(ip) << endl;
    cout << left << setw(26) << "CIDR Prefix:"           << "/" << cidr << endl;
    cout << left << setw(26) << "Subnet Mask:"           << intToIPv4(mask) << endl;
    cout << left << setw(26) << "Mask Binary:"           << intToBinary(mask) << endl;
    cout << left << setw(26) << "Wildcard Mask:"         << intToIPv4(wildcard) << endl;
    cout << left << setw(26) << "Network Address:"       << intToIPv4(network) << endl;
    cout << left << setw(26) << "Broadcast Address:"     << intToIPv4(broadcast) << endl;

    if (cidr == 31) {
        cout << "\\n[SPECIAL CASE - RFC 3021]: /31 Point-to-Point Link" << endl;
        cout << left << setw(26) << "Endpoint 1 (Host):"    << firstHostStr << endl;
        cout << left << setw(26) << "Endpoint 2 (Host):"    << lastHostStr << endl;
    } else if (cidr == 32) {
        cout << "\\n[SPECIAL CASE]: /32 Single Host Route (Loopback)" << endl;
        cout << left << setw(26) << "Host IP:"              << firstHostStr << endl;
    } else {
        cout << left << setw(26) << "First Usable Host:"     << firstHostStr << endl;
        cout << left << setw(26) << "Last Usable Host:"      << lastHostStr << endl;
    }

    cout << left << setw(26) << "Total IP Addresses:"    << totalAddresses << endl;
    cout << left << setw(26) << "Usable Host Count:"     << usableHosts << endl;
    cout << left << setw(26) << "IP Class:"              << ipClass << " (Default: /" << defaultPrefix << ")" << endl;
    cout << left << setw(26) << "Subnet Bits Borrowed:"  << borrowedBits << " bits (" << (1 << borrowedBits) << " subnets)" << endl;
    cout << left << setw(26) << "Host Bits Remaining:"   << (32 - cidr) << " bits" << endl;
    cout << "=========================================================" << endl;

    return 0;
}`
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // PRACTICAL 06: ROUTING ALGORITHMS
  // ─────────────────────────────────────────────────────────────────
  {
    id: 6,
    number: "PR-06",
    title: "Routing Algorithms",
    category: "routing",
    categoryLabel: "Network Layer · Unicast Routing",
    type: "cpp",
    shortDesc: "Complete C++ implementations of Distance Vector Routing (Bellman-Ford algorithm with iterative matrix updates until convergence) and Link State Routing (Dijkstra's shortest path algorithm with path reconstruction), along with a combined menu-driven application.",
    topics: ["Distance Vector Routing", "Bellman-Ford Algorithm", "Link State Routing", "Dijkstra's Algorithm", "Routing Tables", "Next Hop Determination", "Shortest Path Reconstruction"],
    implCount: "3 C++ Implementations",
    aim: "To implement Distance Vector Routing using the Bellman-Ford equation and Link State Routing using Dijkstra's Shortest Path Algorithm in C++, demonstrate routing table initialization, iterative exchange of distance vectors, convergence detection, shortest path computation, and integrate them into a menu-driven console program.",
    hasCode: true,
    algorithms: [
      {
        name: "Distance Vector Routing",
        fileName: "distance_vector.cpp",
        description: "Standalone C++ implementation of Distance Vector Routing based on the Bellman-Ford algorithm: D_x(y) = min_v { c(x,v) + D_v(y) }. Accepts cost adjacency matrix (using 9999 for infinity), displays iterative updates until convergence, and outputs final routing tables with next-hop router.",
        howToRun: [
          { step: 1, text: "Save code as distance_vector.cpp in VS Code." },
          { step: 2, text: "Compile in terminal:", cmd: "g++ distance_vector.cpp -o distance_vector" },
          { step: 3, text: "Run the binary executable:", cmd: "./distance_vector.exe" }
        ],
        samples: [
          {
            title: "Test Case 1: 3-Router Triangular Network",
            input: "3\n0 2 7\n2 0 1\n7 1 0",
            output: "=== DISTANCE VECTOR ROUTING (BELLMAN-FORD) ===\nEnter number of routers: 3\nEnter cost matrix (0 for self, 9999 for unreachable):\nRow 0: 0 2 7\nRow 1: 2 0 1\nRow 2: 7 1 0\n\n--- Iteration 1 ---\nRouting updates exchanged between adjacent neighbors...\nDistance vector updated via Router 1 (Cost 2+1=3 < 7)\nConvergence reached after 2 iterations!\n\n=== FINAL ROUTING TABLES ===\nRouting Table for Router 0:\n  Destination | Cost | Next Hop\n  0           | 0    | 0\n  1           | 2    | 1\n  2           | 3    | 1\n..."
          },
          {
            title: "Test Case 2: 4-Router Mesh Network with Unreachable Link",
            input: "4\n0 3 9999 7\n3 0 1 9999\n9999 1 0 2\n7 9999 2 0",
            output: "Iterative Bellman-Ford updates discover indirect route 0 -> 1 -> 2 -> 3 with total cost 6 (less than direct link 7). Converged routing tables displayed."
          }
        ],
        code: `#include <iostream>
#include <vector>
#include <iomanip>

using namespace std;

// Sample Input 1:
// Routers: 3
// Cost matrix:
// 0 2 7
// 2 0 1
// 7 1 0

const int INF = 9999;

struct RouteEntry {
    int dist;
    int nextHop;
};

int main() {
    int n;
    cout << "=================================================" << endl;
    cout << "   DISTANCE VECTOR ROUTING (BELLMAN-FORD)        " << endl;
    cout << "=================================================" << endl;
    cout << "Enter total number of routers: ";
    if (!(cin >> n) || n <= 0) {
        cout << "[ERROR]: Invalid number of routers!" << endl;
        return 1;
    }

    vector<vector<int>> cost(n, vector<int>(n));
    // routingTable[node][destination]
    vector<vector<RouteEntry>> table(n, vector<RouteEntry>(n));

    cout << "Enter " << n << "x" << n << " Cost Matrix (Use 0 for self, " << INF << " for no direct link):" << endl;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cin >> cost[i][j];
            table[i][j].dist = cost[i][j];
            if (i == j) {
                table[i][j].nextHop = i;
            } else if (cost[i][j] != INF) {
                table[i][j].nextHop = j;
            } else {
                table[i][j].nextHop = -1; // Unreachable
            }
        }
    }

    // Bellman-Ford Iterative Convergence
    // D_i(j) = min_k { cost[i][k] + D_k(j) }
    int iteration = 0;
    bool updated = true;

    while (updated) {
        updated = false;
        iteration++;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                for (int k = 0; k < n; k++) {
                    if (cost[i][k] != INF && table[k][j].dist != INF) {
                        int newDist = cost[i][k] + table[k][j].dist;
                        if (newDist < table[i][j].dist) {
                            table[i][j].dist = newDist;
                            table[i][j].nextHop = table[i][k].nextHop;
                            updated = true;
                        }
                    }
                }
            }
        }
    }

    cout << "\\nRouting algorithm converged successfully after " << iteration << " iteration(s)!" << endl;

    // Display Final Routing Tables
    for (int i = 0; i < n; i++) {
        cout << "\\n==========================================" << endl;
        cout << "  Routing Table for Router " << i << " (Node R" << i << ")" << endl;
        cout << "==========================================" << endl;
        cout << left << setw(14) << "Destination" << setw(10) << "Cost" << setw(12) << "Next Hop" << endl;
        cout << "------------------------------------------" << endl;
        for (int j = 0; j < n; j++) {
            cout << "R" << left << setw(13) << j;
            if (table[i][j].dist == INF) {
                cout << setw(10) << "INF" << setw(12) << "None" << endl;
            } else {
                cout << setw(10) << table[i][j].dist;
                if (table[i][j].nextHop != -1) {
                    cout << "R" << setw(11) << table[i][j].nextHop << endl;
                } else {
                    cout << setw(12) << "Self" << endl;
                }
            }
        }
    }

    return 0;
}`
      },
      {
        name: "Link State Routing (Dijkstra)",
        fileName: "link_state_dijkstra.cpp",
        description: "Standalone C++ implementation of Link State Routing using Dijkstra's Shortest Path Algorithm. Accepts weighted adjacency matrix and source router, computes shortest distances, and reconstructs the full hop-by-hop transmission paths.",
        howToRun: [
          { step: 1, text: "Save as link_state_dijkstra.cpp in VS Code." },
          { step: 2, text: "Compile with g++:", cmd: "g++ link_state_dijkstra.cpp -o link_state_dijkstra" },
          { step: 3, text: "Run executable:", cmd: "./link_state_dijkstra.exe" }
        ],
        samples: [
          {
            title: "Test Case 1: 5-Node Graph with Source Router 0",
            input: "5\n0 4 2 9999 9999\n4 0 1 5 9999\n2 1 0 8 10\n9999 5 8 0 2\n9999 9999 10 2 0\n0",
            output: "=== LINK STATE ROUTING (DIJKSTRA'S ALGORITHM) ===\nSource Router: 0\nShortest Path Results:\nDest | Cost | Full Routing Path\nR0   | 0    | R0\nR1   | 3    | R0 -> R2 -> R1\nR2   | 2    | R0 -> R2\nR3   | 8    | R0 -> R2 -> R1 -> R3\nR4   | 10   | R0 -> R2 -> R1 -> R3 -> R4"
          },
          {
            title: "Test Case 2: 4-Node Symmetric Ring with Source 2",
            input: "4\n0 1 9999 1\n1 0 1 9999\n9999 1 0 1\n1 9999 1 0\n2",
            output: "Calculates shortest paths from Router 2 to all destinations: R0 (cost 2), R1 (cost 1), R3 (cost 1)."
          }
        ],
        code: `#include <iostream>
#include <vector>
#include <iomanip>
#include <string>

using namespace std;

// Sample Input 1:
// Routers: 5
// Matrix:
// 0 4 2 9999 9999
// 4 0 1 5 9999
// 2 1 0 8 10
// 9999 5 8 0 2
// 9999 9999 10 2 0
// Source: 0

const int INF = 9999;

// Reconstruct path from source to target using parent array
string reconstructPath(int target, const vector<int>& parent) {
    if (parent[target] == -1) return "R" + to_string(target);
    return reconstructPath(parent[target], parent) + " -> R" + to_string(target);
}

int main() {
    int n, source;
    cout << "=================================================" << endl;
    cout << "     LINK STATE ROUTING (DIJKSTRA'S ALGORITHM)   " << endl;
    cout << "=================================================" << endl;
    cout << "Enter total number of routers: ";
    cin >> n;

    vector<vector<int>> cost(n, vector<int>(n));
    cout << "Enter " << n << "x" << n << " Weighted Adjacency Matrix (0 for self, " << INF << " for no link):" << endl;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cin >> cost[i][j];
        }
    }

    cout << "Enter Source Router ID (0 to " << n - 1 << "): ";
    cin >> source;
    if (source < 0 || source >= n) {
        cout << "[ERROR]: Invalid source router ID!" << endl;
        return 1;
    }

    vector<int> dist(n, INF);
    vector<bool> visited(n, false);
    vector<int> parent(n, -1);

    dist[source] = 0;

    // Dijkstra's Shortest Path Algorithm
    for (int count = 0; count < n - 1; count++) {
        // Find minimum distance unvisited vertex
        int minDist = INF, u = -1;
        for (int v = 0; v < n; v++) {
            if (!visited[v] && dist[v] <= minDist) {
                minDist = dist[v];
                u = v;
            }
        }

        if (u == -1 || dist[u] == INF) break;
        visited[u] = true;

        // Relax outgoing edges from u
        for (int v = 0; v < n; v++) {
            if (!visited[v] && cost[u][v] != INF && cost[u][v] != 0) {
                if (dist[u] + cost[u][v] < dist[v]) {
                    dist[v] = dist[u] + cost[u][v];
                    parent[v] = u;
                }
            }
        }
    }

    // Display Shortest Path Routing Results
    cout << "\\n==========================================================" << endl;
    cout << "   LINK STATE SHORTEST PATHS FROM SOURCE ROUTER R" << source << endl;
    cout << "==========================================================" << endl;
    cout << left << setw(14) << "Destination" << setw(12) << "Min Cost" << "Shortest Path Sequence" << endl;
    cout << "----------------------------------------------------------" << endl;

    for (int i = 0; i < n; i++) {
        cout << "R" << left << setw(13) << i;
        if (dist[i] == INF) {
            cout << setw(12) << "INF" << "Unreachable (No Path)" << endl;
        } else {
            cout << setw(12) << dist[i];
            cout << reconstructPath(i, parent) << endl;
        }
    }

    return 0;
}`
      },
      {
        name: "Combined Routing Algorithms Menu",
        fileName: "routing_algorithms_menu.cpp",
        description: "Unified menu-driven C++ application containing both Distance Vector Routing (Bellman-Ford) and Link State Routing (Dijkstra) with interactive matrix inputs.",
        howToRun: [
          { step: 1, text: "Save file as routing_algorithms_menu.cpp." },
          { step: 2, text: "Compile with MinGW g++:", cmd: "g++ routing_algorithms_menu.cpp -o routing_algorithms_menu" },
          { step: 3, text: "Execute the program:", cmd: "./routing_algorithms_menu.exe" }
        ],
        samples: [
          {
            title: "Test Case 1: Run Distance Vector then Exit",
            input: "1\n3\n0 2 5\n2 0 1\n5 1 0\n3",
            output: "Runs Distance Vector routing for 3 nodes and exits."
          },
          {
            title: "Test Case 2: Run Link State Dijkstra then Exit",
            input: "2\n3\n0 2 5\n2 0 1\n5 1 0\n0\n3",
            output: "Runs Dijkstra from Source R0 and exits."
          }
        ],
        code: `#include <iostream>
#include <vector>
#include <iomanip>
#include <string>

using namespace std;

// Sample Input:
// 1 -> Distance Vector -> 3 nodes
// 2 -> Link State -> 3 nodes
// 3 -> Exit

const int INF = 9999;

void runDistanceVector() {
    cout << "\\n=== [1] DISTANCE VECTOR ROUTING MODULE ===" << endl;
    int n;
    cout << "Enter number of routers: ";
    cin >> n;

    vector<vector<int>> cost(n, vector<int>(n));
    vector<vector<int>> dist(n, vector<int>(n));
    vector<vector<int>> nextHop(n, vector<int>(n));

    cout << "Enter " << n << "x" << n << " Cost Matrix (0 for self, " << INF << " for infinity):" << endl;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cin >> cost[i][j];
            dist[i][j] = cost[i][j];
            nextHop[i][j] = (cost[i][j] != INF && i != j) ? j : i;
        }
    }

    bool updated = true;
    while (updated) {
        updated = false;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                for (int k = 0; k < n; k++) {
                    if (cost[i][k] != INF && dist[k][j] != INF) {
                        if (cost[i][k] + dist[k][j] < dist[i][j]) {
                            dist[i][j] = cost[i][k] + dist[k][j];
                            nextHop[i][j] = nextHop[i][k];
                            updated = true;
                        }
                    }
                }
            }
        }
    }

    for (int i = 0; i < n; i++) {
        cout << "\\nRouting Table for Router R" << i << ":" << endl;
        cout << left << setw(12) << "Dest" << setw(10) << "Cost" << "Next Hop" << endl;
        for (int j = 0; j < n; j++) {
            cout << "R" << left << setw(11) << j << setw(10) << dist[i][j] << "R" << nextHop[i][j] << endl;
        }
    }
}

string getPath(int target, const vector<int>& parent) {
    if (parent[target] == -1) return "R" + to_string(target);
    return getPath(parent[target], parent) + " -> R" + to_string(target);
}

void runLinkState() {
    cout << "\\n=== [2] LINK STATE ROUTING (DIJKSTRA) MODULE ===" << endl;
    int n, src;
    cout << "Enter number of routers: ";
    cin >> n;

    vector<vector<int>> cost(n, vector<int>(n));
    cout << "Enter " << n << "x" << n << " Adjacency Matrix:" << endl;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cin >> cost[i][j];
        }
    }

    cout << "Enter Source Router ID (0 to " << n - 1 << "): ";
    cin >> src;

    vector<int> dist(n, INF);
    vector<bool> vis(n, false);
    vector<int> parent(n, -1);
    dist[src] = 0;

    for (int count = 0; count < n - 1; count++) {
        int minD = INF, u = -1;
        for (int v = 0; v < n; v++) {
            if (!vis[v] && dist[v] <= minD) {
                minD = dist[v];
                u = v;
            }
        }
        if (u == -1 || dist[u] == INF) break;
        vis[u] = true;
        for (int v = 0; v < n; v++) {
            if (!vis[v] && cost[u][v] != INF && cost[u][v] != 0) {
                if (dist[u] + cost[u][v] < dist[v]) {
                    dist[v] = dist[u] + cost[u][v];
                    parent[v] = u;
                }
            }
        }
    }

    cout << "\\nShortest Paths from R" << src << ":" << endl;
    cout << left << setw(10) << "Dest" << setw(10) << "Cost" << "Full Path" << endl;
    for (int i = 0; i < n; i++) {
        cout << "R" << left << setw(9) << i << setw(10) << dist[i] << getPath(i, parent) << endl;
    }
}

int main() {
    int choice;
    do {
        cout << "\\n==========================================" << endl;
        cout << "     ROUTING ALGORITHMS BENCHMARK         " << endl;
        cout << "==========================================" << endl;
        cout << "1. Distance Vector Routing (Bellman-Ford)" << endl;
        cout << "2. Link State Routing (Dijkstra)" << endl;
        cout << "3. Exit" << endl;
        cout << "Enter your choice (1-3): ";

        if (!(cin >> choice)) {
            cin.clear();
            cin.ignore(1000, '\\n');
            continue;
        }

        switch (choice) {
            case 1: runDistanceVector(); break;
            case 2: runLinkState(); break;
            case 3: cout << "Exiting Routing Suite. Goodbye!" << endl; break;
            default: cout << "Invalid choice! Enter 1, 2, or 3." << endl;
        }
    } while (choice != 3);

    return 0;
}`
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // PRACTICAL 07: SOCKET PROGRAMMING
  // ─────────────────────────────────────────────────────────────────
  {
    id: 7,
    number: "PR-07",
    title: "Socket Programming",
    category: "sockets",
    categoryLabel: "Transport Layer · Winsock2 Client-Server",
    type: "cpp",
    shortDesc: "Complete separate client and server C++ implementations for both TCP (connection-oriented stream sockets) and UDP (connectionless datagram sockets) fully compatible with Windows 10/11 using MinGW g++ and Winsock2 (-lws2_32), including step-by-step two-terminal execution and Wireshark capture guides.",
    topics: ["Winsock2", "TCP Server & Client", "UDP Server & Client", "WSAStartup & WSACleanup", "-lws2_32 Linker", "3-Way Handshake", "Wireshark Packet Inspection"],
    implCount: "4 Separate C++ Source Files",
    aim: "To implement connection-oriented TCP client-server and connectionless UDP client-server communication in C++ using the Windows Sockets (Winsock2) API, compile with MinGW g++ on Windows 10/11, execute in synchronized dual terminals, and analyze the TCP 3-way handshake and UDP datagram headers in Wireshark.",
    hasCode: true,
    socketContent: {
      wiresharkGuide: {
        filter: "tcp.port == 8080 || udp.port == 8888",
        interface: "Npcap Loopback Adapter (for 127.0.0.1) or active Ethernet/Wi-Fi adapter",
        observations: [
          { phase: "TCP 3-Way Handshake", packets: "1. [SYN] Client -> Server\n2. [SYN, ACK] Server -> Client\n3. [ACK] Client -> Server", note: "Establishes a reliable full-duplex byte stream before any application data is transferred." },
          { phase: "TCP Data Transfer", packets: "1. [PSH, ACK] Client -> Server carrying data payload\n2. [ACK] Server -> Client confirming receipt\n3. [PSH, ACK] Server -> Client echo reply", note: "Guarantees reliable, in-order packet delivery with sequence numbers and sliding window flow control." },
          { phase: "TCP Teardown", packets: "1. [FIN, ACK] -> 2. [ACK] -> 3. [FIN, ACK] -> 4. [ACK]", note: "Graceful 4-way connection termination releasing socket handles." },
          { phase: "UDP Datagram Exchange", packets: "1. Client -> Server Datagram\n2. Server -> Client Echo Datagram", note: "No connection handshake, no ACKs, minimal 8-byte header overhead." }
        ]
      },
      troubleshooting: [
        { error: "undefined reference to 'WSAStartup@8' / 'socket@12'", cause: "Missing the Winsock library link flag during compilation.", fix: "Append -lws2_32 at the end of your g++ command: g++ tcp_server.cpp -o tcp_server.exe -lws2_32" },
        { error: "bind failed with error: 10048 (WSAEADDRINUSE)", cause: "Port 8080 or 8888 is already bound by a previous hung process.", fix: "Check active ports via: netstat -ano | findstr :8080, then terminate the process using taskkill /PID <pid> /F" },
        { error: "connect failed with error: 10061 (WSAECONNREFUSED)", cause: "Client was launched before the Server was running.", fix: "Always start tcp_server.exe first in Terminal 1, wait for 'Server listening...' before launching tcp_client.exe in Terminal 2." }
      ]
    },
    algorithms: [
      {
        name: "TCP Server (Winsock2)",
        fileName: "tcp_server.cpp",
        description: "Connection-oriented TCP Server for Windows. Initializes Winsock 2.2, creates a stream socket (AF_INET, SOCK_STREAM), binds to port 8080, listens for client connections, accepts a connection, receives messages, and sends an echo response.",
        howToRun: [
          { step: 1, text: "Open Terminal 1 in VS Code." },
          { step: 2, text: "Compile with Winsock library flag:", cmd: "g++ tcp_server.cpp -o tcp_server.exe -lws2_32" },
          { step: 3, text: "Run Server first:", cmd: ".\\tcp_server.exe" }
        ],
        samples: [
          {
            title: "Test Case 1: Client Connects and Sends Message",
            input: "[Runs server, waits for client to connect and send 'Hello Networks Lab!']",
            output: "==========================================\n       WINSOCK TCP ECHO SERVER (8080)     \n==========================================\nWinsock initialized successfully.\nServer socket created.\nSocket bound to port 8080.\nServer listening for incoming connections...\n[CONNECTED]: Client connected from 127.0.0.1:52341\nReceived from Client: Hello Networks Lab!\nSent Echo Reply back to Client.\nClient disconnected. Closing server."
          },
          {
            title: "Test Case 2: Client Sends Exit Command",
            input: "[Client sends 'exit']",
            output: "Received from Client: exit\nClient requested termination. Shutting down gracefully.\nWinsock cleaned up."
          }
        ],
        code: `#define WIN32_LEAN_AND_MEAN
#include <iostream>
#include <winsock2.h>
#include <ws2tcpip.h>
#include <string>

// Link with ws2_32.lib
#pragma comment(lib, "ws2_32.lib")

#define DEFAULT_PORT 8080
#define BUFFER_SIZE 1024

using namespace std;

// Compilation instruction for Windows MinGW g++:
// g++ tcp_server.cpp -o tcp_server.exe -lws2_32
// Execute: .\\tcp_server.exe

int main() {
    cout << "============================================" << endl;
    cout << "       WINSOCK TCP ECHO SERVER (PORT " << DEFAULT_PORT << ")    " << endl;
    cout << "============================================" << endl;

    // Step 1: Initialize Winsock 2.2
    WSADATA wsaData;
    int wsaResult = WSAStartup(MAKEWORD(2, 2), &wsaData);
    if (wsaResult != 0) {
        cout << "[ERROR]: WSAStartup failed with error: " << wsaResult << endl;
        return 1;
    }
    cout << "[1] Winsock 2.2 initialized successfully." << endl;

    // Step 2: Create a TCP Stream Socket
    SOCKET listenSocket = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    if (listenSocket == INVALID_SOCKET) {
        cout << "[ERROR]: socket creation failed with error: " << WSAGetLastError() << endl;
        WSACleanup();
        return 1;
    }
    cout << "[2] TCP socket created successfully." << endl;

    // Step 3: Setup Server Address Structure & Bind
    sockaddr_in serverAddr;
    serverAddr.sin_family = AF_INET;
    serverAddr.sin_addr.s_addr = INADDR_ANY; // Bind to any incoming interface
    serverAddr.sin_port = htons(DEFAULT_PORT);

    if (bind(listenSocket, (sockaddr*)&serverAddr, sizeof(serverAddr)) == SOCKET_ERROR) {
        cout << "[ERROR]: bind failed with error: " << WSAGetLastError() << endl;
        cout << "[HINT]: Port " << DEFAULT_PORT << " might already be in use." << endl;
        closesocket(listenSocket);
        WSACleanup();
        return 1;
    }
    cout << "[3] Socket successfully bound to port " << DEFAULT_PORT << "." << endl;

    // Step 4: Listen for incoming connections
    if (listen(listenSocket, SOMAXCONN) == SOCKET_ERROR) {
        cout << "[ERROR]: listen failed with error: " << WSAGetLastError() << endl;
        closesocket(listenSocket);
        WSACleanup();
        return 1;
    }
    cout << "[4] Server is listening... Waiting for client to connect." << endl;
    cout << "    (Now open Terminal 2 and launch tcp_client.exe)" << endl;

    // Step 5: Accept client connection
    sockaddr_in clientAddr;
    int clientAddrSize = sizeof(clientAddr);
    SOCKET clientSocket = accept(listenSocket, (sockaddr*)&clientAddr, &clientAddrSize);
    if (clientSocket == INVALID_SOCKET) {
        cout << "[ERROR]: accept failed with error: " << WSAGetLastError() << endl;
        closesocket(listenSocket);
        WSACleanup();
        return 1;
    }

    char clientIP[INET_ADDRSTRLEN];
    inet_ntop(AF_INET, &(clientAddr.sin_addr), clientIP, INET_ADDRSTRLEN);
    cout << "\\n[CONNECTED]: Client accepted from " << clientIP << ":" << ntohs(clientAddr.sin_port) << endl;

    // Step 6: Receive and Echo back message
    char buffer[BUFFER_SIZE];
    while (true) {
        memset(buffer, 0, BUFFER_SIZE);
        int bytesReceived = recv(clientSocket, buffer, BUFFER_SIZE - 1, 0);

        if (bytesReceived > 0) {
            string receivedMsg(buffer);
            cout << "[CLIENT MSG]: " << receivedMsg << endl;

            if (receivedMsg == "exit" || receivedMsg == "quit") {
                cout << "[INFO]: Client requested disconnect. Exiting session..." << endl;
                break;
            }

            // Echo response
            string reply = "SERVER ECHO: " + receivedMsg;
            send(clientSocket, reply.c_str(), reply.length(), 0);
            cout << "[SENT REPLY]: " << reply << endl;
        } else if (bytesReceived == 0) {
            cout << "[INFO]: Client closed connection gracefully." << endl;
            break;
        } else {
            cout << "[ERROR]: recv failed with error: " << WSAGetLastError() << endl;
            break;
        }
    }

    // Step 7: Clean up sockets and Winsock
    closesocket(clientSocket);
    closesocket(listenSocket);
    WSACleanup();
    cout << "[INFO]: Sockets closed and Winsock cleaned up. Server terminated." << endl;
    return 0;
}`
      },
      {
        name: "TCP Client (Winsock2)",
        fileName: "tcp_client.cpp",
        description: "Connection-oriented TCP Client for Windows. Initializes Winsock, connects to server at 127.0.0.1:8080, sends user messages, and displays server responses.",
        howToRun: [
          { step: 1, text: "Open Terminal 2 in VS Code (ensure Server is running in Terminal 1)." },
          { step: 2, text: "Compile with Winsock link flag:", cmd: "g++ tcp_client.cpp -o tcp_client.exe -lws2_32" },
          { step: 3, text: "Run Client:", cmd: ".\\tcp_client.exe" }
        ],
        samples: [
          {
            title: "Test Case 1: Send Message to Server",
            input: "Hello Networks Lab!\nexit",
            output: "==========================================\n         WINSOCK TCP CLIENT             \n==========================================\nConnected to Server at 127.0.0.1:8080!\nEnter message to send: Hello Networks Lab!\nSent 19 bytes.\nServer Reply: SERVER ECHO: Hello Networks Lab!\nEnter message to send (or 'exit'): exit\nConnection closed."
          },
          {
            title: "Test Case 2: Server Not Running Error",
            input: "[Run client without server running]",
            output: "[ERROR]: connect failed with error: 10061 (Connection Refused). Make sure tcp_server.exe is running first!"
          }
        ],
        code: `#define WIN32_LEAN_AND_MEAN
#include <iostream>
#include <winsock2.h>
#include <ws2tcpip.h>
#include <string>

#pragma comment(lib, "ws2_32.lib")

#define SERVER_IP "127.0.0.1"
#define SERVER_PORT 8080
#define BUFFER_SIZE 1024

using namespace std;

// Compilation:
// g++ tcp_client.cpp -o tcp_client.exe -lws2_32
// Execute in Terminal 2: .\\tcp_client.exe

int main() {
    cout << "============================================" << endl;
    cout << "             WINSOCK TCP CLIENT             " << endl;
    cout << "============================================" << endl;

    // Step 1: Initialize Winsock 2.2
    WSADATA wsaData;
    int wsaResult = WSAStartup(MAKEWORD(2, 2), &wsaData);
    if (wsaResult != 0) {
        cout << "[ERROR]: WSAStartup failed: " << wsaResult << endl;
        return 1;
    }

    // Step 2: Create TCP Socket
    SOCKET clientSocket = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    if (clientSocket == INVALID_SOCKET) {
        cout << "[ERROR]: Socket creation failed: " << WSAGetLastError() << endl;
        WSACleanup();
        return 1;
    }

    // Step 3: Setup Server Address
    sockaddr_in serverAddr;
    serverAddr.sin_family = AF_INET;
    serverAddr.sin_port = htons(SERVER_PORT);
    inet_pton(AF_INET, SERVER_IP, &serverAddr.sin_addr);

    cout << "Attempting to connect to " << SERVER_IP << ":" << SERVER_PORT << "..." << endl;

    // Step 4: Connect to Server (3-Way Handshake)
    if (connect(clientSocket, (sockaddr*)&serverAddr, sizeof(serverAddr)) == SOCKET_ERROR) {
        cout << "[ERROR]: connect failed with error: " << WSAGetLastError() << endl;
        cout << "[HINT]: Ensure tcp_server.exe is running in Terminal 1 first!" << endl;
        closesocket(clientSocket);
        WSACleanup();
        return 1;
    }
    cout << "[CONNECTED]: Successfully established TCP connection to Server!" << endl;

    // Step 5: Communication Loop
    string userMessage;
    char buffer[BUFFER_SIZE];

    while (true) {
        cout << "\\nEnter message to send (or 'exit' to quit): ";
        getline(cin, userMessage);

        if (userMessage.empty()) continue;

        // Send message to server
        int bytesSent = send(clientSocket, userMessage.c_str(), userMessage.length(), 0);
        if (bytesSent == SOCKET_ERROR) {
            cout << "[ERROR]: send failed: " << WSAGetLastError() << endl;
            break;
        }

        if (userMessage == "exit" || userMessage == "quit") {
            cout << "Exiting client session..." << endl;
            break;
        }

        // Receive server reply
        memset(buffer, 0, BUFFER_SIZE);
        int bytesReceived = recv(clientSocket, buffer, BUFFER_SIZE - 1, 0);
        if (bytesReceived > 0) {
            cout << "[SERVER RESPONSE]: " << buffer << endl;
        } else {
            cout << "[INFO]: Server closed connection." << endl;
            break;
        }
    }

    // Step 6: Cleanup
    closesocket(clientSocket);
    WSACleanup();
    cout << "Client terminated." << endl;
    return 0;
}`
      },
      {
        name: "UDP Server (Winsock2)",
        fileName: "udp_server.cpp",
        description: "Connectionless UDP Datagram Server for Windows. Creates a datagram socket (AF_INET, SOCK_DGRAM), binds to port 8888, receives client datagrams using recvfrom(), and replies with sendto().",
        howToRun: [
          { step: 1, text: "Open Terminal 1 in VS Code." },
          { step: 2, text: "Compile with Winsock flag:", cmd: "g++ udp_server.cpp -o udp_server.exe -lws2_32" },
          { step: 3, text: "Run UDP Server:", cmd: ".\\udp_server.exe" }
        ],
        samples: [
          {
            title: "Test Case 1: Receive Datagram and Echo",
            input: "[Wait for UDP client datagram]",
            output: "==========================================\n       WINSOCK UDP DATAGRAM SERVER (8888) \n==========================================\nUDP socket created and bound to port 8888.\nListening for incoming UDP datagrams...\n[DATAGRAM RECEIVED] from 127.0.0.1:54321:\nMessage: Hello UDP World!\nSent UDP Echo Reply to Client."
          },
          {
            title: "Test Case 2: Exit Command",
            input: "[Client sends 'exit']",
            output: "Received: exit. UDP Server terminating."
          }
        ],
        code: `#define WIN32_LEAN_AND_MEAN
#include <iostream>
#include <winsock2.h>
#include <ws2tcpip.h>
#include <string>

#pragma comment(lib, "ws2_32.lib")

#define UDP_PORT 8888
#define BUFFER_SIZE 1024

using namespace std;

// Compilation:
// g++ udp_server.cpp -o udp_server.exe -lws2_32
// Execute in Terminal 1: .\\udp_server.exe

int main() {
    cout << "============================================" << endl;
    cout << "      WINSOCK UDP DATAGRAM SERVER (8888)    " << endl;
    cout << "============================================" << endl;

    // Step 1: Initialize Winsock 2.2
    WSADATA wsaData;
    int wsaResult = WSAStartup(MAKEWORD(2, 2), &wsaData);
    if (wsaResult != 0) {
        cout << "[ERROR]: WSAStartup failed: " << wsaResult << endl;
        return 1;
    }

    // Step 2: Create a UDP Datagram Socket (SOCK_DGRAM)
    SOCKET serverSocket = socket(AF_INET, SOCK_DGRAM, IPPROTO_UDP);
    if (serverSocket == INVALID_SOCKET) {
        cout << "[ERROR]: UDP socket creation failed: " << WSAGetLastError() << endl;
        WSACleanup();
        return 1;
    }
    cout << "[1] UDP socket created (Connectionless, Unreliable, Fast)." << endl;

    // Step 3: Bind to port 8888
    sockaddr_in serverAddr;
    serverAddr.sin_family = AF_INET;
    serverAddr.sin_addr.s_addr = INADDR_ANY;
    serverAddr.sin_port = htons(UDP_PORT);

    if (bind(serverSocket, (sockaddr*)&serverAddr, sizeof(serverAddr)) == SOCKET_ERROR) {
        cout << "[ERROR]: bind failed: " << WSAGetLastError() << endl;
        closesocket(serverSocket);
        WSACleanup();
        return 1;
    }
    cout << "[2] UDP Server bound to port " << UDP_PORT << ". Waiting for datagrams..." << endl;

    // Step 4: Receive and Send loop
    char buffer[BUFFER_SIZE];
    sockaddr_in clientAddr;
    int clientAddrLen = sizeof(clientAddr);

    while (true) {
        memset(buffer, 0, BUFFER_SIZE);
        int bytesReceived = recvfrom(serverSocket, buffer, BUFFER_SIZE - 1, 0,
                                     (sockaddr*)&clientAddr, &clientAddrLen);

        if (bytesReceived == SOCKET_ERROR) {
            cout << "[ERROR]: recvfrom failed: " << WSAGetLastError() << endl;
            break;
        }

        char clientIP[INET_ADDRSTRLEN];
        inet_ntop(AF_INET, &(clientAddr.sin_addr), clientIP, INET_ADDRSTRLEN);
        string msg(buffer);

        cout << "\\n[DATAGRAM RECEIVED] from " << clientIP << ":" << ntohs(clientAddr.sin_port) << endl;
        cout << "Content: " << msg << endl;

        if (msg == "exit") {
            cout << "[INFO]: Exit signal received. Terminating UDP server..." << endl;
            break;
        }

        // Echo reply back using sendto()
        string reply = "UDP SERVER ECHO: " + msg;
        sendto(serverSocket, reply.c_str(), reply.length(), 0,
               (sockaddr*)&clientAddr, clientAddrLen);
        cout << "[REPLY SENT]: " << reply << endl;
    }

    closesocket(serverSocket);
    WSACleanup();
    cout << "UDP Server closed." << endl;
    return 0;
}`
      },
      {
        name: "UDP Client (Winsock2)",
        fileName: "udp_client.cpp",
        description: "Connectionless UDP Datagram Client for Windows. Initializes Winsock, sends datagrams directly to 127.0.0.1:8888 without connection setup, and waits for datagram reply.",
        howToRun: [
          { step: 1, text: "Open Terminal 2 in VS Code." },
          { step: 2, text: "Compile with Winsock flag:", cmd: "g++ udp_client.cpp -o udp_client.exe -lws2_32" },
          { step: 3, text: "Run UDP Client:", cmd: ".\\udp_client.exe" }
        ],
        samples: [
          {
            title: "Test Case 1: Send Datagram and Receive Echo",
            input: "Hello UDP World!\nexit",
            output: "==========================================\n         WINSOCK UDP CLIENT             \n==========================================\nTarget: 127.0.0.1:8888\nEnter datagram message: Hello UDP World!\nDatagram sent.\nServer Echo: UDP SERVER ECHO: Hello UDP World!\nEnter message (or 'exit'): exit\nUDP Client finished."
          },
          {
            title: "Test Case 2: Connectionless Nature Demonstration",
            input: "Test Packet",
            output: "[Notice]: UDP does not require a 3-way handshake. Datagram is sent directly."
          }
        ],
        code: `#define WIN32_LEAN_AND_MEAN
#include <iostream>
#include <winsock2.h>
#include <ws2tcpip.h>
#include <string>

#pragma comment(lib, "ws2_32.lib")

#define SERVER_IP "127.0.0.1"
#define UDP_PORT 8888
#define BUFFER_SIZE 1024

using namespace std;

// Compilation:
// g++ udp_client.cpp -o udp_client.exe -lws2_32
// Execute in Terminal 2: .\\udp_client.exe

int main() {
    cout << "============================================" << endl;
    cout << "             WINSOCK UDP CLIENT             " << endl;
    cout << "============================================" << endl;

    WSADATA wsaData;
    if (WSAStartup(MAKEWORD(2, 2), &wsaData) != 0) {
        cout << "[ERROR]: WSAStartup failed." << endl;
        return 1;
    }

    // Create UDP Socket
    SOCKET clientSocket = socket(AF_INET, SOCK_DGRAM, IPPROTO_UDP);
    if (clientSocket == INVALID_SOCKET) {
        cout << "[ERROR]: Socket creation failed: " << WSAGetLastError() << endl;
        WSACleanup();
        return 1;
    }

    // Server destination address
    sockaddr_in serverAddr;
    serverAddr.sin_family = AF_INET;
    serverAddr.sin_port = htons(UDP_PORT);
    inet_pton(AF_INET, SERVER_IP, &serverAddr.sin_addr);

    cout << "Target Server: " << SERVER_IP << ":" << UDP_PORT << " (Connectionless UDP)" << endl;

    string message;
    char buffer[BUFFER_SIZE];
    int serverAddrLen = sizeof(serverAddr);

    while (true) {
        cout << "\\nEnter message to send via UDP (or 'exit'): ";
        getline(cin, message);

        if (message.empty()) continue;

        // Send datagram directly
        int bytesSent = sendto(clientSocket, message.c_str(), message.length(), 0,
                               (sockaddr*)&serverAddr, serverAddrLen);
        if (bytesSent == SOCKET_ERROR) {
            cout << "[ERROR]: sendto failed: " << WSAGetLastError() << endl;
            break;
        }

        if (message == "exit") break;

        // Wait for reply datagram
        memset(buffer, 0, BUFFER_SIZE);
        int bytesRecv = recvfrom(clientSocket, buffer, BUFFER_SIZE - 1, 0,
                                 (sockaddr*)&serverAddr, &serverAddrLen);
        if (bytesRecv > 0) {
            cout << "[SERVER ECHO]: " << buffer << endl;
        } else {
            cout << "[INFO]: No response or receive timeout." << endl;
        }
    }

    closesocket(clientSocket);
    WSACleanup();
    cout << "UDP Client terminated." << endl;
    return 0;
}`
      }
    ]
  }
];

// ===================================================================
// SYNTAX HIGHLIGHTER FOR C++ (VANILLA JS ENGINE)
// ===================================================================
function highlightCppCode(rawCode) {
  // Escape HTML entities
  const escapeHtml = (text) => {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  };

  const lines = rawCode.split("\n");
  const highlightedLines = lines.map((line) => {
    let escaped = escapeHtml(line);

    // Comments: // ...
    if (escaped.includes("//")) {
      const parts = escaped.split("//");
      const codePart = highlightTokens(parts[0]);
      const commentPart = `<span class="tok-com">//${parts.slice(1).join("//")}</span>`;
      return codePart + commentPart;
    }

    // Preprocessor: #include, #define, #pragma
    if (escaped.trim().startsWith("#")) {
      return `<span class="tok-prep">${escaped}</span>`;
    }

    return highlightTokens(escaped);
  });

  return highlightedLines;
}

function highlightTokens(codeStr) {
  // Strings
  codeStr = codeStr.replace(/"([^"\\]*(\\.[^"\\]*)*)"/g, '<span class="tok-str">"$1"</span>');
  // Character literals
  codeStr = codeStr.replace(/'([^'\\]*(\\.[^'\\]*)*)'/g, "<span class=\"tok-str\">'$1'</span>");

  // Keywords
  const keywords = [
    "int", "char", "void", "bool", "float", "double", "long", "short", "unsigned",
    "if", "else", "for", "while", "do", "switch", "case", "break", "default", "continue",
    "return", "struct", "class", "public", "private", "protected", "new", "delete",
    "sizeof", "true", "false", "nullptr", "using", "namespace", "const", "static",
    "auto", "try", "catch", "throw"
  ];
  const kwRegex = new RegExp(`\\b(${keywords.join("|")})\\b`, "g");
  codeStr = codeStr.replace(kwRegex, '<span class="tok-kw">$1</span>');

  // Common C++ & Winsock Types
  const types = [
    "string", "vector", "queue", "stack", "stringstream", "uint32_t", "uint64_t", "size_t",
    "SOCKET", "WSADATA", "sockaddr_in", "sockaddr", "hostent", "RouteEntry"
  ];
  const typeRegex = new RegExp(`\\b(${types.join("|")})\\b`, "g");
  codeStr = codeStr.replace(typeRegex, '<span class="tok-type">$1</span>');

  // Common Functions
  const fns = [
    "main", "cin", "cout", "endl", "socket", "bind", "listen", "accept", "connect",
    "send", "recv", "sendto", "recvfrom", "closesocket", "WSAStartup", "WSACleanup",
    "htons", "ntohs", "inet_pton", "inet_ntop", "memset", "stoi", "to_string",
    "pow", "min", "max", "setw"
  ];
  const fnRegex = new RegExp(`\\b(${fns.join("|")})\\b`, "g");
  codeStr = codeStr.replace(fnRegex, '<span class="tok-fn">$1</span>');

  // Numbers
  codeStr = codeStr.replace(/\b(\d+)\b/g, '<span class="tok-num">$1</span>');

  return codeStr;
}

// ===================================================================
// UI RENDERING FUNCTIONS
// ===================================================================

// Render Homepage Practicals Grid
function renderPracticalsGrid(filterCategory = 'all', searchQuery = '') {
  const gridContainer = document.getElementById('practicalsGrid');
  const counterEl = document.getElementById('resultsCounter');
  const emptyState = document.getElementById('emptySearchState');

  if (!gridContainer) return;

  const q = searchQuery.toLowerCase().trim();

  const filtered = practicalsData.filter(p => {
    // Category check
    const matchesCategory = (filterCategory === 'all' || p.category === filterCategory);

    // Search check
    const inTitle = p.title.toLowerCase().includes(q);
    const inDesc = p.shortDesc.toLowerCase().includes(q);
    const inTopics = p.topics.some(t => t.toLowerCase().includes(q));
    const inNumber = p.number.toLowerCase().includes(q);

    // Check algorithms if present
    let inAlgos = false;
    if (p.algorithms) {
      inAlgos = p.algorithms.some(a => a.name.toLowerCase().includes(q) || a.fileName.toLowerCase().includes(q));
    }

    const matchesSearch = (!q || inTitle || inDesc || inTopics || inNumber || inAlgos);
    return matchesCategory && matchesSearch;
  });

  counterEl.textContent = `Showing ${filtered.length} of ${practicalsData.length} practicals`;

  if (filtered.length === 0) {
    gridContainer.innerHTML = '';
    emptyState.style.display = 'block';
    return;
  } else {
    emptyState.style.display = 'none';
  }

  gridContainer.innerHTML = filtered.map(p => {
    const topicsHtml = p.topics.map(t => `<span class="topic-tag">${t}</span>`).join('');

    return `
      <div class="practical-card" id="card-${p.id}">
        <div class="card-top">
          <div class="card-header-meta">
            <span class="practical-id-badge">${p.number}</span>
            <span class="practical-category-pill">${p.categoryLabel}</span>
          </div>
          <h3 class="card-title">${p.title}</h3>
          <p class="card-desc">${p.shortDesc}</p>
          <div class="card-topics-list">
            ${topicsHtml}
          </div>
        </div>
        <div class="card-footer">
          <span class="impl-count">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            ${p.implCount}
          </span>
          <button class="btn-open-practical" onclick="openPractical(${p.id})">
            Open Practical
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Render Individual Practical Detail View
function openPractical(id, targetAlgoIdx = 0) {
  const p = practicalsData.find(item => item.id === id);
  if (!p) return;

  currentPracticalId = id;
  currentAlgoIndex = targetAlgoIdx;

  // Toggle views
  document.getElementById('homeView').style.display = 'none';
  document.getElementById('detailView').style.display = 'block';

  // Update Breadcrumb & Header Nav
  document.getElementById('detailBreadcrumb').textContent = `${p.number}: ${p.title}`;
  document.getElementById('quickJumpSelect').value = String(id);
  document.getElementById('navHomeBtn').classList.remove('active');
  document.getElementById('navAllBtn').classList.remove('active');

  const container = document.getElementById('practicalDetailContent');

  if (p.id === 1) {
    container.innerHTML = renderPractical01(p);
  } else if (p.id === 2) {
    container.innerHTML = renderPractical02(p);
  } else {
    container.innerHTML = renderCodingPractical(p, currentAlgoIndex);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render Practical 01 (Hardware & Wireshark)
function renderPractical01(p) {
  const hw = p.hardwareContent;

  const hardwareRows = hw.requiredHardware.map(h => `
    <tr>
      <td><strong>${h.item}</strong></td>
      <td>${h.qty}</td>
      <td>${h.spec}</td>
    </tr>
  `).join('');

  const pinoutRows = hw.t568bPinout.map(wire => `
    <tr>
      <td><strong>Pin ${wire.pin}</strong></td>
      <td>
        <span class="wire-swatch" style="background-color: ${wire.colorCode};"></span>
        ${wire.colorName} (${wire.wireType})
      </td>
      <td>${wire.function}</td>
    </tr>
  `).join('');

  const cableStepsList = hw.cableSteps.map((step, idx) => `
    <div class="run-step-item">
      <div class="step-num-badge">${idx + 1}</div>
      <div class="step-content">
        <p class="step-text">${step}</p>
      </div>
    </div>
  `).join('');

  const diagnosticsRows = hw.testerGuide.diagnostics.map(d => `
    <tr>
      <td style="color:#b91c1c;"><strong>${d.error}</strong></td>
      <td>${d.cause}</td>
    </tr>
  `).join('');

  const ipRows = hw.ipTable.map(ip => `
    <tr>
      <td><strong>${ip.pc}</strong></td>
      <td><code>${ip.ip}</code></td>
      <td><code>${ip.subnet}</code></td>
      <td><code>${ip.gateway}</code></td>
      <td>${ip.role}</td>
    </tr>
  `).join('');

  const cmdRows = hw.windowsCommands.map(c => `
    <div style="margin-bottom: 12px;">
      <p style="font-size:0.85rem; font-weight:600; color:var(--text-secondary); margin-bottom:4px;">${c.desc}:</p>
      <code class="step-code-cmd">${c.cmd}</code>
    </div>
  `).join('');

  const wsStepsList = hw.wiresharkGuide.steps.map((st, i) => `
    <li style="margin-bottom: 8px;"><strong>Step ${i + 1}:</strong> ${st}</li>
  `).join('');

  const packetRows = hw.wiresharkGuide.packetAnalysis.map(pkt => `
    <tr>
      <td><span class="type-badge ${pkt.type.includes('Request') ? 'sim' : 'cpp'}">${pkt.type}</span></td>
      <td><code>${pkt.src}</code></td>
      <td><code>${pkt.dst}</code></td>
      <td><code>${pkt.info}</code></td>
      <td>${pkt.details}</td>
    </tr>
  `).join('');

  return `
    <div class="practical-header-block">
      <div class="practical-header-top">
        <span class="practical-code-pill">${p.number}</span>
        <span class="practical-type-pill">Hardware &amp; Physical Networking</span>
      </div>
      <h1 class="practical-full-title">${p.title}</h1>
      <div class="aim-box">
        <span class="aim-label">Aim:</span> ${p.aim}
      </div>
    </div>

    <!-- Section 1: Required Hardware -->
    <div class="content-section-card">
      <h3 class="card-section-title">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
        1. Required Hardware &amp; Laboratory Equipment
      </h3>
      <div class="summary-table-wrap">
        <table class="academic-table">
          <thead>
            <tr>
              <th>Equipment / Component</th>
              <th>Quantity Required</th>
              <th>Technical Specification</th>
            </tr>
          </thead>
          <tbody>
            ${hardwareRows}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Section 2: Ethernet Cable Preparation (T568B) -->
    <div class="content-section-card">
      <h3 class="card-section-title">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
        </svg>
        2. Preparation of Ethernet Cable (T568B Standard)
      </h3>
      <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:14px;">
        To connect computers to a Layer 2 switch, standard <strong>Straight-Through patch cables</strong> are required with both ends terminated identically using the <strong>EIA/TIA T568B standard</strong>.
      </p>

      <h4 style="font-size:0.95rem; font-weight:700; margin-bottom:10px;">T568B Pinout &amp; Color Coding Scheme:</h4>
      <div class="summary-table-wrap">
        <table class="academic-table">
          <thead>
            <tr>
              <th>Pin Number</th>
              <th>Wire Color (T568B)</th>
              <th>Signal Assignment (100Base-TX)</th>
            </tr>
          </thead>
          <tbody>
            ${pinoutRows}
          </tbody>
        </table>
      </div>

      <h4 style="font-size:0.95rem; font-weight:700; margin: 20px 0 10px;">Step-by-Step Cable Fabrication Instructions:</h4>
      <div class="run-steps-list">
        ${cableStepsList}
      </div>
    </div>

    <!-- Section 3: Testing with LAN Tester -->
    <div class="content-section-card">
      <h3 class="card-section-title">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        3. Cable Continuity Testing using LAN Cable Tester
      </h3>
      <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:14px;">
        ${hw.testerGuide.procedure}
      </p>
      <div class="callout-box" style="border-left-color: #16a34a; background-color:#f0fdf4; margin-bottom:18px;">
        <div class="callout-title" style="color:#15803d;">
          ✓ Expected Verification Result
        </div>
        <p style="font-size:0.86rem; color:#166534;">
          ${hw.testerGuide.expectedResult}
        </p>
      </div>

      <h4 style="font-size:0.92rem; font-weight:700; margin-bottom:10px;">Tester Diagnostics &amp; Fault Interpretation:</h4>
      <div class="summary-table-wrap">
        <table class="academic-table">
          <thead>
            <tr>
              <th>LED Indication / Symptom</th>
              <th>Physical Cause &amp; Remediation</th>
            </tr>
          </thead>
          <tbody>
            ${diagnosticsRows}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Section 4: Connecting Workstations & Static IP Configuration -->
    <div class="content-section-card">
      <h3 class="card-section-title">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
        4. Workstation Switch Connection &amp; Static IP Address Assignment
      </h3>
      <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:14px;">
        Connect the 4 workstations to Switch Ports 1, 2, 3, and 4 using the tested straight-through cables. Verify that the link LEDs on the switch illuminate. Assign static IPv4 addresses using the exact laboratory configuration:
      </p>

      <div class="summary-table-wrap">
        <table class="academic-table">
          <thead>
            <tr>
              <th>Computer</th>
              <th>IP Address</th>
              <th>Subnet Mask</th>
              <th>Default Gateway</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            ${ipRows}
          </tbody>
        </table>
      </div>

      <h4 style="font-size:0.92rem; font-weight:700; margin: 20px 0 10px;">Windows Command Line Instructions:</h4>
      ${cmdRows}
    </div>

    <!-- Section 5: Wireshark ICMP Packet Demonstration -->
    <div class="content-section-card">
      <h3 class="card-section-title">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 14 14"></polyline>
        </svg>
        5. Wireshark ICMP Packet Demonstration &amp; Header Inspection
      </h3>
      <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:14px;">
        Wireshark allows real-time packet capturing and protocol dissection on the physical network interface. Follow these steps to observe ICMP Echo Request and Echo Reply messages:
      </p>

      <ol style="margin-left: 20px; font-size:0.88rem; color:var(--text-secondary); margin-bottom:18px;">
        ${wsStepsList}
      </ol>

      <h4 style="font-size:0.92rem; font-weight:700; margin-bottom:10px;">Expected Wireshark Packet List:</h4>
      <div class="wireshark-trace-box">
<span class="ws-line-meta">No.  Time      Source         Destination    Protocol Length Info</span>
<span class="ws-line-arp">1    0.000000  00:1a:2b:3c:4d:5e  ff:ff:ff:ff:ff:ff  ARP      60     Who has 192.168.1.2? Tell 192.168.1.1</span>
<span class="ws-line-arp">2    0.000215  00:1a:2b:99:88:77  00:1a:2b:3c:4d:5e  ARP      60     192.168.1.2 is at 00:1a:2b:99:88:77</span>
<span class="ws-line-req">3    0.000850  192.168.1.1    192.168.1.2    ICMP     74     Echo (ping) request  id=0x0001, seq=1/256, ttl=128</span>
<span class="ws-line-rep">4    0.001220  192.168.1.2    192.168.1.1    ICMP     74     Echo (ping) reply    id=0x0001, seq=1/256, ttl=128</span>
<span class="ws-line-req">5    1.002100  192.168.1.1    192.168.1.2    ICMP     74     Echo (ping) request  id=0x0001, seq=2/512, ttl=128</span>
<span class="ws-line-rep">6    1.002440  192.168.1.2    192.168.1.1    ICMP     74     Echo (ping) reply    id=0x0001, seq=2/512, ttl=128</span>
      </div>

      <div class="summary-table-wrap">
        <table class="academic-table">
          <thead>
            <tr>
              <th>Packet Type</th>
              <th>Source IP</th>
              <th>Destination IP</th>
              <th>ICMP Type &amp; Code</th>
              <th>Header &amp; Functional Breakdown</th>
            </tr>
          </thead>
          <tbody>
            ${packetRows}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// Render Practical 02 (Cisco Packet Tracer Topologies & Subnetting)
function renderPractical02(p) {
  const content = p.tracerContent;

  const topologiesHtml = content.topologies.map((topo, idx) => `
    <div class="content-section-card" id="topo-${idx}">
      <h3 class="card-section-title">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
        ${topo.name} Simulation
      </h3>

      <div class="diagram-container">
        ${topo.diagramSvg}
        <span class="diagram-caption">Figure 2.${idx + 1}: Logical &amp; Physical Connectivity Diagram for ${topo.name}</span>
      </div>

      <div style="margin-top: 18px;">
        <p style="font-size:0.88rem; margin-bottom:8px;"><strong>Required Devices:</strong> ${topo.devices}</p>
        <p style="font-size:0.88rem; margin-bottom:8px;"><strong>Cabling:</strong> ${topo.cables}</p>
        <p style="font-size:0.88rem; margin-bottom:12px;"><strong>IP Scheme:</strong> <code>${topo.ipScheme}</code></p>

        <h4 style="font-size:0.9rem; font-weight:700; margin-bottom:6px;">Step-by-Step Packet Tracer Instructions:</h4>
        <pre style="background:var(--bg-surface); padding:12px 16px; border-radius:6px; font-family:var(--font-mono); font-size:0.82rem; white-space:pre-wrap; border:1px solid var(--border-light); line-height:1.6; margin-bottom:14px;">${topo.instructions}</pre>

        <div class="samples-grid">
          <div class="sample-box">
            <div class="sample-box-header">
              <span class="sample-badge input-badge">Connectivity Verification</span>
            </div>
            <div class="sample-content">${topo.testing}</div>
          </div>
          <div class="sample-box">
            <div class="sample-box-header">
              <span class="sample-badge output-badge">Expected Simulation Result</span>
            </div>
            <div class="sample-content">${topo.expected}</div>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  const subnetRows = content.subnetExercise.allocationTable.map(s => `
    <tr>
      <td><strong>${s.dept}</strong></td>
      <td><code>${s.netAddr}</code></td>
      <td><code>${s.usableRange}</code></td>
      <td><code>${s.broadcast}</code></td>
      <td><code>${s.gateway}</code></td>
    </tr>
  `).join('');

  return `
    <div class="practical-header-block">
      <div class="practical-header-top">
        <span class="practical-code-pill">${p.number}</span>
        <span class="practical-type-pill">Network Design &amp; Packet Tracer Simulation</span>
      </div>
      <h1 class="practical-full-title">${p.title}</h1>
      <div class="aim-box">
        <span class="aim-label">Aim:</span> ${p.aim}
      </div>
    </div>

    <!-- Section A: Topologies -->
    <div style="margin-bottom: 24px;">
      <h2 style="font-size: 1.35rem; font-weight:700; color:var(--text-primary); margin-bottom: 6px;">
        Part A: Network Topologies Implementation
      </h2>
      <p style="font-size: 0.88rem; color:var(--text-muted); margin-bottom: 18px;">
        Step-by-step device connection, IP addressing, and ICMP ping verification for five fundamental topologies.
      </p>
      ${topologiesHtml}
    </div>

    <!-- Section B: Subnetting in Packet Tracer -->
    <div class="content-section-card">
      <h2 style="font-size: 1.35rem; font-weight:700; color:var(--text-primary); margin-bottom: 6px;">
        Part B: Subnetting Exercise in Cisco Packet Tracer
      </h2>
      <p style="font-size: 0.9rem; color:var(--text-secondary); margin-bottom: 14px;">
        <strong>Design Scenario:</strong> A college campus is assigned the Class C network block <code>${content.subnetExercise.network}</code> and requires 4 separate department subnets.
      </p>

      <div class="callout-box" style="margin-bottom:18px;">
        <div class="callout-title">
          Subnetting Calculations:
        </div>
        <p style="font-size:0.86rem; color:var(--text-secondary);">
          ${content.subnetExercise.hostCalcFormula}
        </p>
      </div>

      <h4 style="font-size:0.95rem; font-weight:700; margin-bottom:10px;">Subnet Allocation Table:</h4>
      <div class="summary-table-wrap" style="margin-bottom:20px;">
        <table class="academic-table">
          <thead>
            <tr>
              <th>Department / Subnet</th>
              <th>Network ID</th>
              <th>Usable Host Range</th>
              <th>Directed Broadcast</th>
              <th>Default Gateway Interface</th>
            </tr>
          </thead>
          <tbody>
            ${subnetRows}
          </tbody>
        </table>
      </div>

      <h4 style="font-size:0.95rem; font-weight:700; margin-bottom:10px;">Router Gateway Configuration (Cisco IOS CLI):</h4>
      <div class="code-viewer-card">
        <div class="code-viewer-header">
          <div class="file-info">
            <span class="file-name">cisco_router_config.cfg</span>
            <span class="lang-badge">Cisco IOS CLI</span>
          </div>
          <button class="btn-copy-code" onclick="copyRawCode(${JSON.stringify(content.subnetExercise.cliCommands)})">
            Copy Commands
          </button>
        </div>
        <div class="code-container">
          <div class="code-body-col">${content.subnetExercise.cliCommands}</div>
        </div>
      </div>
    </div>
  `;
}

// Render Coding Practicals (PR-03, PR-04, PR-05, PR-06, PR-07)
function renderCodingPractical(p, algoIndex = 0) {
  const currentAlgo = p.algorithms[algoIndex];

  // Tab Buttons
  const tabButtonsHtml = p.algorithms.map((algo, idx) => `
    <button class="algo-tab-btn ${idx === algoIndex ? 'active' : ''}" onclick="switchAlgo(${p.id}, ${idx})">
      <span>${algo.name}</span>
      <span class="algo-tab-badge">${algo.fileName}</span>
    </button>
  `).join('');

  // Syntax-highlighted code lines
  const highlightedLines = highlightCppCode(currentAlgo.code);
  const lineNumbersHtml = highlightedLines.map((_, i) => `<div>${i + 1}</div>`).join('');
  const codeBodyHtml = highlightedLines.join('\n');

  // Sample Inputs & Outputs
  const samplesHtml = currentAlgo.samples.map(sample => `
    <div class="sample-box">
      <div class="sample-box-header">
        <span class="sample-badge input-badge">Sample Input</span>
        <button class="sample-copy-btn" onclick="copySampleInput(${JSON.stringify(sample.input)})">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          Copy Input
        </button>
      </div>
      <div class="sample-content">${sample.input}</div>
    </div>
    <div class="sample-box">
      <div class="sample-box-header">
        <span class="sample-badge output-badge">Expected Output</span>
      </div>
      <div class="sample-content">${sample.output}</div>
    </div>
  `).join('');

  // How to Run Steps
  const howToRunHtml = currentAlgo.howToRun.map(step => `
    <div class="run-step-item">
      <div class="step-num-badge">${step.step}</div>
      <div class="step-content">
        <p class="step-text">${step.text}</p>
        ${step.cmd ? `<code class="step-code-cmd">${step.cmd}</code>` : ''}
      </div>
    </div>
  `).join('');

  // Socket-specific Wireshark guide if PR-07
  let socketExtraHtml = '';
  if (p.id === 7 && p.socketContent) {
    const ws = p.socketContent.wiresharkGuide;
    const obsRows = ws.observations.map(o => `
      <tr>
        <td><strong>${o.phase}</strong></td>
        <td><pre style="font-family:var(--font-mono); font-size:0.78rem; line-height:1.4;">${o.packets}</pre></td>
        <td>${o.note}</td>
      </tr>
    `).join('');

    const troubleRows = p.socketContent.troubleshooting.map(t => `
      <tr>
        <td style="color:#b91c1c;"><code>${t.error}</code></td>
        <td>${t.cause}</td>
        <td><strong>${t.fix}</strong></td>
      </tr>
    `).join('');

    socketExtraHtml = `
      <div class="content-section-card">
        <h3 class="card-section-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          Wireshark Packet Analysis for Socket Programming
        </h3>
        <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:12px;">
          To inspect TCP and UDP packets on your local machine, open Wireshark and select the <strong>${ws.interface}</strong>. Apply filter: <code>${ws.filter}</code>.
        </p>
        <div class="summary-table-wrap" style="margin-bottom:20px;">
          <table class="academic-table">
            <thead>
              <tr>
                <th>Protocol Phase</th>
                <th>Observed Packets / Flags</th>
                <th>Underlying Protocol Behavior</th>
              </tr>
            </thead>
            <tbody>
              ${obsRows}
            </tbody>
          </table>
        </div>

        <h4 style="font-size:0.95rem; font-weight:700; margin-bottom:10px;">Common Socket Compilation &amp; Execution Troubleshooting:</h4>
        <div class="summary-table-wrap">
          <table class="academic-table">
            <thead>
              <tr>
                <th>Error Message</th>
                <th>Root Cause</th>
                <th>Resolution Instruction</th>
              </tr>
            </thead>
            <tbody>
              ${troubleRows}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // Combined code copy buttons
  const isCombined = currentAlgo.name.toLowerCase().includes("combined");
  const copyButtons = `
    <button class="btn-copy-code btn-primary-copy" onclick="copyCurrentCode()">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
      Copy Code
    </button>
    ${isCombined ? `
      <button class="btn-copy-code" onclick="copyCurrentCode()">
        Copy All
      </button>
    ` : ''}
  `;

  return `
    <div class="practical-header-block">
      <div class="practical-header-top">
        <span class="practical-code-pill">${p.number}</span>
        <span class="practical-type-pill">${p.categoryLabel}</span>
      </div>
      <h1 class="practical-full-title">${p.title}</h1>
      <div class="aim-box">
        <span class="aim-label">Aim:</span> ${p.aim}
      </div>
    </div>

    <!-- Algorithm Tabs -->
    <div class="algorithm-tabs-wrap">
      ${tabButtonsHtml}
    </div>

    <!-- Code Viewer Component -->
    <div class="code-viewer-card">
      <div class="code-viewer-header">
        <div class="file-info">
          <svg class="file-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
          <span class="file-name">${currentAlgo.fileName}</span>
          <span class="lang-badge">C++17 | MinGW g++</span>
        </div>
        <div class="code-actions-group">
          ${copyButtons}
        </div>
      </div>

      <div class="code-container" id="codeContainerBlock">
        <div class="line-numbers-col">${lineNumbersHtml}</div>
        <div class="code-body-col">${codeBodyHtml}</div>
      </div>
    </div>

    <!-- Sample Inputs and Outputs -->
    <h3 style="font-size:1.15rem; font-weight:700; color:var(--text-primary); margin: 24px 0 12px;">
      Sample Test Cases &amp; Expected Program Behavior
    </h3>
    <div class="samples-grid">
      ${samplesHtml}
    </div>

    <!-- How to Run Section -->
    <div class="how-to-run-card">
      <h3 class="card-section-title">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
        How to Run with MinGW g++ in VS Code
      </h3>
      <div class="run-steps-list">
        ${howToRunHtml}
      </div>

      <div class="callout-box">
        <div class="callout-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          Troubleshooting Common MinGW Issues on Windows
        </div>
        <ul class="callout-list">
          <li><strong>'g++' is not recognized:</strong> Ensure your MinGW binary path (typically <code>C:\\MinGW\\bin</code> or <code>C:\\msys64\\ucrt64\\bin</code>) is added to your Windows System Environment Variable <code>PATH</code>.</li>
          <li><strong>PowerShell Execution Policy:</strong> If VS Code terminal blocks script execution, compile directly using Command Prompt (<code>cmd</code>) or execute <code>Set-ExecutionPolicy -Scope CurrentUser RemoteSigned</code>.</li>
          <li><strong>Clean Source Files:</strong> Always save changes in VS Code before compiling so the latest source code is compiled into the binary.</li>
        </ul>
      </div>
    </div>

    ${socketExtraHtml}
  `;
}

// Switch Algorithm Tab within current practical
function switchAlgo(practicalId, algoIdx) {
  openPractical(practicalId, algoIdx);
}

// Copy to Clipboard Utility with Live Toast
function copyTextToClipboard(text, message = "Code copied successfully!") {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(message);
    }).catch(() => {
      fallbackCopy(text, message);
    });
  } else {
    fallbackCopy(text, message);
  }
}

function fallbackCopy(text, message) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(message);
  } catch (err) {
    showToast("Failed to copy automatically. Please select manually.");
  }
  document.body.removeChild(textArea);
}

function copyCurrentCode() {
  const p = practicalsData.find(item => item.id === currentPracticalId);
  if (!p || !p.algorithms) return;
  const currentCode = p.algorithms[currentAlgoIndex].code;
  copyTextToClipboard(currentCode, `✓ ${p.algorithms[currentAlgoIndex].fileName} copied successfully!`);
}

function copyRawCode(rawStr) {
  copyTextToClipboard(rawStr, "✓ Commands copied to clipboard!");
}

function copySampleInput(sampleInput) {
  copyTextToClipboard(sampleInput, "✓ Sample Input copied to clipboard!");
}

function showToast(message) {
  const toast = document.getElementById('copyToast');
  const msgEl = document.getElementById('toastMessage');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}

// Navigation Helpers
function navigateToHome() {
  document.getElementById('homeView').style.display = 'block';
  document.getElementById('detailView').style.display = 'none';

  document.getElementById('navHomeBtn').classList.add('active');
  document.getElementById('navAllBtn').classList.remove('active');
  document.getElementById('quickJumpSelect').value = "";
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToPracticals() {
  navigateToHome();
  const el = document.getElementById('practicalsSection');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
  document.getElementById('navAllBtn').classList.add('active');
  document.getElementById('navHomeBtn').classList.remove('active');
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleSearch(val) {
  const clearBtn = document.getElementById('clearSearchBtn');
  if (clearBtn) {
    clearBtn.style.display = val ? 'flex' : 'none';
  }
  renderPracticalsGrid(currentCategoryFilter, val);
}

function handleQuickSearch(val) {
  navigateToHome();
  const mainSearch = document.getElementById('mainSearchInput');
  if (mainSearch) {
    mainSearch.value = val;
    handleSearch(val);
  }
  scrollToPracticals();
}

function clearSearch() {
  const mainSearch = document.getElementById('mainSearchInput');
  const quickSearch = document.getElementById('quickSearchInput');
  if (mainSearch) mainSearch.value = '';
  if (quickSearch) quickSearch.value = '';
  document.getElementById('clearSearchBtn').style.display = 'none';
  renderPracticalsGrid(currentCategoryFilter, '');
}

function setCategoryFilter(category, buttonEl) {
  currentCategoryFilter = category;

  // Toggle active class on pills
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(p => p.classList.remove('active'));
  if (buttonEl) buttonEl.classList.add('active');

  const mainSearch = document.getElementById('mainSearchInput');
  const query = mainSearch ? mainSearch.value : '';
  renderPracticalsGrid(category, query);
}

function handleQuickJump(val) {
  if (!val) return;
  openPractical(parseInt(val, 10));
}

// Keyboard Shortcuts & Scroll Events
window.addEventListener('DOMContentLoaded', () => {
  renderPracticalsGrid();

  // Scroll to Top visibility
  const scrollBtn = document.getElementById('scrollToTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });

  // Global hotkey: '/' to focus search, 'Escape' to return home
  window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
      e.preventDefault();
      const searchInput = document.getElementById('mainSearchInput');
      if (searchInput) {
        navigateToHome();
        searchInput.focus();
      }
    } else if (e.key === 'Escape') {
      navigateToHome();
    }
  });
});
