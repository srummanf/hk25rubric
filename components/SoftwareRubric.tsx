import React from "react";

const SoftwareRubric = () => {
  return (
    <section id="software">
      {/* Heading */}
      <h1 className="text-3xl ml-24 font-bold text-[#ff8d7f] mb-4">
        Judging Rubric Of Software Development Projects
      </h1>

      {/* Subheading */}
      <p className="text-lg ml-24 text-[#666666] mb-6">
      The following rubric will be used to judge the software projects submitted by the participants.
      </p>

      {/* Flex Container */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Table Section */}
        <div className="overflow-x-auto  ml-24 w-1/2">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-[#ff8d7f] text-white">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  First Round
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
                  Technology (Code Demonstration and Explanation)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  Product Relevance in Real World
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Design (User Interface and Interaction)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  Skills/Tech Stack Used
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Presentation (Clarity of Project Demonstration)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium"></td>
                <td className="border border-gray-300 px-4 py-2">
                  Final Prototype Working Condition
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
            <li>
              <strong>Title Slide:</strong> Project Name, Team Name, Team
              Members
            </li>
            <li>
              <strong>Track Selection & Problem Statement:</strong> Chosen track
              & why it was selected, What problem are you solving?, Why is this
              problem important?
            </li>
            <li>
              <strong>Ideation & Proposed Solution:</strong> Brainstormed ideas
              & thought process, Final solution overview, Any references or
              inspiration behind the idea
            </li>
            <li>
              <strong>Skills & Tech Stack Used</strong>
            </li>
            <li>
              <strong>Technology - Code Demonstration & Explanation:</strong>{" "}
              Architecture overview with Flowchart
            </li>
            <li>
              <strong>Product Relevance in the Real World:</strong> Target
              users, Market demand or industry relevance, How does it improve
              existing solutions?
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SoftwareRubric;
