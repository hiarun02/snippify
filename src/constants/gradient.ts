export interface GradientOption {
  name: string;
  gradient: string;
}

export interface ScreenshotBgCategory {
  id: string;
  label: string;
  options: GradientOption[];
}

export const CodeSnippetBg: GradientOption[] = [
  {
    name: "Crimson Twilight",
    gradient:
      "linear-gradient( 109.6deg,  rgba(204,0,0,1) 11.2%, rgba(68,0,0,1) 100.6% )",
  },
  {
    name: "Golden Rose",
    gradient:
      "linear-gradient( 177.5deg,  rgba(255,200,42,1) 28.3%, rgba(202,32,132,1) 79.8% )",
  },
  {
    name: "Golden Oasis",
    gradient:
      "radial-gradient( circle 297px at 8% 45%,  rgba(245,234,176,1) 0%, rgba(133,239,212,1) 100.7% )",
  },
  {
    name: "Aqua Horizon",
    gradient:
      "radial-gradient( circle farthest-corner at 10% 20%,  rgba(56,207,191,1) 0%, rgba(10,70,147,1) 90.2% )",
  },
  {
    name: "Emerald Nightfall",
    gradient:
      "radial-gradient( circle farthest-corner at 96.1% 7.2%,  rgba(9,178,62,1) 0%, rgba(19,19,19,1) 100.2% )",
  },
  {
    name: "Blush Blossom",
    gradient:
      "radial-gradient( circle farthest-corner at 10% 20%,  rgba(240, 139, 139, 1) 0%, rgba(243, 252, 166, 1) 90% )",
  },
  {
    name: "Lavender Dream",
    gradient:
      "radial-gradient( circle 341px at 10% 20%,  rgba(132, 94, 194, 1) 0%, rgba(196, 243, 251, 1) 90% )",
  },
  {
    name: "Sunrise Serenade",
    gradient:
      "linear-gradient(91.7deg, rgba(135, 206, 235, 1) 7.3%, rgba(255, 154, 139, 1) 40.3%, rgba(255, 195, 160, 1) 57.9%, rgba(255, 215, 0, 1) 93.5%)",
  },
  {
    name: "Iridescent Waves",
    gradient:
      "linear-gradient(109.6deg, rgba(112, 246, 255, 0.33) 11.2%, rgba(221, 108, 241, 0.26) 42%, rgba(229, 106, 253, 0.71) 71.5%, rgba(123, 183, 253, 1) 100.2%)",
  },
  {
    name: "Prismatic Bloom",
    gradient:
      "linear-gradient(68.1deg, rgba(196, 69, 69, 1) 9.2%, rgba(255, 167, 73, 0.82) 25%, rgba(253, 217, 82, 0.82) 43.4%, rgba(107, 225, 108, 0.82) 58.2%, rgba(107, 169, 225, 0.82) 75.1%, rgba(153, 41, 243, 0.82) 87.3%)",
  },
  {
    name: "Peach Bliss",
    gradient:
      "linear-gradient(64.3deg, rgba(254, 122, 152, 0.81) 17.7%, rgba(255, 206, 134, 1) 64.7%, rgba(172, 253, 163, 0.64) 112.1%)",
  },
  {
    name: "Amber Glow",
    gradient:
      "linear-gradient(107.7deg, rgba(235, 230, 44, 0.55) 8.4%, rgba(252, 152, 15, 1) 90.3%)",
  },
  {
    name: "Ocean's Embrace",
    gradient:
      "radial-gradient(circle farthest-corner at 48.4% 47.5%, rgba(122, 183, 255, 1) 0%, rgba(21, 83, 161, 1) 90%)",
  },
  {
    name: "Celestial Spectrum",
    gradient:
      "linear-gradient(226.4deg, rgba(255, 26, 1, 1) 28.9%, rgba(254, 155, 1, 1) 33%, rgba(255, 241, 0, 1) 48.6%, rgba(34, 218, 1, 1) 65.3%, rgba(0, 141, 254, 1) 80.6%, rgba(113, 63, 254, 1) 100.1%)",
  },
  {
    name: "Silver Lining",
    gradient:
      "linear-gradient(180.3deg, rgba(221, 221, 221, 1) 5.5%, rgba(110, 136, 161, 1) 90.2%)",
  },
  {
    name: "Golden Sunset",
    gradient:
      "linear-gradient(109.6deg, rgba(255,253,208,1) 11.2%, rgba(153,102,51,1) 91%)",
  },
  {
    name: "Blackened Night",
    gradient:
      "linear-gradient(0.1deg, rgba(21, 13, 15, 1) 10.2%, rgba(21, 13, 15, 0.70) 99.8%, rgba(21, 13, 15, 0.29) 121.2%)",
  },
  {
    name: "Sunset Overdrive",
    gradient:
      "linear-gradient(97.3deg, rgba(25, 50, 70, 0.81) 10.7%, rgba(155, 65, 25, 0.72) 39.5%, rgba(255, 192, 0, 0.81) 69.7%)",
  },
  {
    name: "Red Sunset",
    gradient:
      "radial-gradient(circle farthest-corner at 10% 20%, rgba(235, 131, 130, 1) 0%, rgba(235, 131, 130, 0.75) 38.6%, rgba(211, 177, 125, 0.52) 72.1%, rgba(211, 177, 125, 0.24) 94.7%)",
  },
  {
    name: "Blue Horizon",
    gradient:
      "radial-gradient(circle 1224px at 10.6% 8.8%, rgba(255, 255, 255, 1) 0%, rgba(153, 202, 251, 1) 100.2%)",
  },
  {
    name: "Green Mist",
    gradient:
      "linear-gradient(113.7deg, rgba(90, 173, 173, 1) 16.4%, rgba(0, 0, 0, 1) 99.7%)",
  },
  {name: "black", gradient: "#000000"},
  {name: "white", gradient: "#ffffff"},
  {
    name: "macOS Space",
    gradient:
      "linear-gradient(135deg, rgba(19, 29, 45, 1) 0%, rgba(34, 47, 64, 1) 50%, rgba(49, 65, 85, 1) 100%)",
  },
  {
    name: "macOS Blue",
    gradient:
      "linear-gradient(135deg, rgba(117, 189, 255, 1) 0%, rgba(71, 160, 255, 1) 50%, rgba(0, 122, 255, 1) 100%)",
  },
  {
    name: "macOS Orange",
    gradient:
      "linear-gradient(135deg, rgba(255, 157, 73, 1) 0%, rgba(255, 127, 50, 1) 50%, rgba(255, 99, 20, 1) 100%)",
  },
  {
    name: "macOS Purple",
    gradient:
      "linear-gradient(135deg, rgba(178, 121, 255, 1) 0%, rgba(155, 89, 255, 1) 50%, rgba(139, 69, 236, 1) 100%)",
  },
  {
    name: "macOS Pink",
    gradient:
      "linear-gradient(135deg, rgba(255, 121, 172, 1) 0%, rgba(255, 96, 151, 1) 50%, rgba(255, 71, 140, 1) 100%)",
  },
  {
    name: "macOS Green",
    gradient:
      "linear-gradient(135deg, rgba(80, 180, 124, 1) 0%, rgba(52, 168, 112, 1) 50%, rgba(40, 155, 104, 1) 100%)",
  },
  {
    name: "macOS Teal",
    gradient:
      "linear-gradient(135deg, rgba(80, 200, 200, 1) 0%, rgba(50, 180, 180, 1) 50%, rgba(30, 160, 165, 1) 100%)",
  },
  {
    name: "macOS Dark Gray",
    gradient:
      "linear-gradient(135deg, rgba(60, 63, 65, 1) 0%, rgba(45, 48, 50, 1) 50%, rgba(30, 33, 35, 1) 100%)",
  },
  {
    name: "Windows 10 Blue",
    gradient:
      "linear-gradient(135deg, rgba(0, 120, 215, 1) 0%, rgba(0, 90, 158, 1) 50%, rgba(0, 60, 120, 1) 100%)",
  },
  {
    name: "Windows 11",
    gradient:
      "linear-gradient(135deg, rgba(240, 240, 240, 1) 0%, rgba(200, 200, 200, 1) 50%, rgba(180, 180, 180, 1) 100%)",
  },
  {
    name: "Windows Cyan",
    gradient:
      "linear-gradient(135deg, rgba(0, 177, 225, 1) 0%, rgba(0, 150, 200, 1) 50%, rgba(0, 120, 170, 1) 100%)",
  },
  {
    name: "Windows Purple",
    gradient:
      "linear-gradient(135deg, rgba(156, 39, 176, 1) 0%, rgba(123, 31, 162, 1) 50%, rgba(103, 58, 183, 1) 100%)",
  },
  {
    name: "Ubuntu Orange",
    gradient:
      "linear-gradient(135deg, rgba(226, 107, 41, 1) 0%, rgba(206, 87, 21, 1) 50%, rgba(186, 67, 1, 1) 100%)",
  },
  {
    name: "Fedora Blue",
    gradient:
      "linear-gradient(135deg, rgba(51, 102, 204, 1) 0%, rgba(41, 82, 184, 1) 50%, rgba(31, 62, 164, 1) 100%)",
  },
  {
    name: "Mint Green",
    gradient:
      "linear-gradient(135deg, rgba(72, 197, 142, 1) 0%, rgba(56, 177, 122, 1) 50%, rgba(40, 157, 102, 1) 100%)",
  },
  {
    name: "Debian Red",
    gradient:
      "linear-gradient(135deg, rgba(215, 23, 104, 1) 0%, rgba(195, 3, 84, 1) 50%, rgba(165, 0, 64, 1) 100%)",
  },
  {
    name: "Elementary Dark",
    gradient:
      "linear-gradient(135deg, rgba(45, 45, 45, 1) 0%, rgba(35, 35, 35, 1) 50%, rgba(25, 25, 25, 1) 100%)",
  },
  {
    name: "Warm Flame",
    gradient:
      "linear-gradient(45deg, rgba(255, 154, 158, 1) 0%, rgba(250, 208, 196, 1) 100%)",
  },
  {
    name: "Sunny Morning",
    gradient:
      "linear-gradient(120deg, rgba(246, 211, 101, 1) 0%, rgba(253, 160, 133, 1) 100%)",
  },
  {
    name: "Dusty Grass",
    gradient:
      "linear-gradient(120deg, rgba(212, 252, 121, 1) 0%, rgba(150, 230, 161, 1) 100%)",
  },
  {
    name: "Tempting Azure",
    gradient:
      "linear-gradient(120deg, rgba(132, 250, 176, 1) 0%, rgba(143, 211, 244, 1) 100%)",
  },
  {
    name: "Malibu Beach",
    gradient:
      "linear-gradient(to right, rgba(79, 172, 254, 1) 0%, rgba(0, 242, 254, 1) 100%)",
  },
  {
    name: "New Life",
    gradient:
      "linear-gradient(to right, rgba(67, 233, 123, 1) 0%, rgba(56, 249, 215, 1) 100%)",
  },
  {
    name: "True Sunset",
    gradient:
      "linear-gradient(to right, rgba(250, 112, 154, 1) 0%, rgba(254, 225, 64, 1) 100%)",
  },
  {
    name: "Morpheus Den",
    gradient:
      "linear-gradient(to top, rgba(48, 207, 208, 1) 0%, rgba(51, 8, 103, 1) 100%)",
  },
  {
    name: "Plum Plate",
    gradient:
      "linear-gradient(135deg, rgba(102, 126, 234, 1) 0%, rgba(118, 75, 162, 1) 100%)",
  },
  {
    name: "Deep Blue",
    gradient:
      "linear-gradient(120deg, rgba(224, 195, 252, 1) 0%, rgba(142, 197, 252, 1) 100%)",
  },
  {
    name: "Lemon Gate",
    gradient:
      "linear-gradient(to top, rgba(150, 251, 196, 1) 0%, rgba(249, 245, 134, 1) 100%)",
  },
  {
    name: "Itmeo Branding",
    gradient:
      "linear-gradient(180deg, rgba(42, 245, 152, 1) 0%, rgba(0, 158, 253, 1) 100%)",
  },
  {
    name: "Night Party",
    gradient:
      "linear-gradient(to top, rgba(2, 80, 197, 1) 0%, rgba(212, 63, 141, 1) 100%)",
  },
  {
    name: "Sky Glider",
    gradient:
      "linear-gradient(to top, rgba(136, 211, 206, 1) 0%, rgba(110, 69, 226, 1) 100%)",
  },
  {
    name: "Aqua Splash",
    gradient:
      "linear-gradient(15deg, rgba(19, 84, 122, 1) 0%, rgba(128, 208, 199, 1) 100%)",
  },
  {
    name: "Summer Games",
    gradient:
      "linear-gradient(to right, rgba(146, 254, 157, 1) 0%, rgba(0, 201, 255, 1) 100%)",
  },
  {
    name: "Phoenix Start",
    gradient:
      "linear-gradient(to right, rgba(248, 54, 0, 1) 0%, rgba(249, 212, 35, 1) 100%)",
  },
  {
    name: "October Silence",
    gradient:
      "linear-gradient(-20deg, rgba(183, 33, 255, 1) 0%, rgba(33, 212, 253, 1) 100%)",
  },
  {
    name: "Hidden Jaguar",
    gradient:
      "linear-gradient(to top, rgba(15, 216, 80, 1) 0%, rgba(249, 240, 71, 1) 100%)",
  },
  {
    name: "Seashore",
    gradient:
      "linear-gradient(to top, rgba(32, 156, 255, 1) 0%, rgba(104, 224, 207, 1) 100%)",
  },
  {
    name: "Magic Lake",
    gradient:
      "linear-gradient(to top, rgba(213, 222, 231, 1) 0%, rgba(255, 170, 189, 1) 50%, rgba(201, 255, 191, 1) 100%)",
  },
  {
    name: "North Miracle",
    gradient:
      "linear-gradient(to right, rgba(0, 219, 222, 1) 0%, rgba(252, 0, 255, 1) 100%)",
  },
  {
    name: "High Flight",
    gradient:
      "linear-gradient(to right, rgba(10, 207, 254, 1) 0%, rgba(73, 90, 255, 1) 100%)",
  },
];

