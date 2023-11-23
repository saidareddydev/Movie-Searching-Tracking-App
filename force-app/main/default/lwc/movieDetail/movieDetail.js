import { LightningElement,wire } from 'lwc';

// Import message service features required for subscribing and the message channel
import {
    subscribe,
    unsubscribe,
    APPLICATION_SCOPE,
    MessageContext,
} from 'lightning/messageService';
import MOVIE_CHANNEL from '@salesforce/messageChannel/moviesChannel__c';

export default class MovieDetail extends LightningElement {
    
    subscription = null;
    
    @wire(MessageContext)
    messageContext;

    // Standard lifecycle hooks used to subscribe and unsubsubscribe to the message channel
    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    disconnectedCallback() {
        this.unsubscribeToMessageChannel();
    }

    // Encapsulate logic for Lightning message service subscribe and unsubsubscribe
    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                MOVIE_CHANNEL,
                (message) => this.handleMessage(message),
                { scope: APPLICATION_SCOPE }
            );
        }
    }

    // Handler for message received by component
    handleMessage(message) {
        let movieData = message.movieId;
        console.log("movieData", movieData);
    }
    
    unsubscribeToMessageChannel() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }


}