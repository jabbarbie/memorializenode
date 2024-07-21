<?php

namespace App\Http\Controllers;

use App\Models\Notes;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function dashboard()
    {
        $note = Notes::where('is_done', 0)->first();
        if (!$note) {
            $note = Notes::create([
                'name' => ''
            ]);
        }

        return Inertia::render('Dashboard', [
            'note'  => $note
        ]);
    }

    public function store_note(Request $request, Notes $note)
    {
        $note->name = $request->name;
        $note->save();

        return response()->json($note, 200);
    }
}