export const ScreenShotSnippetBg: GradientOption[] = [
  {
    name: "Crimson Twilight",
    gradient:
      "linear-gradient( 109.6deg,  rgba(204,0,0,1) 11.2%, rgba(68,0,0,1) 100.6% )",
  },
  {
    name: "Golden Rose",
    gradient:
      "linear-gradient( 177.5deg,  rgba(255,200,42,1) 28.3%, rgba(202,32,132,1) 79.8% )",
  },
  {
    name: "Golden Oasis",
    gradient:
      "radial-gradient( circle 297px at 8% 45%,  rgba(245,234,176,1) 0%, rgba(133,239,212,1) 100.7% )",
  },
  {
    name: "Aqua Horizon",
    gradient:
      "radial-gradient( circle farthest-corner at 10% 20%,  rgba(56,207,191,1) 0%, rgba(10,70,147,1) 90.2% )",
  },
  {
    name: "Emerald Nightfall",
    gradient:
      "radial-gradient( circle farthest-corner at 96.1% 7.2%,  rgba(9,178,62,1) 0%, rgba(19,19,19,1) 100.2% )",
  },
  {
    name: "Blush Blossom",
    gradient:
      "radial-gradient( circle farthest-corner at 10% 20%,  rgba(240, 139, 139, 1) 0%, rgba(243, 252, 166, 1) 90% )",
  },
  {
    name: "Lavender Dream",
    gradient:
      "radial-gradient( circle 341px at 10% 20%,  rgba(132, 94, 194, 1) 0%, rgba(196, 243, 251, 1) 90% )",
  },
  {
    name: "Sunrise Serenade",
    gradient:
      "linear-gradient(91.7deg, rgba(135, 206, 235, 1) 7.3%, rgba(255, 154, 139, 1) 40.3%, rgba(255, 195, 160, 1) 57.9%, rgba(255, 215, 0, 1) 93.5%)",
  },
  {
    name: "Iridescent Waves",
    gradient:
      "linear-gradient(109.6deg, rgba(112, 246, 255, 0.33) 11.2%, rgba(221, 108, 241, 0.26) 42%, rgba(229, 106, 253, 0.71) 71.5%, rgba(123, 183, 253, 1) 100.2%)",
  },
  {
    name: "Prismatic Bloom",
    gradient:
      "linear-gradient(68.1deg, rgba(196, 69, 69, 1) 9.2%, rgba(255, 167, 73, 0.82) 25%, rgba(253, 217, 82, 0.82) 43.4%, rgba(107, 225, 108, 0.82) 58.2%, rgba(107, 169, 225, 0.82) 75.1%, rgba(153, 41, 243, 0.82) 87.3%)",
  },
  {
    name: "Peach Bliss",
    gradient:
      "linear-gradient(64.3deg, rgba(254, 122, 152, 0.81) 17.7%, rgba(255, 206, 134, 1) 64.7%, rgba(172, 253, 163, 0.64) 112.1%)",
  },
  {
    name: "Amber Glow",
    gradient:
      "linear-gradient(107.7deg, rgba(235, 230, 44, 0.55) 8.4%, rgba(252, 152, 15, 1) 90.3%)",
  },
  {
    name: "Ocean's Embrace",
    gradient:
      "radial-gradient(circle farthest-corner at 48.4% 47.5%, rgba(122, 183, 255, 1) 0%, rgba(21, 83, 161, 1) 90%)",
  },
  {
    name: "Celestial Spectrum",
    gradient:
      "linear-gradient(226.4deg, rgba(255, 26, 1, 1) 28.9%, rgba(254, 155, 1, 1) 33%, rgba(255, 241, 0, 1) 48.6%, rgba(34, 218, 1, 1) 65.3%, rgba(0, 141, 254, 1) 80.6%, rgba(113, 63, 254, 1) 100.1%)",
  },
  {
    name: "Silver Lining",
    gradient:
      "linear-gradient(180.3deg, rgba(221, 221, 221, 1) 5.5%, rgba(110, 136, 161, 1) 90.2%)",
  },
  {
    name: "Golden Sunset",
    gradient:
      "linear-gradient(109.6deg, rgba(255,253,208,1) 11.2%, rgba(153,102,51,1) 91%)",
  },
  {
    name: "Blackened Night",
    gradient:
      "linear-gradient(0.1deg, rgba(21, 13, 15, 1) 10.2%, rgba(21, 13, 15, 0.70) 99.8%, rgba(21, 13, 15, 0.29) 121.2%)",
  },
  {
    name: "Sunset Overdrive",
    gradient:
      "linear-gradient(97.3deg, rgba(25, 50, 70, 0.81) 10.7%, rgba(155, 65, 25, 0.72) 39.5%, rgba(255, 192, 0, 0.81) 69.7%)",
  },
  {
    name: "Red Sunset",
    gradient:
      "radial-gradient(circle farthest-corner at 10% 20%, rgba(235, 131, 130, 1) 0%, rgba(235, 131, 130, 0.75) 38.6%, rgba(211, 177, 125, 0.52) 72.1%, rgba(211, 177, 125, 0.24) 94.7%)",
  },
  {
    name: "Blue Horizon",
    gradient:
      "radial-gradient(circle 1224px at 10.6% 8.8%, rgba(255, 255, 255, 1) 0%, rgba(153, 202, 251, 1) 100.2%)",
  },
  {
    name: "Green Mist",
    gradient:
      "linear-gradient(113.7deg, rgba(90, 173, 173, 1) 16.4%, rgba(0, 0, 0, 1) 99.7%)",
  },
  {name: "black", gradient: "#000000"},
  {name: "white", gradient: "#ffffff"},
  {
    name: "macOS Space",
    gradient:
      "linear-gradient(135deg, rgba(19, 29, 45, 1) 0%, rgba(34, 47, 64, 1) 50%, rgba(49, 65, 85, 1) 100%)",
  },
  {
    name: "macOS Blue",
    gradient:
      "linear-gradient(135deg, rgba(117, 189, 255, 1) 0%, rgba(71, 160, 255, 1) 50%, rgba(0, 122, 255, 1) 100%)",
  },
  {
    name: "macOS Orange",
    gradient:
      "linear-gradient(135deg, rgba(255, 157, 73, 1) 0%, rgba(255, 127, 50, 1) 50%, rgba(255, 99, 20, 1) 100%)",
  },
  {
    name: "macOS Purple",
    gradient:
      "linear-gradient(135deg, rgba(178, 121, 255, 1) 0%, rgba(155, 89, 255, 1) 50%, rgba(139, 69, 236, 1) 100%)",
  },
  {
    name: "macOS Pink",
    gradient:
      "linear-gradient(135deg, rgba(255, 121, 172, 1) 0%, rgba(255, 96, 151, 1) 50%, rgba(255, 71, 140, 1) 100%)",
  },
  {
    name: "macOS Green",
    gradient:
      "linear-gradient(135deg, rgba(80, 180, 124, 1) 0%, rgba(52, 168, 112, 1) 50%, rgba(40, 155, 104, 1) 100%)",
  },
  {
    name: "macOS Teal",
    gradient:
      "linear-gradient(135deg, rgba(80, 200, 200, 1) 0%, rgba(50, 180, 180, 1) 50%, rgba(30, 160, 165, 1) 100%)",
  },
  {
    name: "macOS Dark Gray",
    gradient:
      "linear-gradient(135deg, rgba(60, 63, 65, 1) 0%, rgba(45, 48, 50, 1) 50%, rgba(30, 33, 35, 1) 100%)",
  },
  {
    name: "Windows 10 Blue",
    gradient:
      "linear-gradient(135deg, rgba(0, 120, 215, 1) 0%, rgba(0, 90, 158, 1) 50%, rgba(0, 60, 120, 1) 100%)",
  },
  {
    name: "Windows 11",
    gradient:
      "linear-gradient(135deg, rgba(240, 240, 240, 1) 0%, rgba(200, 200, 200, 1) 50%, rgba(180, 180, 180, 1) 100%)",
  },
  {
    name: "Windows Cyan",
    gradient:
      "linear-gradient(135deg, rgba(0, 177, 225, 1) 0%, rgba(0, 150, 200, 1) 50%, rgba(0, 120, 170, 1) 100%)",
  },
  {
    name: "Windows Purple",
    gradient:
      "linear-gradient(135deg, rgba(156, 39, 176, 1) 0%, rgba(123, 31, 162, 1) 50%, rgba(103, 58, 183, 1) 100%)",
  },
  {
    name: "Ubuntu Orange",
    gradient:
      "linear-gradient(135deg, rgba(226, 107, 41, 1) 0%, rgba(206, 87, 21, 1) 50%, rgba(186, 67, 1, 1) 100%)",
  },
  {
    name: "Fedora Blue",
    gradient:
      "linear-gradient(135deg, rgba(51, 102, 204, 1) 0%, rgba(41, 82, 184, 1) 50%, rgba(31, 62, 164, 1) 100%)",
  },
  {
    name: "Mint Green",
    gradient:
      "linear-gradient(135deg, rgba(72, 197, 142, 1) 0%, rgba(56, 177, 122, 1) 50%, rgba(40, 157, 102, 1) 100%)",
  },
  {
    name: "Debian Red",
    gradient:
      "linear-gradient(135deg, rgba(215, 23, 104, 1) 0%, rgba(195, 3, 84, 1) 50%, rgba(165, 0, 64, 1) 100%)",
  },
  {
    name: "Elementary Dark",
    gradient:
      "linear-gradient(135deg, rgba(45, 45, 45, 1) 0%, rgba(35, 35, 35, 1) 50%, rgba(25, 25, 25, 1) 100%)",
  },
  {
    name: "Warm Flame",
    gradient:
      "linear-gradient(45deg, rgba(255, 154, 158, 1) 0%, rgba(250, 208, 196, 1) 100%)",
  },
  {
    name: "Sunny Morning",
    gradient:
      "linear-gradient(120deg, rgba(246, 211, 101, 1) 0%, rgba(253, 160, 133, 1) 100%)",
  },
  {
    name: "Dusty Grass",
    gradient:
      "linear-gradient(120deg, rgba(212, 252, 121, 1) 0%, rgba(150, 230, 161, 1) 100%)",
  },
  {
    name: "Tempting Azure",
    gradient:
      "linear-gradient(120deg, rgba(132, 250, 176, 1) 0%, rgba(143, 211, 244, 1) 100%)",
  },
  {
    name: "Malibu Beach",
    gradient:
      "linear-gradient(to right, rgba(79, 172, 254, 1) 0%, rgba(0, 242, 254, 1) 100%)",
  },
  {
    name: "New Life",
    gradient:
      "linear-gradient(to right, rgba(67, 233, 123, 1) 0%, rgba(56, 249, 215, 1) 100%)",
  },
  {
    name: "True Sunset",
    gradient:
      "linear-gradient(to right, rgba(250, 112, 154, 1) 0%, rgba(254, 225, 64, 1) 100%)",
  },
  {
    name: "Morpheus Den",
    gradient:
      "linear-gradient(to top, rgba(48, 207, 208, 1) 0%, rgba(51, 8, 103, 1) 100%)",
  },
  {
    name: "Plum Plate",
    gradient:
      "linear-gradient(135deg, rgba(102, 126, 234, 1) 0%, rgba(118, 75, 162, 1) 100%)",
  },
  {
    name: "Deep Blue",
    gradient:
      "linear-gradient(120deg, rgba(224, 195, 252, 1) 0%, rgba(142, 197, 252, 1) 100%)",
  },
  {
    name: "Lemon Gate",
    gradient:
      "linear-gradient(to top, rgba(150, 251, 196, 1) 0%, rgba(249, 245, 134, 1) 100%)",
  },
  {
    name: "Itmeo Branding",
    gradient:
      "linear-gradient(180deg, rgba(42, 245, 152, 1) 0%, rgba(0, 158, 253, 1) 100%)",
  },
  {
    name: "Night Party",
    gradient:
      "linear-gradient(to top, rgba(2, 80, 197, 1) 0%, rgba(212, 63, 141, 1) 100%)",
  },
  {
    name: "Sky Glider",
    gradient:
      "linear-gradient(to top, rgba(136, 211, 206, 1) 0%, rgba(110, 69, 226, 1) 100%)",
  },
  {
    name: "Aqua Splash",
    gradient:
      "linear-gradient(15deg, rgba(19, 84, 122, 1) 0%, rgba(128, 208, 199, 1) 100%)",
  },
  {
    name: "Summer Games",
    gradient:
      "linear-gradient(to right, rgba(146, 254, 157, 1) 0%, rgba(0, 201, 255, 1) 100%)",
  },
  {
    name: "Phoenix Start",
    gradient:
      "linear-gradient(to right, rgba(248, 54, 0, 1) 0%, rgba(249, 212, 35, 1) 100%)",
  },
  {
    name: "October Silence",
    gradient:
      "linear-gradient(-20deg, rgba(183, 33, 255, 1) 0%, rgba(33, 212, 253, 1) 100%)",
  },
  {
    name: "Hidden Jaguar",
    gradient:
      "linear-gradient(to top, rgba(15, 216, 80, 1) 0%, rgba(249, 240, 71, 1) 100%)",
  },
  {
    name: "Seashore",
    gradient:
      "linear-gradient(to top, rgba(32, 156, 255, 1) 0%, rgba(104, 224, 207, 1) 100%)",
  },
  {
    name: "Magic Lake",
    gradient:
      "linear-gradient(to top, rgba(213, 222, 231, 1) 0%, rgba(255, 170, 189, 1) 50%, rgba(201, 255, 191, 1) 100%)",
  },
  {
    name: "North Miracle",
    gradient:
      "linear-gradient(to right, rgba(0, 219, 222, 1) 0%, rgba(252, 0, 255, 1) 100%)",
  },
  {
    name: "High Flight",
    gradient:
      "linear-gradient(to right, rgba(10, 207, 254, 1) 0%, rgba(73, 90, 255, 1) 100%)",
  },
];

