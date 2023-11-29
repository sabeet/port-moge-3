import React from 'react'
import WorkCard from './components/WorkCard'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
        <div className='flex flex-col h-screen w-screen p-8 justify-center'>
            <div className="text-6xl">About</div>
            <br />
            <div className="text-xl">
                I am Sabeet Chowdhury. I am a graduate of Queens College, holding a Bachelor's degree with a major in computer science. My academic background has equipped me with a strong foundation in coding, data, design, and a keen appreciation for minimalism. These skills and interests drive my passion for contributing meaningfully to projects and finding elegant solutions in the field of technology.
            </div>
            <br />
            <div className="text-3xl">
                Experience
            </div>
            <br />
            <div className="flex flex-col lg:flex-row gap-4">
            <WorkCard logo="https://1000logos.net/wp-content/uploads/2018/11/Capital-One-Logo.png" company="Capital One Financial" role="Data Analyst"/>
            <WorkCard logo="https://www.ally.com/resources/pres/marketing/images/seo/Ally.png" company="Ally Financial" role="Data Engineer"/>
            <WorkCard logo="https://assets-global.website-files.com/639901ed4e0eb501ea09f4b6/63991a431d5ae906b14c377c_1-p-800.png" company="WorkSchool.co" role="Software Engineer Intern"/>
            </div>
            <br />
            <div className="text-3xl">
                Like what you see?
            </div>
            <div className="text-xl">
                Feel free to contact me <Link to='/contact'><u>here</u></Link>.
            </div>
            <div className='py-4'>
                {/*This is some blank space*/}
            </div>
            <div className="flex flex-row-reverse py-4">
                <div>Return <Link to='/'><u>home</u></Link></div>
            </div>

        </div>
    </>
  )
}

export default About