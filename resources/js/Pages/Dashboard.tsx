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
    is_done: boolean
}

interface MainProps {
    auth: {
        user: User
    }
    note: Note
}

export default function Dashboard({ auth, note }: MainProps) {
    const [content, setContent] = useState(note.name);

    const handleChange = (e: any) => {
        setContent(e.target.value);
    };

    const handleBlur = () => {
        const payload = {
            note: note.id,
            name: content,
        };
        axios.post(`/${note.id}/store_note`, payload)
    };

    console.log(auth.user)
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div id="home__wrapper">

                <div className='home__main'>

                    <h3>Notes</h3>
                    <textarea
                        rows={30}
                        spellCheck="false"
                        value={content}
                        autoFocus={true}
                        onChange={handleChange}
                        onBlur={handleBlur} />

                    <div className='box__footer'>
                        <span>Last Saved : { note.updated_at }</span>
                    </div>

                </div>

                {/* <div className="home__aside">
                        <h3>Scrum</h3>
                    </div> */}
            </div>

        </AuthenticatedLayout>
    );
}
