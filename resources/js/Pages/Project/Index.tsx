import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps, User } from '@/types';
import '../../../sass/home.scss'
import axios from 'axios';

import { useState } from 'react';
import { ProjectType } from '@/Helper/types';


interface MainProps {
    auth: {
        user: User
    }
    projects: {
        data: ProjectType[]
    }
}

export default function Index({ auth, projects }: MainProps) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Project</h2>}
        >
            <Head title="Project" />
            <div id="home__wrapper">
                <div className='home__header'>
                    <h3>Projects</h3>
                    <div className='home__header_right'>
                        {/* <input type='text' placeholder='Ketik sesuatu' autoFocus /> */}
                    </div>
                </div>
                <div className='home__main'>
                    <div className="home__grid">
                        {projects.data.map((d, i) => (
                            <a className='box' role='button' href={`/projects/${d.id}`} key={i}>
                                <div className="box__header">{d.name}</div>
                                <div className="box__body">

                                    <div className="box__form_inline">
                                        <label>Short Name</label>
                                        <p>{d.short_name ?? '-'}</p>
                                    </div>


                                    <div className="box__form_inline">
                                        <label>Datebase</label>
                                        <p>{d.link_database ?? '-'}</p>
                                    </div>

                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* <div className="home__aside">
                        <h3>Scrum</h3>
                    </div> */}
            </div>

        </AuthenticatedLayout>
    );
}
