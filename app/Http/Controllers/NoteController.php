<?php

namespace App\Http\Controllers;

use App\Http\Resources\NoteResource;
use App\Models\Notes;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NoteController extends Controller
{
    public function index()
    {
        $notes = Notes::where('is_done', 1)->orderBy('created_at', 'DESC')->get();

        return Inertia::render('Note', [
            'notes'  => NoteResource::collection($notes)
        ]);
    }

    public function show(Notes $note)
    {
        return Inertia::render('NoteShow', [
            'note'  => new NoteResource($note)
        ]);
    }
}
