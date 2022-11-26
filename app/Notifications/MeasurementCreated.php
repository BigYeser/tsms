<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Support\Facades\URL;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class MeasurementCreated extends Notification implements ShouldQueue
{
    use Queueable;

    public $measurement;

    public function __construct($measurement)
    {
        $this->measurement = $measurement;
    }

    public function toMail($notifiable)
    {
        $url = URL::signedRoute('measurement.show', ['measurement' => $this->measurement->id, 'hash' => $this->measurement->hash]);
        return (new MailMessage())
            ->subject('New Measurement created')
            ->greeting("Hello {$this->measurement->customer->name},")
            ->line('A new order has been created. Please click the button below to view your order.')
            ->action('View Measurement', $url)
            ->line('Thank you & we would love to do business with you again.');
    }

    public function toVonage($notifiable)
    {
        return (new VonageMessage())
            ->content("Hello {$this->order->customer->name}, A new order (No. {$this->order->id}) has been created.\nThanks, {{config('app.name')}}")->unicode();
    }

    public function via($notifiable)
    {
        return $this->order->account->via();
    }
}
