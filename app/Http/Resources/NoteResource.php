<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class NoteResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'    => $this->id,
            'name'    => $this->name,
            'is_done'    => $this->is_done,
            'created_at'    => Carbon::parse($this->created_at)->translatedFormat('l, d M Y'),
            'updated_at'    => Carbon::parse($this->updated_at)->translatedFormat('l, d M Y'),
        ];
    }
}
