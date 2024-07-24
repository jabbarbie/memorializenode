import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps, User } from '@/types';
import '../../sass/home.scss'
import axios from 'axios';

import { useState } from 'react';

interface Project {
    id: number
    name: string
    short_name: string
    long_name: string
    link_database: string
    link_repository: string
    website_local_link: string
    website_local_port: string
    website_public_link: string
    color: string
    notes: string
}

interface MainProps {
    auth: {
        user: User
    }
    projects: {
        data: Project[]
    }
}

export default function Project({ auth, projects }: MainProps) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Project</h2>}
        >
            <Head title="Project" />
            <div id="home__wrapper">
                <div className='home__header'>
                    <h3>Project</h3>
                    <div className='home__header_right'>
                        {/* <input type='text' placeholder='Ketik sesuatu' autoFocus /> */}
                    </div>
                </div>
                <div className='home__main'>
                    <div className="home__grid">
                        {projects.data.map((d) => (
                            <a className='box' role='button' href={`/projects/${d.id}`}>
                                <div className="box__header">{d.name}</div>
                                <div className="box__body">

                                    <div className="box__form_inline">
                                        <label>Short Name</label>
                                        <p>{d.short_name ?? '-'}</p>
                                    </div>

                                    <div className="box__form_inline">
                                        <label>Website</label>
                                        <p>{d.website_public_link ?? '-'}</p>
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
