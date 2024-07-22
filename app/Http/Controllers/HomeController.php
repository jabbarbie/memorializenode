<?php

namespace App\Http\Controllers;

use App\Models\Notes;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function dashboard()
    {
        $today = Carbon::today();
        $yesterday = Notes::where('created_at', '<', $today)->get();
        foreach ($yesterday as $y){
            $y->is_done = 1;
            $y->save();
        }

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
