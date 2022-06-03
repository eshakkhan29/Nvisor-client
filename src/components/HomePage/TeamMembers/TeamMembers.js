import React from 'react';
import './TeamMembers.css';
import teammember1 from '../../../image/team/Abhishek Santri.png'
import teammember2 from '../../../image/team/Courtney Hill.png'
import teammember3 from '../../../image/team/Michel Jhon.png'
import teammember4 from '../../../image/team/Shazaf Zafar.png'

const TeamMembers = () => {
    return (
        <section>
            <div className='container'>
                <div className='d-flex flex-column flex-lg-row align-items-center justify-content-between'>
                    <div className='service-heading team-heading m-auto m-lg-0'>
                        <h1 className='section-title'>TEAM</h1>
                        <h2 className='about-heading'>See Our All Expert Team Members</h2>
                    </div>
                    <div className='team-paragraph'>
                        <p className='paragraph'>Entences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however</p>
                    </div>
                    <div>
                        <button className='btn-team'>See All Members</button>
                    </div>
                </div>
            </div>
            <div className='team-members-div mt-3 mt-lg-0'>
                <div className='row g-4'>
                    <div className='col-lg-3 col-6 position-relative'>
                        <img className=' img-fluid' src={teammember1} alt="" />
                        <div className='position-absolute parsons-info start-50 translate-middle-x text-white '>
                            <h3 className='member-name'>Michel Jhon</h3>
                            <p className='member-job'>CEO & FOUNDER</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-6 position-relative team-down-position'>
                        <img className=' img-fluid' src={teammember2} alt="" />
                        <div className='position-absolute bottom-0 start-50 translate-middle-x text-white '>
                            <h3 className='member-name'>Michel Jhon</h3>
                            <p className='member-job'>CEO & FOUNDER</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-6 position-relative'>
                        <img className=' img-fluid' src={teammember3} alt="" />
                        <div className='position-absolute parsons-info start-50 translate-middle-x text-white '>
                            <h3 className='member-name'>Michel Jhon</h3>
                            <p className='member-job'>CEO & FOUNDER</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-6 position-relative team-down-position'>
                        <img className=' img-fluid' src={teammember4} alt="" />
                        <div className='position-absolute bottom-0 start-50 translate-middle-x text-white '>
                            <h3 className='member-name'>Michel Jhon</h3>
                            <p className='member-job'>CEO & FOUNDER</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamMembers;