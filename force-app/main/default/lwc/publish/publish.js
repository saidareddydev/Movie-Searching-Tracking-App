import { LightningElement,wire } from 'lwc';
// Import message service features required for publishing and the message channel
import { publish, MessageContext } from 'lightning/messageService';
import recordSelected from '@salesforce/messageChannel/sendMessage__c';
export default class Publish extends LightningElement {
    @wire(MessageContext)
    messageContext;
    publishMessage(){

        const payload = { lmsData: 'Welcome to Sapphire Inida Tech'};

        publish(this.messageContext, recordSelected, payload);
    }
}