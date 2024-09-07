import { Injectable } from '@angular/core';
import { DataAPIClient } from '@datastax/astra-db-ts';

@Injectable({
    providedIn: 'root'
})
export class AstraDBService {
    private client: DataAPIClient;
    private db: any;
    private collectionName = 'posts';

    constructor() {
        const token = 'AstraCS:FUlqafkwWXZMZmdjtciyZaZk:cdf380f855ac32c51b8dd8deb59b75a38a80ee3ff00c7f27f4efc80b6272a94e'; // Replace with your Astra DB API token
        const endpoint = '/api'; // Proxy path
        
        const namespace = 'cot'; // Replace with your Astra DB namespace

        this.client = new DataAPIClient(token);
        this.db = this.client.db(endpoint, { namespace });
    }

    async createCollection(): Promise<void> {
        try {
            const collection = await this.db.createCollection(this.collectionName, { checkExists: false });
            console.log('Collection created or already exists:', collection);
        } catch (error) {
            console.error('Error creating collection:', error);
        }
    }

    async insertDocuments(): Promise<void> {
        try {
            const collection = this.db.collection(this.collectionName);
            await collection.insertOne({ dateOfBirth: new Date(1394104654000) });
            await collection.insertOne({ dateOfBirth: new Date('1863-05-28') });
            console.log('Documents inserted successfully');
        } catch (error) {
            console.error('Error inserting documents:', error);
        }
    }

    async updateDocument(): Promise<void> {
        try {
            const collection = this.db.collection(this.collectionName);
            await collection.updateOne(
                {
                    dateOfBirth: new Date('1863-05-28'),
                },
                {
                    $set: { message: 'Happy Birthday!' },
                    $currentDate: { lastModified: true },
                }
            );
            console.log('Document updated successfully');
        } catch (error) {
            console.error('Error updating document:', error);
        }
    }

    async findDocument(): Promise<void> {
        try {
            const collection = this.db.collection(this.collectionName);
            const found = await collection.findOne({
                dateOfBirth: { $lt: new Date('1900-01-01') },
            });
            if (found) {
                console.log('Found document:', found);
                console.log('Last Modified:', found.lastModified);
            } else {
                console.log('No document found');
            }
        } catch (error) {
            console.error('Error finding document:', error);
        }
    }
}
