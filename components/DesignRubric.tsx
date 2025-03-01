import React from "react";

const DesignRubric = () => {
  return (
    <section id="design" className="mb-24">
      {/* Heading */}
      <h1 className="text-3xl ml-24 font-bold text-[#ff8d7f] mb-4">
        Judging Rubric Of UI/UX Design Projects
      </h1>

      {/* Subheading */}
      <p className="text-lg ml-24 text-[#666666] mb-6">
      The following rubric will be used to judge the design projects submitted by the participants.
      </p>

      {/* Flex Container */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Midnight Round */}
        <div className="flex flex-col gap-8 w-1/2">
          <div className="overflow-x-auto ml-24">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-[#ff8d7f] text-white">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    First Round
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">
                    Idea & Problem Understanding
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">
                    Initial UX Research
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">
                    Wireframes
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* UL List Section */}
          <div className="">
            <h2 className="text-xl font-semibold text-white mb-4 ml-24">
              Presentation Rubric for First Round - Targeting Emphasise,
              Ideate, Define, Basic Wireframing of UI/UX Design Process
            </h2>
            <ul className="list-disc list-inside text-[#929292] space-y-2 ml-24">
              <li>
                <strong>Title Slide -</strong> Team Name, Team Number, Project
                Title, Team Members
              </li>
              <li>
                <strong>Problem Statement -</strong> Describe the problem you
                aim to solve, Why is this problem important?
              </li>
              <li>
                <strong>Empathize -</strong>
                <strong>Target Audience:</strong> Who are the users?,
                <strong>Research Methods:</strong> Surveys, interviews,
                observations,
                <strong>Key Insights:</strong> Main pain points and user needs
              </li>
              <li>
                <strong>Define -</strong>
                <strong>Problem Definition:</strong> Clear and concise problem
                statement,
                <strong>Impact:</strong> How does this problem affect the
                users?,
                <strong>Scope:</strong> Scope and limitations of the project
              </li>
              <li>
                <strong>Ideate -</strong>
                <strong>Brainstorming Methods:</strong> List of techniques used
                (e.g., mind mapping, brainstorming sessions),
                <strong>Initial Ideas:</strong> A few rough concepts and
                sketches (At least 2 ideas),
                <strong>Selection Criteria:</strong> How did you decide on the
                final idea?
              </li>
              <li>
                <strong>Product Relevance in the Real World -</strong> Target
                users, Market demand or industry relevance, How does it improve
                existing solutions?
              </li>
              <li>
                <strong>Wireframing -</strong> (All) Lofi Wireframe /
                (Partial/None) HiFi
              </li>
            </ul>
          </div>
        </div>
        {/* Final Round */}
        <div className="flex flex-col gap-8 w-1/2">
          <div className="overflow-x-auto  ml-24">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-[#ff8d7f] text-white">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Final Round
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">
                    User Interface (Visual Design+Layout)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">
                    User Experience (Usability & Accessibility)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">
                    Navigation, Interactivity and Functionality
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">
                    Creativity (Color Pallette, Font Selection and Misc.)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">
                    Final Case Study with Prototype
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* UL List Section */}
          <div className="">
            <h2 className="text-xl font-semibold text-white mb-4 ml-24">
              Case Study Presentation Rubric for Final Round -{" "}
              <a
                href="https://www.figma.com/community/file/1067428863353945820"
                target="_blank"
                className="underline text-[#d49797] hover:text-[#f9a3a3] transition-colors"
              >
                Sample Case Study
              </a>
            </h2>
            <ul className="list-disc list-inside text-[#929292] space-y-2 ml-24">
              <li>
                <strong>Problem Statement</strong> - Identifying the core issue
                the product aims to solve.
              </li>
              <li>
                <strong>Our Process</strong> - The step-by-step approach
                followed in the design process.
              </li>
              <li>
                <strong>Objectives & Goals</strong> - Key aims and expected
                outcomes of the project.
              </li>
              <li>
                <strong>Business Challenge</strong> - Challenges faced from a
                business perspective.
              </li>
              <li>
                <strong>Quantitative Research</strong> - Data-driven insights
                and user behavior analysis.
              </li>
              <li>
                <strong>User Needs</strong> - Key pain points and expectations
                of target users.
              </li>
              <li>
                <strong>Features & Functionalities</strong> - Core features that
                address user needs.
              </li>
              <li>
                <strong>Product User Challenges</strong>-- Issues users face
                while interacting with the product.
              </li>
              <li>
                <strong>Competitor Analysis</strong> - Evaluating strengths and
                weaknesses of competitors.
              </li>
              <li>
                <strong>Unique Features</strong> - Distinctive elements
                differentiating the product.
              </li>
              <li>
                <strong>User Persona</strong> - Fictional representation of
                ideal users.
              </li>
              <li>
                <strong>Task Mapping</strong> - Breaking down tasks users
                perform in the product.
              </li>
              <li>
                <strong>Eisenhower Matrix</strong> - Prioritization framework
                for feature implementation.
              </li>
              <li>
                <strong>5 Why Analysis</strong> - Identifying root causes of
                problems by asking "why" five times.
              </li>
              <li>
                <strong>Root Cause Analysis (RCA)</strong> - A structured
                approach to problem-solving.
              </li>
              <li>
                <strong>Task Flows</strong> - Visual representation of user
                journeys.
              </li>
              <li>
                <strong>Sketches</strong> - Initial hand-drawn concepts of the
                interface.
              </li>
              <li>
                <strong>Major Screens</strong> - Key screens defining the user
                experience.
              </li>
              <li>
                <strong>Screens</strong> - Final UI designs showcasing the
                product.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignRubric;
