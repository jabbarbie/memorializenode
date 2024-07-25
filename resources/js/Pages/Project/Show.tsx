import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps, User } from '@/types';
import '../../../sass/home.scss'
import axios from 'axios';

import React, { useState } from 'react';
import { formatText } from '@/helper';
import { ProjectType } from '@/Helper/types';
import { convertText } from '@/Helper/helper';


interface MainProps {
    auth: {
        user: User
    }
    project: {
        data: ProjectType
    }
}


const handleDelete = (projectId: any) => {
    window.alert("Cooming Soon")
    // if (confirm('Are you sure you want to delete this project?')) {
    //     Inertia.delete(`/projects/${projectId}`, {
    //         onSuccess: () => {
    //             alert('Project deleted successfully');
    //         },
    //         onError: (errors) => {
    //             console.error(errors);
    //             alert('An error occurred while deleting the project');
    //         }
    //     });
    // }
};

export default function Show({ auth, project }: MainProps) {
    const data = project.data
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Project {data.name}</h2>}
            otherMenu={
                <React.Fragment>
                    <li><a href={`/projects/${data.id}/edit`}>Edit</a></li>
                    <li><button onClick={() => handleDelete(data.id)} className="text-red-500">Delete</button></li>
                </React.Fragment>
            }
        >
            <Head title={data.name} />
            <div id="home__wrapper">
                <div className='home__header'>
                    <h3><a href='/projects'>	&lt; {data.name}</a></h3>
                </div>

                <div className='home__main_with_aside'>
                    <aside>
                        {/* <h3>{data.name}</h3> */}

                        <div className="box__form_inline">
                            <label>Short Name</label>
                            <p dangerouslySetInnerHTML={{ __html: convertText(data.short_name) }} />
                        </div>
                        <div className="box__form_inline">
                            <label>Long Name</label>
                            <p dangerouslySetInnerHTML={{ __html: convertText(data.long_name) }} />
                        </div>
                        <div className="box__form_inline">
                            <label>Database</label>
                            <p>
                                {data.link_database ?
                                    <a href={`http://localhost/phpmyadmin/db_structure.php?db=${data.link_database}`} >{data.link_database}</a>
                                    : '-'}
                            </p>

                        </div>
                        <div className="box__form_inline">
                            <label>Repository</label>
                            <p dangerouslySetInnerHTML={{ __html: convertText(data.link_repository) }} />
                        </div>
                        <div className="box__form_inline">
                            <label>Website Local Link</label>
                            <p dangerouslySetInnerHTML={{ __html: convertText(data.website_local_link) }} />
                        </div>
                        <div className="box__form_inline">
                            <label>Website Local Port</label>
                            <p dangerouslySetInnerHTML={{ __html: convertText(data.website_local_port) }} />
                        </div>
                        <div className="box__form_inline">
                            <label>Website Public Link</label>
                            <p dangerouslySetInnerHTML={{ __html: convertText(data.website_public_link) }} />
                        </div>
                        <div className="box__form_inline">
                            <label>Notes</label>
                            <p dangerouslySetInnerHTML={{ __html: convertText(data.notes) }} />
                        </div>

                    </aside>

                    <main>
                        <section>
                            <div className="section__header">
                                <h3 className='text-scrum'>Scrum</h3>
                            </div>
                            <div className='section__main'>

                            </div>
                        </section>
                        <section>
                            <div className="section__header">
                                <h3 className='text-notulen'>Notulen</h3>

                            </div>
                            <div className='section__main'>
                                {data.notulens && data.notulens.map((d) => (
                                    <div>
                                        {d.date_meeting}
                                        {d.date_meeting}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </main>

                </div>


            </div>
        </AuthenticatedLayout>
    );
}
