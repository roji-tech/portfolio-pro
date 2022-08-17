import SkillStyle from "../styles/skillStyle";

const Skills = () => {
  return (
    <SkillStyle>
      <h1>My Skills</h1>
      <div className="grid">
        <div>
          <li>PYTHON</li>
          <li>DJANGO</li>
          <li>DOCKER</li>
          <li>KUBERNETES</li>
        </div>
        <div className="right">
          <li>JAVASCRIPT</li>
          <li>REACT JS</li>
          <li>NEXT JS</li>
          <li>TYPESCRIPT</li>
          <li>REDUX</li>
        </div>
      </div>
    </SkillStyle>
  );
};

export default Skills;
