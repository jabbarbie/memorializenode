import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps, User } from '@/types';
import '../../../sass/home.scss'
import axios from 'axios';

import { useState } from 'react';
import { formatText } from '@/helper';
import { ProjectType } from '@/Helper/types';


interface MainProps {
    auth: {
        user: User
    }

    project: {
        data: ProjectType
    }
}

const csrfToken = document?.querySelector('meta[name="csrf-token"]')?.getAttribute('content') ?? "";
export default function Show({ auth, project }: MainProps) {
    const data = project.data

    console.log(project)
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{data.id ? 'Edit' : 'Create'} {data.id} Project</h2>}
        >
            <Head title="Create Project" />
            <div id="home__wrapper">
                <div className='home__header'>
                    <h3><a href='/projects'>	&lt; </a>{data.id ? 'Edit' : 'Create'} Project </h3>
                </div>
                <div className='home__main_full'>
                    <div className="home__grid">
                        <form className="home__form" id="form_create" method='POST' action={data.id ? `/projects/${data.id}` : '/projects'}>
                            <input type="hidden" name="_token" value={csrfToken} />
                            <div className="home__form_group">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" defaultValue={ data.name } placeholder='Name' required autoFocus />
                            </div>

                            <div className="home__form_group">
                                <label htmlFor="short_name">Short Name</label>
                                <input type="text" name="short_name" defaultValue={data.short_name} id="short_name" placeholder='Short Name' />
                            </div>

                            <div className="home__form_group">
                                <label htmlFor="long_name">Long Name</label>
                                <input type="text" name="long_name" defaultValue={data.long_name} id="long_name" placeholder='Short Name' />
                            </div>

                            <div className="home__form_group">
                                <label htmlFor="link_database">Database</label>
                                <input type="text" name="link_database" defaultValue={data.link_database} id="link_database" placeholder='http://localhost/phpmyadmin/xyz' />
                            </div>

                            <div className="home__form_group">
                                <label htmlFor="link_repository">Repo</label>
                                <input type="text" name="link_repository" defaultValue={data.link_repository} id="link_repository" placeholder='https://github.com/' />
                            </div>

                            <div className="home__form_group">
                                <label htmlFor="website_local_link">Website Local</label>
                                <input type="text" name="website_local_link" defaultValue={data.website_local_link} id="website_local_link" placeholder='https://plk.my.id' />
                            </div>

                            <div className="home__form_group">
                                <label htmlFor="website_local_port">Port</label>
                                <input type="text" name="website_local_port" defaultValue={data.website_local_port} id="website_local_port" placeholder='8000' />
                            </div>

                            <div className="home__form_group">
                                <label htmlFor="website_public_link">Website</label>
                                <input type="text" name="website_public_link" defaultValue={data.website_public_link} id="website_public_link" placeholder='https://plk.my.id' />
                            </div>

                            <div className="home__form_group">
                                <label htmlFor="color">Color</label>
                                <input type="text" name="color" defaultValue={data.color} id="color" placeholder='#efefef' />
                            </div>

                            <div className="home__form_group full">
                                <label htmlFor="notes">Note</label>
                                <textarea rows={5} name='notes' defaultValue={data.notes}></textarea>
                            </div>
                        </form>

                        <div className="home__form_footer">
                            <button type='submit' className='btn btn-primary' form='form_create'>Save</button>
                        </div>

                    </div>
                </div>

                {/* <div className="home__aside">
                        <h3>Scrum</h3>
                    </div> */}
            </div>

        </AuthenticatedLayout>
    );
}
