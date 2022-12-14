<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Support\Facades\URL;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class OrderCreated extends Notification implements ShouldQueue
{
    use Queueable;

    public $order;

    public function __construct($order)
    {
        $this->order = $order;
    }

    public function toMail($notifiable)
    {
        $url = URL::signedRoute('orders.show', ['order' => $this->order->id, 'hash' => $this->order->hash]);
        return (new MailMessage())
            ->subject('New order created')
            ->greeting("Hello {$this->order->customer->name},")
            ->line('A new order has been created. Please click the button below to view your order.')
            ->line('By clicking on the button below, you agree to the following terms and conditions\n
            1- We are not responsible for any change in design or color and the product will not be exchanged or returned.\n
            2- The production of a dress or abaya takes the agreed period and can be delayed in the event of circumstances beyond our control.\n
            3- 50% advance payment has to be made for each dress or abaya.\n
            4- The advance is non-refundable.\n
            5- A dress made on special request with urgent delivery will be charged an additional fee.\n
            6 - Alterations are valid only within two weeks from the date of delivery and we are not responsible for any modification after the mentioned period.\n
            6- The dress will be sold in the event that the customer fails to collect it within two months, and the advanced paid will not be returned.\n
            7- The order cannot be modified or cancelled after the invoice is issued.\n
            8- We do not have a return or exchange policy.\n
            9- We are not responsible for any change in sizes given by the customer during the order, however we do alterations within two weeks from the date of delivery, and the customer needs to bear all shipping and delivery costs.\n
            10- The rights related to this design are reserved, and it cannot be copied, photographed or traded.\n
            ')
            ->action('View Order', $url)
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
