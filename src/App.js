import React, { useState, useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion';
import {
  LucideArrowRight,
  LucideChevronDown,
  LucideCode,
  LucideCpu,
  LucideDatabase,
  LucideGitBranch,
  LucideGlobe,
  LucideLightbulb,
  LucideLineChart,
  LucideMenu,
  LucideMessageSquare,
  LucideServer,
  LucideShield,
  LucideUsers,
  LucideX,
  LucideZap,
  LucideGitPullRequest,
  LucideFileText,
  LucidePuzzle,
  LucideBrainCircuit,
  LucideAtom,
} from 'lucide-react';
import { Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';

// Register ChartJS components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const CognitiveRequirementFabric = () => {
  const [demoActive, setDemoActive] = useState(false);
  const [demoStep, setDemoStep] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);

  // Demo steps
  const demoSteps = [
    {
      title: 'Upload Requirements',
      content: 'Drag and drop your documents, sketches, or meeting transcripts',
    },
    {
      title: 'AI Processing',
      content: 'CRF analyzes content with multi-sensory input engine',
    },
    {
      title: 'Ambiguity Resolution',
      content: 'Quantum-inspired algorithms detect and resolve conflicts',
    },
    {
      title: 'AutoBA Suggestions',
      content: 'Virtual BA suggests improvements and trade-offs',
    },
    {
      title: 'Compliance Check',
      content: 'Real-time regulatory scanning completes',
    },
    {
      title: 'Output Ready',
      content: 'Download tailored requirements package',
    },
  ];

  // Tech stack data
  const techStack = {
    frontend: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    backend: ['Node.js', 'Express', 'FastAPI'],
    ai: ['PyTorch', 'TensorFlow', 'HuggingFace', 'Qiskit (Quantum)'],
    database: ['MongoDB', 'Neo4j', 'PostgreSQL'],
    devops: ['Docker', 'Kubernetes', 'AWS', 'CI/CD Pipelines'],
  };

  // Charts data
  const successRateData = {
    labels: ['Traditional', 'LLM-Based', 'CRF (Ours)'],
    datasets: [
      {
        label: 'Requirement Accuracy',
        data: [62, 78, 95],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(75, 192, 192, 0.7)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const timeSavingsData = {
    labels: ['Collection', 'Refinement', 'Validation', 'Documentation'],
    datasets: [
      {
        label: 'Hours Saved per Project',
        data: [12, 18, 8, 10],
        backgroundColor: 'rgba(153, 102, 255, 0.7)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Process flow nodes and edges
  const nodes = [
    {
      id: '1',
      position: { x: 0, y: 0 },
      data: { label: 'Input Sources' },
      type: 'input',
    },
    {
      id: '2',
      position: { x: 250, y: 0 },
      data: { label: 'Multi-Sensory Engine' },
    },
    {
      id: '3',
      position: { x: 500, y: -100 },
      data: { label: 'Quantum Resolver' },
    },
    { id: '4', position: { x: 500, y: 100 }, data: { label: 'AutoBA Agent' } },
    { id: '5', position: { x: 750, y: 0 }, data: { label: 'Knowledge Mesh' } },
    {
      id: '6',
      position: { x: 1000, y: 0 },
      data: { label: 'Output Generation' },
      type: 'output',
    },
  ];

  const edges = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e2-3', source: '2', target: '3' },
    { id: 'e2-4', source: '2', target: '4' },
    { id: 'e3-5', source: '3', target: '5' },
    { id: 'e4-5', source: '4', target: '5' },
    { id: 'e5-6', source: '5', target: '6' },
  ];

  // Use case diagram data
  const useCases = [
    {
      id: 1,
      title: 'Requirement Extraction',
      icon: <LucideFileText size={24} />,
      description:
        'Extract requirements from multiple input sources including documents, sketches, and voice recordings',
    },
    {
      id: 2,
      title: 'Ambiguity Resolution',
      icon: <LucidePuzzle size={24} />,
      description:
        'Detect and resolve conflicting or vague requirements using quantum-inspired algorithms',
    },
    {
      id: 3,
      title: 'Compliance Checking',
      icon: <LucideShield size={24} />,
      description:
        'Automatically flag requirements that violate regulatory standards',
    },
    {
      id: 4,
      title: 'Trade-off Analysis',
      icon: <LucideGitPullRequest size={24} />,
      description: 'Suggest optimal trade-offs between competing requirements',
    },
    {
      id: 5,
      title: 'Document Generation',
      icon: <LucideCode size={24} />,
      description:
        'Produce tailored outputs for different stakeholders (developers, executives, auditors)',
    },
  ];

  // Database implementation details
  const databaseImplementation = {
    schema: {
      requirements: {
        fields: [
          'id',
          'text',
          'confidence_score',
          'dna_fingerprint',
          'source',
          'created_at',
          'updated_at',
        ],
        description:
          'Core requirements table storing all extracted requirements with their metadata',
      },
      knowledge_mesh: {
        fields: ['id', 'concept', 'relationships', 'last_updated', 'source'],
        description:
          'Graph-based knowledge representation that evolves over time',
      },
      compliance_rules: {
        fields: [
          'id',
          'regulation_id',
          'description',
          'jurisdiction',
          'last_updated',
        ],
        description:
          'Regulatory rules and standards for real-time compliance checking',
      },
      projects: {
        fields: ['id', 'name', 'description', 'team_id', 'created_at'],
        description: 'Project management and organization',
      },
    },
    technologies: [
      {
        name: 'MongoDB',
        use: 'Primary document store for requirements and project data',
        features: [
          'Flexible schema',
          'Horizontal scaling',
          'Aggregation pipeline',
        ],
      },
      {
        name: 'Neo4j',
        use: 'Knowledge graph implementation for the self-learning mesh',
        features: [
          'Cypher query language',
          'Graph algorithms',
          'ACID compliance',
        ],
      },
      {
        name: 'PostgreSQL',
        use: 'Structured data storage for compliance rules and user management',
        features: ['SQL compliance', 'JSON support', 'Relational integrity'],
      },
    ],
  };

  // Start demo sequence
  const startDemo = () => {
    setDemoActive(true);
    setDemoStep(0);
    const timer = setInterval(() => {
      setDemoStep((prev) => {
        if (prev >= demoSteps.length - 1) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);
  };

  // Styles object
  const styles = {
    app: {
      position: 'relative',
      backgroundColor: '#111827',
      color: 'white',
      height: 'auto',
      overflowX: 'hidden',
      fontFamily: 'sans-serif',
    },
    animatedBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background:
        'linear-gradient(to bottom, rgba(76, 29, 149, 0.2), rgba(30, 58, 138, 0.3))',
      zIndex: 0,
    },
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backgroundColor: 'rgba(17, 24, 39, 0.8)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(31, 41, 55, 1)',
      padding: '16px 24px',
    },
    headerContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 24px',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    logoText: {
      fontSize: '20px',
      fontWeight: 'bold',
      background:
        'linear-gradient(to right, rgba(192, 132, 252, 1), rgba(96, 165, 250, 1))',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    badge: {
      fontSize: '14px',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      color: 'rgba(147, 197, 253, 1)',
      padding: '4px 8px',
      borderRadius: '9999px',
    },
    nav: {
      display: 'flex',
      gap: '32px',
    },
    navButton: {
      textTransform: 'capitalize',
      color: '#D1D5DB',
      fontWeight: 500,
      transition: 'all 0.2s',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
    },
    activeNavButton: {
      color: 'rgba(216, 180, 254, 1)',
      fontWeight: 600,
    },
    demoButton: {
      background:
        'linear-gradient(to right, rgba(168, 85, 247, 1), rgba(59, 130, 246, 1))',
      padding: '8px 16px',
      borderRadius: '9999px',
      fontSize: '14px',
      fontWeight: 500,
      display: 'flex',
      alignItems: 'center',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
    },
    heroSection: {
      position: 'relative',
      paddingTop: '128px',
      paddingBottom: '80px',
      paddingLeft: '24px',
      paddingRight: '24px',
    },
    heroContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      maxWidth: '896px',
      margin: '0 auto',
    },
    heroBadge: {
      display: 'inline-block',
      marginBottom: '24px',
      padding: '4px 8px',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      borderRadius: '9999px',
      color: 'rgba(147, 197, 253, 1)',
      fontSize: '14px',
      fontWeight: 500,
    },
    heroTitle: {
      fontSize: '48px',
      fontWeight: 'bold',
      marginBottom: '24px',
      background:
        'linear-gradient(to right, rgba(216, 180, 254, 1), rgba(147, 197, 253, 1), rgba(216, 180, 254, 1))',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      lineHeight: 1.2,
    },
    heroSubtitle: {
      fontSize: '20px',
      color: '#D1D5DB',
      marginBottom: '40px',
      maxWidth: '768px',
      marginLeft: 'auto',
      marginRight: 'auto',
      lineHeight: 1.5,
    },
    buttonGroup: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '40px',
    },
    primaryButton: {
      background:
        'linear-gradient(to right, rgba(168, 85, 247, 1), rgba(59, 130, 246, 1))',
      padding: '16px 32px',
      borderRadius: '9999px',
      fontWeight: 500,
      display: 'flex',
      alignItems: 'center',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      fontSize: '16px',
    },
    secondaryButton: {
      border: '1px solid rgba(55, 65, 81, 1)',
      backgroundColor: 'rgba(31, 41, 55, 0.5)',
      padding: '16px 32px',
      borderRadius: '9999px',
      fontWeight: 500,
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      cursor: 'pointer',
      fontSize: '16px',
    },
    dashboardPreview: {
      marginTop: '80px',
      width: '100%',
      maxWidth: '896px',
    },
    dashboardContainer: {
      position: 'relative',
      backgroundColor: 'rgba(31, 41, 55, 0.5)',
      border: '1px solid rgba(55, 65, 81, 1)',
      borderRadius: '16px',
      overflow: 'hidden',
      padding: '4px',
    },
    dashboardGradient: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background:
        'linear-gradient(to right, rgba(168, 85, 247, 0.1), rgba(59, 130, 246, 0.1))',
      borderRadius: '16px',
    },
    dashboardContent: {
      position: 'relative',
      backgroundColor: '#111827',
      borderRadius: '12px',
      padding: '24px',
    },
    dashboardHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '24px',
    },
    windowControls: {
      display: 'flex',
      gap: '8px',
      marginRight: '16px',
    },
    windowControl: {
      width: '12px',
      height: '12px',
      borderRadius: '9999px',
    },
    dashboardTitle: {
      fontSize: '14px',
      color: '#9CA3AF',
    },
    dashboardGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: '24px',
    },
    dashboardCard: {
      backgroundColor: 'rgba(31, 41, 55, 0.5)',
      padding: '16px',
      borderRadius: '8px',
      border: '1px solid rgba(55, 65, 81, 1)',
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '12px',
    },
    cardIcon: {
      padding: '8px',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      borderRadius: '8px',
      marginRight: '12px',
    },
    cardTitle: {
      fontWeight: 500,
    },
    cardValue: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: 'rgba(96, 165, 250, 1)',
      marginBottom: '8px',
    },
    cardDescription: {
      fontSize: '14px',
      color: '#9CA3AF',
    },
    section: {
      padding: '80px 24px',
      maxWidth: '1280px',
      margin: '0 auto',
    },
    sectionTitle: {
      fontSize: '48px',
      fontWeight: 'bold',
      marginBottom: '24px',
      textAlign: 'center',
    },
    sectionSubtitle: {
      fontSize: '20px',
      color: '#D1D5DB',
      marginBottom: '64px',
      textAlign: 'center',
      maxWidth: '768px',
      marginLeft: 'auto',
      marginRight: 'auto',
      lineHeight: 1.5,
    },
    featureGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: '32px',
      marginBottom: '80px',
    },
    featureCard: {
      backgroundColor: 'rgba(31, 41, 55, 0.5)',
      border: '1px solid rgba(55, 65, 81, 1)',
      borderRadius: '12px',
      padding: '32px',
    },
    featureIcon: {
      marginBottom: '24px',
    },
    featureTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '12px',
    },
    featureDescription: {
      color: '#D1D5DB',
      lineHeight: 1.5,
    },
    problemGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: '32px',
      maxWidth: '896px',
      margin: '0 auto',
    },
    problemCard: {
      backgroundColor: 'rgba(31, 41, 55, 0.5)',
      border: '1px solid rgba(55, 65, 81, 1)',
      borderRadius: '12px',
      padding: '24px',
    },
    problemHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '16px',
    },
    problemIconContainer: {
      padding: '12px',
      backgroundColor: 'rgba(31, 41, 55, 0.5)',
      borderRadius: '8px',
      marginRight: '16px',
    },
    problemTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '8px',
    },
    problemStat: {
      fontSize: '32px',
      fontWeight: 'bold',
      marginRight: '12px',
    },
    problemStatContainer: {
      marginTop: '24px',
      paddingTop: '16px',
      borderTop: '1px solid rgba(55, 65, 81, 1)',
      display: 'flex',
      alignItems: 'center',
    },
    comparisonContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: '48px',
      marginBottom: '80px',
    },
    comparisonBox: {
      backgroundColor: 'rgba(31, 41, 55, 0.5)',
      borderRadius: '12px',
      padding: '24px',
      border: '1px solid rgba(239, 68, 68, 0.3)',
    },
    comparisonHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '16px',
    },
    comparisonIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '9999px',
      backgroundColor: 'rgba(239, 68, 68, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '16px',
    },
    comparisonContent: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
    comparisonItem: {
      padding: '16px',
      backgroundColor: 'rgba(31, 41, 55, 0.3)',
      borderRadius: '8px',
      borderLeft: '4px solid rgba(239, 68, 68, 1)',
    },
    comparisonItemText: {
      color: '#D1D5DB',
      fontStyle: 'italic',
    },
    comparisonWarning: {
      color: 'rgba(239, 68, 68, 1)',
      fontSize: '14px',
      marginTop: '8px',
    },
    comparisonSuccessBox: {
      border: '1px solid rgba(16, 185, 129, 0.3)',
    },
    comparisonSuccessIcon: {
      backgroundColor: 'rgba(16, 185, 129, 0.2)',
    },
    comparisonSuccessItem: {
      borderLeft: '4px solid rgba(16, 185, 129, 1)',
    },
    comparisonSuccessText: {
      color: 'rgba(16, 185, 129, 1)',
    },
    superpowersGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: '32px',
    },
    superpowerCard: {
      backgroundColor: 'rgba(31, 41, 55, 0.5)',
      border: '1px solid rgba(55, 65, 81, 1)',
      borderRadius: '12px',
      padding: '24px',
    },
    superpowerHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '24px',
    },
    superpowerIconContainer: {
      padding: '12px',
      backgroundColor: 'rgba(31, 41, 55, 0.5)',
      borderRadius: '8px',
      marginRight: '16px',
    },
    superpowerTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
    },
    superpowerDescription: {
      color: '#9CA3AF',
      marginBottom: '16px',
    },
    featureList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    featureListItem: {
      display: 'flex',
      alignItems: 'center',
    },
    featureDot: {
      width: '8px',
      height: '8px',
      borderRadius: '9999px',
      backgroundColor: 'rgba(59, 130, 246, 1)',
      marginRight: '12px',
    },
    featureText: {
      color: '#D1D5DB',
    },
    techStackContainer: {
      backgroundColor: 'rgba(31, 41, 55, 0.5)',
      border: '1px solid rgba(55, 65, 81, 1)',
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '80px',
    },
    techStackGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: '24px',
    },
    techCategory: {
      backgroundColor: 'rgba(31, 41, 55, 0.3)',
      borderRadius: '8px',
      padding: '16px',
    },
    techCategoryHeader: {
      fontWeight: 'bold',
      marginBottom: '16px',
      display: 'flex',
      alignItems: 'center',
    },
    techList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
    techListItem: {
      display: 'flex',
      alignItems: 'center',
    },
    techDot: {
      width: '8px',
      height: '8px',
      borderRadius: '9999px',
      backgroundColor: 'rgba(59, 130, 246, 1)',
      marginRight: '12px',
    },
    databaseContainer: {
      backgroundColor: 'rgba(31, 41, 55, 0.5)',
      border: '1px solid rgba(55, 65, 81, 1)',
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '80px',
    },
    databaseGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: '32px',
    },
    schemaContainer: {
      backgroundColor: 'rgba(31, 41, 55, 0.3)',
      borderRadius: '8px',
      padding: '16px',
    },
    schemaTitle: {
      fontWeight: 'bold',
      color: 'rgba(96, 165, 250, 1)',
      marginBottom: '8px',
    },
    schemaDescription: {
      fontSize: '14px',
      color: '#9CA3AF',
      marginBottom: '8px',
    },
    schemaFields: {
      fontSize: '12px',
      backgroundColor: 'rgba(31, 41, 55, 0.5)',
      padding: '8px',
      borderRadius: '4px',
      fontFamily: 'monospace',
      marginTop: '8px',
    },
    techItem: {
      backgroundColor: 'rgba(31, 41, 55, 0.3)',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '16px',
    },
    techName: {
      fontWeight: 'bold',
      color: 'rgba(168, 85, 247, 1)',
      marginBottom: '8px',
    },
    techUse: {
      fontSize: '14px',
      color: '#9CA3AF',
      marginBottom: '12px',
    },
    techFeatures: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
    },
    techFeature: {
      fontSize: '12px',
      backgroundColor: 'rgba(31, 41, 55, 0.5)',
      padding: '4px 8px',
      borderRadius: '4px',
    },
    useCaseGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: '24px',
    },
    useCaseCard: {
      backgroundColor: 'rgba(31, 41, 55, 0.5)',
      border: '1px solid rgba(55, 65, 81, 1)',
      borderRadius: '12px',
      padding: '24px',
    },
    useCaseHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '16px',
    },
    useCaseIconContainer: {
      padding: '12px',
      backgroundColor: 'rgba(31, 41, 55, 0.5)',
      borderRadius: '8px',
      marginRight: '16px',
    },
    useCaseTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
    },
    useCaseDescription: {
      color: '#D1D5DB',
    },
    demoContainer: {
      backgroundColor: 'rgba(31, 41, 55, 0.5)',
      border: '1px solid rgba(55, 65, 81, 1)',
      borderRadius: '12px',
      overflow: 'hidden',
      maxWidth: '896px',
      margin: '0 auto',
    },
    demoHeader: {
      padding: '24px',
      borderBottom: '1px solid rgba(55, 65, 81, 1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    demoControls: {
      display: 'flex',
      alignItems: 'center',
    },
    demoTitle: {
      color: '#9CA3AF',
      fontSize: '14px',
    },
    demoContent: {
      padding: '32px',
      minHeight: '384px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    demoStepContainer: {
      width: '100%',
    },
    demoStepHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '24px',
    },
    demoStepNumber: {
      width: '40px',
      height: '40px',
      borderRadius: '9999px',
      backgroundColor: 'rgba(168, 85, 247, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '16px',
    },
    demoStepTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
    },
    demoStepContent: {
      backgroundColor: 'rgba(31, 41, 55, 0.3)',
      borderRadius: '8px',
      padding: '24px',
      border: '1px solid rgba(55, 65, 81, 1)',
      marginBottom: '24px',
    },
    demoProgress: {
      display: 'flex',
      gap: '8px',
    },
    demoProgressDot: {
      width: '12px',
      height: '12px',
      borderRadius: '9999px',
      cursor: 'pointer',
    },
    analyticsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: '48px',
      maxWidth: '1280px',
      margin: '0 auto',
    },
    chartContainer: {
      backgroundColor: 'rgba(31, 41, 55, 0.5)',
      border: '1px solid rgba(55, 65, 81, 1)',
      borderRadius: '12px',
      padding: '24px',
    },
    chartTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '24px',
    },
    chart: {
      height: '256px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '16px',
      textAlign: 'center',
      marginTop: '24px',
    },
    statValue: {
      fontSize: '32px',
      fontWeight: 'bold',
    },
    statLabel: {
      fontSize: '14px',
      color: '#9CA3AF',
    },
    savingsContainer: {
      marginTop: '24px',
    },
    savingsText: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '8px',
      color: '#9CA3AF',
    },
    savingsValue: {
      fontWeight: 'bold',
      color: 'rgba(168, 85, 247, 1)',
    },
    progressBar: {
      width: '100%',
      backgroundColor: 'rgba(55, 65, 81, 1)',
      borderRadius: '9999px',
      height: '10px',
    },
    progressFill: {
      height: '10px',
      borderRadius: '9999px',
      background:
        'linear-gradient(to right, rgba(168, 85, 247, 1), rgba(59, 130, 246, 1))',
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: '32px',
      maxWidth: '1280px',
      margin: '0 auto',
    },
    teamCard: {
      backgroundColor: 'rgba(31, 41, 55, 0.5)',
      border: '1px solid rgba(55, 65, 81, 1)',
      borderRadius: '12px',
      padding: '24px',
      textAlign: 'center',
    },
    teamAvatar: {
      width: '96px',
      height: '96px',
      borderRadius: '9999px',
      background:
        'linear-gradient(to right, rgba(168, 85, 247, 1), rgba(59, 130, 246, 1))',
      margin: '0 auto 16px auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '24px',
      fontWeight: 'bold',
    },
    teamName: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '4px',
    },
    teamRole: {
      color: 'rgba(96, 165, 250, 1)',
      marginBottom: '12px',
    },
    teamExpertise: {
      color: '#9CA3AF',
      fontSize: '14px',
      marginBottom: '16px',
    },
    teamFunFact: {
      fontSize: '12px',
      backgroundColor: 'rgba(31, 41, 55, 0.5)',
      padding: '12px',
      borderRadius: '8px',
    },
    ctaSection: {
      padding: '128px 24px',
      background:
        'linear-gradient(to bottom right, rgba(76, 29, 149, 0.4), rgba(30, 58, 138, 0.4))',
    },
    ctaContainer: {
      maxWidth: '896px',
      margin: '0 auto',
      textAlign: 'center',
    },
    ctaTitle: {
      fontSize: '48px',
      fontWeight: 'bold',
      marginBottom: '24px',
    },
    ctaText: {
      fontSize: '20px',
      color: '#D1D5DB',
      marginBottom: '40px',
      lineHeight: 1.5,
    },
    ctaButtonGroup: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px',
    },
    footer: {
      position: 'relative',
      backgroundColor: '#111827',
      borderTop: '1px solid rgba(55, 65, 81, 1)',
      padding: '48px 24px',
      marginTop: 'auto',
    },
    footerContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1280px',
      margin: '0 auto',
    },
    footerLogo: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '24px',
    },
    footerText: {
      color: '#9CA3AF',
      textAlign: 'center',
      marginBottom: '24px',
    },
    footerCopyright: {
      marginTop: '32px',
      paddingTop: '32px',
      borderTop: '1px solid rgba(55, 65, 81, 1)',
      textAlign: 'center',
      color: '#6B7280',
      fontSize: '14px',
    },
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
    },
    modalContent: {
      backgroundColor: 'rgba(31, 41, 55, 1)',
      borderRadius: '12px',
      maxWidth: '640px',
      width: '100%',
      maxHeight: '90vh',
      overflowY: 'auto',
    },
    modalHeader: {
      padding: '24px',
      borderBottom: '1px solid rgba(55, 65, 81, 1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    modalTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
    },
    modalCloseButton: {
      color: '#9CA3AF',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
    },
    modalBody: {
      padding: '24px',
    },
    fileDrop: {
      backgroundColor: 'rgba(31, 41, 55, 0.3)',
      border: '2px dashed rgba(55, 65, 81, 1)',
      borderRadius: '8px',
      padding: '48px',
      textAlign: 'center',
      marginBottom: '24px',
    },
    fileDropText: {
      color: '#9CA3AF',
      marginBottom: '16px',
    },
    fileDropButton: {
      backgroundColor: 'rgba(55, 65, 81, 0.5)',
      border: '1px solid rgba(55, 65, 81, 1)',
      padding: '8px 16px',
      borderRadius: '8px',
      fontSize: '14px',
      cursor: 'pointer',
    },
    consoleOutput: {
      backgroundColor: '#111827',
      borderRadius: '8px',
      padding: '16px',
      fontFamily: 'monospace',
      fontSize: '14px',
      overflowX: 'auto',
      marginBottom: '24px',
    },
    consoleLine: {
      marginBottom: '4px',
    },
    resolutionContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      marginBottom: '24px',
    },
    resolutionItem: {
      backgroundColor: 'rgba(31, 41, 55, 0.3)',
      borderRadius: '8px',
      padding: '16px',
      borderLeft: '4px solid rgba(239, 68, 68, 1)',
    },
    resolutionHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '12px',
      color: '#f59e0b',
    },
    resolutionContent: {
      color: '#D1D5DB',
    },
    resolutionConfidence: {
      marginTop: '12px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    confidenceBadge: {
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '12px',
    },
    suggestionContainer: {
      backgroundColor: 'rgba(31, 41, 55, 0.3)',
      borderRadius: '8px',
      padding: '16px',
      border: '1px solid rgba(55, 65, 81, 1)',
      marginBottom: '24px',
    },
    suggestionHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '8px',
    },
    suggestionIcon: {
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      borderRadius: '9999px',
      padding: '8px',
      marginRight: '12px',
    },
    suggestionButtons: {
      display: 'flex',
      gap: '12px',
      marginTop: '16px',
    },
    suggestionButton: {
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      color: 'rgba(96, 165, 250, 1)',
      padding: '8px 12px',
      borderRadius: '8px',
      fontSize: '14px',
      cursor: 'pointer',
    },
    complianceContainer: {
      backgroundColor: 'rgba(31, 41, 55, 0.3)',
      borderRadius: '8px',
      padding: '16px',
      borderLeft: '4px solid rgba(16, 185, 129, 1)',
      marginBottom: '24px',
    },
    complianceHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '8px',
      color: 'rgba(16, 185, 129, 1)',
    },
    complianceResults: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      marginTop: '12px',
    },
    complianceResult: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '14px',
    },
    passedBadge: {
      backgroundColor: 'rgba(16, 185, 129, 0.2)',
      color: 'rgba(16, 185, 129, 1)',
      padding: '4px 8px',
      borderRadius: '4px',
      marginRight: '12px',
    },
    warningBadge: {
      backgroundColor: 'rgba(234, 179, 8, 0.2)',
      color: 'rgba(234, 179, 8, 1)',
      padding: '4px 8px',
      borderRadius: '4px',
      marginRight: '12px',
    },
    outputContainer: {
      backgroundColor: 'rgba(31, 41, 55, 0.3)',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '24px',
    },
    outputHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '16px',
    },
    outputIcon: {
      backgroundColor: 'rgba(16, 185, 129, 0.2)',
      borderRadius: '9999px',
      padding: '8px',
      marginRight: '12px',
    },
    outputGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: '16px',
    },
    outputItem: {
      backgroundColor: 'rgba(55, 65, 81, 0.5)',
      borderRadius: '8px',
      padding: '12px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      cursor: 'pointer',
    },
    outputItemIcon: {
      marginBottom: '8px',
    },
    outputItemText: {
      fontSize: '14px',
    },
    demoFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  };

  return (
    <div style={styles.app} ref={ref}>
      {/* Animated background */}
      <motion.div
        style={{
          ...styles.animatedBackground,
          y: backgroundY,
        }}
      />

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={styles.logoContainer}
          >
            <LucideBrainCircuit color="#a78bfa" size={28} />
            <span style={styles.logoText}>CRF</span>
            <span style={styles.badge}>GenHeads</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav style={styles.nav}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={styles.demoButton}
              onClick={startDemo}
            >
              Live Demo{' '}
              <LucideArrowRight style={{ marginLeft: '8px' }} size={16} />
            </motion.button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContainer}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '896px' }}
          >
            <motion.div whileHover={{ scale: 1.02 }} style={styles.heroBadge}>
              Barclays Hack-O-Hire 2025
            </motion.div>
            <motion.h1 style={styles.heroTitle}>
              Cognitive Requirement Fabric
            </motion.h1>
            <motion.p
              style={styles.heroSubtitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              The AI that thinks like a Business Analyst. Zero ambiguity, full
              compliance, autonomous refinement.
            </motion.p>
            <motion.div
              style={styles.buttonGroup}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={styles.primaryButton}
              >
                Explore CRF <LucideArrowRight style={{ marginLeft: '8px' }} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={styles.secondaryButton}
                onClick={startDemo}
              >
                Live Demo{' '}
                <LucideZap
                  style={{ marginLeft: '8px', color: '#facc15' }}
                  size={16}
                />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            style={styles.dashboardPreview}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <div style={styles.dashboardContainer}>
              <div style={styles.dashboardGradient}></div>
              <div style={styles.dashboardContent}>
                <div style={styles.dashboardHeader}>
                  <div style={styles.windowControls}>
                    <div
                      style={{
                        ...styles.windowControl,
                        backgroundColor: '#ef4444',
                      }}
                    ></div>
                    <div
                      style={{
                        ...styles.windowControl,
                        backgroundColor: '#f59e0b',
                      }}
                    ></div>
                    <div
                      style={{
                        ...styles.windowControl,
                        backgroundColor: '#10b981',
                      }}
                    ></div>
                  </div>
                  <div style={styles.dashboardTitle}>
                    CRF Future Dashboard (Figures Given Are Not Real, Only for
                    Visual Purposes)
                  </div>
                </div>
                <div style={styles.dashboardGrid}>
                  <div style={styles.dashboardCard}>
                    <div style={styles.cardHeader}>
                      <div style={styles.cardIcon}>
                        <LucideFileText color="#3b82f6" size={20} />
                      </div>
                      <h3 style={styles.cardTitle}>Requirements Processed</h3>
                    </div>
                    <div style={styles.cardValue}>1,248</div>
                    <div style={styles.cardDescription}>
                      +24% from last week
                    </div>
                  </div>
                  <div style={styles.dashboardCard}>
                    <div style={styles.cardHeader}>
                      <div
                        style={{
                          ...styles.cardIcon,
                          backgroundColor: 'rgba(168, 85, 247, 0.2)',
                        }}
                      >
                        <LucidePuzzle color="#a855f7" size={20} />
                      </div>
                      <h3 style={styles.cardTitle}>Ambiguities Resolved</h3>
                    </div>
                    <div style={{ ...styles.cardValue, color: '#a855f7' }}>
                      89%
                    </div>
                    <div style={styles.cardDescription}>Industry avg: 62%</div>
                  </div>
                  <div style={styles.dashboardCard}>
                    <div style={styles.cardHeader}>
                      <div
                        style={{
                          ...styles.cardIcon,
                          backgroundColor: 'rgba(16, 185, 129, 0.2)',
                        }}
                      >
                        <LucideShield color="#10b981" size={20} />
                      </div>
                      <h3 style={styles.cardTitle}>Compliance Pass</h3>
                    </div>
                    <div style={{ ...styles.cardValue, color: '#10b981' }}>
                      100%
                    </div>
                    <div style={styles.cardDescription}>0 regulatory risks</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" style={styles.section}>
        <motion.div
          style={{ textAlign: 'center', marginBottom: '64px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 style={styles.sectionTitle}>
            Revolutionizing Requirements Engineering
          </h2>
          <p style={styles.sectionSubtitle}>
            CRF combines quantum-inspired AI with autonomous business analysis
            to transform how organizations capture, refine, and manage
            requirements.
          </p>
        </motion.div>

        <div style={styles.featureGrid}>
          {[
            {
              icon: <LucideAtom size={32} color="#a855f7" />,
              title: 'Quantum-Inspired AI',
              description:
                'Uses QNN-inspired algorithms to handle vague, conflicting, or incomplete requirements better than standard LLMs.',
            },
            {
              icon: <LucideBrainCircuit size={32} color="#3b82f6" />,
              title: 'Self-Learning Knowledge Mesh',
              description:
                'Dynamically evolves based on new regulations, industry trends, and user feedback.',
            },
            {
              icon: <LucideGitBranch size={32} color="#10b981" />,
              title: 'Requirement DNA Fingerprinting',
              description:
                'Each requirement is tagged with a unique signature for traceability and impact analysis.',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              style={styles.featureCard}
            >
              <div style={styles.featureIcon}>{feature.icon}</div>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Problem Section */}
      <section
        id="problem"
        style={{
          ...styles.section,
          backgroundColor: 'rgba(31, 41, 55, 0.3)',
        }}
      >
        <motion.div
          style={{ textAlign: 'center', marginBottom: '64px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 style={styles.sectionTitle}>The Pain Points We Solve</h2>
          <p style={styles.sectionSubtitle}>
            68% of project failures trace back to poor requirements. CRF fixes
            this at the root.
          </p>
        </motion.div>

        <div style={styles.problemGrid}>
          {[
            {
              title: 'Ambiguity & Conflict',
              description:
                'Vague, conflicting statements lead to misinterpretation and rework.',
              stat: '42%',
              statText: 'of requirements have hidden conflicts',
              icon: <LucidePuzzle size={24} color="#ef4444" />,
            },
            {
              title: 'Manual Effort',
              description:
                'Hours wasted in meetings and documentation instead of real analysis.',
              stat: '60+',
              statText: 'hours spent per project on requirement refinement',
              icon: <LucideUsers size={24} color="#f59e0b" />,
            },
            {
              title: 'Compliance Risks',
              description:
                'Missed regulatory checks result in costly violations.',
              stat: '$3.2M',
              statText: 'average GDPR violation fine in 2024',
              icon: <LucideShield size={24} color="#a855f7" />,
            },
            {
              title: 'Traceability Gaps',
              description: 'Changes become untrackable across complex systems.',
              stat: '35%',
              statText: 'of requirements lack proper traceability',
              icon: <LucideGitBranch size={24} color="#3b82f6" />,
            },
          ].map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              style={styles.problemCard}
            >
              <div style={styles.problemHeader}>
                <div style={styles.problemIconContainer}>{problem.icon}</div>
                <div>
                  <h3 style={styles.problemTitle}>{problem.title}</h3>
                  <p style={styles.featureDescription}>{problem.description}</p>
                </div>
              </div>
              <div style={styles.problemStatContainer}>
                <span style={styles.problemStat}>{problem.stat}</span>
                <span style={styles.cardDescription}>{problem.statText}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" style={styles.section}>
        <motion.div
          style={{ textAlign: 'center', marginBottom: '64px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 style={styles.sectionTitle}>The CRF Solution</h2>
          <p style={styles.sectionSubtitle}>
            From chaos to clarity in seconds with our Cognitive Requirement
            Fabric.
          </p>
        </motion.div>

        <div style={styles.comparisonContainer}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '24px',
              }}
            >
              Before CRF
            </h3>
            <div style={styles.comparisonBox}>
              <div style={styles.comparisonHeader}>
                <div style={styles.comparisonIcon}>
                  <LucideX color="#ef4444" size={20} />
                </div>
                <h4 style={{ fontWeight: 500 }}>Requirements Document</h4>
              </div>
              <div style={styles.comparisonContent}>
                <div style={styles.comparisonItem}>
                  <p style={styles.comparisonItemText}>
                    "The system should be fast and responsive (but must use
                    cheap hardware)"
                  </p>
                </div>
                <div style={styles.comparisonItem}>
                  <p style={styles.comparisonItemText}>
                    "All user data should be stored indefinitely for analytics"
                  </p>
                  <p style={styles.comparisonWarning}>
                    ⚠️ Conflicts with GDPR Article 17
                  </p>
                </div>
                <div style={styles.comparisonItem}>
                  <p style={styles.comparisonItemText}>
                    "UI should be intuitive"
                  </p>
                  <p style={styles.cardDescription}>No measurable criteria</p>
                </div>
              </div>
              <div
                style={{
                  marginTop: '24px',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(55, 65, 81, 1)',
                  textAlign: 'center',
                }}
              >
                <span style={{ color: '#ef4444', fontWeight: 500 }}>
                  REJECTED
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '24px',
              }}
            >
              With CRF
            </h3>
            <div
              style={{
                ...styles.comparisonBox,
                ...styles.comparisonSuccessBox,
              }}
            >
              <div style={styles.comparisonHeader}>
                <div
                  style={{
                    ...styles.comparisonIcon,
                    ...styles.comparisonSuccessIcon,
                  }}
                >
                  <LucideZap color="#10b981" size={20} />
                </div>
                <h4 style={{ fontWeight: 500 }}>Refined Requirements</h4>
              </div>
              <div style={styles.comparisonContent}>
                <div
                  style={{
                    ...styles.comparisonItem,
                    ...styles.comparisonSuccessItem,
                  }}
                >
                  <p style={styles.comparisonItemText}>
                    "System response time &lt; 2s on \$500 hardware (trade-off
                    accepted)"
                  </p>
                  <p style={styles.comparisonSuccessText}>
                    ✅ Conflict resolved with 92% confidence
                  </p>
                </div>
                <div
                  style={{
                    ...styles.comparisonItem,
                    ...styles.comparisonSuccessItem,
                  }}
                >
                  <p style={styles.comparisonItemText}>
                    "User data retention: 30 days (GDPR compliant) + anonymized
                    analytics option"
                  </p>
                  <p style={styles.comparisonSuccessText}>
                    ✅ Compliance check passed
                  </p>
                </div>
                <div
                  style={{
                    ...styles.comparisonItem,
                    ...styles.comparisonSuccessItem,
                  }}
                >
                  <p style={styles.comparisonItemText}>
                    "UI goal: 90% task completion rate in usability testing with
                    &lt; 2 support requests"
                  </p>
                  <p style={styles.comparisonSuccessText}>
                    ✅ Quantifiable metric added
                  </p>
                </div>
              </div>
              <div
                style={{
                  marginTop: '24px',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(55, 65, 81, 1)',
                  textAlign: 'center',
                }}
              >
                <span style={{ color: '#10b981', fontWeight: 500 }}>
                  APPROVED
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <div style={{ maxWidth: '896px', margin: '0 auto' }}>
          <motion.h3
            style={{ ...styles.sectionTitle, fontSize: '32px' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            CRF's 3 Superpowers
          </motion.h3>
          <div style={styles.superpowersGrid}>
            {[
              {
                icon: <LucideMessageSquare size={32} color="#a855f7" />,
                title: 'Hears',
                description:
                  'Multi-sensory input (text, sketches, voice, tone analysis)',
                features: [
                  'Document parsing',
                  'Sketch recognition',
                  'Voice transcription',
                  'Tone detection',
                ],
              },
              {
                icon: <LucideBrainCircuit size={32} color="#3b82f6" />,
                title: 'Thinks',
                description:
                  'Resolves ambiguity like a human using quantum-inspired AI',
                features: [
                  'Conflict detection',
                  'Trade-off analysis',
                  'Confidence scoring',
                  'Context linking',
                ],
              },
              {
                icon: <LucideCode size={32} color="#10b981" />,
                title: 'Speaks',
                description:
                  'Generates compliant, prioritized outputs for all stakeholders',
                features: [
                  'Jira integration',
                  'Audit reports',
                  'Exec summaries',
                  'Regulatory docs',
                ],
              },
            ].map((power, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                style={styles.superpowerCard}
              >
                <div style={styles.superpowerHeader}>
                  <div style={styles.superpowerIconContainer}>{power.icon}</div>
                  <div>
                    <h3 style={styles.superpowerTitle}>{power.title}</h3>
                    <p style={styles.superpowerDescription}>
                      {power.description}
                    </p>
                  </div>
                </div>
                <ul style={styles.featureList}>
                  {power.features.map((feature, i) => (
                    <li key={i} style={styles.featureListItem}>
                      <div style={styles.featureDot}></div>
                      <span style={styles.featureText}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section
        id="technology"
        style={{
          ...styles.section,
          backgroundColor: 'rgba(31, 41, 55, 0.3)',
        }}
      >
        <motion.div
          style={{ textAlign: 'center', marginBottom: '64px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 style={styles.sectionTitle}>Technology Deep Dive</h2>
          <p style={styles.sectionSubtitle}>
            Cutting-edge AI meets quantum-inspired algorithms in our Cognitive
            Requirement Fabric.
          </p>
        </motion.div>

        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* System Architecture */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ marginBottom: '80px' }}
          >
            <h3
              style={{
                ...styles.sectionTitle,
                fontSize: '32px',
                marginBottom: '32px',
              }}
            >
              System Architecture
            </h3>
            <div style={styles.techStackContainer}>
              <div
                style={{
                  backgroundColor: 'rgba(55, 65, 81, 0.3)',
                  borderRadius: '8px',
                  border: '2px dashed rgba(55, 65, 81, 1)',
                  padding: '48px',
                  textAlign: 'center',
                  marginBottom: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '300px',
                }}
              >
                <p
                  style={{
                    color: '#9CA3AF',
                    marginBottom: '16px',
                    fontSize: '18px',
                    fontWeight: 'bold',
                  }}
                >
                  System Architecture Diagram
                </p>
                <div
                  style={{
                    width: '100%',
                    height: '200px',
                    backgroundColor: 'rgba(31, 41, 55, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '4px',
                    marginBottom: '16px',
                  }}
                >
                  <p
                    style={{
                      color: '#6B7280',
                      fontSize: '18px',
                      fontWeight: 'bold',
                    }}
                  >
                    This diagram below shows the complete System Arhitecture and
                    flow of our proposed project
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: 'rgba(55, 65, 81, 0.3)',
                    borderRadius: '8px',
                    border: '2px dashed rgba(55, 65, 81, 1)',
                    padding: '16px',
                    textAlign: 'center',
                    marginBottom: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src="https://i.ibb.co/gMSWr8by/Architecture-Diagram.png"
                    alt="Architecture-Diagram"
                    border="0"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      borderRadius: '4px',
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(1, 1fr)',
                  gap: '24px',
                }}
              >
                {[
                  {
                    title: 'Input Layer',
                    description:
                      'Multi-sensory input processing for documents, sketches, and voice',
                    icon: <LucideFileText size={20} color="#3b82f6" />,
                  },
                  {
                    title: 'Processing Core',
                    description:
                      'Quantum-inspired AI with transformer models and knowledge mesh',
                    icon: <LucideCpu size={20} color="#a855f7" />,
                  },
                  {
                    title: 'Output Layer',
                    description:
                      'Tailored generation for different stakeholders and systems',
                    icon: <LucideCode size={20} color="#10b981" />,
                  },
                ].map((item, index) => (
                  <div key={index} style={styles.techCategory}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '12px',
                      }}
                    >
                      <div style={{ marginRight: '12px' }}>{item.icon}</div>
                      <h4 style={{ fontWeight: 500 }}>{item.title}</h4>
                    </div>
                    <p style={styles.cardDescription}>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Process Flow */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ marginBottom: '80px' }}
          >
            <h3
              style={{
                ...styles.sectionTitle,
                fontSize: '32px',
                marginBottom: '32px',
              }}
            >
              Process Flow
            </h3>
            <div style={{ ...styles.techStackContainer, height: '384px' }}>
              <ReactFlow
                nodes={nodes}
                edges={edges}
                fitView
                nodesDraggable={false}
              >
                <Background />
                <Controls />
                <MiniMap />
              </ReactFlow>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ marginBottom: '80px' }}
          >
            <h3
              style={{
                ...styles.sectionTitle,
                fontSize: '32px',
                marginBottom: '32px',
              }}
            >
              Technology Stack
            </h3>
            <div style={styles.techStackContainer}>
              <div style={styles.techStackGrid}>
                {Object.entries(techStack).map(([category, technologies]) => (
                  <div key={category} style={styles.techCategory}>
                    <h4 style={styles.techCategoryHeader}>
                      {category === 'ai' ? (
                        <LucideBrainCircuit
                          color="#a855f7"
                          size={18}
                          style={{ marginRight: '8px' }}
                        />
                      ) : category === 'database' ? (
                        <LucideDatabase
                          color="#3b82f6"
                          size={18}
                          style={{ marginRight: '8px' }}
                        />
                      ) : category === 'frontend' ? (
                        <LucideGlobe
                          color="#10b981"
                          size={18}
                          style={{ marginRight: '8px' }}
                        />
                      ) : category === 'backend' ? (
                        <LucideServer
                          color="#f59e0b"
                          size={18}
                          style={{ marginRight: '8px' }}
                        />
                      ) : (
                        <LucideGitBranch
                          color="#ef4444"
                          size={18}
                          style={{ marginRight: '8px' }}
                        />
                      )}
                      {category}
                    </h4>
                    <ul style={styles.techList}>
                      {technologies.map((tech, index) => (
                        <li key={index} style={styles.techListItem}>
                          <div style={styles.techDot}></div>
                          <span style={styles.featureText}>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Database Implementation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ marginBottom: '80px' }}
          >
            <h3
              style={{
                ...styles.sectionTitle,
                fontSize: '32px',
                marginBottom: '32px',
              }}
            >
              Database Implementation
            </h3>
            <div style={styles.databaseContainer}>
              <div style={styles.databaseGrid}>
                <div>
                  <h4
                    style={{
                      ...styles.techCategoryHeader,
                      fontSize: '18px',
                      marginBottom: '16px',
                    }}
                  >
                    <LucideDatabase
                      color="#3b82f6"
                      size={20}
                      style={{ marginRight: '8px' }}
                    />
                    Schema Design
                  </h4>
                  <div style={styles.schemaContainer}>
                    {Object.entries(databaseImplementation.schema).map(
                      ([table, details]) => (
                        <div key={table} style={{ marginBottom: '24px' }}>
                          <div style={styles.schemaTitle}>{table}</div>
                          <div style={styles.schemaDescription}>
                            {details.description}
                          </div>
                          <div style={styles.schemaFields}>
                            {details.fields.join(', ')}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div>
                  <h4
                    style={{
                      ...styles.techCategoryHeader,
                      fontSize: '18px',
                      marginBottom: '16px',
                    }}
                  >
                    <LucideServer
                      color="#a855f7"
                      size={20}
                      style={{ marginRight: '8px' }}
                    />
                    Technologies
                  </h4>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px',
                    }}
                  >
                    {databaseImplementation.technologies.map((tech, index) => (
                      <div key={index} style={styles.techItem}>
                        <div style={styles.techName}>{tech.name}</div>
                        <div style={styles.techUse}>{tech.use}</div>
                        <div style={styles.techFeatures}>
                          {tech.features.map((feature, i) => (
                            <span key={i} style={styles.techFeature}>
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Use Cases */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3
              style={{
                ...styles.sectionTitle,
                fontSize: '32px',
                marginBottom: '32px',
              }}
            >
              Use Cases
            </h3>
            <div style={styles.useCaseGrid}>
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  style={styles.useCaseCard}
                >
                  <div style={styles.useCaseHeader}>
                    <div style={styles.useCaseIconContainer}>
                      {useCase.icon}
                    </div>
                    <h4 style={styles.useCaseTitle}>{useCase.title}</h4>
                  </div>
                  <p style={styles.useCaseDescription}>{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" style={styles.section}>
        <div style={{ maxWidth: '896px', margin: '0 auto' }}>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '64px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 style={styles.sectionTitle}>Experience CRF in Action</h2>
            <p style={styles.sectionSubtitle}>
              See how CRF transforms chaotic requirements into structured,
              compliant specifications.
            </p>
          </motion.div>

          <div style={styles.demoContainer}>
            <div style={styles.demoHeader}>
              <div style={styles.demoControls}>
                <div
                  style={{
                    ...styles.windowControl,
                    backgroundColor: '#ef4444',
                    marginRight: '8px',
                  }}
                ></div>
                <div
                  style={{
                    ...styles.windowControl,
                    backgroundColor: '#f59e0b',
                    marginRight: '8px',
                  }}
                ></div>
                <div
                  style={{
                    ...styles.windowControl,
                    backgroundColor: '#10b981',
                  }}
                ></div>
              </div>
              <div style={styles.demoTitle}>CRF Interactive Demo</div>
            </div>

            <div style={styles.demoContent}>
              <AnimatePresence mode="wait">
                {!demoActive ? (
                  <motion.div
                    key="demo-start"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    style={{ textAlign: 'center' }}
                  >
                    <div
                      style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: 'rgba(59, 130, 246, 0.2)',
                        borderRadius: '9999px',
                        margin: '0 auto 24px auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <LucideZap color="#3b82f6" size={32} />
                    </div>
                    <h3
                      style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        marginBottom: '12px',
                      }}
                    >
                      Ready to Experience CRF?
                    </h3>
                    <p style={{ color: '#9CA3AF', marginBottom: '24px' }}>
                      Click "Live Demo" present on the nav bar to see how CRF
                      transforms requirements engineering
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key={`demo-step-${demoStep}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    style={styles.demoStepContainer}
                  >
                    <div style={styles.demoStepHeader}>
                      <div style={styles.demoStepNumber}>
                        <span style={{ color: '#a855f7', fontWeight: 'bold' }}>
                          {demoStep + 1}
                        </span>
                      </div>
                      <h3 style={styles.demoStepTitle}>
                        {demoSteps[demoStep].title}
                      </h3>
                    </div>
                    <div style={styles.demoStepContent}>
                      <p style={styles.featureDescription}>
                        {demoSteps[demoStep].content}
                      </p>
                    </div>
                    {demoStep === 0 && (
                      <div style={styles.fileDrop}>
                        <p style={styles.fileDropText}>
                          Drag and drop your files here
                        </p>
                        <button style={styles.fileDropButton}>
                          Browse Files
                        </button>
                      </div>
                    )}
                    {demoStep === 1 && (
                      <div style={styles.consoleOutput}>
                        <div style={styles.consoleLine}>
                          <span style={{ color: '#10b981' }}>
                            $ Analyzing document: requirements.docx
                          </span>
                        </div>
                        <div style={styles.consoleLine}>
                          <span style={{ color: '#10b981' }}>
                            $ Detected 12 requirements
                          </span>
                        </div>
                        <div style={styles.consoleLine}>
                          <span style={{ color: '#f59e0b' }}>
                            $ Found 3 potential ambiguities
                          </span>
                        </div>
                        <div style={styles.consoleLine}>
                          <span style={{ color: '#a855f7' }}>
                            $ Quantum resolver engaged
                          </span>
                        </div>
                        <div style={styles.consoleLine}>
                          <span style={{ color: '#3b82f6' }}>
                            $ Confidence scores calculated
                          </span>
                        </div>
                      </div>
                    )}
                    {demoStep === 2 && (
                      <div style={styles.resolutionContainer}>
                        <div style={styles.resolutionItem}>
                          <p style={styles.comparisonItemText}>
                            "The system should be fast and responsive (but must
                            use cheap hardware)"
                          </p>
                          <div style={styles.resolutionHeader}>
                            <LucideLightbulb
                              size={16}
                              style={{ marginRight: '8px' }}
                            />
                            <span>Potential Conflict Detected</span>
                          </div>
                          <div style={styles.resolutionContent}>
                            <p style={styles.featureDescription}>
                              "Fast" and "cheap hardware" may conflict.
                              Suggested resolution:
                            </p>
                            <p
                              style={{
                                color: '#D1D5DB',
                                marginTop: '8px',
                                fontWeight: 500,
                              }}
                            >
                              "System response time &lt; 2s on \$500 hardware
                              (trade-off accepted)"
                            </p>
                          </div>
                          <div style={styles.resolutionConfidence}>
                            <span style={styles.confidenceBadge}>
                              Confidence: 92%
                            </span>
                            <span style={styles.confidenceBadge}>
                              Quantum Resolver Applied
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                    {demoStep === 3 && (
                      <div style={styles.suggestionContainer}>
                        <div style={styles.suggestionHeader}>
                          <div style={styles.suggestionIcon}>
                            <LucideUsers color="#3b82f6" size={18} />
                          </div>
                          <div>
                            <div
                              style={{ fontWeight: 500, marginBottom: '8px' }}
                            >
                              AutoBA Suggestion
                            </div>
                            <p style={styles.featureDescription}>
                              "You said 'user-friendly'—do you mean &lt; 2
                              clicks or &lt; 5 sec load time?"
                            </p>
                          </div>
                        </div>
                        <div style={styles.suggestionButtons}>
                          <button style={styles.suggestionButton}>
                            &lt;; 2 clicks
                          </button>
                          <button style={styles.suggestionButton}>
                            &lt;; 5 sec load
                          </button>
                          <button
                            style={{
                              ...styles.suggestionButton,
                              backgroundColor: 'rgba(55, 65, 81, 0.5)',
                              color: '#D1D5DB',
                            }}
                          >
                            Something else
                          </button>
                        </div>
                      </div>
                    )}
                    {demoStep === 4 && (
                      <div style={styles.complianceContainer}>
                        <div style={styles.complianceHeader}>
                          <LucideShield
                            size={18}
                            style={{ marginRight: '8px' }}
                          />
                          <span style={{ fontWeight: 500 }}>
                            Compliance Check Complete
                          </span>
                        </div>
                        <p style={styles.featureDescription}>
                          Scanned against 12,843 regulatory rules from 17
                          jurisdictions
                        </p>
                        <div style={styles.complianceResults}>
                          <div style={styles.complianceResult}>
                            <span style={styles.passedBadge}>PASSED</span>
                            <span>GDPR, HIPAA, ISO 27001</span>
                          </div>
                          <div style={styles.complianceResult}>
                            <span style={styles.warningBadge}>WARNING</span>
                            <span>1 minor issue with California CCPA</span>
                          </div>
                        </div>
                      </div>
                    )}
                    {demoStep === 5 && (
                      <div style={styles.outputContainer}>
                        <div style={styles.outputHeader}>
                          <div style={styles.outputIcon}>
                            <LucideFileText color="#10b981" size={18} />
                          </div>
                          <div style={{ fontWeight: 500 }}>
                            Output Generated Successfully
                          </div>
                        </div>
                        <div style={styles.outputGrid}>
                          <div style={styles.outputItem}>
                            <div style={styles.outputItemIcon}>
                              <LucideCode color="#3b82f6" size={20} />
                            </div>
                            <span style={styles.outputItemText}>
                              Jira Integration
                            </span>
                          </div>
                          <div style={styles.outputItem}>
                            <div style={styles.outputItemIcon}>
                              <LucideFileText color="#a855f7" size={20} />
                            </div>
                            <span style={styles.outputItemText}>
                              Audit Report
                            </span>
                          </div>
                          <div style={styles.outputItem}>
                            <div style={styles.outputItemIcon}>
                              <LucideLineChart color="#10b981" size={20} />
                            </div>
                            <span style={styles.outputItemText}>
                              Executive Summary
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                    <div style={styles.demoFooter}>
                      <div style={styles.demoProgress}>
                        {demoSteps.map((_, i) => (
                          <button
                            key={i}
                            style={{
                              ...styles.demoProgressDot,
                              backgroundColor:
                                i <= demoStep ? '#a855f7' : '#374151',
                              cursor: 'pointer',
                            }}
                            onClick={() => setDemoStep(i)}
                          />
                        ))}
                      </div>
                      {demoStep < demoSteps.length - 1 ? (
                        <button
                          style={styles.primaryButton}
                          onClick={() => setDemoStep((prev) => prev + 1)}
                        >
                          Next{' '}
                          <LucideArrowRight
                            style={{ marginLeft: '8px' }}
                            size={16}
                          />
                        </button>
                      ) : (
                        <button
                          style={styles.primaryButton}
                          onClick={() => setDemoActive(false)}
                        >
                          Finish Demo
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section
        style={{ ...styles.section, backgroundColor: 'rgba(31, 41, 55, 0.3)' }}
      >
        <motion.div
          style={{ textAlign: 'center', marginBottom: '64px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 style={styles.sectionTitle}>Measurable Impact</h2>
          <p style={styles.sectionSubtitle}>
            CRF delivers quantifiable improvements across all requirement
            engineering metrics.
          </p>
        </motion.div>

        <div style={styles.analyticsContainer}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={styles.chartContainer}
          >
            <h3 style={styles.chartTitle}>Requirement Accuracy Comparison</h3>
            <div style={styles.chart}>
              <Pie data={successRateData} />
            </div>
            <div style={styles.statsGrid}>
              <div>
                <div style={{ ...styles.statValue, color: '#ef4444' }}>62%</div>
                <div style={styles.statLabel}>Traditional</div>
              </div>
              <div>
                <div style={{ ...styles.statValue, color: '#3b82f6' }}>78%</div>
                <div style={styles.statLabel}>LLM-Based</div>
              </div>
              <div>
                <div style={{ ...styles.statValue, color: '#10b981' }}>95%</div>
                <div style={styles.statLabel}>CRF (Ours)</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            style={styles.chartContainer}
          >
            <h3 style={styles.chartTitle}>Time Savings by Phase</h3>
            <div style={styles.chart}>
              <Bar data={timeSavingsData} />
            </div>
            <div style={styles.savingsContainer}>
              <div style={styles.savingsText}>
                <span>Total Savings per Project</span>
                <span style={styles.savingsValue}>48 hours</span>
              </div>
              <div style={styles.progressBar}>
                <div style={{ ...styles.progressFill, width: '100%' }}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" style={styles.section}>
        <motion.div
          style={{ textAlign: 'center', marginBottom: '64px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 style={styles.sectionTitle}>The GenHeads Team</h2>
          <p style={styles.sectionSubtitle}>
            From PICT, bringing together AI expertise and quantum computing
            innovation.
          </p>
        </motion.div>

        <div style={styles.teamGrid}>
          {[
            {
              name: 'Pranisha Pol',
              role: 'AI/ML Lead',
            },
            {
              name: 'Ayush Bhagwatkar',
              role: 'Frontend Architect',
            },
            {
              name: 'Rudra Chintalwar',
              role: 'Backend & AI/ML',
            },
            {
              name: 'Shivpratap Mithapalli',
              role: 'Backend Engineer',
            },
            {
              name: 'Raj Patle',
              role: 'Backend & Database Handling',
            },
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              style={styles.teamCard}
            >
              <div style={styles.teamAvatar}>
                {member.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
              <h3 style={styles.teamName}>{member.name}</h3>
              <p style={styles.teamRole}>{member.role}</p>
              <p style={styles.teamExpertise}>{member.expertise}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaContainer}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 style={styles.ctaTitle}>
              Ready to Transform Requirements Engineering?
            </h2>
            <p style={styles.ctaText}>
              CRF isn't just another AI tool—it's the future of how
              organizations define, refine, and deliver software.
            </p>
            <div style={styles.ctaButtonGroup}></div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div style={styles.footerLogo}>
            <LucideBrainCircuit
              color="#a78bfa"
              size={28}
              style={{ marginRight: '12px' }}
            />
            <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
              Cognitive Requirement Fabric
            </span>
          </div>
          <div style={styles.footerText}>
            <p>Barclays Hack-O-Hire 2025 Submission</p>
            <p style={{ marginTop: '8px' }}>Team GenHeads from PICT</p>
          </div>
          <div style={styles.footerCopyright}>
            <p>© 2025 GenHeads. All rights reserved.</p>
            <p style={{ marginTop: '8px' }}>
              The future of requirements engineering starts here.
            </p>
          </div>
        </div>
      </footer>

      {/* Demo modal */}
      <AnimatePresence>
        {demoActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={styles.modalOverlay}
            onClick={() => setDemoActive(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              style={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={styles.modalHeader}>
                <h3 style={styles.modalTitle}>CRF Interactive Demo</h3>
                <button
                  style={styles.modalCloseButton}
                  onClick={() => setDemoActive(false)}
                >
                  <LucideX size={24} />
                </button>
              </div>
              <div style={styles.modalBody}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`demo-step-modal-${demoStep}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div style={styles.demoStepHeader}>
                      <div style={styles.demoStepNumber}>
                        <span style={{ color: '#a855f7', fontWeight: 'bold' }}>
                          {demoStep + 1}
                        </span>
                      </div>
                      <h3 style={styles.demoStepTitle}>
                        {demoSteps[demoStep].title}
                      </h3>
                    </div>
                    <div style={styles.demoStepContent}>
                      <p style={styles.featureDescription}>
                        {demoSteps[demoStep].content}
                      </p>
                    </div>
                    {demoStep === 0 && (
                      <div style={styles.fileDrop}>
                        <p style={styles.fileDropText}>
                          Drag and drop your files here
                        </p>
                        <button style={styles.fileDropButton}>
                          Browse Files
                        </button>
                      </div>
                    )}
                    {demoStep === 1 && (
                      <div style={styles.consoleOutput}>
                        <div style={styles.consoleLine}>
                          <span style={{ color: '#10b981' }}>
                            $ Analyzing document: requirements.docx
                          </span>
                        </div>
                        <div style={styles.consoleLine}>
                          <span style={{ color: '#10b981' }}>
                            $ Detected 12 requirements
                          </span>
                        </div>
                        <div style={styles.consoleLine}>
                          <span style={{ color: '#f59e0b' }}>
                            $ Found 3 potential ambiguities
                          </span>
                        </div>
                        <div style={styles.consoleLine}>
                          <span style={{ color: '#a855f7' }}>
                            $ Quantum resolver engaged
                          </span>
                        </div>
                        <div style={styles.consoleLine}>
                          <span style={{ color: '#3b82f6' }}>
                            $ Confidence scores calculated
                          </span>
                        </div>
                      </div>
                    )}
                    {demoStep === 2 && (
                      <div style={styles.resolutionContainer}>
                        <div style={styles.resolutionItem}>
                          <p style={styles.comparisonItemText}>
                            "The system should be fast and responsive (but must
                            use cheap hardware)"
                          </p>
                          <div style={styles.resolutionHeader}>
                            <LucideLightbulb
                              size={16}
                              style={{ marginRight: '8px' }}
                            />
                            <span>Potential Conflict Detected</span>
                          </div>
                          <div style={styles.resolutionContent}>
                            <p style={styles.featureDescription}>
                              "Fast" and "cheap hardware" may conflict.
                              Suggested resolution:
                            </p>
                            <p
                              style={{
                                color: '#D1D5DB',
                                marginTop: '8px',
                                fontWeight: 500,
                              }}
                            >
                              "System response time &lt; 2s on \$500 hardware
                              (trade-off accepted)"
                            </p>
                          </div>
                          <div style={styles.resolutionConfidence}>
                            <span style={styles.confidenceBadge}>
                              Confidence: 92%
                            </span>
                            <span style={styles.confidenceBadge}>
                              Quantum Resolver Applied
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                    {demoStep === 3 && (
                      <div style={styles.suggestionContainer}>
                        <div style={styles.suggestionHeader}>
                          <div style={styles.suggestionIcon}>
                            <LucideUsers color="#3b82f6" size={18} />
                          </div>
                          <div>
                            <div
                              style={{ fontWeight: 500, marginBottom: '8px' }}
                            >
                              AutoBA Suggestion
                            </div>
                            <p style={styles.featureDescription}>
                              "You said 'user-friendly'—do you mean &lt; 2
                              clicks or &lt; 5 sec load time?"
                            </p>
                          </div>
                        </div>
                        <div style={styles.suggestionButtons}>
                          <button style={styles.suggestionButton}>
                            &lt;; 2 clicks
                          </button>
                          <button style={styles.suggestionButton}>
                            &lt;; 5 sec load
                          </button>
                          <button
                            style={{
                              ...styles.suggestionButton,
                              backgroundColor: 'rgba(55, 65, 81, 0.5)',
                              color: '#D1D5DB',
                            }}
                          >
                            Something else
                          </button>
                        </div>
                      </div>
                    )}
                    {demoStep === 4 && (
                      <div style={styles.complianceContainer}>
                        <div style={styles.complianceHeader}>
                          <LucideShield
                            size={18}
                            style={{ marginRight: '8px' }}
                          />
                          <span style={{ fontWeight: 500 }}>
                            Compliance Check Complete
                          </span>
                        </div>
                        <p style={styles.featureDescription}>
                          Scanned against 12,843 regulatory rules from 17
                          jurisdictions
                        </p>
                        <div style={styles.complianceResults}>
                          <div style={styles.complianceResult}>
                            <span style={styles.passedBadge}>PASSED</span>
                            <span>GDPR, HIPAA, ISO 27001</span>
                          </div>
                          <div style={styles.complianceResult}>
                            <span style={styles.warningBadge}>WARNING</span>
                            <span>1 minor issue with California CCPA</span>
                          </div>
                        </div>
                      </div>
                    )}
                    {demoStep === 5 && (
                      <div style={styles.outputContainer}>
                        <div style={styles.outputHeader}>
                          <div style={styles.outputIcon}>
                            <LucideFileText color="#10b981" size={18} />
                          </div>
                          <div style={{ fontWeight: 500 }}>
                            Output Generated Successfully
                          </div>
                        </div>
                        <div style={styles.outputGrid}>
                          <div style={styles.outputItem}>
                            <div style={styles.outputItemIcon}>
                              <LucideCode color="#3b82f6" size={20} />
                            </div>
                            <span style={styles.outputItemText}>
                              Jira Integration
                            </span>
                          </div>
                          <div style={styles.outputItem}>
                            <div style={styles.outputItemIcon}>
                              <LucideFileText color="#a855f7" size={20} />
                            </div>
                            <span style={styles.outputItemText}>
                              Audit Report
                            </span>
                          </div>
                          <div style={styles.outputItem}>
                            <div style={styles.outputItemIcon}>
                              <LucideLineChart color="#10b981" size={20} />
                            </div>
                            <span style={styles.outputItemText}>
                              Executive Summary
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                    <div style={styles.demoFooter}>
                      <div style={styles.demoProgress}>
                        {demoSteps.map((_, i) => (
                          <button
                            key={i}
                            style={{
                              ...styles.demoProgressDot,
                              backgroundColor:
                                i <= demoStep ? '#a855f7' : '#374151',
                              cursor: 'pointer',
                            }}
                            onClick={() => setDemoStep(i)}
                          />
                        ))}
                      </div>
                      {demoStep < demoSteps.length - 1 ? (
                        <button
                          style={styles.primaryButton}
                          onClick={() => setDemoStep((prev) => prev + 1)}
                        >
                          Next{' '}
                          <LucideArrowRight
                            style={{ marginLeft: '8px' }}
                            size={16}
                          />
                        </button>
                      ) : (
                        <button
                          style={styles.primaryButton}
                          onClick={() => setDemoActive(false)}
                        >
                          Finish Demo
                        </button>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CognitiveRequirementFabric;
