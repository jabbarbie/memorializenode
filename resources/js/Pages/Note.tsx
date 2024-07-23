import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps, User } from '@/types';
import '../../sass/home.scss'
import axios from 'axios';

import { useState } from 'react';

interface Note {
    id: number
    name: string
    updated_at: string
    created_at: string
    is_done: boolean
}

interface MainProps {
    auth: {
        user: User
    }
    notes: {
        data: Note[]
    }
}

export default function Note({ auth, notes }: MainProps) {
    console.log(notes.data)

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Note</h2>}
        >
            <Head title="Note" />
            <div id="home__wrapper">
                <div className='home__header'>
                    <h3>Note</h3>
                    <div className='home__header_right'>
                        <input type='text' placeholder='Ketik sesuatu' autoFocus />
                    </div>
                </div>
                <div className='home__main'>
                    <div className="home__grid">
                        {notes.data.map((d) => (
                            <a className='box' role='button' href={`/notes/${d.id}`}>
                                <div className="box__header">{d.created_at}</div>
                                <div className="box__body">{d.name}</div>
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
