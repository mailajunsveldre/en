module.exports = {
  base: "/en/",
  title: "Interactive Graphics | Erasmus E-Design",
  description: "Study materials for the course",
  themeConfig: {
    lastUpdated: true,
    repo: 'edesign-erasmus/en',
    editLinks: true,
    editLinkText: 'Edit this page in GitHub',
    docsBranch: 'main',
    docsDir: 'docs',
    nav: [
      { text: "01.Introduction", link: "/intro/", activeMatch: "^/intro/" },
      { text: "02.Design", link: "/design/", activeMatch: "^/design/" },
      { text: "03.Front End", link: "/frontend/", activeMatch: "^/frontend/" },
      { text: "04.Graphics", link: "/graphics/", activeMatch: "^/graphics/" },
      { text: "05.3D", link: "/3d/", activeMatch: "^/3d/" },
    ],
    sidebar: {
      "/intro/": getIntroSidebar(),
      "/design/": getDesignSidebar(),
      "/frontend/": getFrontEndSidebar(),
      "/graphics/": getGraphicsSidebar(),
      "/3d/": get3dSidebar(),
    },
  },
};

function getFrontEndSidebar() {
	return [
    { text: "Introduction", link: "/frontend/" },
    {
      text: "Tooling",
      children: [
        { text: "Command Line Interface", link: "/frontend/tooling/cli" },
        { text: "IDE-s", link: "/frontend/tooling/ide" },
        { text: "Versioning", link: "/frontend/tooling/versioning" },
        { text: "Project managing", link: "/frontend/tooling/project-management" },
        { text: "Debuging tools", link: "/frontend/tooling/debugging" },
      ],
    },
    {
      text: "HTML",
      children: [
        { text: "History and standards", link: "/frontend/html/history" },
        { text: "Markup", link: "/frontend/html/syntax" },
        { text: "Elements", link: "/frontend/html/elements" },
        { text: "Document object model aka DOM", link: "/frontend/html/dom" },
      ],
    },
    {
      text: "CSS",
      children: [
        { text: "Syntax", link: "/frontend/css/syntax" },
        { text: "Layout", link: "/frontend/css/layout" },
        { text: "Responsiveness / mobile-first", link: "/frontend/css/responsive" },
        { text: "Units", link: "/frontend/css/units" },
        { text: "Designing in CSS", link: "/frontend/css/design" },
        { text: "Transitions and animations", link: "/frontend/css/transitions" },
        { text: "Frameworks", link: "/frontend/css/frameworks" },
      ],
    },
    {
      text: "Javascript",
      children: [
        { text: "Syntax", link: "/frontend/js/syntax" },
        { text: "DOM manipulation", link: "/frontend/js/dom" },
        { text: "Events", link: "/frontend/js/events" },
        { text: "Frameworks", link: "/frontend/js/frameworks" },
      ],
    },
	];
}

function getIntroSidebar() {
	return [
		{ text: 'Before we start', link: '/intro/' },
		{
			text: 'The Introduction',
			children: [
				{ text: 'What is Interactive Graphics?', link: '/intro/intro/what' },
				{ text: 'History of IG', link: '/intro/intro/history' }
			]
		},
		{
			text: 'The Process',
			children: [
				{ text: 'Project management', link: '/intro/project/project-management' },
				{ text: 'Setting up the project', link: '/intro/project/setup' },
				{ text: 'Design process', link: '/intro/project/design-process' },
			]
		},
		{
			text: 'The Ergonomics',
			children: [
				{ text: 'Health risks and how to avoid them', link: '/intro/ergonomics/health-risks' },
			]
		},
		{
			text: 'The Community',
			children: [
				{ text: 'Inspiration, know-how, communication', link: '/intro/community/inspiration' },
				{ text: 'Tools', link: '/intro/community/tools' },
				{ text: 'Resources', link: '/intro/community/resources' },
			]
		},
	]
}

function getDesignSidebar() {
  return [
    { text: "UI/UX design and prototyping", link: "/design/" },
    {
      text: "Usability and accessibility",
      children: [
        { text: "Usability", link: "/design/usability/usability" },
        { text: "Accessibility", link: "/design/usability/accessibility" },
        { text: "Color and contrast", link: "/design/usability/color" },
        { text: "Typography", link: "/design/usability/typography" },
        { text: "Semantics", link: "/design/usability/semantics" },
      ],
    },
    {
      text: "Composition",
      children: [
        { text: "Design patterns", link: "/design/composition/patterns" },
        { text: "Layout / grid", link: "/design/composition/layout" },
        { text: "Visual hierarchy", link: "/design/composition/hierarchy" },
      ],
    },
    {
      text: "Animation",
      children: [
        { text: "Types of web animation", link: "/design/animation/types" },
        { text: "Animation principles", link: "/design/animation/principles" },
        { text: "Main concepts", link: "/design/animation/concepts" },
      ],
    },
    {
      text: "Prototyping",
      children: [
        { text: "Analyze", link: "/design/prototype/analyze" },
        { text: "Pen and paper", link: "/design/prototype/paper" },
        { text: "Lo-Fi prototypes", link: "/design/prototype/lofi" },
        { text: "Software", link: "/design/prototype/software" },
        { text: "Interaction", link: "/design/prototype/interaction" },
        { text: "Hi-Fi prototypes", link: "/design/prototype/hifi" },
      ],
    },
  ];
}

function getGraphicsSidebar() {
  return [
    { text: "Creating graphic assets", link: "/graphics/" },
    {
      text: "Vector- and raster graphics",
      children: [
        { text: "File formats", link: "/graphics/vector-pixel/file-formats" },
        { text: "Using images in web", link: "/graphics/vector-pixel/using-images" },
      ],
    },
    {
      text: "Illustration",
      children: [
        { text: "Web illustration", link: "/graphics/illustration/web-illustration" },
        { text: "Pictography and icons", link: "/graphics/illustration/pictography" },
      ],
    },
    {
      text: "Infographics",
      children: [{ text: "Working with data", link: "/graphics/infographics/working-with-data" }],
    },
  ];
}

function get3dSidebar() {
  return [
    { text: "3D graphics", link: "/3d/" },
    {
      text: "Introduction to 3D-graphics",
      children: [
        { text: "Introduction", link: "/3d/intro/" },
        { text: "A brief history", link: "/3d/intro/history" },
        { text: "Software", link: "/3d/intro/software" },
      ],
    },
    {
      text: "Basics of Blender",
      children: [
        { text: "User interface", link: "/3d/blender/ui" },
        { text: "3D modelling", link: "/3d/blender/modelling" },
        { text: "materials", link: "/3d/blender/materials" },
        { text: "textures", link: "/3d/blender/textures" },
        { text: "lighting", link: "/3d/blender/lighting" },
        { text: "camera", link: "/3d/blender/camera" },
        { text: "rendering", link: "/3d/blender/rendering" },
        { text: "animation", link: "/3d/blender/animation"},
        { text: "simulations", link: "/3d/blender/simulations"},
      ],
    },
  ];
}
