<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::orderBy('name')->get();

        return Inertia::render('Project', [
            'projects'  => ProjectResource::collection($projects)
        ]);
    }

    public function create()
    {
        return Inertia::render('ProjectCreate', []);
    }

    public function show(Project $project)
    {
        return Inertia::render('ProjectShow', [
            'project'  => new ProjectResource($project)
        ]);
    }

    public function store(Request $request)
    {
        // Validasi input
        $validated = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'short_name' => 'nullable|string|max:255',
            'long_name' => 'nullable|string',
            // 'description' => 'nullable|url',
            // 'image_path' => 'nullable|string',
            'link_database' => 'nullable|string',
            'link_repository' => 'nullable|string',
            'website_local_link' => 'nullable|string',
            'website_local_port' => 'nullable|string',
            'website_public_link' => 'nullable|string',
            'color' => 'nullable|string',
            'notes' => 'nullable|string',
        ]);

        if ($validated->fails()) {

            return redirect()->back()
                ->withErrors($validated)
                ->withInput();
        }

        try {
            //code...

            // Buat project baru dan simpan ke database
            $project = Project::create([
                'name' => $request->input('name') ?? null,
                'short_name' => $request->input('short_name') ?? null,
                'long_name' => $request->input('long_name') ?? null,
                // 'description' => $request->input('description') ?? null,
                // 'image_path' => $request->input('image_path') ?? null,
                'link_database' => $request->input('link_database') ?? null,
                'link_repository' => $request->input('link_repository') ?? null,
                'website_local_link' => $request->input('website_local_link') ?? null,
                'website_local_port' => $request->input('website_local_port') ?? null,
                'website_public_link' => $request->input('website_public_link') ?? null,
                'color' => $request->input('color') ?? null,
                'notes' => $request->input('notes') ?? null,
            ]);

            // Redirect ke halaman project list dengan pesan sukses
            return redirect()->route('projects.index')->with('success', 'Project created successfully.');
        } catch (\Exception $e) {
            dd($e);
            //throw $th;
        }
    }
}
