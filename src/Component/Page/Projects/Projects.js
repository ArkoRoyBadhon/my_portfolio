import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FeatureContext, { featureProvider } from '../../Context/FeatureContext';



const Projects = () => {
    const [projects, setProjects] = useState([]);
    const {setSingleProject} = useContext(featureProvider)

    const navigate = useNavigate();

    const handleDetail = (id, project) => {
        setSingleProject(project);
        navigate('/details')
    }


    useEffect(() => {
        fetch('project.json')
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(err => console.log(err.message))
    }, [])

    // console.log(projects);

    return (
        <div className='my-20' id="projects">
            <h3 className="text-3xl font-bold text-center my-10">My Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    projects?.map((project, i) => <div key={i} className="card w-full bg-base-100 shadow-xl">
                        <figure><img src={project.img} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {project.name}
                            </h2>
                            <p>{project.short_description}</p>
                            <Link to="/details" onClick={()=>handleDetail(project.id, project)} className="btn">More About this project</Link>
                            <div className="card-actions justify-evenly mt-4">
                                <a href={project.live_site} className="btn">Live Site</a>
                                <a href={project.client_site} className="btn">FrontEnd</a>
                                <a href={project.server_side} className="btn">BackEnd</a>
                            </div>
                        </div>
                    </div>
                    )

                }

            </div>
        </div>
    );
};

export default Projects;