"use client";

import { useState, useMemo } from "react";
import { Search, ExternalLink, TrendingUp, Users, Award } from "lucide-react";

interface AITalent {
  id: number;
  name: string;
  title: string;
  company: string;
  location: string;
  yearsExperience: string;
  specialization: string[];
  education: string;
  publications: number;
  githubStars: number;
  linkedinUrl: string;
  summary: string;
}

const talentData: AITalent[] = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Machine Learning Engineer",
    company: "Anthropic",
    location: "San Francisco, CA",
    yearsExperience: "2-3 years",
    specialization: ["LLMs", "NLP", "Reinforcement Learning"],
    education: "PhD Computer Science - Stanford",
    publications: 8,
    githubStars: 2400,
    linkedinUrl: "https://linkedin.com/in/sarah-chen-ai",
    summary: "Emerging researcher specializing in large language models and RLHF techniques"
  },
  {
    id: 2,
    name: "Alex Kumar",
    title: "AI Research Scientist",
    company: "Google DeepMind",
    location: "London, UK",
    yearsExperience: "1-2 years",
    specialization: ["Computer Vision", "Generative AI", "Multimodal Learning"],
    education: "PhD Machine Learning - MIT",
    publications: 12,
    githubStars: 3200,
    linkedinUrl: "https://linkedin.com/in/alex-kumar-research",
    summary: "Fresh PhD graduate working on cutting-edge diffusion models and vision transformers"
  },
  {
    id: 3,
    name: "Maya Patel",
    title: "Deep Learning Engineer",
    company: "OpenAI",
    location: "Remote, US",
    yearsExperience: "2-3 years",
    specialization: ["Neural Architecture", "Training Optimization", "Scaling Laws"],
    education: "MS AI - Carnegie Mellon",
    publications: 6,
    githubStars: 1800,
    linkedinUrl: "https://linkedin.com/in/maya-patel-dl",
    summary: "Expert in efficient training techniques for large-scale models"
  },
  {
    id: 4,
    name: "Jordan Wu",
    title: "AI Safety Researcher",
    company: "Conjecture",
    location: "New York, NY",
    yearsExperience: "1-2 years",
    specialization: ["AI Alignment", "Interpretability", "Safety Protocols"],
    education: "PhD Philosophy & CS - Oxford",
    publications: 10,
    githubStars: 1500,
    linkedinUrl: "https://linkedin.com/in/jordan-wu-safety",
    summary: "Rising star in AI safety research with focus on mechanistic interpretability"
  },
  {
    id: 5,
    name: "Emily Rodriguez",
    title: "Research Engineer",
    company: "Meta AI",
    location: "Menlo Park, CA",
    yearsExperience: "2-3 years",
    specialization: ["Robotics", "Embodied AI", "Sim-to-Real Transfer"],
    education: "PhD Robotics - Berkeley",
    publications: 15,
    githubStars: 4100,
    linkedinUrl: "https://linkedin.com/in/emily-rodriguez-robotics",
    summary: "Leading research on embodied AI agents and robotic manipulation"
  },
  {
    id: 6,
    name: "David Kim",
    title: "ML Infrastructure Engineer",
    company: "Cohere",
    location: "Toronto, Canada",
    yearsExperience: "2-3 years",
    specialization: ["MLOps", "Distributed Training", "Model Serving"],
    education: "MS Computer Engineering - Waterloo",
    publications: 4,
    githubStars: 2900,
    linkedinUrl: "https://linkedin.com/in/david-kim-mlops",
    summary: "Building scalable infrastructure for training and deploying LLMs at scale"
  },
  {
    id: 7,
    name: "Lisa Zhang",
    title: "NLP Research Scientist",
    company: "Hugging Face",
    location: "Paris, France",
    yearsExperience: "1-2 years",
    specialization: ["Transformers", "Multilingual Models", "Low-Resource Languages"],
    education: "PhD Computational Linguistics - Cambridge",
    publications: 9,
    githubStars: 5600,
    linkedinUrl: "https://linkedin.com/in/lisa-zhang-nlp",
    summary: "Pioneering work on multilingual transformers and cross-lingual understanding"
  },
  {
    id: 8,
    name: "Marcus Thompson",
    title: "AI Product Researcher",
    company: "Mistral AI",
    location: "Paris, France",
    yearsExperience: "2-3 years",
    specialization: ["Product ML", "Recommendation Systems", "Personalization"],
    education: "MS Data Science - ETH Zurich",
    publications: 5,
    githubStars: 1200,
    linkedinUrl: "https://linkedin.com/in/marcus-thompson-ai",
    summary: "Bridging research and product to build user-centric AI applications"
  },
  {
    id: 9,
    name: "Priya Sharma",
    title: "Computer Vision Engineer",
    company: "Tesla AI",
    location: "Palo Alto, CA",
    yearsExperience: "2-3 years",
    specialization: ["Autonomous Driving", "3D Vision", "Real-time Processing"],
    education: "PhD Computer Vision - Georgia Tech",
    publications: 11,
    githubStars: 3400,
    linkedinUrl: "https://linkedin.com/in/priya-sharma-cv",
    summary: "Developing perception systems for autonomous vehicles using neural radiance fields"
  },
  {
    id: 10,
    name: "Oliver Schmidt",
    title: "AI Researcher",
    company: "Adept AI",
    location: "San Francisco, CA",
    yearsExperience: "1-2 years",
    specialization: ["Agent Systems", "Tool Use", "Decision Making"],
    education: "MS AI - Technical University Munich",
    publications: 7,
    githubStars: 2100,
    linkedinUrl: "https://linkedin.com/in/oliver-schmidt-ai",
    summary: "Building AI agents that can use software tools and interact with digital environments"
  },
  {
    id: 11,
    name: "Aisha Mohammed",
    title: "ML Research Engineer",
    company: "Stability AI",
    location: "London, UK",
    yearsExperience: "2-3 years",
    specialization: ["Generative Models", "Image Synthesis", "Video Generation"],
    education: "PhD Computer Graphics - Imperial College",
    publications: 13,
    githubStars: 6200,
    linkedinUrl: "https://linkedin.com/in/aisha-mohammed-gen",
    summary: "Advancing state-of-the-art in generative models for visual content creation"
  },
  {
    id: 12,
    name: "Ryan O'Brien",
    title: "Applied AI Scientist",
    company: "Scale AI",
    location: "San Francisco, CA",
    yearsExperience: "2-3 years",
    specialization: ["Data-Centric AI", "Active Learning", "Synthetic Data"],
    education: "MS Machine Learning - Cornell",
    publications: 6,
    githubStars: 1600,
    linkedinUrl: "https://linkedin.com/in/ryan-obrien-applied-ai",
    summary: "Focusing on data quality and efficient labeling strategies for ML systems"
  }
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [specializationFilter, setSpecializationFilter] = useState("All");
  const [experienceFilter, setExperienceFilter] = useState("All");

  const allSpecializations = useMemo(() => {
    const specs = new Set<string>();
    talentData.forEach(talent => {
      talent.specialization.forEach(spec => specs.add(spec));
    });
    return ["All", ...Array.from(specs).sort()];
  }, []);

  const filteredData = useMemo(() => {
    return talentData.filter(talent => {
      const matchesSearch =
        talent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        talent.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        talent.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        talent.specialization.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase())) ||
        talent.summary.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesSpecialization =
        specializationFilter === "All" ||
        talent.specialization.includes(specializationFilter);

      const matchesExperience =
        experienceFilter === "All" ||
        talent.yearsExperience === experienceFilter;

      return matchesSearch && matchesSpecialization && matchesExperience;
    });
  }, [searchTerm, specializationFilter, experienceFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <TrendingUp className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">AI Talent Finder</h1>
          </div>
          <p className="text-lg text-gray-600">
            Discover emerging AI engineers and researchers making waves in the field
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-blue-500" />
              <div>
                <div className="text-2xl font-bold text-gray-900">{filteredData.length}</div>
                <div className="text-sm text-gray-600">Talented Individuals</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-purple-500" />
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {filteredData.reduce((sum, t) => sum + t.publications, 0)}
                </div>
                <div className="text-sm text-gray-600">Total Publications</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-green-500" />
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {(filteredData.reduce((sum, t) => sum + t.githubStars, 0) / 1000).toFixed(1)}K
                </div>
                <div className="text-sm text-gray-600">GitHub Stars</div>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Name, company, specialization..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Specialization
              </label>
              <select
                value={specializationFilter}
                onChange={(e) => setSpecializationFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {allSpecializations.map(spec => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Experience
              </label>
              <select
                value={experienceFilter}
                onChange={(e) => setExperienceFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="All">All Levels</option>
                <option value="1-2 years">1-2 years</option>
                <option value="2-3 years">2-3 years</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 text-gray-600">
          Showing <span className="font-semibold text-gray-900">{filteredData.length}</span> results
        </div>

        {/* Talent Cards */}
        <div className="space-y-4">
          {filteredData.map((talent) => (
            <div
              key={talent.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Left: Main Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {talent.name}
                      </h3>
                      <p className="text-lg text-blue-600 font-medium">{talent.title}</p>
                      <p className="text-gray-600">
                        {talent.company} • {talent.location}
                      </p>
                    </div>
                    <a
                      href={talent.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      LinkedIn
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-gray-700 mb-4">{talent.summary}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {talent.specialization.map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600">Education</div>
                      <div className="font-semibold text-gray-900">{talent.education}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Experience</div>
                      <div className="font-semibold text-gray-900">{talent.yearsExperience}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Publications</div>
                      <div className="font-semibold text-gray-900">{talent.publications}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">GitHub ⭐</div>
                      <div className="font-semibold text-gray-900">
                        {talent.githubStars.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <p className="text-gray-600 text-lg">
              No results found. Try adjusting your filters.
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600 text-sm">
          <p>
            Data updated regularly from LinkedIn research • {talentData.length} AI professionals tracked
          </p>
        </div>
      </div>
    </div>
  );
}
