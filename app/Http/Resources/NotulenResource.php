<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class NotulenResource extends JsonResource
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
            'date_meeting'    => Carbon::parse($this->date_meeting)->translatedFormat('l, d M Y'),
            'time_start'    => $this->time_start,
            'time_end'    => $this->time_end,
            'notes'    => $this->notes,
            'created_at'    => Carbon::parse($this->created_at)->translatedFormat('l, d M Y'),
            'updated_at'    => Carbon::parse($this->updated_at)->translatedFormat('l, d M Y'),
        ];
    }
}
