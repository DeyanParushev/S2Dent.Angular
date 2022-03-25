import { SocialUser } from "angularx-social-login";

export interface TeamMember {
    id: string;
    firstName: string;
    middleName: string;
    lastName: string;
    phoneNumber: string;
    speciality: Speciality;
    description: string;
    pictureUrl: string;
}

export interface News {
    id: string,
    title: string,
    content: string,
    description: string,
    date: Date,
    pictureUrl: string
}

export interface Speciality {
    id: string,
    title: string,
}

export interface GalleryItem {
    id: string,
    description: string,
    pictureUrl: string,
}

export interface Service {
    id: string,
    title: string,
    description: string,
    pictureUrl: string,
}

export interface Testimonial {
    id: string,
    title: string,
    content: string,
    userName: string,
}

export interface User extends SocialUser {
    rememberMe: boolean,
    username: string,
}

export interface UserState {
  user: User,
  isLoggedIn: boolean,
}

export enum SupportedLanguages {
  Български,
  Английски,
}
