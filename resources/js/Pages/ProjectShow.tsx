import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps, User } from '@/types';
import '../../sass/home.scss'
import axios from 'axios';

import { useState } from 'react';
import { formatText } from '@/helper';

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
    note: {
        data: Note
    }
}

export default function NoteShow({ auth, note }: MainProps) {
    console.log(note.data)

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Note {note.data.created_at}</h2>}
        >
            <Head title="Note" />
            <div id="home__wrapper">
                <div className='home__header'>
                    <h3><a href='/notes'>	&lt; </a>Detail Note </h3>
                    <h3>{note.data.created_at}</h3>
                </div>
                <div className='home__main_full'>
                    <div className="home__grid">
                        <div id="display" className='textarea__preview'>
                            {formatText(note.data.name)}
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