export const ScreenshotSnippetBgCategories: ScreenshotBgCategory[] = [
  {
    id: "abstract",
    label: "Abstract",
    options: [
      {
        name: "Aurora",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/abstract-aurora.svg')",
      },
      {
        name: "Dune",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/abstract-dune.svg')",
      },
      {
        name: "Lagoon",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/abstract-lagoon.svg')",
      },
      {
        name: "Nebula",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/abstract-nebula.svg')",
      },
      {
        name: "Candy Waves",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/abstract-candy.svg')",
      },
      {
        name: "Prism Flow",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/abstract-prism.svg')",
      },
      {
        name: "Ember Field",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/abstract-ember.svg')",
      },
      {
        name: "Ice Flow",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/abstract-iceflow.svg')",
      },
      {
        name: "Mirage",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/abstract-mirage.svg')",
      },
      {
        name: "Orbit",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/abstract-orbit.svg')",
      },
    ],
  },
  {
    id: "magic",
    label: "Magic Gradients",
    options: [
      {
        name: "Amber Halo",
        gradient:
          "radial-gradient(circle at 50% 50%, rgba(255, 171, 52, 0.75) 0%, rgba(255, 171, 52, 0.08) 28%, rgba(29, 30, 34, 1) 58%)",
      },
      {
        name: "Lemon Glow",
        gradient:
          "radial-gradient(circle at 50% 50%, rgba(224, 227, 143, 0.7) 0%, rgba(224, 227, 143, 0.09) 30%, rgba(31, 32, 36, 1) 60%)",
      },
      {
        name: "Neon Mint",
        gradient:
          "radial-gradient(circle at 50% 50%, rgba(0, 255, 195, 0.9) 0%, rgba(0, 255, 195, 0.15) 30%, rgba(23, 24, 28, 1) 58%)",
      },
      {
        name: "Silver Fade",
        gradient:
          "linear-gradient(135deg, rgba(226, 228, 232, 1) 0%, rgba(168, 172, 182, 1) 48%, rgba(92, 96, 106, 1) 100%)",
      },
      {
        name: "Olive Smoke",
        gradient:
          "radial-gradient(circle at 50% 50%, rgba(189, 193, 120, 0.72) 0%, rgba(189, 193, 120, 0.1) 32%, rgba(30, 31, 35, 1) 62%)",
      },
      {
        name: "Golden Orb",
        gradient:
          "radial-gradient(circle at 50% 50%, rgba(255, 182, 43, 0.9) 0%, rgba(255, 182, 43, 0.14) 28%, rgba(25, 26, 30, 1) 58%)",
      },
      {
        name: "Emerald Dot",
        gradient:
          "radial-gradient(circle at 50% 50%, rgba(8, 214, 165, 0.85) 0%, rgba(8, 214, 165, 0.14) 30%, rgba(25, 26, 30, 1) 60%)",
      },
      {
        name: "Tangerine Ring",
        gradient:
          "radial-gradient(circle at 50% 50%, rgba(255, 88, 14, 0) 24%, rgba(255, 88, 14, 0.95) 36%, rgba(255, 88, 14, 0.12) 54%, rgba(28, 29, 33, 1) 62%)",
      },
      {
        name: "Bronze Dawn",
        gradient:
          "linear-gradient(135deg, rgba(140, 88, 18, 1) 0%, rgba(82, 50, 8, 1) 45%, rgba(37, 29, 17, 1) 100%)",
      },
      {
        name: "Solar Gold",
        gradient:
          "radial-gradient(circle at 50% 50%, rgba(255, 193, 33, 0.9) 0%, rgba(255, 193, 33, 0.15) 34%, rgba(29, 30, 34, 1) 62%)",
      },
      {
        name: "Mono Halo",
        gradient:
          "radial-gradient(circle at 50% 50%, rgba(214, 216, 222, 0.88) 0%, rgba(214, 216, 222, 0.14) 31%, rgba(30, 31, 35, 1) 61%)",
      },
      {
        name: "Mint Pulse",
        gradient:
          "radial-gradient(circle at 50% 50%, rgba(12, 224, 175, 0.9) 0%, rgba(12, 224, 175, 0.14) 30%, rgba(24, 25, 29, 1) 60%)",
      },
      {
        name: "Lava Core",
        gradient:
          "radial-gradient(circle at 50% 50%, rgba(255, 92, 17, 0.95) 0%, rgba(255, 92, 17, 0.18) 30%, rgba(13, 14, 18, 1) 62%)",
      },
      {
        name: "Aqua Glow",
        gradient:
          "radial-gradient(circle at 50% 50%, rgba(107, 214, 255, 0.82) 0%, rgba(107, 214, 255, 0.14) 32%, rgba(30, 31, 36, 1) 62%)",
      },
      {
        name: "Slate Glow",
        gradient:
          "radial-gradient(circle at 50% 50%, rgba(128, 132, 154, 0.7) 0%, rgba(128, 132, 154, 0.12) 33%, rgba(33, 34, 39, 1) 62%)",
      },
      {
        name: "Sky Orb",
        gradient:
          "radial-gradient(circle at 50% 50%, rgba(105, 194, 235, 0.8) 0%, rgba(105, 194, 235, 0.14) 32%, rgba(28, 29, 33, 1) 62%)",
      },
      {
        name: "Amber Ring",
        gradient:
          "radial-gradient(circle at 50% 50%, rgba(236, 165, 54, 0) 22%, rgba(236, 165, 54, 0.9) 36%, rgba(236, 165, 54, 0.14) 54%, rgba(30, 31, 35, 1) 64%)",
      },
      {
        name: "Azure Core",
        gradient:
          "radial-gradient(circle at 50% 50%, rgba(98, 210, 255, 0.82) 0%, rgba(98, 210, 255, 0.15) 32%, rgba(15, 16, 20, 1) 64%)",
      },
      {
        name: "Chrome Mist",
        gradient:
          "radial-gradient(circle at 50% 50%, rgba(219, 221, 227, 0.88) 0%, rgba(219, 221, 227, 0.12) 33%, rgba(54, 56, 63, 1) 64%)",
      },
      {
        name: "Ivory Soft",
        gradient:
          "linear-gradient(135deg, rgba(244, 246, 249, 1) 0%, rgba(208, 212, 220, 1) 55%, rgba(145, 150, 162, 1) 100%)",
      },
    ],
  },
  {
    id: "raycast",
    label: "Raycast",
    options: [
      {
        name: "Raycast Aurora",
        gradient:
          "radial-gradient(circle at 20% 18%, rgba(255, 211, 71, 0.95) 0%, rgba(255, 128, 82, 0.88) 26%, rgba(168, 118, 255, 0.45) 58%, rgba(24, 25, 30, 1) 100%)",
      },
      {
        name: "Raycast Bloom",
        gradient:
          "radial-gradient(ellipse at 45% 40%, rgba(255, 122, 171, 0.95) 0%, rgba(255, 122, 171, 0.2) 24%, rgba(20, 22, 28, 1) 62%), radial-gradient(circle at 70% 45%, rgba(255, 255, 255, 0.2) 0%, rgba(20, 22, 28, 0) 30%)",
      },
      {
        name: "Raycast Halo",
        gradient:
          "radial-gradient(ellipse at 50% 40%, rgba(190, 117, 255, 0.95) 0%, rgba(143, 87, 255, 0.28) 30%, rgba(16, 17, 23, 1) 65%)",
      },
      {
        name: "Raycast Frost",
        gradient:
          "linear-gradient(155deg, rgba(232, 242, 235, 1) 0%, rgba(217, 231, 235, 1) 35%, rgba(247, 161, 184, 0.95) 100%)",
      },
      {
        name: "Raycast Spectrum",
        gradient:
          "radial-gradient(ellipse at 30% 24%, rgba(0, 180, 255, 0.95) 0%, rgba(80, 108, 255, 0.52) 36%, rgba(15, 16, 21, 1) 68%), radial-gradient(ellipse at 65% 70%, rgba(255, 70, 160, 0.65) 0%, rgba(15, 16, 21, 0) 40%)",
      },
      {
        name: "Raycast Cobalt",
        gradient:
          "radial-gradient(ellipse at 40% 30%, rgba(59, 117, 255, 0.95) 0%, rgba(74, 42, 255, 0.6) 34%, rgba(9, 10, 15, 1) 70%), repeating-linear-gradient(42deg, rgba(255, 255, 255, 0.04) 0 8px, rgba(255, 255, 255, 0) 8px 18px)",
      },
      {
        name: "Raycast Sky",
        gradient:
          "linear-gradient(150deg, rgba(184, 242, 255, 1) 0%, rgba(149, 205, 246, 1) 48%, rgba(172, 232, 255, 0.95) 100%)",
      },
      {
        name: "Raycast Velvet",
        gradient:
          "linear-gradient(145deg, rgba(74, 55, 182, 1) 0%, rgba(99, 66, 205, 0.95) 45%, rgba(255, 119, 148, 0.95) 100%)",
      },
      {
        name: "Raycast Motion",
        gradient:
          "repeating-linear-gradient(145deg, rgba(255, 90, 88, 0.78) 0 8px, rgba(10, 12, 18, 1) 8px 18px), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.25) 0%, rgba(10, 12, 18, 0) 30%)",
      },
      {
        name: "Raycast Shift",
        gradient:
          "repeating-linear-gradient(145deg, rgba(255, 99, 90, 0.78) 0 8px, rgba(19, 22, 28, 1) 8px 18px), radial-gradient(circle at 25% 20%, rgba(120, 240, 255, 0.26) 0%, rgba(19, 22, 28, 0) 35%)",
      },
      {
        name: "Raycast Breeze",
        gradient:
          "linear-gradient(140deg, rgba(70, 94, 116, 1) 0%, rgba(57, 77, 98, 1) 30%, rgba(90, 198, 212, 0.8) 100%), repeating-linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0 7px, rgba(255, 255, 255, 0) 7px 16px)",
      },
      {
        name: "Raycast Cyan Beam",
        gradient:
          "linear-gradient(145deg, rgba(84, 195, 210, 1) 0%, rgba(61, 148, 170, 1) 45%, rgba(28, 41, 59, 1) 100%), repeating-linear-gradient(145deg, rgba(255, 255, 255, 0.04) 0 8px, rgba(255, 255, 255, 0) 8px 18px)",
      },
      {
        name: "Raycast Mono Grid",
        gradient:
          "repeating-linear-gradient(145deg, rgba(220, 220, 220, 0.45) 0 8px, rgba(14, 16, 21, 1) 8px 18px)",
      },
      {
        name: "Raycast Red Grid",
        gradient:
          "repeating-linear-gradient(145deg, rgba(255, 36, 58, 0.88) 0 8px, rgba(9, 11, 16, 1) 8px 18px)",
      },
      {
        name: "Raycast Blue Mist",
        gradient:
          "radial-gradient(circle at 22% 26%, rgba(83, 140, 255, 0.95) 0%, rgba(109, 232, 255, 0.35) 33%, rgba(100, 94, 246, 0.8) 70%, rgba(21, 22, 28, 1) 100%)",
      },
      {
        name: "Raycast Orchid",
        gradient:
          "linear-gradient(135deg, rgba(119, 155, 255, 1) 0%, rgba(157, 92, 246, 1) 52%, rgba(234, 111, 210, 1) 100%)",
      },
      {
        name: "Raycast Prism",
        gradient:
          "radial-gradient(circle at 28% 35%, rgba(80, 88, 255, 0.92) 0%, rgba(179, 107, 255, 0.7) 44%, rgba(248, 122, 184, 0.72) 74%, rgba(23, 24, 30, 1) 100%)",
      },
      {
        name: "Raycast Fog",
        gradient:
          "linear-gradient(150deg, rgba(187, 190, 197, 1) 0%, rgba(152, 155, 163, 1) 50%, rgba(201, 203, 208, 1) 100%)",
      },
      {
        name: "Raycast Eclipse",
        gradient:
          "radial-gradient(ellipse at 52% 46%, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.4) 35%, rgba(255, 255, 255, 0.14) 45%, rgba(20, 22, 28, 1) 65%)",
      },
      {
        name: "Raycast Ring",
        gradient:
          "radial-gradient(ellipse at 53% 48%, rgba(255, 88, 126, 0) 35%, rgba(255, 88, 126, 0.78) 44%, rgba(255, 88, 126, 0.18) 51%, rgba(23, 25, 31, 1) 68%)",
      },
      {
        name: "Raycast Carbon",
        gradient:
          "repeating-linear-gradient(145deg, rgba(255, 255, 255, 0.12) 0 7px, rgba(10, 12, 18, 1) 7px 16px)",
      },
      {
        name: "Raycast Drift",
        gradient:
          "repeating-linear-gradient(145deg, rgba(30, 33, 39, 0.4) 0 8px, rgba(221, 224, 228, 0.95) 8px 18px)",
      },
      {
        name: "Raycast Noir",
        gradient:
          "repeating-linear-gradient(145deg, rgba(255, 255, 255, 0.15) 0 6px, rgba(9, 11, 16, 1) 6px 15px), radial-gradient(circle at 80% 22%, rgba(255, 255, 255, 0.2) 0%, rgba(9, 11, 16, 0) 35%)",
      },
      {
        name: "Raycast Violet Smoke",
        gradient:
          "radial-gradient(circle at 66% 42%, rgba(103, 46, 190, 0.92) 0%, rgba(206, 84, 162, 0.58) 42%, rgba(17, 18, 24, 1) 80%)",
      },
      {
        name: "Raycast Crimson Wave",
        gradient:
          "repeating-linear-gradient(145deg, rgba(255, 46, 72, 0.9) 0 8px, rgba(10, 12, 18, 1) 8px 18px), radial-gradient(circle at 24% 22%, rgba(157, 120, 255, 0.28) 0%, rgba(10, 12, 18, 0) 35%)",
      },
      {
        name: "Raycast Punch",
        gradient:
          "repeating-linear-gradient(145deg, rgba(255, 63, 89, 0.92) 0 8px, rgba(7, 10, 14, 1) 8px 17px), radial-gradient(circle at 70% 20%, rgba(255, 193, 89, 0.3) 0%, rgba(7, 10, 14, 0) 38%)",
      },
      {
        name: "Raycast Magenta",
        gradient:
          "linear-gradient(135deg, rgba(185, 60, 186, 1) 0%, rgba(145, 76, 208, 1) 52%, rgba(255, 112, 185, 1) 100%)",
      },
    ],
  },
  {
    id: "macos",
    label: "MacBook",
    options: [
      {
        name: "Orange Horizon",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/macos-orange.svg')",
      },
      {
        name: "Blue Coast",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/macos-blue.svg')",
      },
      {
        name: "Golden Dusk",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/macos-gold.svg')",
      },
      {
        name: "Forest Light",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/macos-forest.svg')",
      },
      {
        name: "Violet Night",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/macos-violet.svg')",
      },
      {
        name: "Sky Light",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/macos-sky.svg')",
      },
      {
        name: "Sunset Fold",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/macos-sunset.svg')",
      },
      {
        name: "Midnight Blue",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/macos-midnight.svg')",
      },
      {
        name: "Glacier",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/macos-glacier.svg')",
      },
      {
        name: "Arctic 2026",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/macos-2026-arctic.svg')",
      },
      {
        name: "Flow 2026",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/macos-2026-flow.svg')",
      },
      {
        name: "Glass 2026",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/macos-2026-glass.svg')",
      },
      {
        name: "Halo 2026",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/macos-2026-halo.svg')",
      },
      {
        name: "Solar 2026",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/macos-2026-solar.svg')",
      },
      {
        name: "Rose Glow",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/macos-rose.svg')",
      },
    ],
  },
  {
    id: "windows",
    label: "Windows",
    options: [
      {
        name: "Windows Light",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/windows-light.svg')",
      },
      {
        name: "Windows Blue",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/windows-blue.svg')",
      },
      {
        name: "Windows Purple",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/windows-purple.svg')",
      },
      {
        name: "Windows Teal",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/windows-teal.svg')",
      },
    ],
  },
  {
    id: "linux",
    label: "Linux",
    options: [
      {
        name: "Ubuntu",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/linux-ubuntu.svg')",
      },
      {
        name: "Fedora",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/linux-fedora.svg')",
      },
      {
        name: "Mint",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/linux-mint.svg')",
      },
      {
        name: "Arch",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/linux-arch.svg')",
      },
    ],
  },
  {
    id: "gradient",
    label: "Gradient",
    options: [
      ...CodeSnippetBg.slice(0, 24).map((item) => ({
        name: item.name,
        gradient: item.gradient,
      })),
    ],
  },
  {
    id: "radiant",
    label: "Radiant",
    options: [
      {
        name: "Sun",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/radiant-sun.svg')",
      },
      {
        name: "Rose",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/radiant-rose.svg')",
      },
      {
        name: "Cyan",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/radiant-cyan.svg')",
      },
      {
        name: "Indigo",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/radiant-indigo.svg')",
      },
      {
        name: "Coral",
        gradient:
          "center / cover no-repeat url('/screenshot-bgs/radiant-coral.svg')",
      },
    ],
  },
];
