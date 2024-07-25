export interface Note {
    id: number
    name: string
    is_done: string
    created_at: string
    updated_at: string
}


export interface NotulenType {
    id: number
    date_meeting: string
    time_start: string
    time_end: string
    notes: string
    created_at: string
    updated_at: string
}

export interface ProjectType {
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
    notulens: NotulenType[]
}