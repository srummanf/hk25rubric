import React from "react";

const HardwareRubric = () => {
  return (
    <section id="hardware">
      {/* Heading */}
      <h1 className="text-3xl ml-24 font-bold text-[#ff8d7f] mb-4">
        Judging Rubric Of Hardware Projects
      </h1>

      {/* Subheading */}
      <p className="text-lg ml-24 text-[#666666] mb-6">
        Key aspects of the project, including track selection, real-world
        relevance, and tech stack used.
      </p>

      {/* Flex Container */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Table Section */}
        <div className="overflow-x-auto  ml-24 w-1/2">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-[#ff8d7f] text-white">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Midnight Round
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Final Round
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  Track Selection, Novelty and Ideation
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Hardware (Sensor) Usage and Cost Optimization
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  Product Relevance in Real World
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Documentation and Data Visualization
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  Methodology (Flowchart, Blueprints) and Prototype
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Technology (Software Code Demonstration and Explanation)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium"></td>
                <td className="border border-gray-300 px-4 py-2">
                  PPT Presentation(Clarity of Project Demonstration)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium"></td>
                <td className="border border-gray-300 px-4 py-2">
                  Final Prototype (Software+Hardware) Working Condition
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* UL List Section */}
        <div className="lg:w-1/2">
          <h2 className="text-xl font-semibold text-white mb-4">
            Presentation Rubric for Final Round
          </h2>
          <ul className="list-disc list-inside text-[#929292] space-y-2">
            <li>Title Slide : Project Name, Team Name, Team Members</li>
            <li>
              Track Selection & Problem Statement: Chosen track & why it was
              selected, What problem are you solving?, Why is this problem
              important?
            </li>
            <li>
              Ideation & Proposed Solution: Brainstormed ideas & thought
              process, Final solution overview, Any references or inspiration
              behind the idea
            </li>
            <li>Skills & Tech Stack Used</li>
            <li>
              Technology - Code Demonstration & Explanation:Architecture
              overview with Flowchart
            </li>
            <li>
              Product Relevance in the Real World: Target users, Market demand
              or industry relevance, How does it improve existing solutions?
            </li>
            <li>Estimated cost of the solution</li>
            <li>Hardware Safety and Compliance</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HardwareRubric;
