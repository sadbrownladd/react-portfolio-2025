import styles from './Projects.module.css';
import { usePageTitle } from '../../context/PageTitleContext';
import ProjectCard from '../../components/ProjectCard';

export default function Projects() {
  const { setTitle } = usePageTitle();
  setTitle('Projects');
  const projects = [
    { title: 'Project 1', description: 'A React portfolio site' },
    { title: 'Project 2', description: 'A simple CRUD app' },
  ];
  return (
    <div className={styles.projects}>
      {projects.map((project, index) => (
        <ProjectCard key={index} title={project.title} description={project.description} />
      ))}
    </div>
  );
}