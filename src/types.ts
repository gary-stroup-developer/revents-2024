import { Timestamp } from "firebase/firestore"

export type AppEvent = {
    id: string
    title: string
    date: string
    category: string
    description: string
    city: string
    venue: string
    hostedBy: string
    hostPhotoURL: string
    attendees: Attendee[]
}


export type FirestoreAppEvent = {
    id: string
    title: string
    date: Timestamp
    category: string
    description: string
    city: string
    venue: string
    hostedBy: string
    hostPhotoURL: string
    attendees: Attendee[]
}

export type Attendee = {
    id: string
    name: string
    photoURL: string
}

export type User = {
    email: string 
    photoURL: string
}