<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'  => $this->id,
            'name'    => $this->name,
            'short_name' => $this->short_name,
            'long_name' => $this->long_name,
            'description' => $this->description,
            'image_path' => $this->image_path,
            'link_database' => $this->link_database,
            'link_repository' => $this->link_repository,
            'link_website' => $this->link_website,
            'notes' => $this->notes,
        ];
    }
}
